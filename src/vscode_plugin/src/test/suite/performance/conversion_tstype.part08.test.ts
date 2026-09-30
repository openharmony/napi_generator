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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Type_Suite part08.');

  /**
  * @tc.number : dts2cpp_type_0305
  * @tc.name : dts2cpp_type_0305
  * @tc.desc : dts2cpp type 扩充-R2-Required 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0305', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType305.ts', `type Req = Required<{ a?: number; b?: string; }>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Req');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0305 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0305 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0306
  * @tc.name : dts2cpp_type_0306
  * @tc.desc : dts2cpp type 扩充-R2-Readonly 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0306', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType306.ts', `type Read = Readonly<{ x: number; y: number; }>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Read');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0306 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0306 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0307
  * @tc.name : dts2cpp_type_0307
  * @tc.desc : dts2cpp type 扩充-R2-Extract 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0307', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType307.ts', `type Ext = Extract<"a" | "b" | "c", "a" | "c">;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Ext');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0307 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0307 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0308
  * @tc.name : dts2cpp_type_0308
  * @tc.desc : dts2cpp type 扩充-R2-Exclude 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0308', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType308.ts', `type Exc = Exclude<"a" | "b" | "c", "b">;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Exc');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0308 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0308 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0309
  * @tc.name : dts2cpp_type_0309
  * @tc.desc : dts2cpp type 扩充-R2-NonNullable 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0309', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType309.ts', `type Non = NonNullable<string | null | undefined>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Non');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0309 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0309 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0310
  * @tc.name : dts2cpp_type_0310
  * @tc.desc : dts2cpp type 扩充-R2-ReturnType 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0310', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType310.ts', `type Ret = ReturnType<() => number>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Ret');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0310 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0310 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0311
  * @tc.name : dts2cpp_type_0311
  * @tc.desc : dts2cpp type 扩充-R2-Parameters 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0311', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType311.ts', `type Par = Parameters<(a: number, b: string) => void>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Par');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0311 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0311 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0312
  * @tc.name : dts2cpp_type_0312
  * @tc.desc : dts2cpp type 扩充-R2-ConstructorParameters 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0312', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType312.ts', `type Con = ConstructorParameters<new (x: number) => string>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Con');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0312 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0312 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0313
  * @tc.name : dts2cpp_type_0313
  * @tc.desc : dts2cpp type 扩充-R2-InstanceType 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0313', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType313.ts', `type Inst = InstanceType<new () => { id: number }>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'Inst');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0313 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0313 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_type_0314
  * @tc.name : dts2cpp_type_0314
  * @tc.desc : dts2cpp type 扩充-R2-Awaited 工具类型 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_type_0314', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseType314.ts', `type AwaitedNum = Awaited<Promise<number>>;`);
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'AwaitedNum');
      assert.ok(typeItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0314 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0314 执行异常: ${String(err)}`);
    }
  });
});
