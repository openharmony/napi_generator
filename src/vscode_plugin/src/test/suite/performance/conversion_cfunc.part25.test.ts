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
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part25.');

  /**
  * @tc.number : c_func_1158
  * @tc.name : c_func_1158
  * @tc.desc : h2dts parseFunction：扩充-R2-inline 函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1158', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`inline int fastAdd(int a, int b);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'fastAdd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1159
  * @tc.name : c_func_1159
  * @tc.desc : h2dts parseFunction：扩充-R2-static 函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1159', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`static void localHelper(int x);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'localHelper');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1160
  * @tc.name : c_func_1160
  * @tc.desc : h2dts parseFunction：扩充-R2-纯虚函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1160', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`virtual void onEvent(int code) = 0;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'onEvent');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1161
  * @tc.name : c_func_1161
  * @tc.desc : h2dts parseFunction：扩充-R2-vector 引用参数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1161', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`std::vector<int> filter(const std::vector<int>& input, int threshold);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'filter');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1162
  * @tc.name : c_func_1162
  * @tc.desc : h2dts parseFunction：扩充-R2-initializer_list 参数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1162', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void batch(std::initializer_list<int> values);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'batch');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1162 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1163
  * @tc.name : c_func_1163
  * @tc.desc : h2dts parseFunction：扩充-R2-trailing return 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1163', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`auto deduce(int x) -> decltype(x + 1);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'decltype');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1164
  * @tc.name : c_func_1164
  * @tc.desc : h2dts parseFunction：扩充-R2-pair 返回 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1164', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`std::pair<int, std::string> makePair(int id, const std::string& name);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'makePair');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1164 执行异常: ${String(err)}`);
    }
  });
});
