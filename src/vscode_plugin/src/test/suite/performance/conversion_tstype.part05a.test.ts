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

suite('Performance_DTS2CPP_Type_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Type_Suite part05.');

  /**
  * @tc.number dts2cpp_type_0204
  * @tc.name dts2cpp_type_0204
  * @tc.desc dts2cpp type 扩充-箭头属性：rest 参（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0204', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0204.ts',
            `type TpA04 = {
        f0: (...args: number[]) => void;
        f1: (...args: number[]) => void;
        f2: (...args: number[]) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA04');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(...args: number[]) => void');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(...args: number[]) => void');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(...args: number[]) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0204 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0204 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0205
  * @tc.name dts2cpp_type_0205
  * @tc.desc dts2cpp type 扩充-箭头属性：联合参（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0205', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0205.ts',
            `type TpA05 = {
        f0: (a: string | number) => void;
        f1: (a: string | number) => void;
        f2: (a: string | number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA05');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a: string | number) => void');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a: string | number) => void');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a: string | number) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0205 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0205 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0206
  * @tc.name dts2cpp_type_0206
  * @tc.desc dts2cpp type 扩充-箭头属性：泛型箭头（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0206', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0206.ts',
            `type TpA06 = {
        f0: <T>(v: T) => T;
        f1: <T>(v: T) => T;
        f2: <T>(v: T) => T;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA06');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '<T>(v: T) => T');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '<T>(v: T) => T');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '<T>(v: T) => T');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0206 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0206 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0207
  * @tc.name dts2cpp_type_0207
  * @tc.desc dts2cpp type 扩充-箭头属性：返回数组（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0207', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0207.ts',
            `type TpA07 = {
        f0: (a: number) => number[];
        f1: (a: number) => number[];
        f2: (a: number) => number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA07');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a: number) => number[]');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a: number) => number[]');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a: number) => number[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0207 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0207 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0208
  * @tc.name dts2cpp_type_0208
  * @tc.desc dts2cpp type 扩充-箭头属性：返回联合（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0208', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0208.ts',
            `type TpA08 = {
        f0: (a: number) => string | null;
        f1: (a: number) => string | null;
        f2: (a: number) => string | null;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA08');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a: number) => string | null');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a: number) => string | null');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a: number) => string | null');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0208 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0208 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0209
  * @tc.name dts2cpp_type_0209
  * @tc.desc dts2cpp type 扩充-箭头属性：返回 Promise（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0209', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0209.ts',
            `type TpA09 = {
        f0: (a: string) => Promise<number>;
        f1: (a: string) => Promise<number>;
        f2: (a: string) => Promise<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA09');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a: string) => Promise<number>');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a: string) => Promise<number>');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a: string) => Promise<number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0209 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0209 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0210
  * @tc.name dts2cpp_type_0210
  * @tc.desc dts2cpp type 扩充-箭头属性：返回函数（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0210', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0210.ts',
            `type TpA10 = {
        f0: (a: number) => (b: string) => void;
        f1: (a: number) => (b: string) => void;
        f2: (a: number) => (b: string) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA10');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a: number) => (b: string) => void');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a: number) => (b: string) => void');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a: number) => (b: string) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0210 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0210 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0211
  * @tc.name dts2cpp_type_0211
  * @tc.desc dts2cpp type 扩充-箭头属性：对象参（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0211', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0211.ts',
            `type TpA11 = {
        f0: (a: { x: number }) => void;
        f1: (a: { x: number }) => void;
        f2: (a: { x: number }) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA11');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a: { x: number }) => void');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a: { x: number }) => void');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a: { x: number }) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0211 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0211 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0212
  * @tc.name dts2cpp_type_0212
  * @tc.desc dts2cpp type 扩充-箭头属性：元组参（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0212', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0212.ts',
            `type TpA12 = {
        f0: (a: [string, number]) => void;
        f1: (a: [string, number]) => void;
        f2: (a: [string, number]) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA12');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a: [string, number]) => void');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a: [string, number]) => void');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a: [string, number]) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0212 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0212 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0213
  * @tc.name dts2cpp_type_0213
  * @tc.desc dts2cpp type 扩充-箭头属性：容器参（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0213', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0213.ts',
            `type TpA13 = {
        f0: (a: Map<string, number>) => void;
        f1: (a: Map<string, number>) => void;
        f2: (a: Map<string, number>) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA13');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a: Map<string, number>) => void');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a: Map<string, number>) => void');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a: Map<string, number>) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0213 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0213 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0214
  * @tc.name dts2cpp_type_0214
  * @tc.desc dts2cpp type 扩充-箭头属性：可空参（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0214', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0214.ts',
            `type TpA14 = {
        f0: (a: string | null) => void;
        f1: (a: string | null) => void;
        f2: (a: string | null) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA14');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a: string | null) => void');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a: string | null) => void');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a: string | null) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0214 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0214 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0215
  * @tc.name dts2cpp_type_0215
  * @tc.desc dts2cpp type 扩充-规模：5 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0215', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0215.ts',
            `type TpC005 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC005');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 5);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0215 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0215 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0216
  * @tc.name dts2cpp_type_0216
  * @tc.desc dts2cpp type 扩充-规模：10 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0216', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0216.ts',
            `type TpC010 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC010');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 10);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0216 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0216 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0217
  * @tc.name dts2cpp_type_0217
  * @tc.desc dts2cpp type 扩充-规模：15 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0217', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0217.ts',
            `type TpC015 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC015');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 15);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0217 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0217 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0218
  * @tc.name dts2cpp_type_0218
  * @tc.desc dts2cpp type 扩充-规模：20 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0218', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0218.ts',
            `type TpC020 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC020');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 20);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0218 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0218 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0219
  * @tc.name dts2cpp_type_0219
  * @tc.desc dts2cpp type 扩充-规模：25 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0219', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0219.ts',
            `type TpC025 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC025');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 25);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0219 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0219 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0220
  * @tc.name dts2cpp_type_0220
  * @tc.desc dts2cpp type 扩充-规模：30 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0220', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0220.ts',
            `type TpC030 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC030');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 30);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0220 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0220 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0221
  * @tc.name dts2cpp_type_0221
  * @tc.desc dts2cpp type 扩充-规模：35 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0221', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0221.ts',
            `type TpC035 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC035');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 35);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0221 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0221 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0222
  * @tc.name dts2cpp_type_0222
  * @tc.desc dts2cpp type 扩充-规模：40 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0222', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0222.ts',
            `type TpC040 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC040');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 40);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0222 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0222 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0223
  * @tc.name dts2cpp_type_0223
  * @tc.desc dts2cpp type 扩充-规模：45 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0223', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0223.ts',
            `type TpC045 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC045');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 45);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0223 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0223 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0224
  * @tc.name dts2cpp_type_0224
  * @tc.desc dts2cpp type 扩充-规模：50 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0224', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0224.ts',
            `type TpC050 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC050');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 50);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0224 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0224 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0225
  * @tc.name dts2cpp_type_0225
  * @tc.desc dts2cpp type 扩充-规模：55 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0225', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0225.ts',
            `type TpC055 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC055');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 55);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0225 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0225 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0226
  * @tc.name dts2cpp_type_0226
  * @tc.desc dts2cpp type 扩充-规模：60 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0226', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0226.ts',
            `type TpC060 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC060');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 60);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0226 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0226 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0227
  * @tc.name dts2cpp_type_0227
  * @tc.desc dts2cpp type 扩充-规模：65 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0227', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0227.ts',
            `type TpC065 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
        p60: number;
        p61: string;
        p62: boolean;
        p63: any;
        p64: unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC065');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 65);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0227 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0227 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0228
  * @tc.name dts2cpp_type_0228
  * @tc.desc dts2cpp type 扩充-规模：70 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0228', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0228.ts',
            `type TpC070 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
        p60: number;
        p61: string;
        p62: boolean;
        p63: any;
        p64: unknown;
        p65: null;
        p66: undefined;
        p67: symbol;
        p68: bigint;
        p69: object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC070');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 70);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0228 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0228 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0229
  * @tc.name dts2cpp_type_0229
  * @tc.desc dts2cpp type 扩充-规模：75 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0229', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0229.ts',
            `type TpC075 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
        p60: number;
        p61: string;
        p62: boolean;
        p63: any;
        p64: unknown;
        p65: null;
        p66: undefined;
        p67: symbol;
        p68: bigint;
        p69: object;
        p70: number[];
        p71: string[];
        p72: boolean[];
        p73: Array<number>;
        p74: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC075');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 75);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0229 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0229 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0230
  * @tc.name dts2cpp_type_0230
  * @tc.desc dts2cpp type 扩充-规模：80 成员 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0230', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0230.ts',
            `type TpC080 = {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
        p60: number;
        p61: string;
        p62: boolean;
        p63: any;
        p64: unknown;
        p65: null;
        p66: undefined;
        p67: symbol;
        p68: bigint;
        p69: object;
        p70: number[];
        p71: string[];
        p72: boolean[];
        p73: Array<number>;
        p74: Map<string, number>;
        p75: Set<number>;
        p76: Record<string, string>;
        p77: Promise<string>;
        p78: [string, number];
        p79: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpC080');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 80);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0230 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0230 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0231
  * @tc.name dts2cpp_type_0231
  * @tc.desc dts2cpp type 扩充-多声明：同文件 2 个 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0231', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0231.ts',
            `type MultiT0 = { f0: number; };
type MultiT1 = { f1: number; };;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 2);
      const item_0 = parseObj.types.find(item => item.name === 'MultiT0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.types.find(item => item.name === 'MultiT1');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'f1');
      assert.strictEqual(item_1!.members[0].type, 'number');
      assert.strictEqual(item_1!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0231 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0231 执行异常: ${String(err)}`);
    }
  });

});

