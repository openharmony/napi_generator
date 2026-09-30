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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Type_Suite part09.');

  /**
  * @tc.number : dts2cpp_type_0315
  * @tc.name : dts2cpp_type_0315
  * @tc.desc : dts2cpp type 扩充-R5-branded 类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0315', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType315.ts', `type Brand = string & { readonly __brand: unique symbol };`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Brand');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0315 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0315 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0316
  * @tc.name : dts2cpp_type_0316
  * @tc.desc : dts2cpp type 扩充-R5-条件类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0316', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType316.ts', `type NonNull<T> = T extends null | undefined ? never : T;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'NonNull');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0316 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0316 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0317
  * @tc.name : dts2cpp_type_0317
  * @tc.desc : dts2cpp type 扩充-R5-Extract 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0317', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType317.ts', `type ExtractNum = Extract<string | number | boolean, number>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'ExtractNum');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0317 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0317 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0318
  * @tc.name : dts2cpp_type_0318
  * @tc.desc : dts2cpp type 扩充-R5-Exclude 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0318', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType318.ts', `type ExcludeStr = Exclude<string | number, string>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'ExcludeStr');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0318 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0318 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0319
  * @tc.name : dts2cpp_type_0319
  * @tc.desc : dts2cpp type 扩充-R5-ReadonlyArray 别名 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0319', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType319.ts', `type ReadonlyArr = ReadonlyArray<number>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'ReadonlyArr');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0319 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0319 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0320
  * @tc.name : dts2cpp_type_0320
  * @tc.desc : dts2cpp type 扩充-R5-泛型联合 null 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0320', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType320.ts', `type Nullable<T> = T | null;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Nullable');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0320 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0320 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0321
  * @tc.name : dts2cpp_type_0321
  * @tc.desc : dts2cpp type 扩充-R5-泛型对象类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0321', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType321.ts', `type Pair<K, V> = { key: K; value: V; };`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Pair');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0321 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0321 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0322
  * @tc.name : dts2cpp_type_0322
  * @tc.desc : dts2cpp type 扩充-R5-函数类型别名 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0322', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType322.ts', `type FnSig = (a: number, b?: string) => boolean;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'FnSig');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0322 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0322 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0323
  * @tc.name : dts2cpp_type_0323
  * @tc.desc : dts2cpp type 扩充-R5-映射类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0323', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType323.ts', `type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]>; };`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'DeepPartial');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0323 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0323 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0324
  * @tc.name : dts2cpp_type_0324
  * @tc.desc : dts2cpp type 扩充-R5-字面量 readonly 对象 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0324', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType324.ts', `type ConstObj = { readonly a: 1; readonly b: "x"; };`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'ConstObj');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0324 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0324 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0325
  * @tc.name : dts2cpp_type_0325
  * @tc.desc : dts2cpp type 扩充-R5-多层联合类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0325', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType325.ts', `type U = string | number;
type V = U | boolean;
type W = V | null;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 3);
      const typeItem = parseObj.types!.find(item => item.name === 'W');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0325 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0325 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0326
  * @tc.name : dts2cpp_type_0326
  * @tc.desc : dts2cpp type 扩充-R5-嵌套数组类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0326', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType326.ts', `type Matrix = number[][];`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Matrix');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0326 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0326 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0327
  * @tc.name : dts2cpp_type_0327
  * @tc.desc : dts2cpp type 扩充-R5-事件映射类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0327', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType327.ts', `type EventMap = { click: (e: MouseEvent) => void; key: (e: KeyboardEvent) => void; };`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'EventMap');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0327 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0327 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0328
  * @tc.name : dts2cpp_type_0328
  * @tc.desc : dts2cpp type 扩充-R5-递归 JSON 类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0328', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType328.ts', `type JSONValue = string | number | boolean | null | JSONValue[] | { [k: string]: JSONValue };`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'JSONValue');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0328 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0328 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0329
  * @tc.name : dts2cpp_type_0329
  * @tc.desc : dts2cpp type 扩充-R5-类型别名组合 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0329', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType329.ts', `type Id = number;
type Name = string;
type Entity = { id: Id; name: Name; };`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 3);
      const typeItem = parseObj.types!.find(item => item.name === 'Entity');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0329 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0329 执行异常: ${String(err)}`);
    }
  });
});
