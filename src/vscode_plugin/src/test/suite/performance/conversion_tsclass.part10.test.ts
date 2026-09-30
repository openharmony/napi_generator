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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Class_Suite part10.');

  /**
  * @tc.number : dts2cpp_class_0357
  * @tc.name : dts2cpp_class_0357
  * @tc.desc : dts2cpp class 扩充-R5-class 方法 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0357', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClassR5357.ts', `class Point { x: number; y: number; dist(): number { return 0; } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      const clsItem = parseObj.classes!.find(c => c.name === 'Point');
      assert.ok(clsItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0357 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0357 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0358
  * @tc.name : dts2cpp_class_0358
  * @tc.desc : dts2cpp class 扩充-R5-泛型 class 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0358', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClassR5358.ts', `class Container<T> { items: T[]; add(item: T): void {} }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      const clsItem = parseObj.classes!.find(c => c.name === 'Container');
      assert.ok(clsItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0358 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0358 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0359
  * @tc.name : dts2cpp_class_0359
  * @tc.desc : dts2cpp class 扩充-R5-abstract class 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0359', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClassR5359.ts', `abstract class Shape { abstract area(): number; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      const clsItem = parseObj.classes!.find(c => c.name === 'Shape');
      assert.ok(clsItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0359 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0359 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0360
  * @tc.name : dts2cpp_class_0360
  * @tc.desc : dts2cpp class 扩充-R5-private/getter class 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0360', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClassR5360.ts', `class Counter { private count: number; increment(): void {} get value(): number { return this.count; } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      const clsItem = parseObj.classes!.find(c => c.name === 'Counter');
      assert.ok(clsItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0360 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0360 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0361
  * @tc.name : dts2cpp_class_0361
  * @tc.desc : dts2cpp class 扩充-R5-constructor 参数属性 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0361', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClassR5361.ts', `class Pair { constructor(public a: number, public b: string) {} }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      const clsItem = parseObj.classes!.find(c => c.name === 'Pair');
      assert.ok(clsItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0361 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0361 执行异常: ${String(err)}`);
    }
  });
});
