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
  * @tc.number dts2cpp_union_0473
  * @tc.name dts2cpp_union_0473
  * @tc.desc dts2cpp union type alias keyof typeof 内置对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0473', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0473.ts',
            `type UnionType0473 = keyof typeof Date | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0473');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'keyof typeof Date');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0473 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0473 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0474
  * @tc.name dts2cpp_union_0474
  * @tc.desc dts2cpp union type alias 内置对象方法索引访问联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0474', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0474.ts',
            `type UnionType0474 = Date["getTime"] | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0474');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Date["getTime"]');
      assert.strictEqual(typeItem!.types[1], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0474 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0474 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0475
  * @tc.name dts2cpp_union_0475
  * @tc.desc dts2cpp union type alias 容错：前导空成员联合（仅 1 个成员）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0475', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0475.ts',
            `type UnionType0475 = | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0475');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 1);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0475 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0475 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0476
  * @tc.name dts2cpp_union_0476
  * @tc.desc dts2cpp union type alias 容错：尾部空成员联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0476', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0476.ts',
            `type UnionType0476 = string | number |;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0476');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.strictEqual(typeItem!.types[2], '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0476 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0476 执行异常: ${String(err)}`);
    }
  });
});

