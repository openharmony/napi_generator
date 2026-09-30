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
import { parseFunction, parseClass, parseStruct, parseEnum, parseUnion } from '../../../parse/parsec';
import {
  getDtsFunction, getDtsClasses, getDtsStructs,
  getDtsEnum, getDtsUnions, genDtsFile
} from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import { GenInfo, ParseObj, ClassObj, FuncObj, StructObj, EnumObj, UnionObj } from '../../../gen/datatype';

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

suite('Performance_C_Struct_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Struct_Suite part09.');

  /**
  * @tc.number : c_struct_0190
  * @tc.name : c_struct_0190
  * @tc.desc : h2dts parseStruct：扩充-R2-矩形 struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_struct_0190', () => {
    try {
      let objList: StructObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`struct Rect { int x, y, w, h; int area(); };`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Rect');
      assert.strictEqual(objList[0].members.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0190 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0190 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_struct_0191
  * @tc.name : c_struct_0191
  * @tc.desc : h2dts parseStruct：扩充-R2-矩阵 struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_struct_0191', () => {
    try {
      let objList: StructObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct { double m11, m12, m21, m22; } Mat2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Mat2');
      assert.strictEqual(objList[0].members.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0191 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0191 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_struct_0192
  * @tc.name : c_struct_0192
  * @tc.desc : h2dts parseStruct：扩充-R2-链表节点 struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_struct_0192', () => {
    try {
      let objList: StructObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`struct Linked { int value; Linked* next; };`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Linked');
      assert.strictEqual(objList[0].members.length, 2);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0192 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0192 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_struct_0193
  * @tc.name : c_struct_0193
  * @tc.desc : h2dts parseStruct：扩充-R2-配置 struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_struct_0193', () => {
    try {
      let objList: StructObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`struct Config { bool enabled; int timeout; std::string host; int port; };`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Config');
      assert.strictEqual(objList[0].members.length, 4);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0193 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0193 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_struct_0194
  * @tc.name : c_struct_0194
  * @tc.desc : h2dts parseStruct：扩充-R2-缓冲区 struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_struct_0194', () => {
    try {
      let objList: StructObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`struct Buffer { char* data; size_t len; size_t cap; };`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Buffer');
      assert.strictEqual(objList[0].members.length, 3);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0194 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0194 执行异常: ${String(err)}`);
    }
  });
});
