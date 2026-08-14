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

suite('Performance_C_Union_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Union_Suite part04.');

  /**
  * @tc.number c_union_0088
  * @tc.name c_union_0088
  * @tc.desc h2dts parseUnion：扩充-多 union：同文件 15 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0088', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int v0; } MU9_0;
typedef union { int v1; } MU9_1;
typedef union { int v2; } MU9_2;
typedef union { int v3; } MU9_3;
typedef union { int v4; } MU9_4;
typedef union { int v5; } MU9_5;
typedef union { int v6; } MU9_6;
typedef union { int v7; } MU9_7;
typedef union { int x8; } MU9_8;
typedef union { int v9; } MU9_9;
typedef union { int v10; } MU9_10;
typedef union { int v11; } MU9_11;
typedef union { int v12; } MU9_12;
typedef union { int v13; } MU9_13;
typedef union { int v14; } MU9_14;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 15);
      assert.strictEqual(objList[0].name, 'MU9_0');
      assert.strictEqual(objList[0].alias, 'MU9_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[1].name, 'MU9_1');
      assert.strictEqual(objList[1].alias, 'MU9_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[2].name, 'MU9_2');
      assert.strictEqual(objList[2].alias, 'MU9_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[3].name, 'MU9_3');
      assert.strictEqual(objList[3].alias, 'MU9_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[4].name, 'MU9_4');
      assert.strictEqual(objList[4].alias, 'MU9_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[5].name, 'MU9_5');
      assert.strictEqual(objList[5].alias, 'MU9_5');
      assert.strictEqual(objList[5].members.length, 1);
      assert.strictEqual(objList[5].members[0].name, 'v5');
      assert.strictEqual(objList[5].members[0].type, 'int');
      assert.strictEqual(objList[6].name, 'MU9_6');
      assert.strictEqual(objList[6].alias, 'MU9_6');
      assert.strictEqual(objList[6].members.length, 1);
      assert.strictEqual(objList[6].members[0].name, 'v6');
      assert.strictEqual(objList[6].members[0].type, 'int');
      assert.strictEqual(objList[7].name, 'MU9_7');
      assert.strictEqual(objList[7].alias, 'MU9_7');
      assert.strictEqual(objList[7].members.length, 1);
      assert.strictEqual(objList[7].members[0].name, 'v7');
      assert.strictEqual(objList[7].members[0].type, 'int');
      assert.strictEqual(objList[8].name, 'MU9_8');
      assert.strictEqual(objList[8].alias, 'MU9_8');
      assert.strictEqual(objList[8].members.length, 1);
      assert.strictEqual(objList[8].members[0].name, 'x8');
      assert.strictEqual(objList[8].members[0].type, 'int');
      assert.strictEqual(objList[9].name, 'MU9_9');
      assert.strictEqual(objList[9].alias, 'MU9_9');
      assert.strictEqual(objList[9].members.length, 1);
      assert.strictEqual(objList[9].members[0].name, 'v9');
      assert.strictEqual(objList[9].members[0].type, 'int');
      assert.strictEqual(objList[10].name, 'MU9_10');
      assert.strictEqual(objList[10].alias, 'MU9_10');
      assert.strictEqual(objList[10].members.length, 1);
      assert.strictEqual(objList[10].members[0].name, 'v10');
      assert.strictEqual(objList[10].members[0].type, 'int');
      assert.strictEqual(objList[11].name, 'MU9_11');
      assert.strictEqual(objList[11].alias, 'MU9_11');
      assert.strictEqual(objList[11].members.length, 1);
      assert.strictEqual(objList[11].members[0].name, 'v11');
      assert.strictEqual(objList[11].members[0].type, 'int');
      assert.strictEqual(objList[12].name, 'MU9_12');
      assert.strictEqual(objList[12].alias, 'MU9_12');
      assert.strictEqual(objList[12].members.length, 1);
      assert.strictEqual(objList[12].members[0].name, 'v12');
      assert.strictEqual(objList[12].members[0].type, 'int');
      assert.strictEqual(objList[13].name, 'MU9_13');
      assert.strictEqual(objList[13].alias, 'MU9_13');
      assert.strictEqual(objList[13].members.length, 1);
      assert.strictEqual(objList[13].members[0].name, 'v13');
      assert.strictEqual(objList[13].members[0].type, 'int');
      assert.strictEqual(objList[14].name, 'MU9_14');
      assert.strictEqual(objList[14].alias, 'MU9_14');
      assert.strictEqual(objList[14].members.length, 1);
      assert.strictEqual(objList[14].members[0].name, 'v14');
      assert.strictEqual(objList[14].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0088 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0089
  * @tc.name c_union_0089
  * @tc.desc h2dts parseUnion：扩充-namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0089', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`namespace nsU1 {
typedef union { int a; double b; } InnerU1;
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'InnerU1');
      assert.strictEqual(objList[0].alias, 'InnerU1');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0089 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0090
  * @tc.name c_union_0090
  * @tc.desc h2dts parseUnion：扩充-嵌套 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0090', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`namespace oU2 {
namespace iU2 {
typedef union { int a; } DeepU2;
}
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'DeepU2');
      assert.strictEqual(objList[0].alias, 'DeepU2');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0091
  * @tc.name c_union_0091
  * @tc.desc h2dts parseUnion：扩充-数组成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0091', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a[4]; char b[8]; } ArrU3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ArrU3');
      assert.strictEqual(objList[0].alias, 'ArrU3');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0092
  * @tc.name c_union_0092
  * @tc.desc h2dts parseUnion：扩充-指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0092', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int* p; double* q; char* r; } PtrU4;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'PtrU4');
      assert.strictEqual(objList[0].alias, 'PtrU4');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'p');
      assert.strictEqual(objList[0].members[0].type, 'int*');
      assert.strictEqual(objList[0].members[1].name, 'q');
      assert.strictEqual(objList[0].members[1].type, 'double*');
      assert.strictEqual(objList[0].members[2].name, 'r');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0093
  * @tc.name c_union_0093
  * @tc.desc h2dts parseUnion：扩充-容器指针 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0093', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { std::vector<int>* v; std::map<std::string, int>* m; } ContU5;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ContU5');
      assert.strictEqual(objList[0].alias, 'ContU5');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::vector<int>* v');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::map<std::string, int>* m');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0094
  * @tc.name c_union_0094
  * @tc.desc h2dts parseUnion：扩充-混合大成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0094', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int i;
    long l;
    long long ll;
    float f;
    double d;
    long double ld;
    bool b;
    char c;
    short s;
    unsigned int ui;
} BigU6;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'BigU6');
      assert.strictEqual(objList[0].alias, 'BigU6');
      assert.strictEqual(objList[0].members.length, 10);
      assert.strictEqual(objList[0].members[0].name, 'i');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'l');
      assert.strictEqual(objList[0].members[1].type, 'long');
      assert.strictEqual(objList[0].members[2].name, 'll');
      assert.strictEqual(objList[0].members[2].type, 'long long');
      assert.strictEqual(objList[0].members[3].name, 'f');
      assert.strictEqual(objList[0].members[3].type, 'float');
      assert.strictEqual(objList[0].members[4].name, 'd');
      assert.strictEqual(objList[0].members[4].type, 'double');
      assert.strictEqual(objList[0].members[5].name, 'ld');
      assert.strictEqual(objList[0].members[5].type, 'long double');
      assert.strictEqual(objList[0].members[6].name, 'b');
      assert.strictEqual(objList[0].members[6].type, 'bool');
      assert.strictEqual(objList[0].members[7].name, 'c');
      assert.strictEqual(objList[0].members[7].type, 'char');
      assert.strictEqual(objList[0].members[8].name, 's');
      assert.strictEqual(objList[0].members[8].type, 'short');
      assert.strictEqual(objList[0].members[9].name, 'ui');
      assert.strictEqual(objList[0].members[9].type, 'unsigned int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0095
  * @tc.name c_union_0095
  * @tc.desc h2dts parseUnion：扩充-单成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0095', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int only; } SingleU7;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'SingleU7');
      assert.strictEqual(objList[0].alias, 'SingleU7');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'only');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0095 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0096
  * @tc.name c_union_0096
  * @tc.desc h2dts parseUnion：扩充-匿名别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0096', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a; } AnonU8;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'AnonU8');
      assert.strictEqual(objList[0].alias, 'AnonU8');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0096 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0097
  * @tc.name c_union_0097
  * @tc.desc h2dts parseUnion：扩充-注释 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0097', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    // 注释
    int a; /* 块注释 */
    double b;
} ComU9;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ComU9');
      assert.strictEqual(objList[0].alias, 'ComU9');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0097 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0098
  * @tc.name c_union_0098
  * @tc.desc h2dts parseUnion：扩充-多类型 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0098', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int i; std::string* s; char c[16]; } MixU10;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'MixU10');
      assert.strictEqual(objList[0].alias, 'MixU10');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'i');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's');
      assert.strictEqual(objList[0].members[1].type, 'string*');
      assert.strictEqual(objList[0].members[2].name, 'c');
      assert.strictEqual(objList[0].members[2].type, 'char');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0098 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0099
  * @tc.name c_union_0099
  * @tc.desc h2dts parseUnion：扩充-两成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0099', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a; int b; } TwoU11;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'TwoU11');
      assert.strictEqual(objList[0].alias, 'TwoU11');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0099 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0099 执行异常: ${String(err)}`);
    }
  });

});
