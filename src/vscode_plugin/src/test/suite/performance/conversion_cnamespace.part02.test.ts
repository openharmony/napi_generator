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

suite('Performance_C_Namespace_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Namespace_Suite part02.');

  /**
  * @tc.number c_namespace_0008
  * @tc.name c_namespace_0008
  * @tc.desc h2dts parseClass：扩充-混合：namespace 0 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0008', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns000 {
const int C0 = 1;
typedef enum { A0, B0 } E0;
int fn0(int v);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0009
  * @tc.name c_namespace_0009
  * @tc.desc h2dts parseClass：扩充-混合：namespace 1 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0009', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns001 {
typedef struct S1 {
    char v;
} S1;
class K1 {
    char v;
    void run();
};
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'K1');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'char');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0010
  * @tc.name c_namespace_0010
  * @tc.desc h2dts parseClass：扩充-混合：namespace 2 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0010', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns002 {
const int MAX2 = 2;
typedef union { int a; short b; } U2;
short get2();
void set2(short v);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0011
  * @tc.name c_namespace_0011
  * @tc.desc h2dts parseClass：扩充-混合：namespace 3 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0011', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns003 {
typedef enum { X3, Y3, Z3 } E3;
typedef struct S3 { long v; } S3;
long calc3(long a, long b);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0012
  * @tc.name c_namespace_0012
  * @tc.desc h2dts parseClass：扩充-混合：namespace 0 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0012', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns004 {
const long long C4 = 1;
typedef enum { A4, B4 } E4;
long long fn4(long long v);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0013
  * @tc.name c_namespace_0013
  * @tc.desc h2dts parseClass：扩充-混合：namespace 1 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0013', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns005 {
typedef struct S5 {
    float v;
} S5;
class K5 {
    float v;
    void run();
};
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'K5');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0014
  * @tc.name c_namespace_0014
  * @tc.desc h2dts parseClass：扩充-混合：namespace 2 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0014', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns006 {
const int MAX6 = 6;
typedef union { int a; double b; } U6;
double get6();
void set6(double v);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0015
  * @tc.name c_namespace_0015
  * @tc.desc h2dts parseClass：扩充-混合：namespace 3 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0015', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns007 {
typedef enum { X7, Y7, Z7 } E7;
typedef struct S7 { bool v; } S7;
bool calc7(bool a, bool b);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0016
  * @tc.name c_namespace_0016
  * @tc.desc h2dts parseClass：扩充-混合：namespace 0 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0016', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns008 {
const unsigned int C8 = 1;
typedef enum { A8, B8 } E8;
unsigned int fn8(unsigned int v);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0017
  * @tc.name c_namespace_0017
  * @tc.desc h2dts parseClass：扩充-混合：namespace 1 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0017', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns009 {
typedef struct S9 {
    unsigned char v;
} S9;
class K9 {
    unsigned char v;
    void run();
};
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'K9');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'unsigned char');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0018
  * @tc.name c_namespace_0018
  * @tc.desc h2dts parseClass：扩充-混合：namespace 2 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0018', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns010 {
const int MAX10 = 10;
typedef union { int a; unsigned short b; } U10;
unsigned short get10();
void set10(unsigned short v);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0019
  * @tc.name c_namespace_0019
  * @tc.desc h2dts parseClass：扩充-混合：namespace 3 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0019', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns011 {
typedef enum { X11, Y11, Z11 } E11;
typedef struct S11 { unsigned long v; } S11;
unsigned long calc11(unsigned long a, unsigned long b);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0020
  * @tc.name c_namespace_0020
  * @tc.desc h2dts parseClass：扩充-混合：namespace 0 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0020', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns012 {
const unsigned long long C12 = 1;
typedef enum { A12, B12 } E12;
unsigned long long fn12(unsigned long long v);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0021
  * @tc.name c_namespace_0021
  * @tc.desc h2dts parseClass：扩充-混合：namespace 1 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0021', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns013 {
typedef struct S13 {
    signed char v;
} S13;
class K13 {
    signed char v;
    void run();
};
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'K13');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'signed char');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0022
  * @tc.name c_namespace_0022
  * @tc.desc h2dts parseClass：扩充-混合：namespace 2 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0022', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns014 {
const int MAX14 = 14;
typedef union { int a; signed short b; } U14;
signed short get14();
void set14(signed short v);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0023
  * @tc.name c_namespace_0023
  * @tc.desc h2dts parseClass：扩充-混合：namespace 3 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0023', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns015 {
typedef enum { X15, Y15, Z15 } E15;
typedef struct S15 { signed long v; } S15;
signed long calc15(signed long a, signed long b);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0024
  * @tc.name c_namespace_0024
  * @tc.desc h2dts parseClass：扩充-混合：namespace 0 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0024', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns016 {
const wchar_t C16 = 1;
typedef enum { A16, B16 } E16;
wchar_t fn16(wchar_t v);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0025
  * @tc.name c_namespace_0025
  * @tc.desc h2dts parseClass：扩充-混合：namespace 1 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0025', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns017 {
typedef struct S17 {
    char16_t v;
} S17;
class K17 {
    char16_t v;
    void run();
};
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'K17');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'char16_t');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0026
  * @tc.name c_namespace_0026
  * @tc.desc h2dts parseClass：扩充-混合：namespace 2 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0026', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns018 {
const int MAX18 = 18;
typedef union { int a; char32_t b; } U18;
char32_t get18();
void set18(char32_t v);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0027
  * @tc.name c_namespace_0027
  * @tc.desc h2dts parseClass：扩充-混合：namespace 3 型组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0027', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns019 {
typedef enum { X19, Y19, Z19 } E19;
typedef struct S19 { size_t v; } S19;
size_t calc19(size_t a, size_t b);
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0028
  * @tc.name c_namespace_0028
  * @tc.desc h2dts parseClass：扩充-嵌套：2 层 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0028', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace lv0_0 {
namespace lv1_0 {
const int V0 = 0;
typedef struct S0 { int v; } S0;
int fn0(int a);
}
}
`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0029
  * @tc.name c_namespace_0029
  * @tc.desc h2dts parseClass：扩充-嵌套：3 层 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0029', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace lv0_1 {
namespace lv1_1 {
namespace lv2_1 {
const int V1 = 1;
typedef struct S1 { int v; } S1;
int fn1(int a);
}
}
}
`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0030
  * @tc.name c_namespace_0030
  * @tc.desc h2dts parseClass：扩充-嵌套：4 层 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0030', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace lv0_2 {
namespace lv1_2 {
namespace lv2_2 {
namespace lv3_2 {
const int V2 = 2;
typedef struct S2 { int v; } S2;
int fn2(int a);
}
}
}
}
`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0031
  * @tc.name c_namespace_0031
  * @tc.desc h2dts parseClass：扩充-嵌套：2 层 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0031', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace lv0_3 {
namespace lv1_3 {
const int V3 = 3;
typedef struct S3 { int v; } S3;
int fn3(int a);
}
}
`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0032
  * @tc.name c_namespace_0032
  * @tc.desc h2dts parseClass：扩充-嵌套：3 层 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0032', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace lv0_4 {
namespace lv1_4 {
namespace lv2_4 {
const int V4 = 4;
typedef struct S4 { int v; } S4;
int fn4(int a);
}
}
}
`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0033
  * @tc.name c_namespace_0033
  * @tc.desc h2dts parseClass：扩充-嵌套：4 层 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0033', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace lv0_5 {
namespace lv1_5 {
namespace lv2_5 {
namespace lv3_5 {
const int V5 = 5;
typedef struct S5 { int v; } S5;
int fn5(int a);
}
}
}
}
`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0034
  * @tc.name c_namespace_0034
  * @tc.desc h2dts parseClass：扩充-嵌套：2 层 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0034', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace lv0_6 {
namespace lv1_6 {
const int V6 = 6;
typedef struct S6 { int v; } S6;
int fn6(int a);
}
}
`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0035
  * @tc.name c_namespace_0035
  * @tc.desc h2dts parseClass：扩充-嵌套：3 层 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0035', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace lv0_7 {
namespace lv1_7 {
namespace lv2_7 {
const int V7 = 7;
typedef struct S7 { int v; } S7;
int fn7(int a);
}
}
}
`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0036
  * @tc.name c_namespace_0036
  * @tc.desc h2dts parseClass：扩充-嵌套：4 层 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0036', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace lv0_8 {
namespace lv1_8 {
namespace lv2_8 {
namespace lv3_8 {
const int X8 = 8;
typedef struct S8 { int v; } S8;
int fn8(int a);
}
}
}
}
`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0037
  * @tc.name c_namespace_0037
  * @tc.desc h2dts parseClass：扩充-嵌套：2 层 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0037', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace lv0_9 {
namespace lv1_9 {
const int V9 = 9;
typedef struct S9 { int v; } S9;
int fn9(int a);
}
}
`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0038
  * @tc.name c_namespace_0038
  * @tc.desc h2dts parseClass：扩充-嵌套：3 层 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0038', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace lv0_10 {
namespace lv1_10 {
namespace lv2_10 {
const int V10 = 10;
typedef struct S10 { int v; } S10;
int fn10(int a);
}
}
}
`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0039
  * @tc.name c_namespace_0039
  * @tc.desc h2dts parseClass：扩充-嵌套：4 层 namespace 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_namespace_0039', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace lv0_11 {
namespace lv1_11 {
namespace lv2_11 {
namespace lv3_11 {
const int V11 = 11;
typedef struct S11 { int v; } S11;
int fn11(int a);
}
}
}
}
`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_namespace_0039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_namespace_0039 执行异常: ${String(err)}`);
    }
  });

});
