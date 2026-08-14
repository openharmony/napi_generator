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

suite('Performance_DTS2CPP_Func_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Func_Suite part07.');

  /**
  * @tc.number dts2cpp_func_0396
  * @tc.name dts2cpp_func_0396
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：setData。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0396', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0396.ts',
            `function setData(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'setData');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0396 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0396 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0397
  * @tc.name dts2cpp_func_0397
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：updateAll。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0397', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0397.ts',
            `function updateAll(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'updateAll');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0397 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0397 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0398
  * @tc.name dts2cpp_func_0398
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：deleteById。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0398', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0398.ts',
            `function deleteById(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'deleteById');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0398 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0398 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0399
  * @tc.name dts2cpp_func_0399
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：findByName。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0399', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0399.ts',
            `function findByName(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'findByName');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0399 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0399 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0400
  * @tc.name dts2cpp_func_0400
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：createNew。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0400', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0400.ts',
            `function createNew(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'createNew');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0400 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0400 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0401
  * @tc.name dts2cpp_func_0401
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：destroyAll。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0401', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0401.ts',
            `function destroyAll(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'destroyAll');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0401 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0401 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0402
  * @tc.name dts2cpp_func_0402
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：registerFn。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0402', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0402.ts',
            `function registerFn(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'registerFn');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0402 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0402 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0403
  * @tc.name dts2cpp_func_0403
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：unregisterFn。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0403', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0403.ts',
            `function unregisterFn(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'unregisterFn');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0403 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0403 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0404
  * @tc.name dts2cpp_func_0404
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 2 个函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0404', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0404.ts',
            `function multiFn2_0(a: number): number { return a; }
function multiFn2_1(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'multiFn2_0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0404 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0404 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0405
  * @tc.name dts2cpp_func_0405
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 3 个函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0405', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0405.ts',
            `function multiFn3_0(a: number): number { return a; }
function multiFn3_1(a: number): number { return a; }
function multiFn3_2(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'multiFn3_0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0405 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0405 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0406
  * @tc.name dts2cpp_func_0406
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 4 个函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0406', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0406.ts',
            `function multiFn4_0(a: number): number { return a; }
function multiFn4_1(a: number): number { return a; }
function multiFn4_2(a: number): number { return a; }
function multiFn4_3(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'multiFn4_0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0406 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0406 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0407
  * @tc.name dts2cpp_func_0407
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 5 个函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0407', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0407.ts',
            `function multiFn5_0(a: number): number { return a; }
function multiFn5_1(a: number): number { return a; }
function multiFn5_2(a: number): number { return a; }
function multiFn5_3(a: number): number { return a; }
function multiFn5_4(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'multiFn5_0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0407 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0407 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0408
  * @tc.name dts2cpp_func_0408
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 6 个函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0408', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0408.ts',
            `function multiFn6_0(a: number): number { return a; }
function multiFn6_1(a: number): number { return a; }
function multiFn6_2(a: number): number { return a; }
function multiFn6_3(a: number): number { return a; }
function multiFn6_4(a: number): number { return a; }
function multiFn6_5(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'multiFn6_0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0408 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0408 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0409
  * @tc.name dts2cpp_func_0409
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 7 个函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0409', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0409.ts',
            `function multiFn7_0(a: number): number { return a; }
function multiFn7_1(a: number): number { return a; }
function multiFn7_2(a: number): number { return a; }
function multiFn7_3(a: number): number { return a; }
function multiFn7_4(a: number): number { return a; }
function multiFn7_5(a: number): number { return a; }
function multiFn7_6(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'multiFn7_0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0409 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0409 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0410
  * @tc.name dts2cpp_func_0410
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 8 个函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0410', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0410.ts',
            `function multiFn8_0(a: number): number { return a; }
function multiFn8_1(a: number): number { return a; }
function multiFn8_2(a: number): number { return a; }
function multiFn8_3(a: number): number { return a; }
function multiFn8_4(a: number): number { return a; }
function multiFn8_5(a: number): number { return a; }
function multiFn8_6(a: number): number { return a; }
function multiFn8_7(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'multiFn8_0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0410 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0410 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0411
  * @tc.name dts2cpp_func_0411
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 9 个函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0411', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0411.ts',
            `function multiFn9_0(a: number): number { return a; }
function multiFn9_1(a: number): number { return a; }
function multiFn9_2(a: number): number { return a; }
function multiFn9_3(a: number): number { return a; }
function multiFn9_4(a: number): number { return a; }
function multiFn9_5(a: number): number { return a; }
function multiFn9_6(a: number): number { return a; }
function multiFn9_7(a: number): number { return a; }
function multiFn9_8(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'multiFn9_0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0411 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0411 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0412
  * @tc.name dts2cpp_func_0412
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 10 个函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0412', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0412.ts',
            `function multiFn10_0(a: number): number { return a; }
function multiFn10_1(a: number): number { return a; }
function multiFn10_2(a: number): number { return a; }
function multiFn10_3(a: number): number { return a; }
function multiFn10_4(a: number): number { return a; }
function multiFn10_5(a: number): number { return a; }
function multiFn10_6(a: number): number { return a; }
function multiFn10_7(a: number): number { return a; }
function multiFn10_8(a: number): number { return a; }
function multiFn10_9(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'multiFn10_0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0412 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0412 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0413
  * @tc.name dts2cpp_func_0413
  * @tc.desc dts2cpp funcs 签名 `(a: T): T`（1 参数 [T] → 返回 T）的解析结果与性能。扩充-泛型：单泛型返回 T。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0413', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0413.ts',
            `function fnG0<T>(a: T): T { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnG0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'T');
      assert.strictEqual(funcItem!.returns, 'T');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0413 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0413 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0414
  * @tc.name dts2cpp_func_0414
  * @tc.desc dts2cpp funcs 签名 `(a: T): T[]`（1 参数 [T] → 返回 T[]）的解析结果与性能。扩充-泛型：泛型返回数组。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0414', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0414.ts',
            `function fnG1<T>(a: T): T[] { return [a]; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnG1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'T');
      assert.strictEqual(funcItem!.returns, 'T[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0414 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0414 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0415
  * @tc.name dts2cpp_func_0415
  * @tc.desc dts2cpp funcs 签名 `(a: T[]): T`（1 参数 [T[]] → 返回 T）的解析结果与性能。扩充-泛型：泛型数组入参。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0415', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0415.ts',
            `function fnG2<T>(a: T[]): T { return a[0]; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnG2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'T[]');
      assert.strictEqual(funcItem!.returns, 'T');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0415 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0415 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0416
  * @tc.name dts2cpp_func_0416
  * @tc.desc dts2cpp funcs 签名 `(a: A, b: B): void`（2 参数 [A, B] → 返回 void）的解析结果与性能。扩充-泛型：双泛型。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0416', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0416.ts',
            `function fnG3<A, B>(a: A, b: B): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnG3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'A');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'B');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0416 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0416 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0417
  * @tc.name dts2cpp_func_0417
  * @tc.desc dts2cpp funcs 签名 `(a: T): void`（1 参数 [T] → 返回 void）的解析结果与性能。扩充-泛型：泛型约束。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0417', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0417.ts',
            `function fnG4<T extends { length: number }>(a: T): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnG4');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'T');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0417 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0417 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0418
  * @tc.name dts2cpp_func_0418
  * @tc.desc dts2cpp funcs 签名 `(a: T): T | null`（1 参数 [T] → 返回 T | null）的解析结果与性能。扩充-泛型：泛型返回联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0418', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0418.ts',
            `function fnG5<T>(a: T): T | null { return null; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnG5');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'T');
      assert.strictEqual(funcItem!.returns, 'T | null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0418 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0418 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0419
  * @tc.name dts2cpp_func_0419
  * @tc.desc dts2cpp funcs 签名 `(a: T[]): void`（1 参数 [T[]] → 返回 void）的解析结果与性能。扩充-泛型：泛型+rest。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0419', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0419.ts',
            `function fnG6<T>(...a: T[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnG6');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'T[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0419 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0419 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0420
  * @tc.name dts2cpp_func_0420
  * @tc.desc dts2cpp funcs 签名 `(a: T): Promise<T>`（1 参数 [T] → 返回 Promise<T>）的解析结果与性能。扩充-泛型：泛型返回 Promise。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0420', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0420.ts',
            `function fnG7<T>(a: T): Promise<T> { return Promise.resolve(a); }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnG7');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'T');
      assert.strictEqual(funcItem!.returns, 'Promise<T>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0420 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0420 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0421
  * @tc.name dts2cpp_func_0421
  * @tc.desc dts2cpp funcs 签名 `(a: T): void`（1 参数 [T] → 返回 void）的解析结果与性能。扩充-泛型：泛型可选。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0421', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0421.ts',
            `function fnG8<T>(a?: T): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnG8');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'T');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0421 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0421 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0422
  * @tc.name dts2cpp_func_0422
  * @tc.desc dts2cpp funcs 签名 `(a: A, b: B, c: C): void`（3 参数 [A, B, C] → 返回 void）的解析结果与性能。扩充-泛型：三泛型。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0422', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0422.ts',
            `function fnG9<A, B, C>(a: A, b: B, c: C): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnG9');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'A');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'B');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'C');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0422 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0422 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0423
  * @tc.name dts2cpp_func_0423
  * @tc.desc dts2cpp funcs 签名 `(): 无注解(undefined)`（0 参数 [] → 返回 无注解(undefined)）的解析结果与性能。扩充-边界：无参无返回。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0423', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0423.ts',
            `function fnE0() { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnE0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, undefined);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0423 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0423 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0424
  * @tc.name dts2cpp_func_0424
  * @tc.desc dts2cpp funcs 签名 `(a: number): 无注解(undefined)`（1 参数 [number] → 返回 无注解(undefined)）的解析结果与性能。扩充-边界：空函数体。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0424', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0424.ts',
            `function fnE1(a: number) {}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnE1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, undefined);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0424 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0424 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0425
  * @tc.name dts2cpp_func_0425
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-边界：export。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0425', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0425.ts',
            `export function fnE2(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnE2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0425 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0425 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0426
  * @tc.name dts2cpp_func_0426
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-边界：declare。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0426', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0426.ts',
            `declare function fnE3(a: number): number;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnE3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0426 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0426 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0427
  * @tc.name dts2cpp_func_0427
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-边界：namespace。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0427', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0427.ts',
            `namespace nse { function fnE4(a: number): number { return a; } }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnE4');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0427 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0427 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0428
  * @tc.name dts2cpp_func_0428
  * @tc.desc dts2cpp funcs 签名 `(a: typeof globalThis): void`（1 参数 [typeof globalThis] → 返回 void）的解析结果与性能。扩充-边界：typeof 参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0428', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0428.ts',
            `function fnE5(a: typeof globalThis): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnE5');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'typeof globalThis');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0428 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0428 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0429
  * @tc.name dts2cpp_func_0429
  * @tc.desc dts2cpp funcs 签名 `(参数: number): string`（1 参数 [number] → 返回 string）的解析结果与性能。扩充-边界：中文名/参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0429', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0429.ts',
            `function fnE6(参数: number): string { return ""; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnE6');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, '参数');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0429 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0429 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0430
  * @tc.name dts2cpp_func_0430
  * @tc.desc dts2cpp funcs 签名 `(a: 中文类型): void`（1 参数 [中文类型] → 返回 void）的解析结果与性能。扩充-边界：中文类型。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0430', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0430.ts',
            `function fnE7(a: 中文类型): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnE7');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '中文类型');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0430 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0430 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0431
  * @tc.name dts2cpp_func_0431
  * @tc.desc dts2cpp funcs 签名 `(a: unknown & null): never`（1 参数 [unknown & null] → 返回 never）的解析结果与性能。扩充-边界：交集参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0431', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0431.ts',
            `function fnE8(a: unknown & null): never { throw new Error(); }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnE8');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown & null');
      assert.strictEqual(funcItem!.returns, 'never');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0431 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0431 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0432
  * @tc.name dts2cpp_func_0432
  * @tc.desc dts2cpp funcs 签名 `(a: (string | number)[]): void`（1 参数 [(string | number)[]] → 返回 void）的解析结果与性能。扩充-边界：rest 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0432', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0432.ts',
            `function fnE9(...a: (string | number)[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnE9');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '(string | number)[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0432 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0432 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0433
  * @tc.name dts2cpp_func_0433
  * @tc.desc dts2cpp funcs 签名 `(a: string | null): void`（1 参数 [string | null] → 返回 void）的解析结果与性能。扩充-边界：可选联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0433', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0433.ts',
            `function fnE10(a?: string | null): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnE10');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string | null');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0433 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0433 执行异常: ${String(err)}`);
    }
  });

});

