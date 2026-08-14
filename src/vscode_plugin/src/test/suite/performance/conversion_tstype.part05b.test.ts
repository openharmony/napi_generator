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
  * @tc.number dts2cpp_type_0232
  * @tc.name dts2cpp_type_0232
  * @tc.desc dts2cpp type 扩充-多声明：同文件 3 个 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0232', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0232.ts',
            `type MultiT0 = { f0: number; };
type MultiT1 = { f1: number; };
type MultiT2 = { f2: number; };;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 3);
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
      const item_2 = parseObj.types.find(item => item.name === 'MultiT2');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'f2');
      assert.strictEqual(item_2!.members[0].type, 'number');
      assert.strictEqual(item_2!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0232 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0232 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0233
  * @tc.name dts2cpp_type_0233
  * @tc.desc dts2cpp type 扩充-多声明：同文件 4 个 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0233', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0233.ts',
            `type MultiT0 = { f0: number; };
type MultiT1 = { f1: number; };
type MultiT2 = { f2: number; };
type MultiT3 = { f3: number; };;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 4);
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
      const item_2 = parseObj.types.find(item => item.name === 'MultiT2');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'f2');
      assert.strictEqual(item_2!.members[0].type, 'number');
      assert.strictEqual(item_2!.functions.length, 0);
      const item_3 = parseObj.types.find(item => item.name === 'MultiT3');
      assert.ok(item_3);
      assert.strictEqual(item_3!.members.length, 1);
      assert.strictEqual(item_3!.members[0].name, 'f3');
      assert.strictEqual(item_3!.members[0].type, 'number');
      assert.strictEqual(item_3!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0233 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0233 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0234
  * @tc.name dts2cpp_type_0234
  * @tc.desc dts2cpp type 扩充-多声明：同文件 5 个 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0234', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0234.ts',
            `type MultiT0 = { f0: number; };
type MultiT1 = { f1: number; };
type MultiT2 = { f2: number; };
type MultiT3 = { f3: number; };
type MultiT4 = { f4: number; };;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 5);
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
      const item_2 = parseObj.types.find(item => item.name === 'MultiT2');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'f2');
      assert.strictEqual(item_2!.members[0].type, 'number');
      assert.strictEqual(item_2!.functions.length, 0);
      const item_3 = parseObj.types.find(item => item.name === 'MultiT3');
      assert.ok(item_3);
      assert.strictEqual(item_3!.members.length, 1);
      assert.strictEqual(item_3!.members[0].name, 'f3');
      assert.strictEqual(item_3!.members[0].type, 'number');
      assert.strictEqual(item_3!.functions.length, 0);
      const item_4 = parseObj.types.find(item => item.name === 'MultiT4');
      assert.ok(item_4);
      assert.strictEqual(item_4!.members.length, 1);
      assert.strictEqual(item_4!.members[0].name, 'f4');
      assert.strictEqual(item_4!.members[0].type, 'number');
      assert.strictEqual(item_4!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0234 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0234 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0235
  * @tc.name dts2cpp_type_0235
  * @tc.desc dts2cpp type 扩充-多声明：同文件 6 个 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0235', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0235.ts',
            `type MultiT0 = { f0: number; };
type MultiT1 = { f1: number; };
type MultiT2 = { f2: number; };
type MultiT3 = { f3: number; };
type MultiT4 = { f4: number; };
type MultiT5 = { f5: number; };;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 6);
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
      const item_2 = parseObj.types.find(item => item.name === 'MultiT2');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'f2');
      assert.strictEqual(item_2!.members[0].type, 'number');
      assert.strictEqual(item_2!.functions.length, 0);
      const item_3 = parseObj.types.find(item => item.name === 'MultiT3');
      assert.ok(item_3);
      assert.strictEqual(item_3!.members.length, 1);
      assert.strictEqual(item_3!.members[0].name, 'f3');
      assert.strictEqual(item_3!.members[0].type, 'number');
      assert.strictEqual(item_3!.functions.length, 0);
      const item_4 = parseObj.types.find(item => item.name === 'MultiT4');
      assert.ok(item_4);
      assert.strictEqual(item_4!.members.length, 1);
      assert.strictEqual(item_4!.members[0].name, 'f4');
      assert.strictEqual(item_4!.members[0].type, 'number');
      assert.strictEqual(item_4!.functions.length, 0);
      const item_5 = parseObj.types.find(item => item.name === 'MultiT5');
      assert.ok(item_5);
      assert.strictEqual(item_5!.members.length, 1);
      assert.strictEqual(item_5!.members[0].name, 'f5');
      assert.strictEqual(item_5!.members[0].type, 'number');
      assert.strictEqual(item_5!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0235 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0235 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0236
  * @tc.name dts2cpp_type_0236
  * @tc.desc dts2cpp type 扩充-多声明：同文件 7 个 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0236', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0236.ts',
            `type MultiT0 = { f0: number; };
type MultiT1 = { f1: number; };
type MultiT2 = { f2: number; };
type MultiT3 = { f3: number; };
type MultiT4 = { f4: number; };
type MultiT5 = { f5: number; };
type MultiT6 = { f6: number; };;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 7);
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
      const item_2 = parseObj.types.find(item => item.name === 'MultiT2');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'f2');
      assert.strictEqual(item_2!.members[0].type, 'number');
      assert.strictEqual(item_2!.functions.length, 0);
      const item_3 = parseObj.types.find(item => item.name === 'MultiT3');
      assert.ok(item_3);
      assert.strictEqual(item_3!.members.length, 1);
      assert.strictEqual(item_3!.members[0].name, 'f3');
      assert.strictEqual(item_3!.members[0].type, 'number');
      assert.strictEqual(item_3!.functions.length, 0);
      const item_4 = parseObj.types.find(item => item.name === 'MultiT4');
      assert.ok(item_4);
      assert.strictEqual(item_4!.members.length, 1);
      assert.strictEqual(item_4!.members[0].name, 'f4');
      assert.strictEqual(item_4!.members[0].type, 'number');
      assert.strictEqual(item_4!.functions.length, 0);
      const item_5 = parseObj.types.find(item => item.name === 'MultiT5');
      assert.ok(item_5);
      assert.strictEqual(item_5!.members.length, 1);
      assert.strictEqual(item_5!.members[0].name, 'f5');
      assert.strictEqual(item_5!.members[0].type, 'number');
      assert.strictEqual(item_5!.functions.length, 0);
      const item_6 = parseObj.types.find(item => item.name === 'MultiT6');
      assert.ok(item_6);
      assert.strictEqual(item_6!.members.length, 1);
      assert.strictEqual(item_6!.members[0].name, 'f6');
      assert.strictEqual(item_6!.members[0].type, 'number');
      assert.strictEqual(item_6!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0236 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0236 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0237
  * @tc.name dts2cpp_type_0237
  * @tc.desc dts2cpp type 扩充-多声明：同文件 8 个 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0237', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0237.ts',
            `type MultiT0 = { f0: number; };
type MultiT1 = { f1: number; };
type MultiT2 = { f2: number; };
type MultiT3 = { f3: number; };
type MultiT4 = { f4: number; };
type MultiT5 = { f5: number; };
type MultiT6 = { f6: number; };
type MultiT7 = { f7: number; };;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 8);
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
      const item_2 = parseObj.types.find(item => item.name === 'MultiT2');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'f2');
      assert.strictEqual(item_2!.members[0].type, 'number');
      assert.strictEqual(item_2!.functions.length, 0);
      const item_3 = parseObj.types.find(item => item.name === 'MultiT3');
      assert.ok(item_3);
      assert.strictEqual(item_3!.members.length, 1);
      assert.strictEqual(item_3!.members[0].name, 'f3');
      assert.strictEqual(item_3!.members[0].type, 'number');
      assert.strictEqual(item_3!.functions.length, 0);
      const item_4 = parseObj.types.find(item => item.name === 'MultiT4');
      assert.ok(item_4);
      assert.strictEqual(item_4!.members.length, 1);
      assert.strictEqual(item_4!.members[0].name, 'f4');
      assert.strictEqual(item_4!.members[0].type, 'number');
      assert.strictEqual(item_4!.functions.length, 0);
      const item_5 = parseObj.types.find(item => item.name === 'MultiT5');
      assert.ok(item_5);
      assert.strictEqual(item_5!.members.length, 1);
      assert.strictEqual(item_5!.members[0].name, 'f5');
      assert.strictEqual(item_5!.members[0].type, 'number');
      assert.strictEqual(item_5!.functions.length, 0);
      const item_6 = parseObj.types.find(item => item.name === 'MultiT6');
      assert.ok(item_6);
      assert.strictEqual(item_6!.members.length, 1);
      assert.strictEqual(item_6!.members[0].name, 'f6');
      assert.strictEqual(item_6!.members[0].type, 'number');
      assert.strictEqual(item_6!.functions.length, 0);
      const item_7 = parseObj.types.find(item => item.name === 'MultiT7');
      assert.ok(item_7);
      assert.strictEqual(item_7!.members.length, 1);
      assert.strictEqual(item_7!.members[0].name, 'f7');
      assert.strictEqual(item_7!.members[0].type, 'number');
      assert.strictEqual(item_7!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0237 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0237 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0238
  * @tc.name dts2cpp_type_0238
  * @tc.desc dts2cpp type 扩充-命名：UpperCamel 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0238', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0238.ts',
            `type UpperCamel = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'UpperCamel');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0238 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0238 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0239
  * @tc.name dts2cpp_type_0239
  * @tc.desc dts2cpp type 扩充-命名：lowerCamel 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0239', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0239.ts',
            `type lowerCamel = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'lowerCamel');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0239 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0239 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0240
  * @tc.name dts2cpp_type_0240
  * @tc.desc dts2cpp type 扩充-命名：snake_case 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0240', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0240.ts',
            `type snake_case = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'snake_case');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0240 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0240 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0241
  * @tc.name dts2cpp_type_0241
  * @tc.desc dts2cpp type 扩充-命名：Trailing2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0241', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0241.ts',
            `type Trailing2 = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Trailing2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0241 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0241 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0242
  * @tc.name dts2cpp_type_0242
  * @tc.desc dts2cpp type 扩充-命名：_leading 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0242', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0242.ts',
            `type _leading = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === '_leading');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0242 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0242 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0243
  * @tc.name dts2cpp_type_0243
  * @tc.desc dts2cpp type 扩充-命名：Double__Under 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0243', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0243.ts',
            `type Double__Under = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Double__Under');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0243 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0243 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0244
  * @tc.name dts2cpp_type_0244
  * @tc.desc dts2cpp type 扩充-命名：T 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0244', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0244.ts',
            `type T = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'T');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0244 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0244 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0245
  * @tc.name dts2cpp_type_0245
  * @tc.desc dts2cpp type 扩充-命名：T1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0245', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0245.ts',
            `type T1 = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'T1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0245 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0245 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0246
  * @tc.name dts2cpp_type_0246
  * @tc.desc dts2cpp type 扩充-命名：t1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0246', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0246.ts',
            `type t1 = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 't1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0246 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0246 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0247
  * @tc.name dts2cpp_type_0247
  * @tc.desc dts2cpp type 扩充-命名：Tp 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0247', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0247.ts',
            `type Tp = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Tp');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0247 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0247 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0248
  * @tc.name dts2cpp_type_0248
  * @tc.desc dts2cpp type 扩充-命名：type1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0248', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0248.ts',
            `type type1 = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'type1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0248 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0248 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0249
  * @tc.name dts2cpp_type_0249
  * @tc.desc dts2cpp type 扩充-命名：中文类型 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0249', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0249.ts',
            `type 中文类型 = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === '中文类型');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0249 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0249 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0250
  * @tc.name dts2cpp_type_0250
  * @tc.desc dts2cpp type 扩充-命名：VersionV2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0250', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0250.ts',
            `type VersionV2 = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'VersionV2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0250 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0250 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0251
  * @tc.name dts2cpp_type_0251
  * @tc.desc dts2cpp type 扩充-命名：HTTPClient 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0251', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0251.ts',
            `type HTTPClient = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'HTTPClient');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0251 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0251 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0252
  * @tc.name dts2cpp_type_0252
  * @tc.desc dts2cpp type 扩充-命名：KLASS 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0252', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0252.ts',
            `type KLASS = {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'KLASS');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0252 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0252 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0253
  * @tc.name dts2cpp_type_0253
  * @tc.desc dts2cpp type 扩充-交叉 RHS：交叉 Basic 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0253', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0253.ts',
            `type Xs1 = Basic & {
        len: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Xs1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0253 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0253 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0254
  * @tc.name dts2cpp_type_0254
  * @tc.desc dts2cpp type 扩充-交叉 RHS：交叉双对象 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0254', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0254.ts',
            `type Xs2 = { a: number } & { b: string };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Xs2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0254 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0255
  * @tc.name dts2cpp_type_0255
  * @tc.desc dts2cpp type 扩充-交叉 RHS：交叉三对象 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0255', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0255.ts',
            `type Xs3 = { a: number } & { b: string } & { c: boolean };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Xs3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0255 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0256
  * @tc.name dts2cpp_type_0256
  * @tc.desc dts2cpp type 扩充-交叉 RHS：交叉+字面量 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0256', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0256.ts',
            `type Xs4 = string & { tag: "x" };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Xs4');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0256 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0256 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0257
  * @tc.name dts2cpp_type_0257
  * @tc.desc dts2cpp type 扩充-交叉 RHS：交叉+函数类型 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0257', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0257.ts',
            `type Xs5 = (() => void) & { id: number };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Xs5');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0257 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0257 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0258
  * @tc.name dts2cpp_type_0258
  * @tc.desc dts2cpp type 扩充-交叉 RHS：交叉引用别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0258', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0258.ts',
            `type Xs6a = { a: number };
type Xs6 = Xs6a & { b: string };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 2);
      const item_0 = parseObj.types.find(item => item.name === 'Xs6a');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'a');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.types.find(item => item.name === 'Xs6');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 0);
      assert.strictEqual(item_1!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0258 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0258 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0259
  * @tc.name dts2cpp_type_0259
  * @tc.desc dts2cpp type 扩充-交叉 RHS：交叉自引用 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0259', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0259.ts',
            `type Xs7 = Xs7 & { a: number };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Xs7');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0259 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0259 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0260
  * @tc.name dts2cpp_type_0260
  * @tc.desc dts2cpp type 扩充-交叉 RHS：交叉+泛型 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0260', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0260.ts',
            `type Xs8<T> = T & { a: number };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Xs8');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0260 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0260 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0261
  * @tc.name dts2cpp_type_0261
  * @tc.desc dts2cpp type 扩充-交叉 RHS：交叉+模板 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0261', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0261.ts',
            `type Xs9 = \`x\${string}\` & { id: number };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Xs9');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0261 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0261 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0262
  * @tc.name dts2cpp_type_0262
  * @tc.desc dts2cpp type 扩充-交叉 RHS：交叉+联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0262', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0262.ts',
            `type Xs10 = (string | number) & { flag: boolean };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Xs10');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0262 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0262 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0263
  * @tc.name dts2cpp_type_0263
  * @tc.desc dts2cpp type 扩充-泛型：单泛型 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0263', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0263.ts',
            `type Tg1<T> = {
        v: T;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Tg1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'v');
      assert.strictEqual(item_0!.members[0].type, 'T');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0263 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0263 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0264
  * @tc.name dts2cpp_type_0264
  * @tc.desc dts2cpp type 扩充-泛型：双泛型 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0264', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0264.ts',
            `type Tg2<A, B> = {
        a: A;
        b: B;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Tg2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'a');
      assert.strictEqual(item_0!.members[0].type, 'A');
      assert.strictEqual(item_0!.members[1].name, 'b');
      assert.strictEqual(item_0!.members[1].type, 'B');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0264 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0264 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0265
  * @tc.name dts2cpp_type_0265
  * @tc.desc dts2cpp type 扩充-泛型：三泛型 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0265', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0265.ts',
            `type Tg3<A, B, C> = {
        a: A;
        b: B;
        c: C;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Tg3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'a');
      assert.strictEqual(item_0!.members[0].type, 'A');
      assert.strictEqual(item_0!.members[1].name, 'b');
      assert.strictEqual(item_0!.members[1].type, 'B');
      assert.strictEqual(item_0!.members[2].name, 'c');
      assert.strictEqual(item_0!.members[2].type, 'C');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0265 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0265 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0266
  * @tc.name dts2cpp_type_0266
  * @tc.desc dts2cpp type 扩充-泛型：泛型数组 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0266', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0266.ts',
            `type Tg4<T> = {
        list: T[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Tg4');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'list');
      assert.strictEqual(item_0!.members[0].type, 'T[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0266 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0266 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0267
  * @tc.name dts2cpp_type_0267
  * @tc.desc dts2cpp type 扩充-泛型：泛型容器 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0267', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0267.ts',
            `type Tg5<T> = {
        m: Map<string, T>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Tg5');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'm');
      assert.strictEqual(item_0!.members[0].type, 'Map<string, T>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0267 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0267 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0268
  * @tc.name dts2cpp_type_0268
  * @tc.desc dts2cpp type 扩充-泛型：泛型方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0268', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0268.ts',
            `type Tg6<T> = {
        get(): T;
        set(v: T): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Tg6');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 2);
      assert.strictEqual(item_0!.functions[0].name, 'get');
      assert.strictEqual(item_0!.functions[0].returns, 'T');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'set');
      assert.strictEqual(item_0!.functions[1].returns, 'void');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'T');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0268 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0268 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0269
  * @tc.name dts2cpp_type_0269
  * @tc.desc dts2cpp type 扩充-泛型：泛型约束 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0269', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0269.ts',
            `type Tg7<T extends { length: number }> = {
        v: T;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Tg7');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'v');
      assert.strictEqual(item_0!.members[0].type, 'T');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0269 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0269 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0270
  * @tc.name dts2cpp_type_0270
  * @tc.desc dts2cpp type 扩充-泛型：泛型箭头属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0270', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0270.ts',
            `type Tg8<T> = {
        f: (v: T) => T;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Tg8');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'f');
      assert.strictEqual(item_0!.members[0].type, '(v: T) => T');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0270 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0270 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0271
  * @tc.name dts2cpp_type_0271
  * @tc.desc dts2cpp type 扩充-泛型：泛型联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0271', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0271.ts',
            `type Tg9<T> = {
        v: T | null;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Tg9');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'v');
      assert.strictEqual(item_0!.members[0].type, 'T | null');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0271 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0271 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0272
  * @tc.name dts2cpp_type_0272
  * @tc.desc dts2cpp type 扩充-泛型：泛型嵌套 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0272', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0272.ts',
            `type Tg10<T> = {
        m: Map<string, T[]>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'Tg10');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'm');
      assert.strictEqual(item_0!.members[0].type, 'Map<string, T[]>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0272 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0272 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0273
  * @tc.name dts2cpp_type_0273
  * @tc.desc dts2cpp type 扩充-边界：空 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0273', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0273.ts',
            `type EdgeT1 = {};`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'EdgeT1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0273 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0273 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0274
  * @tc.name dts2cpp_type_0274
  * @tc.desc dts2cpp type 扩充-边界：单行 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0274', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0274.ts',
            `type EdgeT2 = { a: number; b: string; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'EdgeT2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'a');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'b');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0274 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0274 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0275
  * @tc.name dts2cpp_type_0275
  * @tc.desc dts2cpp type 扩充-边界：注释 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0275', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0275.ts',
            `/* type EdgeT3 = { a: number; }; */`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0275 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0275 执行异常: ${String(err)}`);
    }
  });

});

