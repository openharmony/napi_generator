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
import { GenInfo, ParseObj } from '../../../gen/datatype';

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

suite('Performance_H2DTSCPP_Gen_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part12.');

  /**
  * @tc.number : h2dtscpp_gen_0282
  * @tc.name : h2dtscpp_gen_0282
  * @tc.desc : h2dtscpp transParseObj：扩充-混合场景-class 单声明转换 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0282', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class Mix01 { int x; std::string name; void run(); }`),
        unions: parseUnion(`class Mix01 { int x; std::string name; void run(); }`),
        structs: parseStruct(`class Mix01 { int x; std::string name; void run(); }`),
        classes: parseClass(`class Mix01 { int x; std::string name; void run(); }`),
        funcs: parseFunction(`class Mix01 { int x; std::string name; void run(); }`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0282 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0282 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0283
  * @tc.name : h2dtscpp_gen_0283
  * @tc.desc : h2dtscpp transParseObj：扩充-混合场景-struct 单声明转换 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0283', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct Mix02 { int a; float b; int add(int x); } Mix02;`),
        unions: parseUnion(`typedef struct Mix02 { int a; float b; int add(int x); } Mix02;`),
        structs: parseStruct(`typedef struct Mix02 { int a; float b; int add(int x); } Mix02;`),
        classes: parseClass(`typedef struct Mix02 { int a; float b; int add(int x); } Mix02;`),
        funcs: parseFunction(`typedef struct Mix02 { int a; float b; int add(int x); } Mix02;`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0283 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0283 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0284
  * @tc.name : h2dtscpp_gen_0284
  * @tc.desc : h2dtscpp transParseObj：扩充-混合场景-enum+class 混合 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0284', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { MIX_A, MIX_B } Mix03;
class Mix04 { int v; };`),
        unions: parseUnion(`typedef enum { MIX_A, MIX_B } Mix03;
class Mix04 { int v; };`),
        structs: parseStruct(`typedef enum { MIX_A, MIX_B } Mix03;
class Mix04 { int v; };`),
        classes: parseClass(`typedef enum { MIX_A, MIX_B } Mix03;
class Mix04 { int v; };`),
        funcs: parseFunction(`typedef enum { MIX_A, MIX_B } Mix03;
class Mix04 { int v; };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.enums.length, 1);
      assert.strictEqual(transResult.classes.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0284 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0284 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0285
  * @tc.name : h2dtscpp_gen_0285
  * @tc.desc : h2dtscpp transParseObj：扩充-混合场景-union+func 混合 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0285', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef union { int i; float f; } Mix05;
void mixFn(int x);`),
        unions: parseUnion(`typedef union { int i; float f; } Mix05;
void mixFn(int x);`),
        structs: parseStruct(`typedef union { int i; float f; } Mix05;
void mixFn(int x);`),
        classes: parseClass(`typedef union { int i; float f; } Mix05;
void mixFn(int x);`),
        funcs: parseFunction(`typedef union { int i; float f; } Mix05;
void mixFn(int x);`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.unions.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0285 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0285 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0286
  * @tc.name : h2dtscpp_gen_0286
  * @tc.desc : h2dtscpp transParseObj：扩充-混合场景-class 容器成员转换 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0286', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class Mix06 { std::vector<int> data; std::map<std::string,int> idx; bool find(std::string k); };`),
        unions: parseUnion(`class Mix06 { std::vector<int> data; std::map<std::string,int> idx; bool find(std::string k); };`),
        structs: parseStruct(`class Mix06 { std::vector<int> data; std::map<std::string,int> idx; bool find(std::string k); };`),
        classes: parseClass(`class Mix06 { std::vector<int> data; std::map<std::string,int> idx; bool find(std::string k); };`),
        funcs: parseFunction(`class Mix06 { std::vector<int> data; std::map<std::string,int> idx; bool find(std::string k); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0286 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0286 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0287
  * @tc.name : h2dtscpp_gen_0287
  * @tc.desc : h2dtscpp transParseObj：扩充-混合场景-struct 数组成员转换 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0287', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`struct Mix07 { double values[4]; char name[32]; int sum(); };`),
        unions: parseUnion(`struct Mix07 { double values[4]; char name[32]; int sum(); };`),
        structs: parseStruct(`struct Mix07 { double values[4]; char name[32]; int sum(); };`),
        classes: parseClass(`struct Mix07 { double values[4]; char name[32]; int sum(); };`),
        funcs: parseFunction(`struct Mix07 { double values[4]; char name[32]; int sum(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0287 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0287 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0288
  * @tc.name : h2dtscpp_gen_0288
  * @tc.desc : h2dtscpp transParseObj：扩充-混合场景-多函数声明转换 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0288', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int mix08(int a, int b);
std::string mix09();
void mix10(bool flag);`),
        unions: parseUnion(`int mix08(int a, int b);
std::string mix09();
void mix10(bool flag);`),
        structs: parseStruct(`int mix08(int a, int b);
std::string mix09();
void mix10(bool flag);`),
        classes: parseClass(`int mix08(int a, int b);
std::string mix09();
void mix10(bool flag);`),
        funcs: parseFunction(`int mix08(int a, int b);
std::string mix09();
void mix10(bool flag);`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 3);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0288 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0288 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0289
  * @tc.name : h2dtscpp_gen_0289
  * @tc.desc : h2dtscpp transParseObj：扩充-混合场景-static 成员 class 转换 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0289', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class Mix11 { static int count; int id; static void reset(); };`),
        unions: parseUnion(`class Mix11 { static int count; int id; static void reset(); };`),
        structs: parseStruct(`class Mix11 { static int count; int id; static void reset(); };`),
        classes: parseClass(`class Mix11 { static int count; int id; static void reset(); };`),
        funcs: parseFunction(`class Mix11 { static int count; int id; static void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0289 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0289 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0290
  * @tc.name : h2dtscpp_gen_0290
  * @tc.desc : h2dtscpp transParseObj：扩充-混合场景-多 struct typedef 转换 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0290', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct { int x, y, z; } Mix12;
typedef struct { float u, v; } Mix13;`),
        unions: parseUnion(`typedef struct { int x, y, z; } Mix12;
typedef struct { float u, v; } Mix13;`),
        structs: parseStruct(`typedef struct { int x, y, z; } Mix12;
typedef struct { float u, v; } Mix13;`),
        classes: parseClass(`typedef struct { int x, y, z; } Mix12;
typedef struct { float u, v; } Mix13;`),
        funcs: parseFunction(`typedef struct { int x, y, z; } Mix12;
typedef struct { float u, v; } Mix13;`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.structs.length, 2);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0290 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0290 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0291
  * @tc.name : h2dtscpp_gen_0291
  * @tc.desc : h2dtscpp transParseObj：扩充-混合场景-enum 字段 class 转换 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0291', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`enum Mix14 { ON, OFF }; class Mix15 { Mix14 state; void toggle(); };`),
        unions: parseUnion(`enum Mix14 { ON, OFF }; class Mix15 { Mix14 state; void toggle(); };`),
        structs: parseStruct(`enum Mix14 { ON, OFF }; class Mix15 { Mix14 state; void toggle(); };`),
        classes: parseClass(`enum Mix14 { ON, OFF }; class Mix15 { Mix14 state; void toggle(); };`),
        funcs: parseFunction(`enum Mix14 { ON, OFF }; class Mix15 { Mix14 state; void toggle(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.enums.length, 1);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0291 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0291 执行异常: ${String(err)}`);
    }
  });
});
