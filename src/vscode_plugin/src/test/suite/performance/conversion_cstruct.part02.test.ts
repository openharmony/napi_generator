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
  vscode.window.showInformationMessage('Start Performance_C_Struct_Suite part02.');

  /**
  * @tc.number c_struct_0021
  * @tc.name c_struct_0021
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0021', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ000 {
    int m0;
    char m1;
    short m2;
    long m3;
    long long m4;
    float m5;
} StQ000;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ000');
      assert.strictEqual(objList[0].alias, 'StQ000');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'long long');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0022
  * @tc.name c_struct_0022
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0022', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ001 {
    double m0;
    bool m1;
    unsigned int m2;
    unsigned char m3;
    unsigned short m4;
    unsigned long m5;
} StQ001;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ001');
      assert.strictEqual(objList[0].alias, 'StQ001');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'double');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'bool');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'unsigned int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'unsigned char');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'unsigned short');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'unsigned long');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0023
  * @tc.name c_struct_0023
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0023', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ002 {
    unsigned long long m0;
    signed char m1;
    signed short m2;
    signed long m3;
    wchar_t m4;
    char16_t m5;
} StQ002;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ002');
      assert.strictEqual(objList[0].alias, 'StQ002');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'signed char');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'signed short');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'signed long');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'wchar_t');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'char16_t');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0024
  * @tc.name c_struct_0024
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0024', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ003 {
    char32_t m0;
    size_t m1;
    int8_t m2;
    int16_t m3;
    int32_t m4;
    int64_t m5;
} StQ003;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ003');
      assert.strictEqual(objList[0].alias, 'StQ003');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'char32_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'size_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int8_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int16_t');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int32_t');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int64_t');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0025
  * @tc.name c_struct_0025
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0025', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ004 {
    uint8_t m0;
    uint16_t m1;
    uint32_t m2;
    uint64_t m3;
    std::string m4;
    string m5;
} StQ004;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ004');
      assert.strictEqual(objList[0].alias, 'StQ004');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'uint8_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'uint16_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'uint32_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'uint64_t');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'std::string');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0026
  * @tc.name c_struct_0026
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0026', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ005 {
    std::wstring m0;
    long double m1;
    void m2;
    std::vector<int> m3;
    std::vector<std::string> m4;
    std::vector<double> m5;
} StQ005;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ005');
      assert.strictEqual(objList[0].alias, 'StQ005');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'std::wstring');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'long double');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'void');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0027
  * @tc.name c_struct_0027
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0027', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ006 {
    std::vector<bool> m0;
    std::map<std::string,int> m1;
    std::map<int,std::string> m2;
    std::set<int> m3;
    std::set<std::string> m4;
    std::list<int> m5;
} StQ006;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ006');
      assert.strictEqual(objList[0].alias, 'StQ006');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0028
  * @tc.name c_struct_0028
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0028', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ007 {
    std::list<std::string> m0;
    std::deque<int> m1;
    std::deque<std::string> m2;
    std::pair<int,int> m3;
    std::pair<std::string,int> m4;
    std::tuple<int,int,int> m5;
} StQ007;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ007');
      assert.strictEqual(objList[0].alias, 'StQ007');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0029
  * @tc.name c_struct_0029
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0029', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ008 {
    std::tuple<std::string,int,double> m0;
    std::queue<int> m1;
    std::stack<int> m2;
    std::priority_queue<int> m3;
    std::multimap<int,int> m4;
    std::multiset<int> m5;
} StQ008;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ008');
      assert.strictEqual(objList[0].alias, 'StQ008');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0030
  * @tc.name c_struct_0030
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0030', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ009 {
    std::unordered_map<std::string,int> m0;
    std::unordered_set<int> m1;
    std::unordered_multimap<int,int> m2;
    std::unordered_multiset<int> m3;
    std::array<int,10> m4;
    std::array<std::string,5> m5;
} StQ009;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ009');
      assert.strictEqual(objList[0].alias, 'StQ009');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0031
  * @tc.name c_struct_0031
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0031', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ010 {
    std::forward_list<int> m0;
    std::valarray<double> m1;
    std::complex<double> m2;
    std::function<int(int,int)> m3;
    std::function<void(std::string)> m4;
    int m5;
} StQ010;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ010');
      assert.strictEqual(objList[0].alias, 'StQ010');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'm5');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0032
  * @tc.name c_struct_0032
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0032', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ011 {
    char m0;
    short m1;
    long m2;
    long long m3;
    float m4;
    double m5;
} StQ011;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ011');
      assert.strictEqual(objList[0].alias, 'StQ011');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'char');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'short');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'long');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'long long');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'float');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'double');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0033
  * @tc.name c_struct_0033
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0033', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ012 {
    bool m0;
    unsigned int m1;
    unsigned char m2;
    unsigned short m3;
    unsigned long m4;
    unsigned long long m5;
} StQ012;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ012');
      assert.strictEqual(objList[0].alias, 'StQ012');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'bool');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'unsigned int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'unsigned char');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'unsigned short');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'unsigned long');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'unsigned long long');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0034
  * @tc.name c_struct_0034
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0034', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ013 {
    signed char m0;
    signed short m1;
    signed long m2;
    wchar_t m3;
    char16_t m4;
    char32_t m5;
} StQ013;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ013');
      assert.strictEqual(objList[0].alias, 'StQ013');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'signed char');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'signed short');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'signed long');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'wchar_t');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'char16_t');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'char32_t');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0035
  * @tc.name c_struct_0035
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0035', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ014 {
    size_t m0;
    int8_t m1;
    int16_t m2;
    int32_t m3;
    int64_t m4;
    uint8_t m5;
} StQ014;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ014');
      assert.strictEqual(objList[0].alias, 'StQ014');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'size_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int8_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int16_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int32_t');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int64_t');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'uint8_t');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0036
  * @tc.name c_struct_0036
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0036', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ015 {
    uint16_t m0;
    uint32_t m1;
    uint64_t m2;
    std::string m3;
    string m4;
    std::wstring m5;
} StQ015;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ015');
      assert.strictEqual(objList[0].alias, 'StQ015');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'uint16_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'uint32_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'uint64_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'string');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'std::wstring');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0037
  * @tc.name c_struct_0037
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0037', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ016 {
    long double m0;
    void m1;
    std::vector<int> m2;
    std::vector<std::string> m3;
    std::vector<double> m4;
    std::vector<bool> m5;
} StQ016;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ016');
      assert.strictEqual(objList[0].alias, 'StQ016');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'long double');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'void');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0038
  * @tc.name c_struct_0038
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0038', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ017 {
    std::map<std::string,int> m0;
    std::map<int,std::string> m1;
    std::set<int> m2;
    std::set<std::string> m3;
    std::list<int> m4;
    std::list<std::string> m5;
} StQ017;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ017');
      assert.strictEqual(objList[0].alias, 'StQ017');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0039
  * @tc.name c_struct_0039
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0039', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ018 {
    std::deque<int> m0;
    std::deque<std::string> m1;
    std::pair<int,int> m2;
    std::pair<std::string,int> m3;
    std::tuple<int,int,int> m4;
    std::tuple<std::string,int,double> m5;
} StQ018;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ018');
      assert.strictEqual(objList[0].alias, 'StQ018');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0040
  * @tc.name c_struct_0040
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0040', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ019 {
    std::queue<int> m0;
    std::stack<int> m1;
    std::priority_queue<int> m2;
    std::multimap<int,int> m3;
    std::multiset<int> m4;
    std::unordered_map<std::string,int> m5;
} StQ019;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ019');
      assert.strictEqual(objList[0].alias, 'StQ019');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0041
  * @tc.name c_struct_0041
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0041', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ020 {
    std::unordered_set<int> m0;
    std::unordered_multimap<int,int> m1;
    std::unordered_multiset<int> m2;
    std::array<int,10> m3;
    std::array<std::string,5> m4;
    std::forward_list<int> m5;
} StQ020;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ020');
      assert.strictEqual(objList[0].alias, 'StQ020');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0042
  * @tc.name c_struct_0042
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0042', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ021 {
    std::valarray<double> m0;
    std::complex<double> m1;
    std::function<int(int,int)> m2;
    std::function<void(std::string)> m3;
    int m4;
    char m5;
} StQ021;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ021');
      assert.strictEqual(objList[0].alias, 'StQ021');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'm4');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm5');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0043
  * @tc.name c_struct_0043
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0043', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ022 {
    short m0;
    long m1;
    long long m2;
    float m3;
    double m4;
    bool m5;
} StQ022;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ022');
      assert.strictEqual(objList[0].alias, 'StQ022');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'short');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'long');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'long long');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'float');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'double');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'bool');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0044
  * @tc.name c_struct_0044
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0044', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ023 {
    unsigned int m0;
    unsigned char m1;
    unsigned short m2;
    unsigned long m3;
    unsigned long long m4;
    signed char m5;
} StQ023;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ023');
      assert.strictEqual(objList[0].alias, 'StQ023');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'unsigned int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'unsigned char');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'unsigned short');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'unsigned long');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'signed char');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0045
  * @tc.name c_struct_0045
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0045', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ024 {
    signed short m0;
    signed long m1;
    wchar_t m2;
    char16_t m3;
    char32_t m4;
    size_t m5;
} StQ024;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ024');
      assert.strictEqual(objList[0].alias, 'StQ024');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'signed short');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'signed long');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'wchar_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'char16_t');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'char32_t');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'size_t');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0046
  * @tc.name c_struct_0046
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0046', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ025 {
    int8_t m0;
    int16_t m1;
    int32_t m2;
    int64_t m3;
    uint8_t m4;
    uint16_t m5;
} StQ025;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ025');
      assert.strictEqual(objList[0].alias, 'StQ025');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int8_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int16_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int32_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int64_t');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'uint8_t');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'uint16_t');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0047
  * @tc.name c_struct_0047
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0047', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ026 {
    uint32_t m0;
    uint64_t m1;
    std::string m2;
    string m3;
    std::wstring m4;
    long double m5;
} StQ026;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ026');
      assert.strictEqual(objList[0].alias, 'StQ026');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'uint32_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'uint64_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'std::string');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'string');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'std::wstring');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'long double');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0048
  * @tc.name c_struct_0048
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0048', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ027 {
    void m0;
    std::vector<int> m1;
    std::vector<std::string> m2;
    std::vector<double> m3;
    std::vector<bool> m4;
    std::map<std::string,int> m5;
} StQ027;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ027');
      assert.strictEqual(objList[0].alias, 'StQ027');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'void');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0049
  * @tc.name c_struct_0049
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0049', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ028 {
    std::map<int,std::string> m0;
    std::set<int> m1;
    std::set<std::string> m2;
    std::list<int> m3;
    std::list<std::string> m4;
    std::deque<int> m5;
} StQ028;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ028');
      assert.strictEqual(objList[0].alias, 'StQ028');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0049 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0050
  * @tc.name c_struct_0050
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0050', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ029 {
    std::deque<std::string> m0;
    std::pair<int,int> m1;
    std::pair<std::string,int> m2;
    std::tuple<int,int,int> m3;
    std::tuple<std::string,int,double> m4;
    std::queue<int> m5;
} StQ029;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ029');
      assert.strictEqual(objList[0].alias, 'StQ029');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0050 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0051
  * @tc.name c_struct_0051
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0051', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ030 {
    std::stack<int> m0;
    std::priority_queue<int> m1;
    std::multimap<int,int> m2;
    std::multiset<int> m3;
    std::unordered_map<std::string,int> m4;
    std::unordered_set<int> m5;
} StQ030;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ030');
      assert.strictEqual(objList[0].alias, 'StQ030');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0052
  * @tc.name c_struct_0052
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0052', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ031 {
    std::unordered_multimap<int,int> m0;
    std::unordered_multiset<int> m1;
    std::array<int,10> m2;
    std::array<std::string,5> m3;
    std::forward_list<int> m4;
    std::valarray<double> m5;
} StQ031;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ031');
      assert.strictEqual(objList[0].alias, 'StQ031');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0053
  * @tc.name c_struct_0053
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0053', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ032 {
    std::complex<double> m0;
    std::function<int(int,int)> m1;
    std::function<void(std::string)> m2;
    int m3;
    char m4;
    short m5;
} StQ032;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ032');
      assert.strictEqual(objList[0].alias, 'StQ032');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'm3');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm4');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'm5');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0054
  * @tc.name c_struct_0054
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0054', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ033 {
    long m0;
    long long m1;
    float m2;
    double m3;
    bool m4;
    unsigned int m5;
} StQ033;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ033');
      assert.strictEqual(objList[0].alias, 'StQ033');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'long');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'long long');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'float');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'double');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'bool');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'unsigned int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0055
  * @tc.name c_struct_0055
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0055', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ034 {
    unsigned char m0;
    unsigned short m1;
    unsigned long m2;
    unsigned long long m3;
    signed char m4;
    signed short m5;
} StQ034;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ034');
      assert.strictEqual(objList[0].alias, 'StQ034');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'unsigned char');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'unsigned short');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'unsigned long');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'signed char');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'signed short');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0056
  * @tc.name c_struct_0056
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0056', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ035 {
    signed long m0;
    wchar_t m1;
    char16_t m2;
    char32_t m3;
    size_t m4;
    int8_t m5;
} StQ035;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ035');
      assert.strictEqual(objList[0].alias, 'StQ035');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'signed long');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'wchar_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'char16_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'char32_t');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'size_t');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int8_t');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0057
  * @tc.name c_struct_0057
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0057', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ036 {
    int16_t m0;
    int32_t m1;
    int64_t m2;
    uint8_t m3;
    uint16_t m4;
    uint32_t m5;
} StQ036;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ036');
      assert.strictEqual(objList[0].alias, 'StQ036');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int16_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int32_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int64_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'uint8_t');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'uint16_t');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'uint32_t');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0058
  * @tc.name c_struct_0058
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0058', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ037 {
    uint64_t m0;
    std::string m1;
    string m2;
    std::wstring m3;
    long double m4;
    void m5;
} StQ037;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ037');
      assert.strictEqual(objList[0].alias, 'StQ037');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'uint64_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'string');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'std::wstring');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'long double');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'void');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0058 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0059
  * @tc.name c_struct_0059
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0059', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ038 {
    std::vector<int> m0;
    std::vector<std::string> m1;
    std::vector<double> m2;
    std::vector<bool> m3;
    std::map<std::string,int> m4;
    std::map<int,std::string> m5;
} StQ038;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ038');
      assert.strictEqual(objList[0].alias, 'StQ038');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0059 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0060
  * @tc.name c_struct_0060
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0060', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ039 {
    std::set<int> m0;
    std::set<std::string> m1;
    std::list<int> m2;
    std::list<std::string> m3;
    std::deque<int> m4;
    std::deque<std::string> m5;
} StQ039;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ039');
      assert.strictEqual(objList[0].alias, 'StQ039');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0060 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0061
  * @tc.name c_struct_0061
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0061', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StQ040 {
    std::pair<int,int> m0;
    std::pair<std::string,int> m1;
    std::tuple<int,int,int> m2;
    std::tuple<std::string,int,double> m3;
    std::queue<int> m4;
    std::stack<int> m5;
} StQ040;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StQ040');
      assert.strictEqual(objList[0].alias, 'StQ040');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0061 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0061 执行异常: ${String(err)}`);
    }
  });

});
