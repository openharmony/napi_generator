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
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part03.');

  /**
  * @tc.number h2dtscpp_gen_0032
  * @tc.name h2dtscpp_gen_0032
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：容器类型组 10 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0032', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void cf9_0(std::map<std::string,int> v);
std::map<std::string,int> gf9_0();
void cf9_1(std::map<int,std::string> v);
std::map<int,std::string> gf9_1();
void cf9_2(std::set<int> v);
std::set<int> gf9_2();
void cf9_3(std::set<std::string> v);
std::set<std::string> gf9_3();`),
        unions: parseUnion(`void cf9_0(std::map<std::string,int> v);
std::map<std::string,int> gf9_0();
void cf9_1(std::map<int,std::string> v);
std::map<int,std::string> gf9_1();
void cf9_2(std::set<int> v);
std::set<int> gf9_2();
void cf9_3(std::set<std::string> v);
std::set<std::string> gf9_3();`),
        structs: parseStruct(`void cf9_0(std::map<std::string,int> v);
std::map<std::string,int> gf9_0();
void cf9_1(std::map<int,std::string> v);
std::map<int,std::string> gf9_1();
void cf9_2(std::set<int> v);
std::set<int> gf9_2();
void cf9_3(std::set<std::string> v);
std::set<std::string> gf9_3();`),
        classes: parseClass(`void cf9_0(std::map<std::string,int> v);
std::map<std::string,int> gf9_0();
void cf9_1(std::map<int,std::string> v);
std::map<int,std::string> gf9_1();
void cf9_2(std::set<int> v);
std::set<int> gf9_2();
void cf9_3(std::set<std::string> v);
std::set<std::string> gf9_3();`),
        funcs: parseFunction(`void cf9_0(std::map<std::string,int> v);
std::map<std::string,int> gf9_0();
void cf9_1(std::map<int,std::string> v);
std::map<int,std::string> gf9_1();
void cf9_2(std::set<int> v);
std::set<int> gf9_2();
void cf9_3(std::set<std::string> v);
std::set<std::string> gf9_3();`),
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
      assert.strictEqual(transResult.funcs.length, 8);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0033
  * @tc.name h2dtscpp_gen_0033
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 1 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0033', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class TK0 {
    int v;
    std::vector<int> c;
    void run(int a);
    int get();
};
typedef struct TS0 {
    int x;
    void reset();
} TS0;`),
        unions: parseUnion(`class TK0 {
    int v;
    std::vector<int> c;
    void run(int a);
    int get();
};
typedef struct TS0 {
    int x;
    void reset();
} TS0;`),
        structs: parseStruct(`class TK0 {
    int v;
    std::vector<int> c;
    void run(int a);
    int get();
};
typedef struct TS0 {
    int x;
    void reset();
} TS0;`),
        classes: parseClass(`class TK0 {
    int v;
    std::vector<int> c;
    void run(int a);
    int get();
};
typedef struct TS0 {
    int x;
    void reset();
} TS0;`),
        funcs: parseFunction(`class TK0 {
    int v;
    std::vector<int> c;
    void run(int a);
    int get();
};
typedef struct TS0 {
    int x;
    void reset();
} TS0;`),
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
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0034
  * @tc.name h2dtscpp_gen_0034
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 2 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0034', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class TK1 {
    char v;
    std::vector<bool> c;
    void run(char a);
    char get();
};
typedef struct TS1 {
    char x;
    void reset();
} TS1;`),
        unions: parseUnion(`class TK1 {
    char v;
    std::vector<bool> c;
    void run(char a);
    char get();
};
typedef struct TS1 {
    char x;
    void reset();
} TS1;`),
        structs: parseStruct(`class TK1 {
    char v;
    std::vector<bool> c;
    void run(char a);
    char get();
};
typedef struct TS1 {
    char x;
    void reset();
} TS1;`),
        classes: parseClass(`class TK1 {
    char v;
    std::vector<bool> c;
    void run(char a);
    char get();
};
typedef struct TS1 {
    char x;
    void reset();
} TS1;`),
        funcs: parseFunction(`class TK1 {
    char v;
    std::vector<bool> c;
    void run(char a);
    char get();
};
typedef struct TS1 {
    char x;
    void reset();
} TS1;`),
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
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0035
  * @tc.name h2dtscpp_gen_0035
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 3 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0035', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class TK2 {
    short v;
    std::set<int> c;
    void run(short a);
    short get();
};
typedef struct TS2 {
    short x;
    void reset();
} TS2;`),
        unions: parseUnion(`class TK2 {
    short v;
    std::set<int> c;
    void run(short a);
    short get();
};
typedef struct TS2 {
    short x;
    void reset();
} TS2;`),
        structs: parseStruct(`class TK2 {
    short v;
    std::set<int> c;
    void run(short a);
    short get();
};
typedef struct TS2 {
    short x;
    void reset();
} TS2;`),
        classes: parseClass(`class TK2 {
    short v;
    std::set<int> c;
    void run(short a);
    short get();
};
typedef struct TS2 {
    short x;
    void reset();
} TS2;`),
        funcs: parseFunction(`class TK2 {
    short v;
    std::set<int> c;
    void run(short a);
    short get();
};
typedef struct TS2 {
    short x;
    void reset();
} TS2;`),
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
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0036
  * @tc.name h2dtscpp_gen_0036
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 4 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0036', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class TK3 {
    long v;
    std::list<std::string> c;
    void run(long a);
    long get();
};
typedef struct TS3 {
    long x;
    void reset();
} TS3;`),
        unions: parseUnion(`class TK3 {
    long v;
    std::list<std::string> c;
    void run(long a);
    long get();
};
typedef struct TS3 {
    long x;
    void reset();
} TS3;`),
        structs: parseStruct(`class TK3 {
    long v;
    std::list<std::string> c;
    void run(long a);
    long get();
};
typedef struct TS3 {
    long x;
    void reset();
} TS3;`),
        classes: parseClass(`class TK3 {
    long v;
    std::list<std::string> c;
    void run(long a);
    long get();
};
typedef struct TS3 {
    long x;
    void reset();
} TS3;`),
        funcs: parseFunction(`class TK3 {
    long v;
    std::list<std::string> c;
    void run(long a);
    long get();
};
typedef struct TS3 {
    long x;
    void reset();
} TS3;`),
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
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0037
  * @tc.name h2dtscpp_gen_0037
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 5 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0037', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class TK4 {
    long long v;
    std::pair<int,int> c;
    void run(long long a);
    long long get();
};
typedef struct TS4 {
    long long x;
    void reset();
} TS4;`),
        unions: parseUnion(`class TK4 {
    long long v;
    std::pair<int,int> c;
    void run(long long a);
    long long get();
};
typedef struct TS4 {
    long long x;
    void reset();
} TS4;`),
        structs: parseStruct(`class TK4 {
    long long v;
    std::pair<int,int> c;
    void run(long long a);
    long long get();
};
typedef struct TS4 {
    long long x;
    void reset();
} TS4;`),
        classes: parseClass(`class TK4 {
    long long v;
    std::pair<int,int> c;
    void run(long long a);
    long long get();
};
typedef struct TS4 {
    long long x;
    void reset();
} TS4;`),
        funcs: parseFunction(`class TK4 {
    long long v;
    std::pair<int,int> c;
    void run(long long a);
    long long get();
};
typedef struct TS4 {
    long long x;
    void reset();
} TS4;`),
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
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0038
  * @tc.name h2dtscpp_gen_0038
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 6 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0038', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class TK5 {
    float v;
    std::tuple<std::string,int,double> c;
    void run(float a);
    float get();
};
typedef struct TS5 {
    float x;
    void reset();
} TS5;`),
        unions: parseUnion(`class TK5 {
    float v;
    std::tuple<std::string,int,double> c;
    void run(float a);
    float get();
};
typedef struct TS5 {
    float x;
    void reset();
} TS5;`),
        structs: parseStruct(`class TK5 {
    float v;
    std::tuple<std::string,int,double> c;
    void run(float a);
    float get();
};
typedef struct TS5 {
    float x;
    void reset();
} TS5;`),
        classes: parseClass(`class TK5 {
    float v;
    std::tuple<std::string,int,double> c;
    void run(float a);
    float get();
};
typedef struct TS5 {
    float x;
    void reset();
} TS5;`),
        funcs: parseFunction(`class TK5 {
    float v;
    std::tuple<std::string,int,double> c;
    void run(float a);
    float get();
};
typedef struct TS5 {
    float x;
    void reset();
} TS5;`),
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
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0039
  * @tc.name h2dtscpp_gen_0039
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 7 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0039', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class TK6 {
    double v;
    std::priority_queue<int> c;
    void run(double a);
    double get();
};
typedef struct TS6 {
    double x;
    void reset();
} TS6;`),
        unions: parseUnion(`class TK6 {
    double v;
    std::priority_queue<int> c;
    void run(double a);
    double get();
};
typedef struct TS6 {
    double x;
    void reset();
} TS6;`),
        structs: parseStruct(`class TK6 {
    double v;
    std::priority_queue<int> c;
    void run(double a);
    double get();
};
typedef struct TS6 {
    double x;
    void reset();
} TS6;`),
        classes: parseClass(`class TK6 {
    double v;
    std::priority_queue<int> c;
    void run(double a);
    double get();
};
typedef struct TS6 {
    double x;
    void reset();
} TS6;`),
        funcs: parseFunction(`class TK6 {
    double v;
    std::priority_queue<int> c;
    void run(double a);
    double get();
};
typedef struct TS6 {
    double x;
    void reset();
} TS6;`),
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
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0040
  * @tc.name h2dtscpp_gen_0040
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 8 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0040', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class TK7 {
    bool v;
    std::unordered_map<std::string,int> c;
    void run(bool a);
    bool get();
};
typedef struct TS7 {
    bool x;
    void reset();
} TS7;`),
        unions: parseUnion(`class TK7 {
    bool v;
    std::unordered_map<std::string,int> c;
    void run(bool a);
    bool get();
};
typedef struct TS7 {
    bool x;
    void reset();
} TS7;`),
        structs: parseStruct(`class TK7 {
    bool v;
    std::unordered_map<std::string,int> c;
    void run(bool a);
    bool get();
};
typedef struct TS7 {
    bool x;
    void reset();
} TS7;`),
        classes: parseClass(`class TK7 {
    bool v;
    std::unordered_map<std::string,int> c;
    void run(bool a);
    bool get();
};
typedef struct TS7 {
    bool x;
    void reset();
} TS7;`),
        funcs: parseFunction(`class TK7 {
    bool v;
    std::unordered_map<std::string,int> c;
    void run(bool a);
    bool get();
};
typedef struct TS7 {
    bool x;
    void reset();
} TS7;`),
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
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0041
  * @tc.name h2dtscpp_gen_0041
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 9 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0041', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class TK8 {
    unsigned int v;
    std::unordered_multiset<int> c;
    void run(unsigned int a);
    unsigned int get();
};
typedef struct TS8 {
    unsigned int x;
    void reset();
} TS8;`),
        unions: parseUnion(`class TK8 {
    unsigned int v;
    std::unordered_multiset<int> c;
    void run(unsigned int a);
    unsigned int get();
};
typedef struct TS8 {
    unsigned int x;
    void reset();
} TS8;`),
        structs: parseStruct(`class TK8 {
    unsigned int v;
    std::unordered_multiset<int> c;
    void run(unsigned int a);
    unsigned int get();
};
typedef struct TS8 {
    unsigned int x;
    void reset();
} TS8;`),
        classes: parseClass(`class TK8 {
    unsigned int v;
    std::unordered_multiset<int> c;
    void run(unsigned int a);
    unsigned int get();
};
typedef struct TS8 {
    unsigned int x;
    void reset();
} TS8;`),
        funcs: parseFunction(`class TK8 {
    unsigned int v;
    std::unordered_multiset<int> c;
    void run(unsigned int a);
    unsigned int get();
};
typedef struct TS8 {
    unsigned int x;
    void reset();
} TS8;`),
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
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0042
  * @tc.name h2dtscpp_gen_0042
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 10 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0042', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class TK9 {
    unsigned char v;
    std::forward_list<int> c;
    void run(unsigned char a);
    unsigned char get();
};
typedef struct TS9 {
    unsigned char x;
    void reset();
} TS9;`),
        unions: parseUnion(`class TK9 {
    unsigned char v;
    std::forward_list<int> c;
    void run(unsigned char a);
    unsigned char get();
};
typedef struct TS9 {
    unsigned char x;
    void reset();
} TS9;`),
        structs: parseStruct(`class TK9 {
    unsigned char v;
    std::forward_list<int> c;
    void run(unsigned char a);
    unsigned char get();
};
typedef struct TS9 {
    unsigned char x;
    void reset();
} TS9;`),
        classes: parseClass(`class TK9 {
    unsigned char v;
    std::forward_list<int> c;
    void run(unsigned char a);
    unsigned char get();
};
typedef struct TS9 {
    unsigned char x;
    void reset();
} TS9;`),
        funcs: parseFunction(`class TK9 {
    unsigned char v;
    std::forward_list<int> c;
    void run(unsigned char a);
    unsigned char get();
};
typedef struct TS9 {
    unsigned char x;
    void reset();
} TS9;`),
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
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.structs.length, 1);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0042 执行异常: ${String(err)}`);
    }
  });

});
