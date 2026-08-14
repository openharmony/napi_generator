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
import { getDtsFunction, getDtsClasses, getDtsStructs, getDtsEnum, getDtsUnions, genDtsFile } from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import { GenInfo, ParseObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse/gen：同一输入执行 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;      // 执行 10 次 ≤ 6s（实测约 0.1~3s/用例）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_C_Struct_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Struct_Suite part06.');

  /**
  * @tc.number c_struct_0170
  * @tc.name c_struct_0170
  * @tc.desc h2dts parseStruct：扩充-边界：容器方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0170', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Cm5 {
    std::vector<int> v;
    void push(int x);
    int pop();
} Cm5;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Cm5');
      assert.strictEqual(objList[0].alias, 'Cm5');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 2);
      assert.strictEqual(objList[0].functions[0].name, 'push');
      assert.strictEqual(objList[0].functions[0].returns, 'void');
      assert.strictEqual(objList[0].functions[1].name, 'pop');
      assert.strictEqual(objList[0].functions[1].returns, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0171
  * @tc.name c_struct_0171
  * @tc.desc h2dts parseStruct：扩充-边界：三成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0171', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Tri6 { int a; double b; bool c; } Tri6;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Tri6');
      assert.strictEqual(objList[0].alias, 'Tri6');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'c');
      assert.strictEqual(objList[0].members[2].type, 'bool');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0172
  * @tc.name c_struct_0172
  * @tc.desc h2dts parseStruct：扩充-边界：注释 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0172', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Com7 {
    // 成员注释
    int v; /* 块注释 */
    double d;
} Com7;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Com7');
      assert.strictEqual(objList[0].alias, 'Com7');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0172 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0172 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0173
  * @tc.name c_struct_0173
  * @tc.desc h2dts parseStruct：扩充-边界：指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0173', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Pm8 {
    char* name;
    int* count;
    double* ratio;
} Pm8;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Pm8');
      assert.strictEqual(objList[0].alias, 'Pm8');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'name');
      assert.strictEqual(objList[0].members[0].type, 'char*');
      assert.strictEqual(objList[0].members[1].name, 'count');
      assert.strictEqual(objList[0].members[1].type, 'int*');
      assert.strictEqual(objList[0].members[2].name, 'ratio');
      assert.strictEqual(objList[0].members[2].type, 'double*');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0174
  * @tc.name c_struct_0174
  * @tc.desc h2dts parseStruct：扩充-边界：多方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0174', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Mm9 {
    int a();
    int b();
    int c();
    int d();
    int e();
} Mm9;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Mm9');
      assert.strictEqual(objList[0].alias, 'Mm9');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 5);
      assert.strictEqual(objList[0].functions[0].name, 'a');
      assert.strictEqual(objList[0].functions[0].returns, 'int');
      assert.strictEqual(objList[0].functions[1].name, 'b');
      assert.strictEqual(objList[0].functions[1].returns, 'int');
      assert.strictEqual(objList[0].functions[2].name, 'c');
      assert.strictEqual(objList[0].functions[2].returns, 'int');
      assert.strictEqual(objList[0].functions[3].name, 'd');
      assert.strictEqual(objList[0].functions[3].returns, 'int');
      assert.strictEqual(objList[0].functions[4].name, 'e');
      assert.strictEqual(objList[0].functions[4].returns, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0175
  * @tc.name c_struct_0175
  * @tc.desc h2dts parseStruct：扩充-边界：超大成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0175', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Big10 {
    int v0; int v1; int v2; int v3; int v4; int v5; int v6; int v7; int v8; int v9;
    int v10; int v11; int v12; int v13; int v14; int v15; int v16; int v17; int v18; int v19;
} Big10;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Big10');
      assert.strictEqual(objList[0].alias, 'Big10');
      assert.strictEqual(objList[0].members.length, 20);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'v1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'v2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'v3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'v4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'v5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'v6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'v7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'v8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'v9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.strictEqual(objList[0].members[10].name, 'v10');
      assert.strictEqual(objList[0].members[10].type, 'int');
      assert.strictEqual(objList[0].members[11].name, 'v11');
      assert.strictEqual(objList[0].members[11].type, 'int');
      assert.strictEqual(objList[0].members[12].name, 'v12');
      assert.strictEqual(objList[0].members[12].type, 'int');
      assert.strictEqual(objList[0].members[13].name, 'v13');
      assert.strictEqual(objList[0].members[13].type, 'int');
      assert.strictEqual(objList[0].members[14].name, 'v14');
      assert.strictEqual(objList[0].members[14].type, 'int');
      assert.strictEqual(objList[0].members[15].name, 'v15');
      assert.strictEqual(objList[0].members[15].type, 'int');
      assert.strictEqual(objList[0].members[16].name, 'v16');
      assert.strictEqual(objList[0].members[16].type, 'int');
      assert.strictEqual(objList[0].members[17].name, 'v17');
      assert.strictEqual(objList[0].members[17].type, 'int');
      assert.strictEqual(objList[0].members[18].name, 'v18');
      assert.strictEqual(objList[0].members[18].type, 'int');
      assert.strictEqual(objList[0].members[19].name, 'v19');
      assert.strictEqual(objList[0].members[19].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0175 执行异常: ${String(err)}`);
    }
  });

});
