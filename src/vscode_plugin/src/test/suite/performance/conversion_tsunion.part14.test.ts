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

suite('Performance_DTS2CPP_Union_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Union_Suite part14.');

  /**
  * @tc.number : dts2cpp_union_0535
  * @tc.name : dts2cpp_union_0535
  * @tc.desc : dts2cpp union 扩充-type alias `type U1 = string | number | boolean;` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0535', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion535.ts', `type U1 = string | number | boolean;`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U1');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.strictEqual(typeItem!.types[2], 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0535 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0535 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0536
  * @tc.name : dts2cpp_union_0536
  * @tc.desc : dts2cpp union 扩充-type alias `type U2 = null | undefined | void;` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0536', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion536.ts', `type U2 = null | undefined | void;`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U2');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'null');
      assert.strictEqual(typeItem!.types[1], 'undefined');
      assert.strictEqual(typeItem!.types[2], 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0536 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0536 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0537
  * @tc.name : dts2cpp_union_0537
  * @tc.desc : dts2cpp union 扩充-type alias `type U3 = "on" | "off" | "auto";` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0537', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion537.ts', `type U3 = "on" | "off" | "auto";`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U3');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '"on"');
      assert.strictEqual(typeItem!.types[1], '"off"');
      assert.strictEqual(typeItem!.types[2], '"auto"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0537 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0537 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0538
  * @tc.name : dts2cpp_union_0538
  * @tc.desc : dts2cpp union 扩充-type alias `type U4 = 1 | 2 | 3 | 4 | 5;` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0538', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion538.ts', `type U4 = 1 | 2 | 3 | 4 | 5;`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U4');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '1');
      assert.strictEqual(typeItem!.types[1], '2');
      assert.strictEqual(typeItem!.types[2], '3');
      assert.strictEqual(typeItem!.types[3], '4');
      assert.strictEqual(typeItem!.types[4], '5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0538 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0538 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0539
  * @tc.name : dts2cpp_union_0539
  * @tc.desc : dts2cpp union 扩充-type alias `type U5 = string[] | number[];` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0539', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion539.ts', `type U5 = string[] | number[];`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U5');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'string[]');
      assert.strictEqual(typeItem!.types[1], 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0539 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0539 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0540
  * @tc.name : dts2cpp_union_0540
  * @tc.desc : dts2cpp union 扩充-type alias `type U6 = Map<string, number> | Record<string, number>;` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0540', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion540.ts', `type U6 = Map<string, number> | Record<string, number>;`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U6');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<string, number>');
      assert.strictEqual(typeItem!.types[1], 'Record<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0540 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0540 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0541
  * @tc.name : dts2cpp_union_0541
  * @tc.desc : dts2cpp union 扩充-type alias `type U7 = (() => void) | (() => number);` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0541', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion541.ts', `type U7 = (() => void) | (() => number);`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U7');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(() => void)');
      assert.strictEqual(typeItem!.types[1], '(() => number)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0541 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0541 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0542
  * @tc.name : dts2cpp_union_0542
  * @tc.desc : dts2cpp union 扩充-type alias `type U8 = Promise<string> | string;` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0542', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion542.ts', `type U8 = Promise<string> | string;`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U8');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Promise<string>');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0542 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0542 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0543
  * @tc.name : dts2cpp_union_0543
  * @tc.desc : dts2cpp union 扩充-type alias `type U9 = { id: number } | { name: string };` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0543', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion543.ts', `type U9 = { id: number } | { name: string };`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U9');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ id: number }');
      assert.strictEqual(typeItem!.types[1], '{ name: string }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0543 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0543 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0544
  * @tc.name : dts2cpp_union_0544
  * @tc.desc : dts2cpp union 扩充-type alias `type U10 = [number, string] | [boolean, boolean];` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0544', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion544.ts', `type U10 = [number, string] | [boolean, boolean];`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U10');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[number, string]');
      assert.strictEqual(typeItem!.types[1], '[boolean, boolean]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0544 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0544 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0545
  * @tc.name : dts2cpp_union_0545
  * @tc.desc : dts2cpp union 扩充-type alias `type U11 = Set<number> | ReadonlySet<number>;` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0545', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion545.ts', `type U11 = Set<number> | ReadonlySet<number>;`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U11');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Set<number>');
      assert.strictEqual(typeItem!.types[1], 'ReadonlySet<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0545 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0545 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0546
  * @tc.name : dts2cpp_union_0546
  * @tc.desc : dts2cpp union 扩充-type alias `type U12 = keyof { a: number; b: string } | "extra";` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0546', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion546.ts', `type U12 = keyof { a: number; b: string } | "extra";`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U12');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'keyof { a: number; b: string }');
      assert.strictEqual(typeItem!.types[1], '"extra"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0546 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0546 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0547
  * @tc.name : dts2cpp_union_0547
  * @tc.desc : dts2cpp union 扩充-type alias `type U13 = number[] | Set<number> | Map<string, number>;` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0547', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion547.ts', `type U13 = number[] | Set<number> | Map<string, number>;`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U13');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'number[]');
      assert.strictEqual(typeItem!.types[1], 'Set<number>');
      assert.strictEqual(typeItem!.types[2], 'Map<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0547 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0547 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0548
  * @tc.name : dts2cpp_union_0548
  * @tc.desc : dts2cpp union 扩充-type alias `type U14 = import("fs").PathLike | string;` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0548', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion548.ts', `type U14 = import("fs").PathLike | string;`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U14');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'import("fs").PathLike');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0548 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0548 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_union_0549
  * @tc.name : dts2cpp_union_0549
  * @tc.desc : dts2cpp union 扩充-type alias `type U15 = prefix-${string} | suffix-${number};` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_union_0549', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseUnion549.ts', `type U15 = \`prefix-\${string}\` | \`suffix-\${number}\`;`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 1);
      const typeItem = parseObj.types!.find(item => item.name === 'U15');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`prefix-${string}`');
      assert.strictEqual(typeItem!.types[1], '`suffix-${number}`');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0549 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0549 执行异常: ${String(err)}`);
    }
  });
});
