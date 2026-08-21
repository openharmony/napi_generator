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

suite('Performance_DTS2CPP_Union_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Union_Suite (part11/12/13).');


  /**
  * @tc.number dts2cpp_union_0361
  * @tc.name dts2cpp_union_0361
  * @tc.desc dts2cpp union type alias 数字分隔符十进制字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0361', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0361.ts',
            `type UnionType0361 = 1_000_000 | 2_500_000;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0361');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '1_000_000');
      assert.strictEqual(typeItem!.types[1], '2_500_000');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0361 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0361 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0362
  * @tc.name dts2cpp_union_0362
  * @tc.desc dts2cpp union type alias 数字分隔符二进制字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0362', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0362.ts',
            `type UnionType0362 = 0b1111_0000 | 0b0000_1111;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0362');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '0b1111_0000');
      assert.strictEqual(typeItem!.types[1], '0b0000_1111');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0362 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0362 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0363
  * @tc.name dts2cpp_union_0363
  * @tc.desc dts2cpp union type alias 数字分隔符十六进制字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0363', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0363.ts',
            `type UnionType0363 = 0xAB_CD | 0xEF_01;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0363');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '0xAB_CD');
      assert.strictEqual(typeItem!.types[1], '0xEF_01');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0363 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0363 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0364
  * @tc.name dts2cpp_union_0364
  * @tc.desc dts2cpp union type alias 逐位分隔整数字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0364', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0364.ts',
            `type UnionType0364 = 1_2_3 | 4_5_6;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0364');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '1_2_3');
      assert.strictEqual(typeItem!.types[1], '4_5_6');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0364 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0364 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0365
  * @tc.name dts2cpp_union_0365
  * @tc.desc dts2cpp union type alias 正号指数字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0365', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0365.ts',
            `type UnionType0365 = 1e+5 | 2e+6;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0365');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '1e+5');
      assert.strictEqual(typeItem!.types[1], '2e+6');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0365 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0365 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0366
  * @tc.name dts2cpp_union_0366
  * @tc.desc dts2cpp union type alias 负/正指数阶梯字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0366', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0366.ts',
            `type UnionType0366 = -1e3 | -1e2 | -1e1 | 0 | 1e1 | 1e2 | 1e3;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0366');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 7);
      assert.strictEqual(typeItem!.types[0], '-1e3');
      assert.strictEqual(typeItem!.types[1], '-1e2');
      assert.strictEqual(typeItem!.types[2], '-1e1');
      assert.strictEqual(typeItem!.types[3], '0');
      assert.strictEqual(typeItem!.types[4], '1e1');
      assert.strictEqual(typeItem!.types[5], '1e2');
      assert.strictEqual(typeItem!.types[6], '1e3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0366 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0366 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0367
  * @tc.name dts2cpp_union_0367
  * @tc.desc dts2cpp union type alias 负指数小数字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0367', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0367.ts',
            `type UnionType0367 = 1.5e-3 | 2.5e-3;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0367');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '1.5e-3');
      assert.strictEqual(typeItem!.types[1], '2.5e-3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0367 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0367 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0368
  * @tc.name dts2cpp_union_0368
  * @tc.desc dts2cpp union type alias 负 bigint 字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0368', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0368.ts',
            `type UnionType0368 = -1n | -2n | -3n;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0368');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '-1n');
      assert.strictEqual(typeItem!.types[1], '-2n');
      assert.strictEqual(typeItem!.types[2], '-3n');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0368 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0368 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0369
  * @tc.name dts2cpp_union_0369
  * @tc.desc dts2cpp union type alias bigint 阶梯字面量联合（含 0n）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0369', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0369.ts',
            `type UnionType0369 = -2n | -1n | 0n | 1n | 2n;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0369');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '-2n');
      assert.strictEqual(typeItem!.types[1], '-1n');
      assert.strictEqual(typeItem!.types[2], '0n');
      assert.strictEqual(typeItem!.types[3], '1n');
      assert.strictEqual(typeItem!.types[4], '2n');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0369 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0369 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0370
  * @tc.name dts2cpp_union_0370
  * @tc.desc dts2cpp union type alias 大整数 bigint 字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0370', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0370.ts',
            `type UnionType0370 = 100n | 200n | 300n;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0370');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '100n');
      assert.strictEqual(typeItem!.types[1], '200n');
      assert.strictEqual(typeItem!.types[2], '300n');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0370 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0370 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0371
  * @tc.name dts2cpp_union_0371
  * @tc.desc dts2cpp union type alias 十六进制大小写混写字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0371', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0371.ts',
            `type UnionType0371 = 0xFF | 0xff | 0X1F;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0371');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '0xFF');
      assert.strictEqual(typeItem!.types[1], '0xff');
      assert.strictEqual(typeItem!.types[2], '0X1F');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0371 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0371 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0372
  * @tc.name dts2cpp_union_0372
  * @tc.desc dts2cpp union type alias 十六进制 2 的幂字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0372', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0372.ts',
            `type UnionType0372 = 0x1 | 0x2 | 0x4 | 0x8 | 0x10 | 0x20;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0372');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 6);
      assert.strictEqual(typeItem!.types[0], '0x1');
      assert.strictEqual(typeItem!.types[1], '0x2');
      assert.strictEqual(typeItem!.types[2], '0x4');
      assert.strictEqual(typeItem!.types[3], '0x8');
      assert.strictEqual(typeItem!.types[4], '0x10');
      assert.strictEqual(typeItem!.types[5], '0x20');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0372 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0372 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0373
  * @tc.name dts2cpp_union_0373
  * @tc.desc dts2cpp union type alias 二进制 2 的幂字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0373', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0373.ts',
            `type UnionType0373 = 0b1 | 0b10 | 0b100 | 0b1000;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0373');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '0b1');
      assert.strictEqual(typeItem!.types[1], '0b10');
      assert.strictEqual(typeItem!.types[2], '0b100');
      assert.strictEqual(typeItem!.types[3], '0b1000');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0373 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0373 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0374
  * @tc.name dts2cpp_union_0374
  * @tc.desc dts2cpp union type alias 八进制 2 的幂字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0374', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0374.ts',
            `type UnionType0374 = 0o1 | 0o2 | 0o4 | 0o10;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0374');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '0o1');
      assert.strictEqual(typeItem!.types[1], '0o2');
      assert.strictEqual(typeItem!.types[2], '0o4');
      assert.strictEqual(typeItem!.types[3], '0o10');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0374 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0374 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0375
  * @tc.name dts2cpp_union_0375
  * @tc.desc dts2cpp union type alias 十六进制对数字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0375', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0375.ts',
            `type UnionType0375 = 0x00 | 0x11 | 0x22 | 0x33;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0375');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '0x00');
      assert.strictEqual(typeItem!.types[1], '0x11');
      assert.strictEqual(typeItem!.types[2], '0x22');
      assert.strictEqual(typeItem!.types[3], '0x33');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0375 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0375 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0376
  * @tc.name dts2cpp_union_0376
  * @tc.desc dts2cpp union type alias 二进制交替模式字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0376', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0376.ts',
            `type UnionType0376 = 0b101010 | 0b010101;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0376');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '0b101010');
      assert.strictEqual(typeItem!.types[1], '0b010101');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0376 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0376 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0377
  * @tc.name dts2cpp_union_0377
  * @tc.desc dts2cpp union type alias 八进制极值字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0377', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0377.ts',
            `type UnionType0377 = 0o77 | 0o11;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0377');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '0o77');
      assert.strictEqual(typeItem!.types[1], '0o11');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0377 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0377 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0378
  * @tc.name dts2cpp_union_0378
  * @tc.desc dts2cpp union type alias 十成员奇数序列字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0378', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0378.ts',
            `type UnionType0378 = 1 | 3 | 5 | 7 | 9 | 11 | 13 | 15 | 17 | 19;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0378');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 10);
      assert.strictEqual(typeItem!.types[0], '1');
      assert.strictEqual(typeItem!.types[1], '3');
      assert.strictEqual(typeItem!.types[2], '5');
      assert.strictEqual(typeItem!.types[3], '7');
      assert.strictEqual(typeItem!.types[4], '9');
      assert.strictEqual(typeItem!.types[5], '11');
      assert.strictEqual(typeItem!.types[6], '13');
      assert.strictEqual(typeItem!.types[7], '15');
      assert.strictEqual(typeItem!.types[8], '17');
      assert.strictEqual(typeItem!.types[9], '19');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0378 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0378 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0379
  * @tc.name dts2cpp_union_0379
  * @tc.desc dts2cpp union type alias 偶数序列字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0379', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0379.ts',
            `type UnionType0379 = 2 | 4 | 6 | 8 | 10;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0379');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '2');
      assert.strictEqual(typeItem!.types[1], '4');
      assert.strictEqual(typeItem!.types[2], '6');
      assert.strictEqual(typeItem!.types[3], '8');
      assert.strictEqual(typeItem!.types[4], '10');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0379 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0379 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0380
  * @tc.name dts2cpp_union_0380
  * @tc.desc dts2cpp union type alias 3 倍数序列字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0380', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0380.ts',
            `type UnionType0380 = 3 | 6 | 9 | 12 | 15;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0380');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '3');
      assert.strictEqual(typeItem!.types[1], '6');
      assert.strictEqual(typeItem!.types[2], '9');
      assert.strictEqual(typeItem!.types[3], '12');
      assert.strictEqual(typeItem!.types[4], '15');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0380 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0380 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0381
  * @tc.name dts2cpp_union_0381
  * @tc.desc dts2cpp union type alias 字节范围字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0381', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0381.ts',
            `type UnionType0381 = -128 | 0 | 127;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0381');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '-128');
      assert.strictEqual(typeItem!.types[1], '0');
      assert.strictEqual(typeItem!.types[2], '127');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0381 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0381 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0382
  * @tc.name dts2cpp_union_0382
  * @tc.desc dts2cpp union type alias 百位步进字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0382', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0382.ts',
            `type UnionType0382 = 0 | 100 | 200 | 300 | 400 | 500;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0382');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 6);
      assert.strictEqual(typeItem!.types[0], '0');
      assert.strictEqual(typeItem!.types[1], '100');
      assert.strictEqual(typeItem!.types[2], '200');
      assert.strictEqual(typeItem!.types[3], '300');
      assert.strictEqual(typeItem!.types[4], '400');
      assert.strictEqual(typeItem!.types[5], '500');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0382 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0382 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0383
  * @tc.name dts2cpp_union_0383
  * @tc.desc dts2cpp union type alias 十一成员 2 的幂字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0383', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0383.ts',
            `type UnionType0383 = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0383');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 11);
      assert.strictEqual(typeItem!.types[0], '1');
      assert.strictEqual(typeItem!.types[1], '2');
      assert.strictEqual(typeItem!.types[2], '4');
      assert.strictEqual(typeItem!.types[3], '8');
      assert.strictEqual(typeItem!.types[4], '16');
      assert.strictEqual(typeItem!.types[5], '32');
      assert.strictEqual(typeItem!.types[6], '64');
      assert.strictEqual(typeItem!.types[7], '128');
      assert.strictEqual(typeItem!.types[8], '256');
      assert.strictEqual(typeItem!.types[9], '512');
      assert.strictEqual(typeItem!.types[10], '1024');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0383 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0383 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0384
  * @tc.name dts2cpp_union_0384
  * @tc.desc dts2cpp union type alias 四分之一步进字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0384', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0384.ts',
            `type UnionType0384 = 0.25 | 0.5 | 0.75 | 1;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0384');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '0.25');
      assert.strictEqual(typeItem!.types[1], '0.5');
      assert.strictEqual(typeItem!.types[2], '0.75');
      assert.strictEqual(typeItem!.types[3], '1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0384 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0384 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0385
  * @tc.name dts2cpp_union_0385
  * @tc.desc dts2cpp union type alias 循环小数位字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0385', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0385.ts',
            `type UnionType0385 = 1.1 | 2.2 | 3.3;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0385');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '1.1');
      assert.strictEqual(typeItem!.types[1], '2.2');
      assert.strictEqual(typeItem!.types[2], '3.3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0385 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0385 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0386
  * @tc.name dts2cpp_union_0386
  * @tc.desc dts2cpp union type alias 带小数点零值字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0386', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0386.ts',
            `type UnionType0386 = -0.0 | 0.0 | 1.0;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0386');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '-0.0');
      assert.strictEqual(typeItem!.types[1], '0.0');
      assert.strictEqual(typeItem!.types[2], '1.0');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0386 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0386 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0387
  * @tc.name dts2cpp_union_0387
  * @tc.desc dts2cpp union type alias 浮点精度边界字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0387', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0387.ts',
            `type UnionType0387 = 0.1 | 0.2 | 0.30000000000000004;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0387');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '0.1');
      assert.strictEqual(typeItem!.types[1], '0.2');
      assert.strictEqual(typeItem!.types[2], '0.30000000000000004');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0387 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0387 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0388
  * @tc.name dts2cpp_union_0388
  * @tc.desc dts2cpp union type alias 负偶步进字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0388', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0388.ts',
            `type UnionType0388 = -100 | -50 | 0 | 50 | 100;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0388');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '-100');
      assert.strictEqual(typeItem!.types[1], '-50');
      assert.strictEqual(typeItem!.types[2], '0');
      assert.strictEqual(typeItem!.types[3], '50');
      assert.strictEqual(typeItem!.types[4], '100');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0388 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0388 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0389
  * @tc.name dts2cpp_union_0389
  * @tc.desc dts2cpp union type alias 20 位大整数字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0389', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0389.ts',
            `type UnionType0389 = 12345678901234567890 | 98765432109876543210;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0389');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '12345678901234567890');
      assert.strictEqual(typeItem!.types[1], '98765432109876543210');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0389 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0389 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0390
  * @tc.name dts2cpp_union_0390
  * @tc.desc dts2cpp union type alias 十位步进字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0390', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0390.ts',
            `type UnionType0390 = 10 | 20 | 30 | 40 | 50;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0390');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '10');
      assert.strictEqual(typeItem!.types[1], '20');
      assert.strictEqual(typeItem!.types[2], '30');
      assert.strictEqual(typeItem!.types[3], '40');
      assert.strictEqual(typeItem!.types[4], '50');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0390 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0390 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0391
  * @tc.name dts2cpp_union_0391
  * @tc.desc dts2cpp union type alias 低四位数字字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0391', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0391.ts',
            `type UnionType0391 = 0 | 1 | 2 | 3;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0391');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '0');
      assert.strictEqual(typeItem!.types[1], '1');
      assert.strictEqual(typeItem!.types[2], '2');
      assert.strictEqual(typeItem!.types[3], '3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0391 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0391 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0392
  * @tc.name dts2cpp_union_0392
  * @tc.desc dts2cpp union type alias 基本类型/数字/字符串混写字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0392', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0392.ts',
            `type UnionType0392 = string | 42 | "answer";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0392');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], '42');
      assert.strictEqual(typeItem!.types[2], '"answer"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0392 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0392 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0393
  * @tc.name dts2cpp_union_0393
  * @tc.desc dts2cpp union type alias 真值语义字符串/数字混合联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0393', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0393.ts',
            `type UnionType0393 = "true" | 1 | "false" | 0;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0393');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '"true"');
      assert.strictEqual(typeItem!.types[1], '1');
      assert.strictEqual(typeItem!.types[2], '"false"');
      assert.strictEqual(typeItem!.types[3], '0');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0393 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0393 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0394
  * @tc.name dts2cpp_union_0394
  * @tc.desc dts2cpp union type alias 正负符号字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0394', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0394.ts',
            `type UnionType0394 = -1 | 1;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0394');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '-1');
      assert.strictEqual(typeItem!.types[1], '1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0394 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0394 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0395
  * @tc.name dts2cpp_union_0395
  * @tc.desc dts2cpp union type alias 魔数十六进制字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0395', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0395.ts',
            `type UnionType0395 = 0xDEADBEEF | 0xCAFEBABE;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0395');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '0xDEADBEEF');
      assert.strictEqual(typeItem!.types[1], '0xCAFEBABE');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0395 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0395 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0396
  * @tc.name dts2cpp_union_0396
  * @tc.desc dts2cpp union type alias 双/单引号混写字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0396', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0396.ts',
            `type UnionType0396 = "double" | 'single';`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0396');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"double"');
      assert.strictEqual(typeItem!.types[1], '\'single\'');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0396 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0396 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0397
  * @tc.name dts2cpp_union_0397
  * @tc.desc dts2cpp union type alias 含转义双引号/单引号的字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0397', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0397.ts',
            `type UnionType0397 = "a\\"b" | "c'd";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0397');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"a\\"b"');
      assert.strictEqual(typeItem!.types[1], '"c\'d"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0397 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0397 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0398
  * @tc.name dts2cpp_union_0398
  * @tc.desc dts2cpp union type alias 含反斜杠转义的字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0398', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0398.ts',
            `type UnionType0398 = "\\\\" | "\\\\\\\\";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0398');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"\\\\"');
      assert.strictEqual(typeItem!.types[1], '"\\\\\\\\"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0398 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0398 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0399
  * @tc.name dts2cpp_union_0399
  * @tc.desc dts2cpp union type alias 仅含转义控制符的字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0399', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0399.ts',
            `type UnionType0399 = "\\n" | "\\t" | "\\r";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0399');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '"\\n"');
      assert.strictEqual(typeItem!.types[1], '"\\t"');
      assert.strictEqual(typeItem!.types[2], '"\\r"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0399 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0399 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0400
  * @tc.name dts2cpp_union_0400
  * @tc.desc dts2cpp union type alias 含 unicode 转义的字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0400', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0400.ts',
            `type UnionType0400 = "caf\\u00e9" | "plain";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0400');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"caf\\u00e9"');
      assert.strictEqual(typeItem!.types[1], '"plain"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0400 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0400 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0401
  * @tc.name dts2cpp_union_0401
  * @tc.desc dts2cpp union type alias unicode 转义与字面等价字符串联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0401', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0401.ts',
            `type UnionType0401 = "\\u0041" | "A";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0401');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"\\u0041"');
      assert.strictEqual(typeItem!.types[1], '"A"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0401 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0401 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0402
  * @tc.name dts2cpp_union_0402
  * @tc.desc dts2cpp union type alias 数字字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0402', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0402.ts',
            `type UnionType0402 = "0" | "1" | "2";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0402');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '"0"');
      assert.strictEqual(typeItem!.types[1], '"1"');
      assert.strictEqual(typeItem!.types[2], '"2"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0402 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0402 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0403
  * @tc.name dts2cpp_union_0403
  * @tc.desc dts2cpp union type alias 布尔字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0403', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0403.ts',
            `type UnionType0403 = "true" | "false";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0403');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"true"');
      assert.strictEqual(typeItem!.types[1], '"false"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0403 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0403 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0404
  * @tc.name dts2cpp_union_0404
  * @tc.desc dts2cpp union type alias 单词/符号字符串字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0404', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0404.ts',
            `type UnionType0404 = "hello" | "world" | "!";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0404');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '"hello"');
      assert.strictEqual(typeItem!.types[1], '"world"');
      assert.strictEqual(typeItem!.types[2], '"!"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0404 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0404 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0405
  * @tc.name dts2cpp_union_0405
  * @tc.desc dts2cpp union type alias 七成员星期字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0405', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0405.ts',
            `type UnionType0405 = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0405');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 7);
      assert.strictEqual(typeItem!.types[0], '"Mon"');
      assert.strictEqual(typeItem!.types[1], '"Tue"');
      assert.strictEqual(typeItem!.types[2], '"Wed"');
      assert.strictEqual(typeItem!.types[3], '"Thu"');
      assert.strictEqual(typeItem!.types[4], '"Fri"');
      assert.strictEqual(typeItem!.types[5], '"Sat"');
      assert.strictEqual(typeItem!.types[6], '"Sun"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0405 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0405 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0406
  * @tc.name dts2cpp_union_0406
  * @tc.desc dts2cpp union type alias 十二成员月份字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0406', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0406.ts',
            `type UnionType0406 = "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0406');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 12);
      assert.strictEqual(typeItem!.types[0], '"Jan"');
      assert.strictEqual(typeItem!.types[1], '"Feb"');
      assert.strictEqual(typeItem!.types[2], '"Mar"');
      assert.strictEqual(typeItem!.types[3], '"Apr"');
      assert.strictEqual(typeItem!.types[4], '"May"');
      assert.strictEqual(typeItem!.types[5], '"Jun"');
      assert.strictEqual(typeItem!.types[6], '"Jul"');
      assert.strictEqual(typeItem!.types[7], '"Aug"');
      assert.strictEqual(typeItem!.types[8], '"Sep"');
      assert.strictEqual(typeItem!.types[9], '"Oct"');
      assert.strictEqual(typeItem!.types[10], '"Nov"');
      assert.strictEqual(typeItem!.types[11], '"Dec"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0406 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0406 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0407
  * @tc.name dts2cpp_union_0407
  * @tc.desc dts2cpp union type alias 五成员 HTTP 方法字面量联合（非 CRUD 组）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0407', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0407.ts',
            `type UnionType0407 = "GET" | "HEAD" | "OPTIONS" | "TRACE" | "CONNECT";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0407');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '"GET"');
      assert.strictEqual(typeItem!.types[1], '"HEAD"');
      assert.strictEqual(typeItem!.types[2], '"OPTIONS"');
      assert.strictEqual(typeItem!.types[3], '"TRACE"');
      assert.strictEqual(typeItem!.types[4], '"CONNECT"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0407 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0407 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0408
  * @tc.name dts2cpp_union_0408
  * @tc.desc dts2cpp union type alias 五成员日志级别字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0408', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0408.ts',
            `type UnionType0408 = "INFO" | "DEBUG" | "WARN" | "ERROR" | "FATAL";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0408');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '"INFO"');
      assert.strictEqual(typeItem!.types[1], '"DEBUG"');
      assert.strictEqual(typeItem!.types[2], '"WARN"');
      assert.strictEqual(typeItem!.types[3], '"ERROR"');
      assert.strictEqual(typeItem!.types[4], '"FATAL"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0408 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0408 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0409
  * @tc.name dts2cpp_union_0409
  * @tc.desc dts2cpp union type alias 四成员方位字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0409', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0409.ts',
            `type UnionType0409 = "north" | "south" | "east" | "west";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0409');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '"north"');
      assert.strictEqual(typeItem!.types[1], '"south"');
      assert.strictEqual(typeItem!.types[2], '"east"');
      assert.strictEqual(typeItem!.types[3], '"west"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0409 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0409 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0410
  * @tc.name dts2cpp_union_0410
  * @tc.desc dts2cpp union type alias 四成员方向字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0410', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0410.ts',
            `type UnionType0410 = "up" | "down" | "left" | "right";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0410');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '"up"');
      assert.strictEqual(typeItem!.types[1], '"down"');
      assert.strictEqual(typeItem!.types[2], '"left"');
      assert.strictEqual(typeItem!.types[3], '"right"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0410 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0410 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0411
  * @tc.name dts2cpp_union_0411
  * @tc.desc dts2cpp union type alias 四成员季节字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0411', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0411.ts',
            `type UnionType0411 = "spring" | "summer" | "autumn" | "winter";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0411');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '"spring"');
      assert.strictEqual(typeItem!.types[1], '"summer"');
      assert.strictEqual(typeItem!.types[2], '"autumn"');
      assert.strictEqual(typeItem!.types[3], '"winter"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0411 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0411 执行异常: ${String(err)}`);
    }
  });

});

