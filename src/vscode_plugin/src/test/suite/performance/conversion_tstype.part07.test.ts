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

suite('Performance_DTS2CPP_Type_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Type_Suite part07.');

  /**
  * @tc.number : dts2cpp_type_0295
  * @tc.name : dts2cpp_type_0295
  * @tc.desc : dts2cpp type 扩充-交叉类型 extends 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0295', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType295.ts', `type A = { x: number }; type B = A & { y: string };`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 2);
      const typeItem = parseObj.types!.find(item => item.name === 'B');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0295 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0295 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0296
  * @tc.name : dts2cpp_type_0296
  * @tc.desc : dts2cpp type 扩充-interface extends 继承链 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0296', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType296.ts', `interface Base { id: number; } interface Derived extends Base { name: string; }`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.structs!.length, 2);
      assert.ok(parseObj.structs!.find(item => item.name === 'Base'));
      assert.ok(parseObj.structs!.find(item => item.name === 'Derived'));
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0296 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0296 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0297
  * @tc.name : dts2cpp_type_0297
  * @tc.desc : dts2cpp type 扩充-readonly 对象类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0297', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType297.ts', `type Point = { readonly x: number; readonly y: number; };`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Point');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0297 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0297 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0298
  * @tc.name : dts2cpp_type_0298
  * @tc.desc : dts2cpp type 扩充-callable 对象类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0298', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType298.ts', `type Fn = { (x: number): string; (x: string): number; };`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Fn');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0298 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0298 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0299
  * @tc.name : dts2cpp_type_0299
  * @tc.desc : dts2cpp type 扩充-递归可选类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0299', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType299.ts', `type Tree = { value: number; children?: Tree[]; };`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Tree');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0299 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0299 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0300
  * @tc.name : dts2cpp_type_0300
  * @tc.desc : dts2cpp type 扩充-keyof 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0300', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType300.ts', `type Keys = keyof { a: number; b: string; };`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Keys');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0300 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0300 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0301
  * @tc.name : dts2cpp_type_0301
  * @tc.desc : dts2cpp type 扩充-Pick 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0301', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType301.ts', `type PickId = Pick<{ id: number; name: string; }, "id">;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'PickId');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0301 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0301 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0302
  * @tc.name : dts2cpp_type_0302
  * @tc.desc : dts2cpp type 扩充-Omit 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0302', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType302.ts', `type OmitName = Omit<{ id: number; name: string; }, "name">;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'OmitName');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0302 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0302 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0303
  * @tc.name : dts2cpp_type_0303
  * @tc.desc : dts2cpp type 扩充-Record 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0303', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType303.ts', `type Rec = Record<string, number>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Rec');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0303 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0303 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0304
  * @tc.name : dts2cpp_type_0304
  * @tc.desc : dts2cpp type 扩充-Partial 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0304', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType304.ts', `type Par = Partial<{ a: number; b: string; }>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Par');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0304 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0304 执行异常: ${String(err)}`);
    }
  });
});
