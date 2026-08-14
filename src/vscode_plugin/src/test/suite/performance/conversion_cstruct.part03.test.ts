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
  vscode.window.showInformationMessage('Start Performance_C_Struct_Suite part03.');

  /**
  * @tc.number c_struct_0062
  * @tc.name c_struct_0062
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0062', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StM041 {
    std::priority_queue<int> m0;
    std::multimap<int,int> m1;
    std::multiset<int> m2;
    std::unordered_map<std::string,int> m3;
    std::unordered_set<int> m4;
    std::unordered_multimap<int,int> m5;
} StM041;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StM041');
      assert.strictEqual(objList[0].alias, 'StM041');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0062 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0063
  * @tc.name c_struct_0063
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0063', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StM042 {
    std::unordered_multiset<int> m0;
    std::array<int,10> m1;
    std::array<std::string,5> m2;
    std::forward_list<int> m3;
    std::valarray<double> m4;
    std::complex<double> m5;
} StM042;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StM042');
      assert.strictEqual(objList[0].alias, 'StM042');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0063 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0064
  * @tc.name c_struct_0064
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0064', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StM043 {
    std::function<int(int,int)> m0;
    std::function<void(std::string)> m1;
    int m2;
    char m3;
    short m4;
    long m5;
} StM043;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StM043');
      assert.strictEqual(objList[0].alias, 'StM043');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm2');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm3');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'm4');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'm5');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0064 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0065
  * @tc.name c_struct_0065
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0065', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StM044 {
    long long m0;
    float m1;
    double m2;
    bool m3;
    unsigned int m4;
    unsigned char m5;
} StM044;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StM044');
      assert.strictEqual(objList[0].alias, 'StM044');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'long long');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'float');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'double');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'bool');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'unsigned int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'unsigned char');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0065 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0066
  * @tc.name c_struct_0066
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0066', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StM045 {
    unsigned short m0;
    unsigned long m1;
    unsigned long long m2;
    signed char m3;
    signed short m4;
    signed long m5;
} StM045;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StM045');
      assert.strictEqual(objList[0].alias, 'StM045');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'unsigned short');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'unsigned long');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'signed char');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'signed short');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'signed long');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0066 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0067
  * @tc.name c_struct_0067
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0067', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StM046 {
    wchar_t m0;
    char16_t m1;
    char32_t m2;
    size_t m3;
    int8_t m4;
    int16_t m5;
} StM046;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StM046');
      assert.strictEqual(objList[0].alias, 'StM046');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'wchar_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'char16_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'char32_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'size_t');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int8_t');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int16_t');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0067 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0068
  * @tc.name c_struct_0068
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0068', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StM047 {
    int32_t m0;
    int64_t m1;
    uint8_t m2;
    uint16_t m3;
    uint32_t m4;
    uint64_t m5;
} StM047;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StM047');
      assert.strictEqual(objList[0].alias, 'StM047');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int32_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int64_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'uint8_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'uint16_t');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'uint32_t');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'uint64_t');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0068 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0069
  * @tc.name c_struct_0069
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0069', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StM048 {
    std::string m0;
    string m1;
    std::wstring m2;
    long double m3;
    void m4;
    std::vector<int> m5;
} StM048;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StM048');
      assert.strictEqual(objList[0].alias, 'StM048');
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'std::string');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'string');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'std::wstring');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'long double');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'void');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0069 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0070
  * @tc.name c_struct_0070
  * @tc.desc h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0070', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StM049 {
    std::vector<std::string> m0;
    std::vector<double> m1;
    std::vector<bool> m2;
    std::map<std::string,int> m3;
    std::map<int,std::string> m4;
    std::set<int> m5;
} StM049;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StM049');
      assert.strictEqual(objList[0].alias, 'StM049');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0070 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0070 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0071
  * @tc.name c_struct_0071
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0071', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC000 {
    std::vector<int> c0;
    std::vector<std::string> c1;
    std::vector<double> c2;
    std::vector<bool> c3;
    std::map<std::string,int> c4;
    std::map<int,std::string> c5;
} StC000;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC000');
      assert.strictEqual(objList[0].alias, 'StC000');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0071 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0072
  * @tc.name c_struct_0072
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0072', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC001 {
    std::set<int> c0;
    std::set<std::string> c1;
    std::list<int> c2;
    std::list<std::string> c3;
    std::deque<int> c4;
    std::deque<std::string> c5;
} StC001;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC001');
      assert.strictEqual(objList[0].alias, 'StC001');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0072 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0073
  * @tc.name c_struct_0073
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0073', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC002 {
    std::pair<int,int> c0;
    std::pair<std::string,int> c1;
    std::tuple<int,int,int> c2;
    std::tuple<std::string,int,double> c3;
    std::queue<int> c4;
    std::stack<int> c5;
} StC002;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC002');
      assert.strictEqual(objList[0].alias, 'StC002');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0073 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0074
  * @tc.name c_struct_0074
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0074', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC003 {
    std::priority_queue<int> c0;
    std::multimap<int,int> c1;
    std::multiset<int> c2;
    std::unordered_map<std::string,int> c3;
    std::unordered_set<int> c4;
    std::unordered_multimap<int,int> c5;
} StC003;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC003');
      assert.strictEqual(objList[0].alias, 'StC003');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0074 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0075
  * @tc.name c_struct_0075
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0075', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC004 {
    std::unordered_multiset<int> c0;
    std::array<int,10> c1;
    std::array<std::string,5> c2;
    std::forward_list<int> c3;
    std::valarray<double> c4;
    std::complex<double> c5;
} StC004;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC004');
      assert.strictEqual(objList[0].alias, 'StC004');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0075 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0076
  * @tc.name c_struct_0076
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0076', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC005 {
    std::function<int(int,int)> c0;
    std::function<void(std::string)> c1;
    std::vector<int> c2;
    std::vector<std::string> c3;
    std::vector<double> c4;
    std::vector<bool> c5;
} StC005;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC005');
      assert.strictEqual(objList[0].alias, 'StC005');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0076 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0077
  * @tc.name c_struct_0077
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0077', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC006 {
    std::map<std::string,int> c0;
    std::map<int,std::string> c1;
    std::set<int> c2;
    std::set<std::string> c3;
    std::list<int> c4;
    std::list<std::string> c5;
} StC006;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC006');
      assert.strictEqual(objList[0].alias, 'StC006');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0077 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0078
  * @tc.name c_struct_0078
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0078', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC007 {
    std::deque<int> c0;
    std::deque<std::string> c1;
    std::pair<int,int> c2;
    std::pair<std::string,int> c3;
    std::tuple<int,int,int> c4;
    std::tuple<std::string,int,double> c5;
} StC007;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC007');
      assert.strictEqual(objList[0].alias, 'StC007');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0078 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0079
  * @tc.name c_struct_0079
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0079', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC008 {
    std::queue<int> c0;
    std::stack<int> c1;
    std::priority_queue<int> c2;
    std::multimap<int,int> c3;
    std::multiset<int> c4;
    std::unordered_map<std::string,int> c5;
} StC008;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC008');
      assert.strictEqual(objList[0].alias, 'StC008');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0079 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0080
  * @tc.name c_struct_0080
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0080', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC009 {
    std::unordered_set<int> c0;
    std::unordered_multimap<int,int> c1;
    std::unordered_multiset<int> c2;
    std::array<int,10> c3;
    std::array<std::string,5> c4;
    std::forward_list<int> c5;
} StC009;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC009');
      assert.strictEqual(objList[0].alias, 'StC009');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0080 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0081
  * @tc.name c_struct_0081
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0081', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC010 {
    std::valarray<double> c0;
    std::complex<double> c1;
    std::function<int(int,int)> c2;
    std::function<void(std::string)> c3;
    std::vector<int> c4;
    std::vector<std::string> c5;
} StC010;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC010');
      assert.strictEqual(objList[0].alias, 'StC010');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0081 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0082
  * @tc.name c_struct_0082
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0082', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC011 {
    std::vector<double> c0;
    std::vector<bool> c1;
    std::map<std::string,int> c2;
    std::map<int,std::string> c3;
    std::set<int> c4;
    std::set<std::string> c5;
} StC011;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC011');
      assert.strictEqual(objList[0].alias, 'StC011');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0082 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0083
  * @tc.name c_struct_0083
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0083', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC012 {
    std::list<int> c0;
    std::list<std::string> c1;
    std::deque<int> c2;
    std::deque<std::string> c3;
    std::pair<int,int> c4;
    std::pair<std::string,int> c5;
} StC012;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC012');
      assert.strictEqual(objList[0].alias, 'StC012');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0083 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0084
  * @tc.name c_struct_0084
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0084', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC013 {
    std::tuple<int,int,int> c0;
    std::tuple<std::string,int,double> c1;
    std::queue<int> c2;
    std::stack<int> c3;
    std::priority_queue<int> c4;
    std::multimap<int,int> c5;
} StC013;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC013');
      assert.strictEqual(objList[0].alias, 'StC013');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0084 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0085
  * @tc.name c_struct_0085
  * @tc.desc h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0085', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StC014 {
    std::multiset<int> c0;
    std::unordered_map<std::string,int> c1;
    std::unordered_set<int> c2;
    std::unordered_multimap<int,int> c3;
    std::unordered_multiset<int> c4;
    std::array<int,10> c5;
} StC014;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StC014');
      assert.strictEqual(objList[0].alias, 'StC014');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0085 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0086
  * @tc.name c_struct_0086
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0086', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA000 {
    int a[4];
    double d[8][2];
    char* p;
    std::string s[4];
    int* ip;
    float f[16];
} StA000;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA000');
      assert.strictEqual(objList[0].alias, 'StA000');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0086 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0087
  * @tc.name c_struct_0087
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0087', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA001 {
    int a[5];
    double d[9][2];
    char* p;
    std::string s[5];
    int* ip;
    float f[16];
} StA001;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA001');
      assert.strictEqual(objList[0].alias, 'StA001');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0087 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0088
  * @tc.name c_struct_0088
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0088', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA002 {
    int a[6];
    double d[10][2];
    char* p;
    std::string s[6];
    int* ip;
    float f[16];
} StA002;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA002');
      assert.strictEqual(objList[0].alias, 'StA002');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0088 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0089
  * @tc.name c_struct_0089
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0089', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA003 {
    int a[7];
    double d[11][2];
    char* p;
    std::string s[7];
    int* ip;
    float f[16];
} StA003;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA003');
      assert.strictEqual(objList[0].alias, 'StA003');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0089 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0090
  * @tc.name c_struct_0090
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0090', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA004 {
    int a[8];
    double d[12][2];
    char* p;
    std::string s[8];
    int* ip;
    float f[16];
} StA004;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA004');
      assert.strictEqual(objList[0].alias, 'StA004');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0091
  * @tc.name c_struct_0091
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0091', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA005 {
    int a[9];
    double d[13][2];
    char* p;
    std::string s[4];
    int* ip;
    float f[16];
} StA005;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA005');
      assert.strictEqual(objList[0].alias, 'StA005');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0092
  * @tc.name c_struct_0092
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0092', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA006 {
    int a[10];
    double d[14][2];
    char* p;
    std::string s[5];
    int* ip;
    float f[16];
} StA006;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA006');
      assert.strictEqual(objList[0].alias, 'StA006');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0093
  * @tc.name c_struct_0093
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0093', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA007 {
    int a[11];
    double d[15][2];
    char* p;
    std::string s[6];
    int* ip;
    float f[16];
} StA007;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA007');
      assert.strictEqual(objList[0].alias, 'StA007');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0094
  * @tc.name c_struct_0094
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0094', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA008 {
    int a[12];
    double d[16][2];
    char* p;
    std::string s[7];
    int* ip;
    float f[16];
} StA008;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA008');
      assert.strictEqual(objList[0].alias, 'StA008');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0095
  * @tc.name c_struct_0095
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0095', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA009 {
    int a[13];
    double d[17][2];
    char* p;
    std::string s[8];
    int* ip;
    float f[16];
} StA009;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA009');
      assert.strictEqual(objList[0].alias, 'StA009');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0095 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0096
  * @tc.name c_struct_0096
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0096', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA010 {
    int a[14];
    double d[18][2];
    char* p;
    std::string s[4];
    int* ip;
    float f[16];
} StA010;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA010');
      assert.strictEqual(objList[0].alias, 'StA010');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0096 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0097
  * @tc.name c_struct_0097
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0097', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA011 {
    int a[15];
    double d[19][2];
    char* p;
    std::string s[5];
    int* ip;
    float f[16];
} StA011;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA011');
      assert.strictEqual(objList[0].alias, 'StA011');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0097 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0098
  * @tc.name c_struct_0098
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0098', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA012 {
    int a[16];
    double d[20][2];
    char* p;
    std::string s[6];
    int* ip;
    float f[16];
} StA012;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA012');
      assert.strictEqual(objList[0].alias, 'StA012');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0098 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0099
  * @tc.name c_struct_0099
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0099', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA013 {
    int a[17];
    double d[21][2];
    char* p;
    std::string s[7];
    int* ip;
    float f[16];
} StA013;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA013');
      assert.strictEqual(objList[0].alias, 'StA013');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0099 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0099 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0100
  * @tc.name c_struct_0100
  * @tc.desc h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0100', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StA014 {
    int a[18];
    double d[22][2];
    char* p;
    std::string s[8];
    int* ip;
    float f[16];
} StA014;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StA014');
      assert.strictEqual(objList[0].alias, 'StA014');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].members[2].name, 'p');
      assert.strictEqual(objList[0].members[2].type, 'char*');
      assert.strictEqual(objList[0].members[3].name, 's');
      assert.strictEqual(objList[0].members[3].type, 'std::string');
      assert.strictEqual(objList[0].members[4].name, 'ip');
      assert.strictEqual(objList[0].members[4].type, 'int*');
      assert.strictEqual(objList[0].members[5].name, 'f');
      assert.strictEqual(objList[0].members[5].type, 'float');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0100 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0101
  * @tc.name c_struct_0101
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0101', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF000 {
    int v;
    int m0();
    char m1();
    short m2();
    long m3();
} StF000;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF000');
      assert.strictEqual(objList[0].alias, 'StF000');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'int');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'char');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'short');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'long');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0101 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0101 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0102
  * @tc.name c_struct_0102
  * @tc.desc h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0102', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct StF001 {
    int v;
    long long m0();
    float m1();
    double m2();
    bool m3();
} StF001;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StF001');
      assert.strictEqual(objList[0].alias, 'StF001');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 4);
      assert.strictEqual(objList[0].functions[0].name, 'm0');
      assert.strictEqual(objList[0].functions[0].returns, 'long long');
      assert.strictEqual(objList[0].functions[1].name, 'm1');
      assert.strictEqual(objList[0].functions[1].returns, 'float');
      assert.strictEqual(objList[0].functions[2].name, 'm2');
      assert.strictEqual(objList[0].functions[2].returns, 'double');
      assert.strictEqual(objList[0].functions[3].name, 'm3');
      assert.strictEqual(objList[0].functions[3].returns, 'bool');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0102 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0102 执行异常: ${String(err)}`);
    }
  });

});
