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
  vscode.window.showInformationMessage('Start Performance_C_Struct_Suite part04.');

  /**
  * @tc.number c_struct_0103
  * @tc.name c_struct_0103
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0103', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF002 {
    int v;
    unsigned int m0();
    size_t m1();
    wchar_t m2();
    void m3();
} StF002;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF002');
      assert.strictEqual(objList[0].alias, 'StF002');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'unsigned int');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'size_t');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'wchar_t');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0103 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0104
  * @tc.name c_struct_0104
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0104', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF003 {
    int v;
    int8_t m0();
    uint64_t m1();
    long double m2();
    int m3();
} StF003;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF003');
      assert.strictEqual(objList[0].alias, 'StF003');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'int8_t');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'uint64_t');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'long double');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0104 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0105
  * @tc.name c_struct_0105
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0105', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF004 {
    int v;
    char m0();
    short m1();
    long m2();
    long long m3();
} StF004;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF004');
      assert.strictEqual(objList[0].alias, 'StF004');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'char');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'short');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'long');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'long long');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0106
  * @tc.name c_struct_0106
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0106', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF005 {
    int v;
    float m0();
    double m1();
    bool m2();
    unsigned int m3();
} StF005;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF005');
      assert.strictEqual(objList[0].alias, 'StF005');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'float');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'double');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'bool');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'unsigned int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0107
  * @tc.name c_struct_0107
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0107', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF006 {
    int v;
    size_t m0();
    wchar_t m1();
    void m2();
    int8_t m3();
} StF006;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF006');
      assert.strictEqual(objList[0].alias, 'StF006');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'size_t');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'wchar_t');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'void');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'int8_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0108
  * @tc.name c_struct_0108
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0108', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF007 {
    int v;
    uint64_t m0();
    long double m1();
    int m2();
    char m3();
} StF007;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF007');
      assert.strictEqual(objList[0].alias, 'StF007');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'uint64_t');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'long double');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'int');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'char');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0109
  * @tc.name c_struct_0109
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0109', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF008 {
    int v;
    short m0();
    long m1();
    long long m2();
    float m3();
} StF008;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF008');
      assert.strictEqual(objList[0].alias, 'StF008');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'short');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'long');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'long long');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'float');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0110
  * @tc.name c_struct_0110
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0110', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF009 {
    int v;
    double m0();
    bool m1();
    unsigned int m2();
    size_t m3();
} StF009;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF009');
      assert.strictEqual(objList[0].alias, 'StF009');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'double');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'bool');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'unsigned int');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'size_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0111
  * @tc.name c_struct_0111
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0111', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF010 {
    int v;
    wchar_t m0();
    void m1();
    int8_t m2();
    uint64_t m3();
} StF010;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF010');
      assert.strictEqual(objList[0].alias, 'StF010');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'wchar_t');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'void');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'int8_t');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'uint64_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0112
  * @tc.name c_struct_0112
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0112', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF011 {
    int v;
    long double m0();
    int m1();
    char m2();
    short m3();
} StF011;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF011');
      assert.strictEqual(objList[0].alias, 'StF011');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'long double');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'int');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'char');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'short');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0113
  * @tc.name c_struct_0113
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0113', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF012 {
    int v;
    long m0();
    long long m1();
    float m2();
    double m3();
} StF012;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF012');
      assert.strictEqual(objList[0].alias, 'StF012');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'long');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'long long');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'float');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0114
  * @tc.name c_struct_0114
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0114', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF013 {
    int v;
    bool m0();
    unsigned int m1();
    size_t m2();
    wchar_t m3();
} StF013;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF013');
      assert.strictEqual(objList[0].alias, 'StF013');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'bool');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'unsigned int');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'size_t');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'wchar_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0115
  * @tc.name c_struct_0115
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0115', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF014 {
    int v;
    void m0();
    int8_t m1();
    uint64_t m2();
    long double m3();
} StF014;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF014');
      assert.strictEqual(objList[0].alias, 'StF014');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'void');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'int8_t');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'uint64_t');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'long double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0116
  * @tc.name c_struct_0116
  * @tc.desc h2dts parseStruct：扩充-规模：5 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0116', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StN005 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
} StN005;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StN005');
      assert.strictEqual(objList[0].alias, 'StN005');
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0].name, 'p0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'p1');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'p2');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'p3');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.strictEqual(objList[0].members[4].name, 'p4');
      assert.strictEqual(objList[0].members[4].type, 'long long');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0117
  * @tc.name c_struct_0117
  * @tc.desc h2dts parseStruct：扩充-规模：10 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0117', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StN010 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
} StN010;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StN010');
      assert.strictEqual(objList[0].alias, 'StN010');
      assert.strictEqual(objList[0].members.length, 10);
      assert.strictEqual(objList[0].members[0].name, 'p0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'p1');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'p2');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'p3');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.strictEqual(objList[0].members[4].name, 'p4');
      assert.strictEqual(objList[0].members[4].type, 'long long');
      assert.strictEqual(objList[0].members[5].name, 'p5');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].members[6].name, 'p6');
      assert.strictEqual(objList[0].members[6].type, 'double');
      assert.strictEqual(objList[0].members[7].name, 'p7');
      assert.strictEqual(objList[0].members[7].type, 'bool');
      assert.strictEqual(objList[0].members[8].name, 'p8');
      assert.strictEqual(objList[0].members[8].type, 'unsigned int');
      assert.strictEqual(objList[0].members[9].name, 'p9');
      assert.strictEqual(objList[0].members[9].type, 'unsigned char');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0118
  * @tc.name c_struct_0118
  * @tc.desc h2dts parseStruct：扩充-规模：15 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0118', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StN015 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
} StN015;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StN015');
      assert.strictEqual(objList[0].alias, 'StN015');
      assert.strictEqual(objList[0].members.length, 15);
      assert.strictEqual(objList[0].members[0].name, 'p0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'p1');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'p2');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'p3');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.strictEqual(objList[0].members[4].name, 'p4');
      assert.strictEqual(objList[0].members[4].type, 'long long');
      assert.strictEqual(objList[0].members[5].name, 'p5');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].members[6].name, 'p6');
      assert.strictEqual(objList[0].members[6].type, 'double');
      assert.strictEqual(objList[0].members[7].name, 'p7');
      assert.strictEqual(objList[0].members[7].type, 'bool');
      assert.strictEqual(objList[0].members[8].name, 'p8');
      assert.strictEqual(objList[0].members[8].type, 'unsigned int');
      assert.strictEqual(objList[0].members[9].name, 'p9');
      assert.strictEqual(objList[0].members[9].type, 'unsigned char');
      assert.strictEqual(objList[0].members[10].name, 'p10');
      assert.strictEqual(objList[0].members[10].type, 'unsigned short');
      assert.strictEqual(objList[0].members[11].name, 'p11');
      assert.strictEqual(objList[0].members[11].type, 'unsigned long');
      assert.strictEqual(objList[0].members[12].name, 'p12');
      assert.strictEqual(objList[0].members[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[13].name, 'p13');
      assert.strictEqual(objList[0].members[13].type, 'signed char');
      assert.strictEqual(objList[0].members[14].name, 'p14');
      assert.strictEqual(objList[0].members[14].type, 'signed short');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0118 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0119
  * @tc.name c_struct_0119
  * @tc.desc h2dts parseStruct：扩充-规模：20 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0119', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StN020 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
} StN020;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StN020');
      assert.strictEqual(objList[0].alias, 'StN020');
      assert.strictEqual(objList[0].members.length, 20);
      assert.strictEqual(objList[0].members[0].name, 'p0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'p1');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'p2');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'p3');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.strictEqual(objList[0].members[4].name, 'p4');
      assert.strictEqual(objList[0].members[4].type, 'long long');
      assert.strictEqual(objList[0].members[5].name, 'p5');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].members[6].name, 'p6');
      assert.strictEqual(objList[0].members[6].type, 'double');
      assert.strictEqual(objList[0].members[7].name, 'p7');
      assert.strictEqual(objList[0].members[7].type, 'bool');
      assert.strictEqual(objList[0].members[8].name, 'p8');
      assert.strictEqual(objList[0].members[8].type, 'unsigned int');
      assert.strictEqual(objList[0].members[9].name, 'p9');
      assert.strictEqual(objList[0].members[9].type, 'unsigned char');
      assert.strictEqual(objList[0].members[10].name, 'p10');
      assert.strictEqual(objList[0].members[10].type, 'unsigned short');
      assert.strictEqual(objList[0].members[11].name, 'p11');
      assert.strictEqual(objList[0].members[11].type, 'unsigned long');
      assert.strictEqual(objList[0].members[12].name, 'p12');
      assert.strictEqual(objList[0].members[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[13].name, 'p13');
      assert.strictEqual(objList[0].members[13].type, 'signed char');
      assert.strictEqual(objList[0].members[14].name, 'p14');
      assert.strictEqual(objList[0].members[14].type, 'signed short');
      assert.strictEqual(objList[0].members[15].name, 'p15');
      assert.strictEqual(objList[0].members[15].type, 'signed long');
      assert.strictEqual(objList[0].members[16].name, 'p16');
      assert.strictEqual(objList[0].members[16].type, 'wchar_t');
      assert.strictEqual(objList[0].members[17].name, 'p17');
      assert.strictEqual(objList[0].members[17].type, 'char16_t');
      assert.strictEqual(objList[0].members[18].name, 'p18');
      assert.strictEqual(objList[0].members[18].type, 'char32_t');
      assert.strictEqual(objList[0].members[19].name, 'p19');
      assert.strictEqual(objList[0].members[19].type, 'size_t');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0119 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0119 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0120
  * @tc.name c_struct_0120
  * @tc.desc h2dts parseStruct：扩充-规模：25 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0120', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StN025 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
} StN025;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StN025');
      assert.strictEqual(objList[0].alias, 'StN025');
      assert.strictEqual(objList[0].members.length, 25);
      assert.strictEqual(objList[0].members[0].name, 'p0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'p1');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'p2');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'p3');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.strictEqual(objList[0].members[4].name, 'p4');
      assert.strictEqual(objList[0].members[4].type, 'long long');
      assert.strictEqual(objList[0].members[5].name, 'p5');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].members[6].name, 'p6');
      assert.strictEqual(objList[0].members[6].type, 'double');
      assert.strictEqual(objList[0].members[7].name, 'p7');
      assert.strictEqual(objList[0].members[7].type, 'bool');
      assert.strictEqual(objList[0].members[8].name, 'p8');
      assert.strictEqual(objList[0].members[8].type, 'unsigned int');
      assert.strictEqual(objList[0].members[9].name, 'p9');
      assert.strictEqual(objList[0].members[9].type, 'unsigned char');
      assert.strictEqual(objList[0].members[10].name, 'p10');
      assert.strictEqual(objList[0].members[10].type, 'unsigned short');
      assert.strictEqual(objList[0].members[11].name, 'p11');
      assert.strictEqual(objList[0].members[11].type, 'unsigned long');
      assert.strictEqual(objList[0].members[12].name, 'p12');
      assert.strictEqual(objList[0].members[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[13].name, 'p13');
      assert.strictEqual(objList[0].members[13].type, 'signed char');
      assert.strictEqual(objList[0].members[14].name, 'p14');
      assert.strictEqual(objList[0].members[14].type, 'signed short');
      assert.strictEqual(objList[0].members[15].name, 'p15');
      assert.strictEqual(objList[0].members[15].type, 'signed long');
      assert.strictEqual(objList[0].members[16].name, 'p16');
      assert.strictEqual(objList[0].members[16].type, 'wchar_t');
      assert.strictEqual(objList[0].members[17].name, 'p17');
      assert.strictEqual(objList[0].members[17].type, 'char16_t');
      assert.strictEqual(objList[0].members[18].name, 'p18');
      assert.strictEqual(objList[0].members[18].type, 'char32_t');
      assert.strictEqual(objList[0].members[19].name, 'p19');
      assert.strictEqual(objList[0].members[19].type, 'size_t');
      assert.strictEqual(objList[0].members[20].name, 'p20');
      assert.strictEqual(objList[0].members[20].type, 'int8_t');
      assert.strictEqual(objList[0].members[21].name, 'p21');
      assert.strictEqual(objList[0].members[21].type, 'int16_t');
      assert.strictEqual(objList[0].members[22].name, 'p22');
      assert.strictEqual(objList[0].members[22].type, 'int32_t');
      assert.strictEqual(objList[0].members[23].name, 'p23');
      assert.strictEqual(objList[0].members[23].type, 'int64_t');
      assert.strictEqual(objList[0].members[24].name, 'p24');
      assert.strictEqual(objList[0].members[24].type, 'uint8_t');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0120 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0121
  * @tc.name c_struct_0121
  * @tc.desc h2dts parseStruct：扩充-规模：30 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0121', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StN030 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
} StN030;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StN030');
      assert.strictEqual(objList[0].alias, 'StN030');
      assert.strictEqual(objList[0].members.length, 30);
      assert.strictEqual(objList[0].members[0].name, 'p0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'p1');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'p2');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'p3');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.strictEqual(objList[0].members[4].name, 'p4');
      assert.strictEqual(objList[0].members[4].type, 'long long');
      assert.strictEqual(objList[0].members[5].name, 'p5');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].members[6].name, 'p6');
      assert.strictEqual(objList[0].members[6].type, 'double');
      assert.strictEqual(objList[0].members[7].name, 'p7');
      assert.strictEqual(objList[0].members[7].type, 'bool');
      assert.strictEqual(objList[0].members[8].name, 'p8');
      assert.strictEqual(objList[0].members[8].type, 'unsigned int');
      assert.strictEqual(objList[0].members[9].name, 'p9');
      assert.strictEqual(objList[0].members[9].type, 'unsigned char');
      assert.strictEqual(objList[0].members[10].name, 'p10');
      assert.strictEqual(objList[0].members[10].type, 'unsigned short');
      assert.strictEqual(objList[0].members[11].name, 'p11');
      assert.strictEqual(objList[0].members[11].type, 'unsigned long');
      assert.strictEqual(objList[0].members[12].name, 'p12');
      assert.strictEqual(objList[0].members[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[13].name, 'p13');
      assert.strictEqual(objList[0].members[13].type, 'signed char');
      assert.strictEqual(objList[0].members[14].name, 'p14');
      assert.strictEqual(objList[0].members[14].type, 'signed short');
      assert.strictEqual(objList[0].members[15].name, 'p15');
      assert.strictEqual(objList[0].members[15].type, 'signed long');
      assert.strictEqual(objList[0].members[16].name, 'p16');
      assert.strictEqual(objList[0].members[16].type, 'wchar_t');
      assert.strictEqual(objList[0].members[17].name, 'p17');
      assert.strictEqual(objList[0].members[17].type, 'char16_t');
      assert.strictEqual(objList[0].members[18].name, 'p18');
      assert.strictEqual(objList[0].members[18].type, 'char32_t');
      assert.strictEqual(objList[0].members[19].name, 'p19');
      assert.strictEqual(objList[0].members[19].type, 'size_t');
      assert.strictEqual(objList[0].members[20].name, 'p20');
      assert.strictEqual(objList[0].members[20].type, 'int8_t');
      assert.strictEqual(objList[0].members[21].name, 'p21');
      assert.strictEqual(objList[0].members[21].type, 'int16_t');
      assert.strictEqual(objList[0].members[22].name, 'p22');
      assert.strictEqual(objList[0].members[22].type, 'int32_t');
      assert.strictEqual(objList[0].members[23].name, 'p23');
      assert.strictEqual(objList[0].members[23].type, 'int64_t');
      assert.strictEqual(objList[0].members[24].name, 'p24');
      assert.strictEqual(objList[0].members[24].type, 'uint8_t');
      assert.strictEqual(objList[0].members[25].name, 'p25');
      assert.strictEqual(objList[0].members[25].type, 'uint16_t');
      assert.strictEqual(objList[0].members[26].name, 'p26');
      assert.strictEqual(objList[0].members[26].type, 'uint32_t');
      assert.strictEqual(objList[0].members[27].name, 'p27');
      assert.strictEqual(objList[0].members[27].type, 'uint64_t');
      assert.strictEqual(objList[0].members[28].name, 'p28');
      assert.strictEqual(objList[0].members[28].type, 'std::string');
      assert.strictEqual(objList[0].members[29].name, 'p29');
      assert.strictEqual(objList[0].members[29].type, 'string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0121 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0122
  * @tc.name c_struct_0122
  * @tc.desc h2dts parseStruct：扩充-规模：35 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0122', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StN035 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
    std::wstring p30;
    long double p31;
    void p32;
    std::vector<int> p33;
    std::vector<std::string> p34;
} StN035;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StN035');
      assert.strictEqual(objList[0].alias, 'StN035');
      assert.strictEqual(objList[0].members.length, 33);
      assert.strictEqual(objList[0].members[0].name, 'p0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'p1');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'p2');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'p3');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.strictEqual(objList[0].members[4].name, 'p4');
      assert.strictEqual(objList[0].members[4].type, 'long long');
      assert.strictEqual(objList[0].members[5].name, 'p5');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].members[6].name, 'p6');
      assert.strictEqual(objList[0].members[6].type, 'double');
      assert.strictEqual(objList[0].members[7].name, 'p7');
      assert.strictEqual(objList[0].members[7].type, 'bool');
      assert.strictEqual(objList[0].members[8].name, 'p8');
      assert.strictEqual(objList[0].members[8].type, 'unsigned int');
      assert.strictEqual(objList[0].members[9].name, 'p9');
      assert.strictEqual(objList[0].members[9].type, 'unsigned char');
      assert.strictEqual(objList[0].members[10].name, 'p10');
      assert.strictEqual(objList[0].members[10].type, 'unsigned short');
      assert.strictEqual(objList[0].members[11].name, 'p11');
      assert.strictEqual(objList[0].members[11].type, 'unsigned long');
      assert.strictEqual(objList[0].members[12].name, 'p12');
      assert.strictEqual(objList[0].members[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[13].name, 'p13');
      assert.strictEqual(objList[0].members[13].type, 'signed char');
      assert.strictEqual(objList[0].members[14].name, 'p14');
      assert.strictEqual(objList[0].members[14].type, 'signed short');
      assert.strictEqual(objList[0].members[15].name, 'p15');
      assert.strictEqual(objList[0].members[15].type, 'signed long');
      assert.strictEqual(objList[0].members[16].name, 'p16');
      assert.strictEqual(objList[0].members[16].type, 'wchar_t');
      assert.strictEqual(objList[0].members[17].name, 'p17');
      assert.strictEqual(objList[0].members[17].type, 'char16_t');
      assert.strictEqual(objList[0].members[18].name, 'p18');
      assert.strictEqual(objList[0].members[18].type, 'char32_t');
      assert.strictEqual(objList[0].members[19].name, 'p19');
      assert.strictEqual(objList[0].members[19].type, 'size_t');
      assert.strictEqual(objList[0].members[20].name, 'p20');
      assert.strictEqual(objList[0].members[20].type, 'int8_t');
      assert.strictEqual(objList[0].members[21].name, 'p21');
      assert.strictEqual(objList[0].members[21].type, 'int16_t');
      assert.strictEqual(objList[0].members[22].name, 'p22');
      assert.strictEqual(objList[0].members[22].type, 'int32_t');
      assert.strictEqual(objList[0].members[23].name, 'p23');
      assert.strictEqual(objList[0].members[23].type, 'int64_t');
      assert.strictEqual(objList[0].members[24].name, 'p24');
      assert.strictEqual(objList[0].members[24].type, 'uint8_t');
      assert.strictEqual(objList[0].members[25].name, 'p25');
      assert.strictEqual(objList[0].members[25].type, 'uint16_t');
      assert.strictEqual(objList[0].members[26].name, 'p26');
      assert.strictEqual(objList[0].members[26].type, 'uint32_t');
      assert.strictEqual(objList[0].members[27].name, 'p27');
      assert.strictEqual(objList[0].members[27].type, 'uint64_t');
      assert.strictEqual(objList[0].members[28].name, 'p28');
      assert.strictEqual(objList[0].members[28].type, 'std::string');
      assert.strictEqual(objList[0].members[29].name, 'p29');
      assert.strictEqual(objList[0].members[29].type, 'string');
      assert.strictEqual(objList[0].members[30].name, 'p30');
      assert.strictEqual(objList[0].members[30].type, 'std::wstring');
      assert.strictEqual(objList[0].members[31].name, 'p31');
      assert.strictEqual(objList[0].members[31].type, 'long double');
      assert.strictEqual(objList[0].members[32].name, 'p32');
      assert.strictEqual(objList[0].members[32].type, 'void');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0123
  * @tc.name c_struct_0123
  * @tc.desc h2dts parseStruct：扩充-规模：40 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0123', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StN040 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
    std::wstring p30;
    long double p31;
    void p32;
    std::vector<int> p33;
    std::vector<std::string> p34;
    std::vector<double> p35;
    std::vector<bool> p36;
    std::map<std::string,int> p37;
    std::map<int,std::string> p38;
    std::set<int> p39;
} StN040;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StN040');
      assert.strictEqual(objList[0].alias, 'StN040');
      assert.strictEqual(objList[0].members.length, 33);
      assert.strictEqual(objList[0].members[0].name, 'p0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'p1');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'p2');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'p3');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.strictEqual(objList[0].members[4].name, 'p4');
      assert.strictEqual(objList[0].members[4].type, 'long long');
      assert.strictEqual(objList[0].members[5].name, 'p5');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].members[6].name, 'p6');
      assert.strictEqual(objList[0].members[6].type, 'double');
      assert.strictEqual(objList[0].members[7].name, 'p7');
      assert.strictEqual(objList[0].members[7].type, 'bool');
      assert.strictEqual(objList[0].members[8].name, 'p8');
      assert.strictEqual(objList[0].members[8].type, 'unsigned int');
      assert.strictEqual(objList[0].members[9].name, 'p9');
      assert.strictEqual(objList[0].members[9].type, 'unsigned char');
      assert.strictEqual(objList[0].members[10].name, 'p10');
      assert.strictEqual(objList[0].members[10].type, 'unsigned short');
      assert.strictEqual(objList[0].members[11].name, 'p11');
      assert.strictEqual(objList[0].members[11].type, 'unsigned long');
      assert.strictEqual(objList[0].members[12].name, 'p12');
      assert.strictEqual(objList[0].members[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[13].name, 'p13');
      assert.strictEqual(objList[0].members[13].type, 'signed char');
      assert.strictEqual(objList[0].members[14].name, 'p14');
      assert.strictEqual(objList[0].members[14].type, 'signed short');
      assert.strictEqual(objList[0].members[15].name, 'p15');
      assert.strictEqual(objList[0].members[15].type, 'signed long');
      assert.strictEqual(objList[0].members[16].name, 'p16');
      assert.strictEqual(objList[0].members[16].type, 'wchar_t');
      assert.strictEqual(objList[0].members[17].name, 'p17');
      assert.strictEqual(objList[0].members[17].type, 'char16_t');
      assert.strictEqual(objList[0].members[18].name, 'p18');
      assert.strictEqual(objList[0].members[18].type, 'char32_t');
      assert.strictEqual(objList[0].members[19].name, 'p19');
      assert.strictEqual(objList[0].members[19].type, 'size_t');
      assert.strictEqual(objList[0].members[20].name, 'p20');
      assert.strictEqual(objList[0].members[20].type, 'int8_t');
      assert.strictEqual(objList[0].members[21].name, 'p21');
      assert.strictEqual(objList[0].members[21].type, 'int16_t');
      assert.strictEqual(objList[0].members[22].name, 'p22');
      assert.strictEqual(objList[0].members[22].type, 'int32_t');
      assert.strictEqual(objList[0].members[23].name, 'p23');
      assert.strictEqual(objList[0].members[23].type, 'int64_t');
      assert.strictEqual(objList[0].members[24].name, 'p24');
      assert.strictEqual(objList[0].members[24].type, 'uint8_t');
      assert.strictEqual(objList[0].members[25].name, 'p25');
      assert.strictEqual(objList[0].members[25].type, 'uint16_t');
      assert.strictEqual(objList[0].members[26].name, 'p26');
      assert.strictEqual(objList[0].members[26].type, 'uint32_t');
      assert.strictEqual(objList[0].members[27].name, 'p27');
      assert.strictEqual(objList[0].members[27].type, 'uint64_t');
      assert.strictEqual(objList[0].members[28].name, 'p28');
      assert.strictEqual(objList[0].members[28].type, 'std::string');
      assert.strictEqual(objList[0].members[29].name, 'p29');
      assert.strictEqual(objList[0].members[29].type, 'string');
      assert.strictEqual(objList[0].members[30].name, 'p30');
      assert.strictEqual(objList[0].members[30].type, 'std::wstring');
      assert.strictEqual(objList[0].members[31].name, 'p31');
      assert.strictEqual(objList[0].members[31].type, 'long double');
      assert.strictEqual(objList[0].members[32].name, 'p32');
      assert.strictEqual(objList[0].members[32].type, 'void');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0124
  * @tc.name c_struct_0124
  * @tc.desc h2dts parseStruct：扩充-规模：45 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0124', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StN045 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
    std::wstring p30;
    long double p31;
    void p32;
    std::vector<int> p33;
    std::vector<std::string> p34;
    std::vector<double> p35;
    std::vector<bool> p36;
    std::map<std::string,int> p37;
    std::map<int,std::string> p38;
    std::set<int> p39;
    std::set<std::string> p40;
    std::list<int> p41;
    std::list<std::string> p42;
    std::deque<int> p43;
    std::deque<std::string> p44;
} StN045;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StN045');
      assert.strictEqual(objList[0].alias, 'StN045');
      assert.strictEqual(objList[0].members.length, 33);
      assert.strictEqual(objList[0].members[0].name, 'p0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'p1');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'p2');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'p3');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.strictEqual(objList[0].members[4].name, 'p4');
      assert.strictEqual(objList[0].members[4].type, 'long long');
      assert.strictEqual(objList[0].members[5].name, 'p5');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].members[6].name, 'p6');
      assert.strictEqual(objList[0].members[6].type, 'double');
      assert.strictEqual(objList[0].members[7].name, 'p7');
      assert.strictEqual(objList[0].members[7].type, 'bool');
      assert.strictEqual(objList[0].members[8].name, 'p8');
      assert.strictEqual(objList[0].members[8].type, 'unsigned int');
      assert.strictEqual(objList[0].members[9].name, 'p9');
      assert.strictEqual(objList[0].members[9].type, 'unsigned char');
      assert.strictEqual(objList[0].members[10].name, 'p10');
      assert.strictEqual(objList[0].members[10].type, 'unsigned short');
      assert.strictEqual(objList[0].members[11].name, 'p11');
      assert.strictEqual(objList[0].members[11].type, 'unsigned long');
      assert.strictEqual(objList[0].members[12].name, 'p12');
      assert.strictEqual(objList[0].members[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[13].name, 'p13');
      assert.strictEqual(objList[0].members[13].type, 'signed char');
      assert.strictEqual(objList[0].members[14].name, 'p14');
      assert.strictEqual(objList[0].members[14].type, 'signed short');
      assert.strictEqual(objList[0].members[15].name, 'p15');
      assert.strictEqual(objList[0].members[15].type, 'signed long');
      assert.strictEqual(objList[0].members[16].name, 'p16');
      assert.strictEqual(objList[0].members[16].type, 'wchar_t');
      assert.strictEqual(objList[0].members[17].name, 'p17');
      assert.strictEqual(objList[0].members[17].type, 'char16_t');
      assert.strictEqual(objList[0].members[18].name, 'p18');
      assert.strictEqual(objList[0].members[18].type, 'char32_t');
      assert.strictEqual(objList[0].members[19].name, 'p19');
      assert.strictEqual(objList[0].members[19].type, 'size_t');
      assert.strictEqual(objList[0].members[20].name, 'p20');
      assert.strictEqual(objList[0].members[20].type, 'int8_t');
      assert.strictEqual(objList[0].members[21].name, 'p21');
      assert.strictEqual(objList[0].members[21].type, 'int16_t');
      assert.strictEqual(objList[0].members[22].name, 'p22');
      assert.strictEqual(objList[0].members[22].type, 'int32_t');
      assert.strictEqual(objList[0].members[23].name, 'p23');
      assert.strictEqual(objList[0].members[23].type, 'int64_t');
      assert.strictEqual(objList[0].members[24].name, 'p24');
      assert.strictEqual(objList[0].members[24].type, 'uint8_t');
      assert.strictEqual(objList[0].members[25].name, 'p25');
      assert.strictEqual(objList[0].members[25].type, 'uint16_t');
      assert.strictEqual(objList[0].members[26].name, 'p26');
      assert.strictEqual(objList[0].members[26].type, 'uint32_t');
      assert.strictEqual(objList[0].members[27].name, 'p27');
      assert.strictEqual(objList[0].members[27].type, 'uint64_t');
      assert.strictEqual(objList[0].members[28].name, 'p28');
      assert.strictEqual(objList[0].members[28].type, 'std::string');
      assert.strictEqual(objList[0].members[29].name, 'p29');
      assert.strictEqual(objList[0].members[29].type, 'string');
      assert.strictEqual(objList[0].members[30].name, 'p30');
      assert.strictEqual(objList[0].members[30].type, 'std::wstring');
      assert.strictEqual(objList[0].members[31].name, 'p31');
      assert.strictEqual(objList[0].members[31].type, 'long double');
      assert.strictEqual(objList[0].members[32].name, 'p32');
      assert.strictEqual(objList[0].members[32].type, 'void');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0125
  * @tc.name c_struct_0125
  * @tc.desc h2dts parseStruct：扩充-规模：50 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0125', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StN050 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
    std::wstring p30;
    long double p31;
    void p32;
    std::vector<int> p33;
    std::vector<std::string> p34;
    std::vector<double> p35;
    std::vector<bool> p36;
    std::map<std::string,int> p37;
    std::map<int,std::string> p38;
    std::set<int> p39;
    std::set<std::string> p40;
    std::list<int> p41;
    std::list<std::string> p42;
    std::deque<int> p43;
    std::deque<std::string> p44;
    std::pair<int,int> p45;
    std::pair<std::string,int> p46;
    std::tuple<int,int,int> p47;
    std::tuple<std::string,int,double> p48;
    std::queue<int> p49;
} StN050;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StN050');
      assert.strictEqual(objList[0].alias, 'StN050');
      assert.strictEqual(objList[0].members.length, 33);
      assert.strictEqual(objList[0].members[0].name, 'p0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'p1');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'p2');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'p3');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.strictEqual(objList[0].members[4].name, 'p4');
      assert.strictEqual(objList[0].members[4].type, 'long long');
      assert.strictEqual(objList[0].members[5].name, 'p5');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].members[6].name, 'p6');
      assert.strictEqual(objList[0].members[6].type, 'double');
      assert.strictEqual(objList[0].members[7].name, 'p7');
      assert.strictEqual(objList[0].members[7].type, 'bool');
      assert.strictEqual(objList[0].members[8].name, 'p8');
      assert.strictEqual(objList[0].members[8].type, 'unsigned int');
      assert.strictEqual(objList[0].members[9].name, 'p9');
      assert.strictEqual(objList[0].members[9].type, 'unsigned char');
      assert.strictEqual(objList[0].members[10].name, 'p10');
      assert.strictEqual(objList[0].members[10].type, 'unsigned short');
      assert.strictEqual(objList[0].members[11].name, 'p11');
      assert.strictEqual(objList[0].members[11].type, 'unsigned long');
      assert.strictEqual(objList[0].members[12].name, 'p12');
      assert.strictEqual(objList[0].members[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[13].name, 'p13');
      assert.strictEqual(objList[0].members[13].type, 'signed char');
      assert.strictEqual(objList[0].members[14].name, 'p14');
      assert.strictEqual(objList[0].members[14].type, 'signed short');
      assert.strictEqual(objList[0].members[15].name, 'p15');
      assert.strictEqual(objList[0].members[15].type, 'signed long');
      assert.strictEqual(objList[0].members[16].name, 'p16');
      assert.strictEqual(objList[0].members[16].type, 'wchar_t');
      assert.strictEqual(objList[0].members[17].name, 'p17');
      assert.strictEqual(objList[0].members[17].type, 'char16_t');
      assert.strictEqual(objList[0].members[18].name, 'p18');
      assert.strictEqual(objList[0].members[18].type, 'char32_t');
      assert.strictEqual(objList[0].members[19].name, 'p19');
      assert.strictEqual(objList[0].members[19].type, 'size_t');
      assert.strictEqual(objList[0].members[20].name, 'p20');
      assert.strictEqual(objList[0].members[20].type, 'int8_t');
      assert.strictEqual(objList[0].members[21].name, 'p21');
      assert.strictEqual(objList[0].members[21].type, 'int16_t');
      assert.strictEqual(objList[0].members[22].name, 'p22');
      assert.strictEqual(objList[0].members[22].type, 'int32_t');
      assert.strictEqual(objList[0].members[23].name, 'p23');
      assert.strictEqual(objList[0].members[23].type, 'int64_t');
      assert.strictEqual(objList[0].members[24].name, 'p24');
      assert.strictEqual(objList[0].members[24].type, 'uint8_t');
      assert.strictEqual(objList[0].members[25].name, 'p25');
      assert.strictEqual(objList[0].members[25].type, 'uint16_t');
      assert.strictEqual(objList[0].members[26].name, 'p26');
      assert.strictEqual(objList[0].members[26].type, 'uint32_t');
      assert.strictEqual(objList[0].members[27].name, 'p27');
      assert.strictEqual(objList[0].members[27].type, 'uint64_t');
      assert.strictEqual(objList[0].members[28].name, 'p28');
      assert.strictEqual(objList[0].members[28].type, 'std::string');
      assert.strictEqual(objList[0].members[29].name, 'p29');
      assert.strictEqual(objList[0].members[29].type, 'string');
      assert.strictEqual(objList[0].members[30].name, 'p30');
      assert.strictEqual(objList[0].members[30].type, 'std::wstring');
      assert.strictEqual(objList[0].members[31].name, 'p31');
      assert.strictEqual(objList[0].members[31].type, 'long double');
      assert.strictEqual(objList[0].members[32].name, 'p32');
      assert.strictEqual(objList[0].members[32].type, 'void');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0126
  * @tc.name c_struct_0126
  * @tc.desc h2dts parseStruct：扩充-多 struct：同文件 2 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0126', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct SMulti0_0 { int v0; } SMulti0_0;
typedef struct SMulti0_1 { int v1; } SMulti0_1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 2);
      assert.strictEqual(objList[0].name, 'SMulti0_0');
      assert.strictEqual(objList[0].alias, 'SMulti0_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.strictEqual(objList[1].name, 'SMulti0_1');
      assert.strictEqual(objList[1].alias, 'SMulti0_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[1].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0127
  * @tc.name c_struct_0127
  * @tc.desc h2dts parseStruct：扩充-多 struct：同文件 3 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0127', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct SMulti1_0 { int v0; } SMulti1_0;
typedef struct SMulti1_1 { int v1; } SMulti1_1;
typedef struct SMulti1_2 { int v2; } SMulti1_2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 3);
      assert.strictEqual(objList[0].name, 'SMulti1_0');
      assert.strictEqual(objList[0].alias, 'SMulti1_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.strictEqual(objList[1].name, 'SMulti1_1');
      assert.strictEqual(objList[1].alias, 'SMulti1_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[1].functions.length, 0);
      assert.strictEqual(objList[2].name, 'SMulti1_2');
      assert.strictEqual(objList[2].alias, 'SMulti1_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[2].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0128
  * @tc.name c_struct_0128
  * @tc.desc h2dts parseStruct：扩充-多 struct：同文件 4 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0128', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct SMulti2_0 { int v0; } SMulti2_0;
typedef struct SMulti2_1 { int v1; } SMulti2_1;
typedef struct SMulti2_2 { int v2; } SMulti2_2;
typedef struct SMulti2_3 { int v3; } SMulti2_3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 4);
      assert.strictEqual(objList[0].name, 'SMulti2_0');
      assert.strictEqual(objList[0].alias, 'SMulti2_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.strictEqual(objList[1].name, 'SMulti2_1');
      assert.strictEqual(objList[1].alias, 'SMulti2_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[1].functions.length, 0);
      assert.strictEqual(objList[2].name, 'SMulti2_2');
      assert.strictEqual(objList[2].alias, 'SMulti2_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[2].functions.length, 0);
      assert.strictEqual(objList[3].name, 'SMulti2_3');
      assert.strictEqual(objList[3].alias, 'SMulti2_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[3].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0129
  * @tc.name c_struct_0129
  * @tc.desc h2dts parseStruct：扩充-多 struct：同文件 5 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0129', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct SMulti3_0 { int v0; } SMulti3_0;
typedef struct SMulti3_1 { int v1; } SMulti3_1;
typedef struct SMulti3_2 { int v2; } SMulti3_2;
typedef struct SMulti3_3 { int v3; } SMulti3_3;
typedef struct SMulti3_4 { int v4; } SMulti3_4;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 5);
      assert.strictEqual(objList[0].name, 'SMulti3_0');
      assert.strictEqual(objList[0].alias, 'SMulti3_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.strictEqual(objList[1].name, 'SMulti3_1');
      assert.strictEqual(objList[1].alias, 'SMulti3_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[1].functions.length, 0);
      assert.strictEqual(objList[2].name, 'SMulti3_2');
      assert.strictEqual(objList[2].alias, 'SMulti3_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[2].functions.length, 0);
      assert.strictEqual(objList[3].name, 'SMulti3_3');
      assert.strictEqual(objList[3].alias, 'SMulti3_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[3].functions.length, 0);
      assert.strictEqual(objList[4].name, 'SMulti3_4');
      assert.strictEqual(objList[4].alias, 'SMulti3_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[4].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0129 执行异常: ${String(err)}`);
    }
  });

});
