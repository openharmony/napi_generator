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
  vscode.window.showInformationMessage('Start Performance_C_Struct_Suite.');

  /**
  * @tc.number c_struct_0001
  * @tc.name c_struct_0001
  * @tc.desc h2dts parseStruct：struct：成员×3 + 方法×1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0001', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct TestStruct {
    int a;
    char b;
    float c;
    int add(int a, int b);
} TestStruct;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'TestStruct');
      assert.strictEqual(objList[0].alias, 'TestStruct');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'c');
      assert.strictEqual(objList[0].members[2].type, 'float');
      assert.strictEqual(objList[0].functions.length, 1);
      assert.strictEqual(objList[0].functions[0].name, 'add');
      assert.strictEqual(objList[0].functions[0].returns, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0001 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0002
  * @tc.name c_struct_0002
  * @tc.desc h2dts parseStruct：struct：std::string 成员 + 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0002', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Opt {
    std::string name;
    bool flag;
    void reset();
} Opt;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Opt');
      assert.strictEqual(objList[0].alias, 'Opt');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'name');
      assert.strictEqual(objList[0].members[0].type, 'std::string');
      assert.strictEqual(objList[0].members[1].name, 'flag');
      assert.strictEqual(objList[0].members[1].type, 'bool');
      assert.strictEqual(objList[0].functions.length, 1);
      assert.strictEqual(objList[0].functions[0].name, 'reset');
      assert.strictEqual(objList[0].functions[0].returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0002 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0003
  * @tc.name c_struct_0003
  * @tc.desc h2dts parseStruct：struct：多维数组成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0003', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Matrix {
    int rows;
    int cols;
    double data[10][20];
    bool valid;
} Matrix;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Matrix');
      assert.strictEqual(objList[0].alias, 'Matrix');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'rows');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'cols');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'data');
      assert.strictEqual(objList[0].members[2].type, 'double');
      assert.strictEqual(objList[0].members[3].name, 'valid');
      assert.strictEqual(objList[0].members[3].type, 'bool');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0003 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0004
  * @tc.name c_struct_0004
  * @tc.desc h2dts parseStruct：struct：容器/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0004', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Data {
    std::vector<int> list;
    std::map<std::string, double> map;
    char* raw;
} Data;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Data');
      assert.strictEqual(objList[0].alias, 'Data');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'raw');
      assert.strictEqual(objList[0].members[0].type, 'char*');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0004 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0005
  * @tc.name c_struct_0005
  * @tc.desc h2dts parseStruct：struct：匿名 + 别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0005', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct {
    int len;
    std::string title;
} Record;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Record');
      assert.strictEqual(objList[0].alias, 'Record');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'len');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'title');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0005 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0006
  * @tc.name c_struct_0006
  * @tc.desc h2dts parseStruct：struct：非 typedef 具名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0006', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`struct Point {
    int x;
    int y;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Point');
      assert.strictEqual(objList[0].alias, undefined);
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'x');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'y');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0006 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0007
  * @tc.name c_struct_0007
  * @tc.desc h2dts parseStruct：struct：成员 + 双方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0007', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Base {
    int id;
    std::string name;
    void save();
    int load(std::string key);
} Base;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Base');
      assert.strictEqual(objList[0].alias, 'Base');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'id');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'name');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 2);
      assert.strictEqual(objList[0].functions[0].name, 'save');
      assert.strictEqual(objList[0].functions[0].returns, 'void');
      assert.strictEqual(objList[0].functions[1].name, 'load');
      assert.strictEqual(objList[0].functions[1].returns, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0007 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0008
  * @tc.name c_struct_0008
  * @tc.desc h2dts parseStruct：namespace：域内 struct 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0008', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`namespace ns {
typedef struct Inner {
    int x;
    double y;
    void calc();
} Inner;
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Inner');
      assert.strictEqual(objList[0].alias, 'Inner');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'x');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'y');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].functions.length, 1);
      assert.strictEqual(objList[0].functions[0].name, 'calc');
      assert.strictEqual(objList[0].functions[0].returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0009
  * @tc.name c_struct_0009
  * @tc.desc h2dts parseStruct：多 struct：同文件 2 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0009', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct S1 {
    int a;
} S1;
typedef struct S2 {
    std::string b;
} S2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 2);
      assert.strictEqual(objList[0].name, 'S1');
      assert.strictEqual(objList[0].alias, 'S1');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.strictEqual(objList[1].name, 'S2');
      assert.strictEqual(objList[1].alias, 'S2');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'b');
      assert.strictEqual(objList[1].members[0].type, 'std::string');
      assert.strictEqual(objList[1].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0010
  * @tc.name c_struct_0010
  * @tc.desc h2dts parseStruct：struct：10 基础类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0010', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct All {
    int i;
    long l;
    long long ll;
    float f;
    double d;
    bool b;
    char c;
    std::string s;
    short sh;
    unsigned int ui;
} All;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'All');
      assert.strictEqual(objList[0].alias, 'All');
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
      assert.strictEqual(objList[0].members[5].name, 'b');
      assert.strictEqual(objList[0].members[5].type, 'bool');
      assert.strictEqual(objList[0].members[6].name, 'c');
      assert.strictEqual(objList[0].members[6].type, 'char');
      assert.strictEqual(objList[0].members[7].name, 's');
      assert.strictEqual(objList[0].members[7].type, 'std::string');
      assert.strictEqual(objList[0].members[8].name, 'sh');
      assert.strictEqual(objList[0].members[8].type, 'short');
      assert.strictEqual(objList[0].members[9].name, 'ui');
      assert.strictEqual(objList[0].members[9].type, 'unsigned int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0011
  * @tc.name c_struct_0011
  * @tc.desc h2dts parseStruct：扩充-struct：12 基础类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0011', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Wide {
    int8_t i8;
    int16_t i16;
    int32_t i32;
    int64_t i64;
    uint8_t u8;
    uint16_t u16;
    uint32_t u32;
    uint64_t u64;
    float f;
    double d;
    bool b;
    char c;
} Wide;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Wide');
      assert.strictEqual(objList[0].alias, 'Wide');
      assert.strictEqual(objList[0].members.length, 12);
      assert.strictEqual(objList[0].members[0].name, 'i8');
      assert.strictEqual(objList[0].members[0].type, 'int8_t');
      assert.strictEqual(objList[0].members[1].name, 'i16');
      assert.strictEqual(objList[0].members[1].type, 'int16_t');
      assert.strictEqual(objList[0].members[2].name, 'i32');
      assert.strictEqual(objList[0].members[2].type, 'int32_t');
      assert.strictEqual(objList[0].members[3].name, 'i64');
      assert.strictEqual(objList[0].members[3].type, 'int64_t');
      assert.strictEqual(objList[0].members[4].name, 'u8');
      assert.strictEqual(objList[0].members[4].type, 'uint8_t');
      assert.strictEqual(objList[0].members[5].name, 'u16');
      assert.strictEqual(objList[0].members[5].type, 'uint16_t');
      assert.strictEqual(objList[0].members[6].name, 'u32');
      assert.strictEqual(objList[0].members[6].type, 'uint32_t');
      assert.strictEqual(objList[0].members[7].name, 'u64');
      assert.strictEqual(objList[0].members[7].type, 'uint64_t');
      assert.strictEqual(objList[0].members[8].name, 'f');
      assert.strictEqual(objList[0].members[8].type, 'float');
      assert.strictEqual(objList[0].members[9].name, 'd');
      assert.strictEqual(objList[0].members[9].type, 'double');
      assert.strictEqual(objList[0].members[10].name, 'b');
      assert.strictEqual(objList[0].members[10].type, 'bool');
      assert.strictEqual(objList[0].members[11].name, 'c');
      assert.strictEqual(objList[0].members[11].type, 'char');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0012
  * @tc.name c_struct_0012
  * @tc.desc h2dts parseStruct：扩充-struct：6 种数组/多维成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0012', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Arrays {
    int a[4];
    double b[8];
    char c[16];
    std::string d[32];
    int e[2][2];
    double f[3][4][5];
} Arrays;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Arrays');
      assert.strictEqual(objList[0].alias, 'Arrays');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'c');
      assert.strictEqual(objList[0].members[2].type, 'char');
      assert.strictEqual(objList[0].members[3].name, 'd');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'e');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'double');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0013
  * @tc.name c_struct_0013
  * @tc.desc h2dts parseStruct：扩充-struct：5 种容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0013', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Svc {
    std::vector<int> list;
    std::map<std::string, std::string> dict;
    std::set<double> values;
    std::pair<int, int> range;
    std::tuple<int, int, int> dims;
} Svc;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Svc');
      assert.strictEqual(objList[0].alias, 'Svc');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0014
  * @tc.name c_struct_0014
  * @tc.desc h2dts parseStruct：扩充-struct-多声明：同文件 4 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0014', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct S1 { int a; } S1;
typedef struct S2 { int b; } S2;
typedef struct S3 { int c; } S3;
typedef struct S4 { int d; } S4;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 4);
      assert.strictEqual(objList[0].name, 'S1');
      assert.strictEqual(objList[0].alias, 'S1');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.strictEqual(objList[1].name, 'S2');
      assert.strictEqual(objList[1].alias, 'S2');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'b');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[1].functions.length, 0);
      assert.strictEqual(objList[2].name, 'S3');
      assert.strictEqual(objList[2].alias, 'S3');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'c');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[2].functions.length, 0);
      assert.strictEqual(objList[3].name, 'S4');
      assert.strictEqual(objList[3].alias, 'S4');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'd');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[3].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0015
  * @tc.name c_struct_0015
  * @tc.desc h2dts parseStruct：扩充-struct：3 种函数指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0015', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct FnPtr {
    int (*cb)(int a, int b);
    double (*math)(double x);
    void (*notify)(int code);
} FnPtr;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FnPtr');
      assert.strictEqual(objList[0].alias, 'FnPtr');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'x');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'code');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0016
  * @tc.name c_struct_0016
  * @tc.desc h2dts parseStruct：扩充-struct-规模：20 成员 + 2 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0016', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Big {
    int p0; int p1; int p2; int p3; int p4;
    int p5; int p6; int p7; int p8; int p9;
    int p10; int p11; int p12; int p13; int p14;
    int p15; int p16; int p17; int p18; int p19;
    void m0();
    void m1();
} Big;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Big');
      assert.strictEqual(objList[0].alias, 'Big');
      assert.strictEqual(objList[0].members.length, 20);
      assert.strictEqual(objList[0].members[0].name, 'p0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'p1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'p2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'p3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'p4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'p5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'p6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'p7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'p8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'p9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.strictEqual(objList[0].members[10].name, 'p10');
      assert.strictEqual(objList[0].members[10].type, 'int');
      assert.strictEqual(objList[0].members[11].name, 'p11');
      assert.strictEqual(objList[0].members[11].type, 'int');
      assert.strictEqual(objList[0].members[12].name, 'p12');
      assert.strictEqual(objList[0].members[12].type, 'int');
      assert.strictEqual(objList[0].members[13].name, 'p13');
      assert.strictEqual(objList[0].members[13].type, 'int');
      assert.strictEqual(objList[0].members[14].name, 'p14');
      assert.strictEqual(objList[0].members[14].type, 'int');
      assert.strictEqual(objList[0].members[15].name, 'p15');
      assert.strictEqual(objList[0].members[15].type, 'int');
      assert.strictEqual(objList[0].members[16].name, 'p16');
      assert.strictEqual(objList[0].members[16].type, 'int');
      assert.strictEqual(objList[0].members[17].name, 'p17');
      assert.strictEqual(objList[0].members[17].type, 'int');
      assert.strictEqual(objList[0].members[18].name, 'p18');
      assert.strictEqual(objList[0].members[18].type, 'int');
      assert.strictEqual(objList[0].members[19].name, 'p19');
      assert.strictEqual(objList[0].members[19].type, 'int');
      assert.strictEqual(objList[0].functions.length, 2);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'void');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0017
  * @tc.name c_struct_0017
  * @tc.desc h2dts parseStruct：扩充-struct：几何体成员 + 3 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0017', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Geo {
    double x;
    double y;
    double z;
    double dist();
    double area();
    double volume();
} Geo;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Geo');
      assert.strictEqual(objList[0].alias, 'Geo');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'x');
      assert.strictEqual(objList[0].members[0].type, 'double');
      assert.strictEqual(objList[0].members[1].name, 'y');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'z');
      assert.strictEqual(objList[0].members[2].type, 'double');
      assert.strictEqual(objList[0].functions.length, 3);
      assert.strictEqual(objList[0].functions[0].name, 'dist');
      assert.strictEqual(objList[0].functions[0].returns, 'double');
      assert.strictEqual(objList[0].functions[1].name, 'area');
      assert.strictEqual(objList[0].functions[1].returns, 'double');
      assert.strictEqual(objList[0].functions[2].name, 'volume');
      assert.strictEqual(objList[0].functions[2].returns, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0018
  * @tc.name c_struct_0018
  * @tc.desc h2dts parseStruct：扩充-struct-namespace：两层嵌套 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0018', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`namespace deep {
namespace inner {
typedef struct Nested {
    int id;
    std::string label;
    void render();
} Nested;
}
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Nested');
      assert.strictEqual(objList[0].alias, 'Nested');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'id');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'label');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 1);
      assert.strictEqual(objList[0].functions[0].name, 'render');
      assert.strictEqual(objList[0].functions[0].returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0019
  * @tc.name c_struct_0019
  * @tc.desc h2dts parseStruct：扩充-struct：8 种混合成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0019', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Mixed {
    int i;
    std::string s;
    std::vector<int> v;
    char* p;
    int arr[10];
    bool ok;
    double d;
    long l;
} Mixed;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Mixed');
      assert.strictEqual(objList[0].alias, 'Mixed');
      assert.strictEqual(objList[0].members.length, 7);
      assert.strictEqual(objList[0].members[0].name, 'i');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 'arr');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'ok');
      assert.strictEqual(objList[0].members[4].type, 'bool');
      assert.strictEqual(objList[0].members[5].name, 'd');
      assert.strictEqual(objList[0].members[5].type, 'double');
      assert.strictEqual(objList[0].members[6].name, 'l');
      assert.strictEqual(objList[0].members[6].type, 'long');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0020
  * @tc.name c_struct_0020
  * @tc.desc h2dts parseStruct：扩充-struct：成员 + 4 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0020', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct WithMethods {
    int value;
    void setValue(int v);
    int getValue();
    void reset();
    bool isDirty();
} WithMethods;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'WithMethods');
      assert.strictEqual(objList[0].alias, 'WithMethods');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'value');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'setValue');
      assert.strictEqual(objList[0].functions[0].returns, 'void');
      assert.strictEqual(objList[0].functions[1].name, 'getValue');
      assert.strictEqual(objList[0].functions[1].returns, 'int');
      assert.strictEqual(objList[0].functions[2].name, 'reset');
      assert.strictEqual(objList[0].functions[2].returns, 'void');
      assert.strictEqual(objList[0].functions[3].name, 'isDirty');
      assert.strictEqual(objList[0].functions[3].returns, 'bool');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0020 执行异常: ${String(err)}`);
    }
  });

});
