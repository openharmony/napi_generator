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

suite('Performance_C_Union_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Union_Suite part06.');

  /**
  * @tc.number : c_union_0105
  * @tc.name : c_union_0105
  * @tc.desc : h2dts parseUnion：扩充-R2-整型族 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_union_0105', () => {
    try {
      let objList: UnionObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { short s; int i; long l; } IntUnion;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'IntUnion');
      assert.strictEqual(objList[0].members.length, 3);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0106
  * @tc.name : c_union_0106
  * @tc.desc : h2dts parseUnion：扩充-R2-指针族 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_union_0106', () => {
    try {
      let objList: UnionObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`union PtrUnion { void* p; int* ip; char* cp; };`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'PtrUnion');
      assert.strictEqual(objList[0].members.length, 3);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0107
  * @tc.name : c_union_0107
  * @tc.desc : h2dts parseUnion：扩充-R2-浮点族 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_union_0107', () => {
    try {
      let objList: UnionObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { float f; double d; long double ld; } FloatUnion;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FloatUnion');
      assert.strictEqual(objList[0].members.length, 3);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0108
  * @tc.name : c_union_0108
  * @tc.desc : h2dts parseUnion：扩充-R2-string 族 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_union_0108', () => {
    try {
      let objList: UnionObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { std::string s; std::wstring ws; } StringUnion;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StringUnion');
      assert.strictEqual(objList[0].members.length, 2);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0108 执行异常: ${String(err)}`);
    }
  });
});
