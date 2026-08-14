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

suite('Performance_DTS2CPP_Struct_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Struct_Suite part05.');

  /**
  * @tc.number dts2cpp_struct_0223
  * @tc.name dts2cpp_struct_0223
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 symbol（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0223', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0223.ts',
            `interface IfA07P0 {
        f(a: symbol): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA07P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'symbol');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0223 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0223 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0224
  * @tc.name dts2cpp_struct_0224
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 symbol（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0224', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0224.ts',
            `interface IfA07P1 {
        f(a: number, b: symbol): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA07P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'symbol');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0224 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0224 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0225
  * @tc.name dts2cpp_struct_0225
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 bigint（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0225', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0225.ts',
            `interface IfA08P0 {
        f(a: bigint): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA08P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'bigint');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0225 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0225 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0226
  * @tc.name dts2cpp_struct_0226
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 bigint（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0226', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0226.ts',
            `interface IfA08P1 {
        f(a: number, b: bigint): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA08P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'bigint');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0226 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0226 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0227
  * @tc.name dts2cpp_struct_0227
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 object（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0227', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0227.ts',
            `interface IfA09P0 {
        f(a: object): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA09P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'object');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0227 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0227 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0228
  * @tc.name dts2cpp_struct_0228
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 object（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0228', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0228.ts',
            `interface IfA09P1 {
        f(a: number, b: object): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA09P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'object');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0228 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0228 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0229
  * @tc.name dts2cpp_struct_0229
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 number[]（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0229', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0229.ts',
            `interface IfA10P0 {
        f(a: number[]): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA10P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0229 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0229 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0230
  * @tc.name dts2cpp_struct_0230
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 number[]（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0230', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0230.ts',
            `interface IfA10P1 {
        f(a: number, b: number[]): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA10P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0230 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0230 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0231
  * @tc.name dts2cpp_struct_0231
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 string[]（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0231', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0231.ts',
            `interface IfA11P0 {
        f(a: string[]): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA11P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'string[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0231 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0231 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0232
  * @tc.name dts2cpp_struct_0232
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 string[]（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0232', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0232.ts',
            `interface IfA11P1 {
        f(a: number, b: string[]): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA11P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'string[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0232 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0232 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0233
  * @tc.name dts2cpp_struct_0233
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 boolean[]（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0233', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0233.ts',
            `interface IfA12P0 {
        f(a: boolean[]): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA12P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'boolean[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0233 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0233 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0234
  * @tc.name dts2cpp_struct_0234
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 boolean[]（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0234', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0234.ts',
            `interface IfA12P1 {
        f(a: number, b: boolean[]): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA12P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'boolean[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0234 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0234 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0235
  * @tc.name dts2cpp_struct_0235
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 Array<number>（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0235', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0235.ts',
            `interface IfA13P0 {
        f(a: Array<number>): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA13P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'Array<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0235 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0235 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0236
  * @tc.name dts2cpp_struct_0236
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 Array<number>（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0236', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0236.ts',
            `interface IfA13P1 {
        f(a: number, b: Array<number>): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA13P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'Array<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0236 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0236 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0237
  * @tc.name dts2cpp_struct_0237
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 Map<string, number>（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0237', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0237.ts',
            `interface IfA14P0 {
        f(a: Map<string, number>): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA14P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'Map<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0237 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0237 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0238
  * @tc.name dts2cpp_struct_0238
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 Map<string, number>（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0238', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0238.ts',
            `interface IfA14P1 {
        f(a: number, b: Map<string, number>): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA14P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'Map<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0238 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0238 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0239
  * @tc.name dts2cpp_struct_0239
  * @tc.desc dts2cpp struct 扩充-规模：5 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0239', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0239.ts',
            `interface IfC005 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC005');
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
        `dts2cpp_struct_0239 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0239 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0240
  * @tc.name dts2cpp_struct_0240
  * @tc.desc dts2cpp struct 扩充-规模：10 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0240', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0240.ts',
            `interface IfC010 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC010');
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
        `dts2cpp_struct_0240 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0240 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0241
  * @tc.name dts2cpp_struct_0241
  * @tc.desc dts2cpp struct 扩充-规模：15 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0241', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0241.ts',
            `interface IfC015 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC015');
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
        `dts2cpp_struct_0241 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0241 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0242
  * @tc.name dts2cpp_struct_0242
  * @tc.desc dts2cpp struct 扩充-规模：20 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0242', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0242.ts',
            `interface IfC020 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC020');
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
        `dts2cpp_struct_0242 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0242 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0243
  * @tc.name dts2cpp_struct_0243
  * @tc.desc dts2cpp struct 扩充-规模：25 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0243', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0243.ts',
            `interface IfC025 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC025');
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
        `dts2cpp_struct_0243 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0243 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0244
  * @tc.name dts2cpp_struct_0244
  * @tc.desc dts2cpp struct 扩充-规模：30 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0244', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0244.ts',
            `interface IfC030 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC030');
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
        `dts2cpp_struct_0244 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0244 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0245
  * @tc.name dts2cpp_struct_0245
  * @tc.desc dts2cpp struct 扩充-规模：35 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0245', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0245.ts',
            `interface IfC035 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC035');
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
        `dts2cpp_struct_0245 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0245 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0246
  * @tc.name dts2cpp_struct_0246
  * @tc.desc dts2cpp struct 扩充-规模：40 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0246', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0246.ts',
            `interface IfC040 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC040');
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
        `dts2cpp_struct_0246 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0246 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0247
  * @tc.name dts2cpp_struct_0247
  * @tc.desc dts2cpp struct 扩充-规模：45 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0247', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0247.ts',
            `interface IfC045 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC045');
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
        `dts2cpp_struct_0247 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0247 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0248
  * @tc.name dts2cpp_struct_0248
  * @tc.desc dts2cpp struct 扩充-规模：50 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0248', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0248.ts',
            `interface IfC050 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC050');
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
        `dts2cpp_struct_0248 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0248 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0249
  * @tc.name dts2cpp_struct_0249
  * @tc.desc dts2cpp struct 扩充-规模：55 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0249', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0249.ts',
            `interface IfC055 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC055');
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
        `dts2cpp_struct_0249 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0249 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0250
  * @tc.name dts2cpp_struct_0250
  * @tc.desc dts2cpp struct 扩充-规模：60 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0250', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0250.ts',
            `interface IfC060 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC060');
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
        `dts2cpp_struct_0250 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0250 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0251
  * @tc.name dts2cpp_struct_0251
  * @tc.desc dts2cpp struct 扩充-规模：65 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0251', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0251.ts',
            `interface IfC065 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC065');
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
        `dts2cpp_struct_0251 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0251 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0252
  * @tc.name dts2cpp_struct_0252
  * @tc.desc dts2cpp struct 扩充-规模：70 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0252', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0252.ts',
            `interface IfC070 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC070');
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
        `dts2cpp_struct_0252 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0252 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0253
  * @tc.name dts2cpp_struct_0253
  * @tc.desc dts2cpp struct 扩充-规模：75 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0253', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0253.ts',
            `interface IfC075 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC075');
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
        `dts2cpp_struct_0253 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0253 执行异常: ${String(err)}`);
    }
  });

});

