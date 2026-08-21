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

suite('Performance_H2DTSCPP_Gen_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite.');

  /**
  * @tc.number h2dtscpp_gen_0001
  * @tc.name h2dtscpp_gen_0001
  * @tc.desc h2dtscpp transParseObj：transParseObj：函数类型保持不变（C++→C++ 恒等） 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0001', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int tppAdd(int a, int b);
std::string tppGetName();`),
        unions: parseUnion(`int tppAdd(int a, int b);
std::string tppGetName();`),
        structs: parseStruct(`int tppAdd(int a, int b);
std::string tppGetName();`),
        classes: parseClass(`int tppAdd(int a, int b);
std::string tppGetName();`),
        funcs: parseFunction(`int tppAdd(int a, int b);
std::string tppGetName();`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 2);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0001 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0002
  * @tc.name h2dtscpp_gen_0002
  * @tc.desc h2dtscpp transParseObj：transParseObj：class 变量/函数转换 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0002', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class tppOTC {
    int len;
    std::string name;
    bool check();
    void reset();
};`),
        unions: parseUnion(`class tppOTC {
    int len;
    std::string name;
    bool check();
    void reset();
};`),
        structs: parseStruct(`class tppOTC {
    int len;
    std::string name;
    bool check();
    void reset();
};`),
        classes: parseClass(`class tppOTC {
    int len;
    std::string name;
    bool check();
    void reset();
};`),
        funcs: parseFunction(`class tppOTC {
    int len;
    std::string name;
    bool check();
    void reset();
};`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 2);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0002 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0003
  * @tc.name h2dtscpp_gen_0003
  * @tc.desc h2dtscpp transParseObj：transParseObj：struct 成员转换 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0003', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct tppTS {
    int a;
    double b;
    bool c;
} tppTS;`),
        unions: parseUnion(`typedef struct tppTS {
    int a;
    double b;
    bool c;
} tppTS;`),
        structs: parseStruct(`typedef struct tppTS {
    int a;
    double b;
    bool c;
} tppTS;`),
        classes: parseClass(`typedef struct tppTS {
    int a;
    double b;
    bool c;
} tppTS;`),
        funcs: parseFunction(`typedef struct tppTS {
    int a;
    double b;
    bool c;
} tppTS;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 0);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0003 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0004
  * @tc.name h2dtscpp_gen_0004
  * @tc.desc h2dtscpp transParseObj：transParseObj：enum 保留 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0004', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { TPP_A, TPP_B, TPP_C } tppE;`),
        unions: parseUnion(`typedef enum { TPP_A, TPP_B, TPP_C } tppE;`),
        structs: parseStruct(`typedef enum { TPP_A, TPP_B, TPP_C } tppE;`),
        classes: parseClass(`typedef enum { TPP_A, TPP_B, TPP_C } tppE;`),
        funcs: parseFunction(`typedef enum { TPP_A, TPP_B, TPP_C } tppE;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 0);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 1);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0004 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0005
  * @tc.name h2dtscpp_gen_0005
  * @tc.desc h2dtscpp transParseObj：transParseObj：union 成员转换 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0005', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef union { int ti; float tf; } tppU;`),
        unions: parseUnion(`typedef union { int ti; float tf; } tppU;`),
        structs: parseStruct(`typedef union { int ti; float tf; } tppU;`),
        classes: parseClass(`typedef union { int ti; float tf; } tppU;`),
        funcs: parseFunction(`typedef union { int ti; float tf; } tppU;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 0);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0005 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0006
  * @tc.name h2dtscpp_gen_0006
  * @tc.desc h2dtscpp transParseObj：transParseObj：混合 ParseObj 全量转换 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0006', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int tppAdd(int a, int b);
class tppOTC {
    int len;
    std::string name;
};
typedef struct tppTS { int a; } tppTS;
typedef enum { TPPX, TPPY } tppE;
typedef union { int ti; } tppU;`),
        unions: parseUnion(`int tppAdd(int a, int b);
class tppOTC {
    int len;
    std::string name;
};
typedef struct tppTS { int a; } tppTS;
typedef enum { TPPX, TPPY } tppE;
typedef union { int ti; } tppU;`),
        structs: parseStruct(`int tppAdd(int a, int b);
class tppOTC {
    int len;
    std::string name;
};
typedef struct tppTS { int a; } tppTS;
typedef enum { TPPX, TPPY } tppE;
typedef union { int ti; } tppU;`),
        classes: parseClass(`int tppAdd(int a, int b);
class tppOTC {
    int len;
    std::string name;
};
typedef struct tppTS { int a; } tppTS;
typedef enum { TPPX, TPPY } tppE;
typedef union { int ti; } tppU;`),
        funcs: parseFunction(`int tppAdd(int a, int b);
class tppOTC {
    int len;
    std::string name;
};
typedef struct tppTS { int a; } tppTS;
typedef enum { TPPX, TPPY } tppE;
typedef union { int ti; } tppU;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 1);
      assert.strictEqual(transResult.unions.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0006 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0007
  * @tc.name h2dtscpp_gen_0007
  * @tc.desc h2dtscpp transParseObj：transParseObj：数组/容器参数转换 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0007', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tppSetVec(std::vector<int> v);
void tppSetArr(int arr[10]);
void tppSetPtr(char* p);`),
        unions: parseUnion(`void tppSetVec(std::vector<int> v);
void tppSetArr(int arr[10]);
void tppSetPtr(char* p);`),
        structs: parseStruct(`void tppSetVec(std::vector<int> v);
void tppSetArr(int arr[10]);
void tppSetPtr(char* p);`),
        classes: parseClass(`void tppSetVec(std::vector<int> v);
void tppSetArr(int arr[10]);
void tppSetPtr(char* p);`),
        funcs: parseFunction(`void tppSetVec(std::vector<int> v);
void tppSetArr(int arr[10]);
void tppSetPtr(char* p);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 3);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0007 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0008
  * @tc.name h2dtscpp_gen_0008
  * @tc.desc h2dtscpp transParseObj：transParseObj：class 数组成员转换 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0008', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class tppData {
    std::vector<int> list;
    int arr[10][20];
    double ratio;
    void reset();
};`),
        unions: parseUnion(`class tppData {
    std::vector<int> list;
    int arr[10][20];
    double ratio;
    void reset();
};`),
        structs: parseStruct(`class tppData {
    std::vector<int> list;
    int arr[10][20];
    double ratio;
    void reset();
};`),
        classes: parseClass(`class tppData {
    std::vector<int> list;
    int arr[10][20];
    double ratio;
    void reset();
};`),
        funcs: parseFunction(`class tppData {
    std::vector<int> list;
    int arr[10][20];
    double ratio;
    void reset();
};`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0009
  * @tc.name h2dtscpp_gen_0009
  * @tc.desc h2dtscpp transParseObj：transParseObj：struct 多维数组成员转换 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0009', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct tppOpt {
    std::string name;
    double data[5][5];
    void save();
} tppOpt;`),
        unions: parseUnion(`typedef struct tppOpt {
    std::string name;
    double data[5][5];
    void save();
} tppOpt;`),
        structs: parseStruct(`typedef struct tppOpt {
    std::string name;
    double data[5][5];
    void save();
} tppOpt;`),
        classes: parseClass(`typedef struct tppOpt {
    std::string name;
    double data[5][5];
    void save();
} tppOpt;`),
        funcs: parseFunction(`typedef struct tppOpt {
    std::string name;
    double data[5][5];
    void save();
} tppOpt;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0010
  * @tc.name h2dtscpp_gen_0010
  * @tc.desc h2dtscpp transParseObj：transParseObj：static/多返回类型转换 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0010', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`static int tppVersion();
double tppCalc(double x);
bool tppReady();`),
        unions: parseUnion(`static int tppVersion();
double tppCalc(double x);
bool tppReady();`),
        structs: parseStruct(`static int tppVersion();
double tppCalc(double x);
bool tppReady();`),
        classes: parseClass(`static int tppVersion();
double tppCalc(double x);
bool tppReady();`),
        funcs: parseFunction(`static int tppVersion();
double tppCalc(double x);
bool tppReady();`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 3);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0010 执行异常: ${String(err)}`);
    }
  });

});
