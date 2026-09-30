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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Class_Suite part09.');

  /**
  * @tc.number : dts2cpp_class_0351
  * @tc.name : dts2cpp_class_0351
  * @tc.desc : dts2cpp class 扩充-R3-`Base` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0351', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass351.ts', `abstract class Base { abstract run(): void; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes || parseObj.interfaces);
      const cls = parseObj.classes!.find(c => c.name === 'Base');
      assert.ok(cls);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0351 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0351 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0352
  * @tc.name : dts2cpp_class_0352
  * @tc.desc : dts2cpp class 扩充-R3-`Impl` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0352', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass352.ts', `class Impl extends Base { run(): void {} }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes || parseObj.interfaces);
      const cls = parseObj.classes!.find(c => c.name === 'Impl');
      assert.ok(cls);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0352 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0352 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0353
  * @tc.name : dts2cpp_class_0353
  * @tc.desc : dts2cpp class 扩充-R3-`WithPrivate` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0353', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass353.ts', `class WithPrivate { private secret: number; public getSecret(): number { return this.secret; } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes || parseObj.interfaces);
      const cls = parseObj.classes!.find(c => c.name === 'WithPrivate');
      assert.ok(cls);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0353 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0353 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0354
  * @tc.name : dts2cpp_class_0354
  * @tc.desc : dts2cpp class 扩充-R3-`WithStatic` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0354', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass354.ts', `class WithStatic { static count: number; id: number; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes || parseObj.interfaces);
      const cls = parseObj.classes!.find(c => c.name === 'WithStatic');
      assert.ok(cls);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0354 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0354 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0355
  * @tc.name : dts2cpp_class_0355
  * @tc.desc : dts2cpp class 扩充-R3-`MultiMethod` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0355', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass355.ts', `class MultiMethod { add(a: number, b: number): number { return a + b; } sub(a: number, b: number): number { return a - b; } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes || parseObj.interfaces);
      const cls = parseObj.classes!.find(c => c.name === 'MultiMethod');
      assert.ok(cls);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0355 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0355 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0356
  * @tc.name : dts2cpp_class_0356
  * @tc.desc : dts2cpp class 扩充-R3-`Runner` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0356', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass356.ts', `interface Runnable { run(): void; }
class Runner implements Runnable { run(): void {} }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes || parseObj.interfaces);
      const cls = parseObj.classes!.find(c => c.name === 'Runner');
      assert.ok(cls);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0356 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0356 执行异常: ${String(err)}`);
    }
  });
});
