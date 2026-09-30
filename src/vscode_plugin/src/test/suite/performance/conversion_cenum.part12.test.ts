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

suite('Performance_C_Enum_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Enum_Suite part12.');

  /**
  * @tc.number : c_enum_0254
  * @tc.name : c_enum_0254
  * @tc.desc : h2dts parseEnum：扩充-typedef enum 三值 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_enum_0254', () => {
    try {
      let objList: EnumObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { MODE_A, MODE_B, MODE_C } WorkMode;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'WorkMode');
      assert.strictEqual(objList[0].members.length, 3);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0254 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_enum_0255
  * @tc.name : c_enum_0255
  * @tc.desc : h2dts parseEnum：扩充-位标志 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_enum_0255', () => {
    try {
      let objList: EnumObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`enum Flags { F_NONE = 0, F_READ = 1, F_WRITE = 2, F_EXEC = 4 };`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Flags');
      assert.strictEqual(objList[0].members.length, 4);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0255 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_enum_0256
  * @tc.name : c_enum_0256
  * @tc.desc : h2dts parseEnum：扩充-namespace 内 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_enum_0256', () => {
    try {
      let objList: EnumObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`namespace ns { enum Inner { X, Y, Z }; }`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Inner');
      assert.strictEqual(objList[0].members.length, 3);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0256 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0256 执行异常: ${String(err)}`);
    }
  });
});
