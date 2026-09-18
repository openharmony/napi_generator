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

suite('Performance_C_Func_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part24.');

  /**
  * @tc.number : c_func_1153
  * @tc.name : c_func_1153
  * @tc.desc : h2dts parseFunction：扩充-template 函数声明 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1153', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`template<typename T> T tplMax(T a, T b);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'tplMax');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1154
  * @tc.name : c_func_1154
  * @tc.desc : h2dts parseFunction：扩充-constexpr 函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1154', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`constexpr int square(int x);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'square');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1155
  * @tc.name : c_func_1155
  * @tc.desc : h2dts parseFunction：扩充-noexcept 函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1155', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void noexceptFunc() noexcept;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'noexceptFunc');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1156
  * @tc.name : c_func_1156
  * @tc.desc : h2dts parseFunction：扩充-iterator 双参数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1156', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void withIterator(std::vector<int>::iterator begin, std::vector<int>::iterator end);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'withIterator');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1157
  * @tc.name : c_func_1157
  * @tc.desc : h2dts parseFunction：扩充-map<vector> 引用返回 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1157', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`std::string process(std::map<std::string, std::vector<int>>& data);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'process');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1157 执行异常: ${String(err)}`);
    }
  });
});
