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

suite('Performance_DTS2CPP_Class_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Class_Suite part06.');

  /**
  * @tc.number dts2cpp_class_0311
  * @tc.name dts2cpp_class_0311
  * @tc.desc dts2cpp class import-自定义文件：导入类型作 class 属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0311', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0311.ts',
            `import { Foo, Bar } from './mod';
class C {
  f: Foo;
  g: Bar;
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'C');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'f');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Foo');
      assert.strictEqual(classItem_0!.variableList[1].name, 'g');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Bar');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0311 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0311 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0312
  * @tc.name dts2cpp_class_0312
  * @tc.desc dts2cpp class import-自定义文件：导入回调类型属性/参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0312', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0312.ts',
            `import { Handler } from './h';
class Service {
  handler: Handler;
  run(h: Handler) {
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Service');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'handler');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Handler');
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'run');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'Handler');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0312 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0312 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0313
  * @tc.name dts2cpp_class_0313
  * @tc.desc dts2cpp class import-自定义文件：导入类型作返回/参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0313', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0313.ts',
            `import { Data } from './d';
class Store {
  data: Data;
  get(): Data | null {
    return this.data;
  }
  set(v: Data) {
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Store');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'data');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Data');
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'get');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'Data | null');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'set');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'Data');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0313 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0313 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0314
  * @tc.name dts2cpp_class_0314
  * @tc.desc dts2cpp class 函数类型-on/off：class Emitter on/off/emit 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0314', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0314.ts',
            `class Emitter {
  on(event: string, cb: (data: any) => void) {
  }
  off(event: string, cb: (data: any) => void) {
  }
  emit(event: string, data: any) {
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Emitter');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'on');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, '(data: any) => void');
      assert.strictEqual(classItem_0!.functionList[1].name, 'off');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[1].parameters[1].type, '(data: any) => void');
      assert.strictEqual(classItem_0!.functionList[2].name, 'emit');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].parameters[1].type, 'any');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0314 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0314 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0315
  * @tc.name dts2cpp_class_0315
  * @tc.desc dts2cpp class 函数类型-on/off：class EventBus on/off/once 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0315', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0315.ts',
            `class EventBus {
  on(event: string, cb: () => void) {
  }
  off(event: string, cb: () => void) {
  }
  once(event: string, cb: () => void) {
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'EventBus');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'on');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, '() => void');
      assert.strictEqual(classItem_0!.functionList[1].name, 'off');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[1].parameters[1].type, '() => void');
      assert.strictEqual(classItem_0!.functionList[2].name, 'once');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].parameters[1].type, '() => void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0315 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0315 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0316
  * @tc.name dts2cpp_class_0316
  * @tc.desc dts2cpp class 函数类型-threadsafe_func：class ThreadSafeFunction 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0316', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0316.ts',
            `class ThreadSafeFunction {
  call(data: any, cb: (err: Error | null, result: any) => void) {
  }
  abort() {
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ThreadSafeFunction');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'call');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'any');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, '(err: Error | null, result: any) => void');
      assert.strictEqual(classItem_0!.functionList[1].name, 'abort');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0316 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0316 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0317
  * @tc.name dts2cpp_class_0317
  * @tc.desc dts2cpp class 函数类型-static：static 方法 + static 属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0317', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0317.ts',
            `class Utils {
  static add(a: number, b: number): number {
    return a + b;
  }
  static version: string;
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Utils');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'version');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'add');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0317 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0317 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0318
  * @tc.name dts2cpp_class_0318
  * @tc.desc dts2cpp class 函数类型-static：static 工厂方法 + 计数属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0318', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0318.ts',
            `class Factory {
  static create(): Factory | null {
    return null;
  }
  static count: number;
  static reset() {
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Factory');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'count');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'create');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'Factory | null');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'reset');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0318 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0318 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0319
  * @tc.name dts2cpp_class_0319
  * @tc.desc dts2cpp class namespace-变量+类：namespace 内变量 + 类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0319', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0319.ts',
            `namespace ns {
  const flag = true;
  class Inner {
    value: number;
    run() {
    }
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Inner');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'value');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'run');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0319 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0319 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0320
  * @tc.name dts2cpp_class_0320
  * @tc.desc dts2cpp class namespace-变量+类：export namespace 内变量 + 类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0320', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0320.ts',
            `export namespace api {
  const version = "2.0";
  class Client {
    id: string;
    connect() {
    }
    disconnect() {
    }
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Client');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'id');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'connect');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'disconnect');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0320 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0320 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0321
  * @tc.name dts2cpp_class_0321
  * @tc.desc dts2cpp class import + $/on 命名方法组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0321', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0321.ts',
            `import { Event } from './evt';
class Logger {
  $log(msg: string) {
  }
  onError(cb: (err: Event) => void) {
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Logger');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, '$log');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[1].name, 'onError');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, '(err: Event) => void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0321 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0321 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0322
  * @tc.name dts2cpp_class_0322
  * @tc.desc dts2cpp class 函数类型-$：$ 命名类与方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0322', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0322.ts',
            `class $DOM {
  $find(sel: string) {
  }
  $bind(evt: string, cb: () => void) {
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === '$DOM');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, '$find');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[1].name, '$bind');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[1].parameters[1].type, '() => void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0322 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0322 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0323
  * @tc.name dts2cpp_class_0323
  * @tc.desc dts2cpp class import-自定义文件：继承导入的基类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0323', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0323.ts',
            `import { Base } from './base';
class Derived extends Base {
  extra: number;
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Derived');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'extra');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0323 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0323 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0324
  * @tc.name dts2cpp_class_0324
  * @tc.desc dts2cpp class namespace-变量+函数+类：三合一混合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0324', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0324.ts',
            `namespace ns {
  const config = { a: 1 };
  function f() {
  }
  class Cls {
    x: number;
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Cls');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0324 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0324 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0325
  * @tc.name dts2cpp_class_0325
  * @tc.desc dts2cpp class import-自定义文件：导入类型作容器泛参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0325', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0325.ts',
            `import { Data } from './d';
class Cache {
  private store: Map<string, Data>;
  get(key: string): Data | null {
    return null;
  }
  set(key: string, v: Data) {
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Cache');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'store');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Map<string, Data>');
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'get');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'Data | null');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[1].name, 'set');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[1].parameters[1].type, 'Data');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0325 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0325 执行异常: ${String(err)}`);
    }
  });

});
