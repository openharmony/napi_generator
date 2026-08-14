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

suite('Performance_H2DTS_Gen_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite.');

  /**
  * @tc.number h2dts_gen_0001
  * @tc.name h2dts_gen_0001
  * @tc.desc h2dts gen：gen：3 函数 getDtsFunction（同步/Async/Promise 三变体） 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0001', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int genAdd(int a, int b);
double genCalc(double x, float y);
bool genCheck(std::string s);`),
        unions: parseUnion(`int genAdd(int a, int b);
double genCalc(double x, float y);
bool genCheck(std::string s);`),
        structs: parseStruct(`int genAdd(int a, int b);
double genCalc(double x, float y);
bool genCheck(std::string s);`),
        classes: parseClass(`int genAdd(int a, int b);
double genCalc(double x, float y);
bool genCheck(std::string s);`),
        funcs: parseFunction(`int genAdd(int a, int b);
double genCalc(double x, float y);
bool genCheck(std::string s);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0001 生成结果为空');
      assert.ok(result.includes('export function genAdd(a: number, b: number): number;'), 'h2dts_gen_0001 生成结果缺少片段 0: ' + 'export function genAdd(a: number, b: number): number;');
      assert.ok(result.includes('export function genAddAsync'), 'h2dts_gen_0001 生成结果缺少片段 1: ' + 'export function genAddAsync');
      assert.ok(result.includes('export function genAddPromise'), 'h2dts_gen_0001 生成结果缺少片段 2: ' + 'export function genAddPromise');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0001 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0002
  * @tc.name h2dts_gen_0002
  * @tc.desc h2dts gen：gen：getDtsFunction 多返回类型 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0002', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::string genGetName();
void genSetValue(int v);
int genGetValue();`),
        unions: parseUnion(`std::string genGetName();
void genSetValue(int v);
int genGetValue();`),
        structs: parseStruct(`std::string genGetName();
void genSetValue(int v);
int genGetValue();`),
        classes: parseClass(`std::string genGetName();
void genSetValue(int v);
int genGetValue();`),
        funcs: parseFunction(`std::string genGetName();
void genSetValue(int v);
int genGetValue();`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0002 生成结果为空');
      assert.ok(result.includes('export function genGetName(): string;'), 'h2dts_gen_0002 生成结果缺少片段 0: ' + 'export function genGetName(): string;');
      assert.ok(result.includes('export function genSetValue(v: number): void;'), 'h2dts_gen_0002 生成结果缺少片段 1: ' + 'export function genSetValue(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0002 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0003
  * @tc.name h2dts_gen_0003
  * @tc.desc h2dts gen：gen：class getDtsClasses（变量+方法三变体） 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0003', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenOTC {
    int len;
    std::string name;
    bool check();
    int add(int a, int b);
};`),
        unions: parseUnion(`class GenOTC {
    int len;
    std::string name;
    bool check();
    int add(int a, int b);
};`),
        structs: parseStruct(`class GenOTC {
    int len;
    std::string name;
    bool check();
    int add(int a, int b);
};`),
        classes: parseClass(`class GenOTC {
    int len;
    std::string name;
    bool check();
    int add(int a, int b);
};`),
        funcs: parseFunction(`class GenOTC {
    int len;
    std::string name;
    bool check();
    int add(int a, int b);
};`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0003 生成结果为空');
      assert.ok(result.includes('export class GenOTC {'), 'h2dts_gen_0003 生成结果缺少片段 0: ' + 'export class GenOTC {');
      assert.ok(result.includes('len: number;'), 'h2dts_gen_0003 生成结果缺少片段 1: ' + 'len: number;');
      assert.ok(result.includes('name: string;'), 'h2dts_gen_0003 生成结果缺少片段 2: ' + 'name: string;');
      assert.ok(result.includes('check(): boolean;'), 'h2dts_gen_0003 生成结果缺少片段 3: ' + 'check(): boolean;');
      assert.ok(result.includes('add(a: number, b: number): number;'), 'h2dts_gen_0003 生成结果缺少片段 4: ' + 'add(a: number, b: number): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0003 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0004
  * @tc.name h2dts_gen_0004
  * @tc.desc h2dts gen：gen：class 数组成员 getDtsClasses 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0004', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenData {
    int arr[10];
    std::vector<int> vec;
    double ratio;
    void reset();
};`),
        unions: parseUnion(`class GenData {
    int arr[10];
    std::vector<int> vec;
    double ratio;
    void reset();
};`),
        structs: parseStruct(`class GenData {
    int arr[10];
    std::vector<int> vec;
    double ratio;
    void reset();
};`),
        classes: parseClass(`class GenData {
    int arr[10];
    std::vector<int> vec;
    double ratio;
    void reset();
};`),
        funcs: parseFunction(`class GenData {
    int arr[10];
    std::vector<int> vec;
    double ratio;
    void reset();
};`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0004 生成结果为空');
      assert.ok(result.includes('export class GenData {'), 'h2dts_gen_0004 生成结果缺少片段 0: ' + 'export class GenData {');
      assert.ok(result.includes('arr: number;'), 'h2dts_gen_0004 生成结果缺少片段 1: ' + 'arr: number;');
      assert.ok(result.includes('vec: Array<number>;'), 'h2dts_gen_0004 生成结果缺少片段 2: ' + 'vec: Array<number>;');
      assert.ok(result.includes('reset(): void;'), 'h2dts_gen_0004 生成结果缺少片段 3: ' + 'reset(): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0004 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0005
  * @tc.name h2dts_gen_0005
  * @tc.desc h2dts gen：gen：struct getDtsStructs（成员+方法） 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0005', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct GenStruct {
    int a;
    char b;
    float c;
    int add(int a, int b);
} GenStruct;`),
        unions: parseUnion(`typedef struct GenStruct {
    int a;
    char b;
    float c;
    int add(int a, int b);
} GenStruct;`),
        structs: parseStruct(`typedef struct GenStruct {
    int a;
    char b;
    float c;
    int add(int a, int b);
} GenStruct;`),
        classes: parseClass(`typedef struct GenStruct {
    int a;
    char b;
    float c;
    int add(int a, int b);
} GenStruct;`),
        funcs: parseFunction(`typedef struct GenStruct {
    int a;
    char b;
    float c;
    int add(int a, int b);
} GenStruct;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0005 生成结果为空');
      assert.ok(result.includes('export type GenStruct = {'), 'h2dts_gen_0005 生成结果缺少片段 0: ' + 'export type GenStruct = {');
      assert.ok(result.includes('a: number;'), 'h2dts_gen_0005 生成结果缺少片段 1: ' + 'a: number;');
      assert.ok(result.includes('b: string;'), 'h2dts_gen_0005 生成结果缺少片段 2: ' + 'b: string;');
      assert.ok(result.includes('add(a: number, b: number): number;'), 'h2dts_gen_0005 生成结果缺少片段 3: ' + 'add(a: number, b: number): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0005 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0006
  * @tc.name h2dts_gen_0006
  * @tc.desc h2dts gen：gen：struct getDtsStructs 字符串成员 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0006', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct GenOpt {
    std::string name;
    bool flag;
    void reset();
} GenOpt;`),
        unions: parseUnion(`typedef struct GenOpt {
    std::string name;
    bool flag;
    void reset();
} GenOpt;`),
        structs: parseStruct(`typedef struct GenOpt {
    std::string name;
    bool flag;
    void reset();
} GenOpt;`),
        classes: parseClass(`typedef struct GenOpt {
    std::string name;
    bool flag;
    void reset();
} GenOpt;`),
        funcs: parseFunction(`typedef struct GenOpt {
    std::string name;
    bool flag;
    void reset();
} GenOpt;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0006 生成结果为空');
      assert.ok(result.includes('export type GenOpt = {'), 'h2dts_gen_0006 生成结果缺少片段 0: ' + 'export type GenOpt = {');
      assert.ok(result.includes('name: string;'), 'h2dts_gen_0006 生成结果缺少片段 1: ' + 'name: string;');
      assert.ok(result.includes('flag: boolean;'), 'h2dts_gen_0006 生成结果缺少片段 2: ' + 'flag: boolean;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0006 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0007
  * @tc.name h2dts_gen_0007
  * @tc.desc h2dts gen：gen：enum getDtsEnum 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0007', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { GEN_NEW, GEN_APPEND, GEN_REPLACE } GenOperation;`),
        unions: parseUnion(`typedef enum { GEN_NEW, GEN_APPEND, GEN_REPLACE } GenOperation;`),
        structs: parseStruct(`typedef enum { GEN_NEW, GEN_APPEND, GEN_REPLACE } GenOperation;`),
        classes: parseClass(`typedef enum { GEN_NEW, GEN_APPEND, GEN_REPLACE } GenOperation;`),
        funcs: parseFunction(`typedef enum { GEN_NEW, GEN_APPEND, GEN_REPLACE } GenOperation;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsEnum(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0007 生成结果为空');
      assert.ok(result.includes('export enum GenOperation {'), 'h2dts_gen_0007 生成结果缺少片段 0: ' + 'export enum GenOperation {');
      assert.ok(result.includes('GEN_NEW,'), 'h2dts_gen_0007 生成结果缺少片段 1: ' + 'GEN_NEW,');
      assert.ok(result.includes('GEN_APPEND,'), 'h2dts_gen_0007 生成结果缺少片段 2: ' + 'GEN_APPEND,');
      assert.ok(result.includes('GEN_REPLACE,'), 'h2dts_gen_0007 生成结果缺少片段 3: ' + 'GEN_REPLACE,');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0007 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0008
  * @tc.name h2dts_gen_0008
  * @tc.desc h2dts gen：gen：enum 带值 getDtsEnum 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0008', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { GEN_RED = 1, GEN_GREEN = 2, GEN_BLUE = 3 } GenColor;`),
        unions: parseUnion(`typedef enum { GEN_RED = 1, GEN_GREEN = 2, GEN_BLUE = 3 } GenColor;`),
        structs: parseStruct(`typedef enum { GEN_RED = 1, GEN_GREEN = 2, GEN_BLUE = 3 } GenColor;`),
        classes: parseClass(`typedef enum { GEN_RED = 1, GEN_GREEN = 2, GEN_BLUE = 3 } GenColor;`),
        funcs: parseFunction(`typedef enum { GEN_RED = 1, GEN_GREEN = 2, GEN_BLUE = 3 } GenColor;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsEnum(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0008 生成结果为空');
      assert.ok(result.includes('export enum GenColor {'), 'h2dts_gen_0008 生成结果缺少片段 0: ' + 'export enum GenColor {');
      assert.ok(result.includes('GEN_RED=1,'), 'h2dts_gen_0008 生成结果缺少片段 1: ' + 'GEN_RED=1,');
      assert.ok(result.includes('GEN_GREEN=2,'), 'h2dts_gen_0008 生成结果缺少片段 2: ' + 'GEN_GREEN=2,');
      assert.ok(result.includes('GEN_BLUE=3,'), 'h2dts_gen_0008 生成结果缺少片段 3: ' + 'GEN_BLUE=3,');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0009
  * @tc.name h2dts_gen_0009
  * @tc.desc h2dts gen：gen：union getDtsUnions 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0009', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef union {
    int gi;
    float gf;
    char gc[4];
} GenValueUnion;`),
        unions: parseUnion(`typedef union {
    int gi;
    float gf;
    char gc[4];
} GenValueUnion;`),
        structs: parseStruct(`typedef union {
    int gi;
    float gf;
    char gc[4];
} GenValueUnion;`),
        classes: parseClass(`typedef union {
    int gi;
    float gf;
    char gc[4];
} GenValueUnion;`),
        funcs: parseFunction(`typedef union {
    int gi;
    float gf;
    char gc[4];
} GenValueUnion;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsUnions(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0009 生成结果为空');
      assert.ok(result.includes('export type GenValueUnion'), 'h2dts_gen_0009 生成结果缺少片段 0: ' + 'export type GenValueUnion');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0010
  * @tc.name h2dts_gen_0010
  * @tc.desc h2dts gen：gen：混合 ParseObj 全量 genDtsFile 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0010', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int genAdd(int a, int b);
class GenOTC {
    int len;
    bool check();
};
typedef struct GenTS {
    int a;
} GenTS;
typedef enum { GENX, GENY } GenE;
typedef union { int gi; float gf; } GenU;`),
        unions: parseUnion(`int genAdd(int a, int b);
class GenOTC {
    int len;
    bool check();
};
typedef struct GenTS {
    int a;
} GenTS;
typedef enum { GENX, GENY } GenE;
typedef union { int gi; float gf; } GenU;`),
        structs: parseStruct(`int genAdd(int a, int b);
class GenOTC {
    int len;
    bool check();
};
typedef struct GenTS {
    int a;
} GenTS;
typedef enum { GENX, GENY } GenE;
typedef union { int gi; float gf; } GenU;`),
        classes: parseClass(`int genAdd(int a, int b);
class GenOTC {
    int len;
    bool check();
};
typedef struct GenTS {
    int a;
} GenTS;
typedef enum { GENX, GENY } GenE;
typedef union { int gi; float gf; } GenU;`),
        funcs: parseFunction(`int genAdd(int a, int b);
class GenOTC {
    int len;
    bool check();
};
typedef struct GenTS {
    int a;
} GenTS;
typedef enum { GENX, GENY } GenE;
typedef union { int gi; float gf; } GenU;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0010 生成结果为空');
      assert.ok(result.includes('perf.d.ts'), 'h2dts_gen_0010 生成结果缺少片段 0: ' + 'perf.d.ts');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0011
  * @tc.name h2dts_gen_0011
  * @tc.desc h2dts gen：gen：getDtsFunction 字符串函数 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0011', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::string genConcat(std::string a, std::string b);
int genLen(std::string s);`),
        unions: parseUnion(`std::string genConcat(std::string a, std::string b);
int genLen(std::string s);`),
        structs: parseStruct(`std::string genConcat(std::string a, std::string b);
int genLen(std::string s);`),
        classes: parseClass(`std::string genConcat(std::string a, std::string b);
int genLen(std::string s);`),
        funcs: parseFunction(`std::string genConcat(std::string a, std::string b);
int genLen(std::string s);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0011 生成结果为空');
      assert.ok(result.includes('export function genConcat(a: string, b: string): string;'), 'h2dts_gen_0011 生成结果缺少片段 0: ' + 'export function genConcat(a: string, b: string): string;');
      assert.ok(result.includes('export function genLen(s: string): number;'), 'h2dts_gen_0011 生成结果缺少片段 1: ' + 'export function genLen(s: string): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0012
  * @tc.name h2dts_gen_0012
  * @tc.desc h2dts gen：gen：class 容器成员 getDtsClasses 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0012', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenStore {
    std::vector<int> list;
    void push(int v);
    int pop();
    int size();
};`),
        unions: parseUnion(`class GenStore {
    std::vector<int> list;
    void push(int v);
    int pop();
    int size();
};`),
        structs: parseStruct(`class GenStore {
    std::vector<int> list;
    void push(int v);
    int pop();
    int size();
};`),
        classes: parseClass(`class GenStore {
    std::vector<int> list;
    void push(int v);
    int pop();
    int size();
};`),
        funcs: parseFunction(`class GenStore {
    std::vector<int> list;
    void push(int v);
    int pop();
    int size();
};`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0012 生成结果为空');
      assert.ok(result.includes('export class GenStore {'), 'h2dts_gen_0012 生成结果缺少片段 0: ' + 'export class GenStore {');
      assert.ok(result.includes('list: Array<number>;'), 'h2dts_gen_0012 生成结果缺少片段 1: ' + 'list: Array<number>;');
      assert.ok(result.includes('push(v: number): void;'), 'h2dts_gen_0012 生成结果缺少片段 2: ' + 'push(v: number): void;');
      assert.ok(result.includes('pop(): number;'), 'h2dts_gen_0012 生成结果缺少片段 3: ' + 'pop(): number;');
      assert.ok(result.includes('size(): number;'), 'h2dts_gen_0012 生成结果缺少片段 4: ' + 'size(): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0013
  * @tc.name h2dts_gen_0013
  * @tc.desc h2dts gen：gen：struct 方法 getDtsStructs 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0013', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct GenPoint {
    int x;
    int y;
    double dist();
} GenPoint;`),
        unions: parseUnion(`typedef struct GenPoint {
    int x;
    int y;
    double dist();
} GenPoint;`),
        structs: parseStruct(`typedef struct GenPoint {
    int x;
    int y;
    double dist();
} GenPoint;`),
        classes: parseClass(`typedef struct GenPoint {
    int x;
    int y;
    double dist();
} GenPoint;`),
        funcs: parseFunction(`typedef struct GenPoint {
    int x;
    int y;
    double dist();
} GenPoint;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0013 生成结果为空');
      assert.ok(result.includes('export type GenPoint = {'), 'h2dts_gen_0013 生成结果缺少片段 0: ' + 'export type GenPoint = {');
      assert.ok(result.includes('x: number;'), 'h2dts_gen_0013 生成结果缺少片段 1: ' + 'x: number;');
      assert.ok(result.includes('y: number;'), 'h2dts_gen_0013 生成结果缺少片段 2: ' + 'y: number;');
      assert.ok(result.includes('dist(): number;'), 'h2dts_gen_0013 生成结果缺少片段 3: ' + 'dist(): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0014
  * @tc.name h2dts_gen_0014
  * @tc.desc h2dts gen：gen：enum 多值 getDtsEnum 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0014', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum {
    GEN_OK = 200,
    GEN_NOT_FOUND = 404,
    GEN_ERROR = 500
} GenStatus;`),
        unions: parseUnion(`typedef enum {
    GEN_OK = 200,
    GEN_NOT_FOUND = 404,
    GEN_ERROR = 500
} GenStatus;`),
        structs: parseStruct(`typedef enum {
    GEN_OK = 200,
    GEN_NOT_FOUND = 404,
    GEN_ERROR = 500
} GenStatus;`),
        classes: parseClass(`typedef enum {
    GEN_OK = 200,
    GEN_NOT_FOUND = 404,
    GEN_ERROR = 500
} GenStatus;`),
        funcs: parseFunction(`typedef enum {
    GEN_OK = 200,
    GEN_NOT_FOUND = 404,
    GEN_ERROR = 500
} GenStatus;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsEnum(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0014 生成结果为空');
      assert.ok(result.includes('export enum GenStatus {'), 'h2dts_gen_0014 生成结果缺少片段 0: ' + 'export enum GenStatus {');
      assert.ok(result.includes('GEN_OK=200,'), 'h2dts_gen_0014 生成结果缺少片段 1: ' + 'GEN_OK=200,');
      assert.ok(result.includes('GEN_NOT_FOUND=404,'), 'h2dts_gen_0014 生成结果缺少片段 2: ' + 'GEN_NOT_FOUND=404,');
      assert.ok(result.includes('GEN_ERROR=500,'), 'h2dts_gen_0014 生成结果缺少片段 3: ' + 'GEN_ERROR=500,');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0014 执行异常: ${String(err)}`);
    }
  });

});
