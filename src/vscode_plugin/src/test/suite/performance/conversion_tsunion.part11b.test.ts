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
  * @tc.number dts2cpp_union_0412
  * @tc.name dts2cpp_union_0412
  * @tc.desc dts2cpp union type alias 四成员季度字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0412', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0412.ts',
            `type UnionType0412 = "Q1" | "Q2" | "Q3" | "Q4";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0412');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '"Q1"');
      assert.strictEqual(typeItem!.types[1], '"Q2"');
      assert.strictEqual(typeItem!.types[2], '"Q3"');
      assert.strictEqual(typeItem!.types[3], '"Q4"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0412 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0412 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0413
  * @tc.name dts2cpp_union_0413
  * @tc.desc dts2cpp union type alias 五成员尺寸档位字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0413', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0413.ts',
            `type UnionType0413 = "xs" | "sm" | "md" | "lg" | "xl";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0413');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '"xs"');
      assert.strictEqual(typeItem!.types[1], '"sm"');
      assert.strictEqual(typeItem!.types[2], '"md"');
      assert.strictEqual(typeItem!.types[3], '"lg"');
      assert.strictEqual(typeItem!.types[4], '"xl"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0413 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0413 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0414
  * @tc.name dts2cpp_union_0414
  * @tc.desc dts2cpp union type alias 三成员 Promise 状态字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0414', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0414.ts',
            `type UnionType0414 = "pending" | "fulfilled" | "rejected";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0414');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '"pending"');
      assert.strictEqual(typeItem!.types[1], '"fulfilled"');
      assert.strictEqual(typeItem!.types[2], '"rejected"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0414 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0414 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0415
  * @tc.name dts2cpp_union_0415
  * @tc.desc dts2cpp union type alias 排序方向字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0415', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0415.ts',
            `type UnionType0415 = "asc" | "desc";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0415');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"asc"');
      assert.strictEqual(typeItem!.types[1], '"desc"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0415 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0415 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0416
  * @tc.name dts2cpp_union_0416
  * @tc.desc dts2cpp union type alias 主题模式字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0416', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0416.ts',
            `type UnionType0416 = "dark" | "light" | "auto";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0416');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '"dark"');
      assert.strictEqual(typeItem!.types[1], '"light"');
      assert.strictEqual(typeItem!.types[2], '"auto"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0416 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0416 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0417
  * @tc.name dts2cpp_union_0417
  * @tc.desc dts2cpp union type alias 三成员优先级字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0417', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0417.ts',
            `type UnionType0417 = "high" | "medium" | "low";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0417');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '"high"');
      assert.strictEqual(typeItem!.types[1], '"medium"');
      assert.strictEqual(typeItem!.types[2], '"low"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0417 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0417 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0418
  * @tc.name dts2cpp_union_0418
  * @tc.desc dts2cpp union type alias 四成员数据格式字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0418', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0418.ts',
            `type UnionType0418 = "json" | "xml" | "yaml" | "csv";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0418');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '"json"');
      assert.strictEqual(typeItem!.types[1], '"xml"');
      assert.strictEqual(typeItem!.types[2], '"yaml"');
      assert.strictEqual(typeItem!.types[3], '"csv"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0418 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0418 执行异常: ${String(err)}`);
    }
  });
});

