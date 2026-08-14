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
  vscode.window.showInformationMessage('Start Performance_C_Union_Suite part02.');

  /**
  * @tc.number c_union_0015
  * @tc.name c_union_0015
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0015', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    char m1;
    short m2;
    long m3;
} UnM000;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM000');
      assert.strictEqual(objList[0].alias, 'UnM000');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'char');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'short');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'long');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0016
  * @tc.name c_union_0016
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0016', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    long long m0;
    float m1;
    double m2;
    bool m3;
} UnM001;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM001');
      assert.strictEqual(objList[0].alias, 'UnM001');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'long long');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'float');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'double');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'bool');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0017
  * @tc.name c_union_0017
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0017', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    unsigned int m0;
    unsigned char m1;
    unsigned short m2;
    unsigned long m3;
} UnM002;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM002');
      assert.strictEqual(objList[0].alias, 'UnM002');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'unsigned int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'unsigned char');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'unsigned short');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'unsigned long');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0018
  * @tc.name c_union_0018
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0018', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    unsigned long long m0;
    signed char m1;
    signed short m2;
    signed long m3;
} UnM003;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM003');
      assert.strictEqual(objList[0].alias, 'UnM003');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'signed char');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'signed short');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'signed long');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0019
  * @tc.name c_union_0019
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0019', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    wchar_t m0;
    char16_t m1;
    char32_t m2;
    size_t m3;
} UnM004;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM004');
      assert.strictEqual(objList[0].alias, 'UnM004');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'wchar_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'char16_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'char32_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'size_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0020
  * @tc.name c_union_0020
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0020', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int8_t m0;
    int16_t m1;
    int32_t m2;
    int64_t m3;
} UnM005;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM005');
      assert.strictEqual(objList[0].alias, 'UnM005');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int8_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int16_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int32_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int64_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0021
  * @tc.name c_union_0021
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0021', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    uint8_t m0;
    uint16_t m1;
    uint32_t m2;
    uint64_t m3;
} UnM006;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM006');
      assert.strictEqual(objList[0].alias, 'UnM006');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'uint8_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'uint16_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'uint32_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'uint64_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0022
  * @tc.name c_union_0022
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0022', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::string m0;
    string m1;
    std::wstring m2;
    long double m3;
} UnM007;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM007');
      assert.strictEqual(objList[0].alias, 'UnM007');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'string');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'string');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'wstring');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'long double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0023
  * @tc.name c_union_0023
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0023', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    void m0;
    std::vector<int> m1;
    std::vector<std::string> m2;
    std::vector<double> m3;
} UnM008;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM008');
      assert.strictEqual(objList[0].alias, 'UnM008');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'void');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::vector<int> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::vector<std::string> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::vector<double> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0024
  * @tc.name c_union_0024
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0024', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::vector<bool> m0;
    std::map<std::string,int> m1;
    std::map<int,std::string> m2;
    std::set<int> m3;
} UnM009;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM009');
      assert.strictEqual(objList[0].alias, 'UnM009');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::vector<bool> m0');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::map<std::string,int> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::map<int,std::string> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::set<int> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0025
  * @tc.name c_union_0025
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0025', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::set<std::string> m0;
    std::list<int> m1;
    std::list<std::string> m2;
    std::deque<int> m3;
} UnM010;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM010');
      assert.strictEqual(objList[0].alias, 'UnM010');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::set<std::string> m0');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::list<int> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::list<std::string> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::deque<int> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0026
  * @tc.name c_union_0026
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0026', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::deque<std::string> m0;
    std::pair<int,int> m1;
    std::pair<std::string,int> m2;
    std::tuple<int,int,int> m3;
} UnM011;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM011');
      assert.strictEqual(objList[0].alias, 'UnM011');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::deque<std::string> m0');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::pair<int,int> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::pair<std::string,int> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::tuple<int,int,int> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0027
  * @tc.name c_union_0027
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0027', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::tuple<std::string,int,double> m0;
    std::queue<int> m1;
    std::stack<int> m2;
    std::priority_queue<int> m3;
} UnM012;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM012');
      assert.strictEqual(objList[0].alias, 'UnM012');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::tuple<std::string,int,double> m0');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::queue<int> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::stack<int> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::priority_queue<int> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0028
  * @tc.name c_union_0028
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0028', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::multimap<int,int> m0;
    std::multiset<int> m1;
    std::unordered_map<std::string,int> m2;
    std::unordered_set<int> m3;
} UnM013;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM013');
      assert.strictEqual(objList[0].alias, 'UnM013');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::multimap<int,int> m0');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::multiset<int> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::unordered_map<std::string,int> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::unordered_set<int> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0029
  * @tc.name c_union_0029
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0029', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::unordered_multimap<int,int> m0;
    std::unordered_multiset<int> m1;
    std::array<int,10> m2;
    std::array<std::string,5> m3;
} UnM014;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM014');
      assert.strictEqual(objList[0].alias, 'UnM014');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::unordered_multimap<int,int> m0');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::unordered_multiset<int> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::array<int,10> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::array<std::string,5> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0030
  * @tc.name c_union_0030
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0030', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::forward_list<int> m0;
    std::valarray<double> m1;
    std::complex<double> m2;
    std::function<int(int,int)> m3;
} UnM015;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM015');
      assert.strictEqual(objList[0].alias, 'UnM015');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::forward_list<int> m0');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::valarray<double> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::complex<double> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::function<int(int,int)> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0031
  * @tc.name c_union_0031
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0031', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::function<void(std::string)> m0;
    int m1;
    char m2;
    short m3;
} UnM016;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM016');
      assert.strictEqual(objList[0].alias, 'UnM016');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::function<void(std::string)> m0');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'char');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'short');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0032
  * @tc.name c_union_0032
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0032', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    long m0;
    long long m1;
    float m2;
    double m3;
} UnM017;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM017');
      assert.strictEqual(objList[0].alias, 'UnM017');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'long');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'long long');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'float');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0033
  * @tc.name c_union_0033
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0033', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    bool m0;
    unsigned int m1;
    unsigned char m2;
    unsigned short m3;
} UnM018;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM018');
      assert.strictEqual(objList[0].alias, 'UnM018');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'bool');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'unsigned int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'unsigned char');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'unsigned short');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0034
  * @tc.name c_union_0034
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0034', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    unsigned long m0;
    unsigned long long m1;
    signed char m2;
    signed short m3;
} UnM019;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM019');
      assert.strictEqual(objList[0].alias, 'UnM019');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'unsigned long');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'unsigned long long');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'signed char');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'signed short');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0035
  * @tc.name c_union_0035
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0035', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    signed long m0;
    wchar_t m1;
    char16_t m2;
    char32_t m3;
} UnM020;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM020');
      assert.strictEqual(objList[0].alias, 'UnM020');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'signed long');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'wchar_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'char16_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'char32_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0036
  * @tc.name c_union_0036
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0036', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    size_t m0;
    int8_t m1;
    int16_t m2;
    int32_t m3;
} UnM021;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM021');
      assert.strictEqual(objList[0].alias, 'UnM021');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'size_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int8_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int16_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int32_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0037
  * @tc.name c_union_0037
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0037', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int64_t m0;
    uint8_t m1;
    uint16_t m2;
    uint32_t m3;
} UnM022;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM022');
      assert.strictEqual(objList[0].alias, 'UnM022');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int64_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'uint8_t');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'uint16_t');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'uint32_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0038
  * @tc.name c_union_0038
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0038', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    uint64_t m0;
    std::string m1;
    string m2;
    std::wstring m3;
} UnM023;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM023');
      assert.strictEqual(objList[0].alias, 'UnM023');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'uint64_t');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'string');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'string');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'wstring');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0039
  * @tc.name c_union_0039
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0039', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    long double m0;
    void m1;
    std::vector<int> m2;
    std::vector<std::string> m3;
} UnM024;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM024');
      assert.strictEqual(objList[0].alias, 'UnM024');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'long double');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'void');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::vector<int> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::vector<std::string> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0040
  * @tc.name c_union_0040
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0040', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::vector<double> m0;
    std::vector<bool> m1;
    std::map<std::string,int> m2;
    std::map<int,std::string> m3;
} UnM025;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM025');
      assert.strictEqual(objList[0].alias, 'UnM025');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::vector<double> m0');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::vector<bool> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::map<std::string,int> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::map<int,std::string> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0041
  * @tc.name c_union_0041
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0041', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::set<int> m0;
    std::set<std::string> m1;
    std::list<int> m2;
    std::list<std::string> m3;
} UnM026;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM026');
      assert.strictEqual(objList[0].alias, 'UnM026');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::set<int> m0');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::set<std::string> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::list<int> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::list<std::string> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0042
  * @tc.name c_union_0042
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0042', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::deque<int> m0;
    std::deque<std::string> m1;
    std::pair<int,int> m2;
    std::pair<std::string,int> m3;
} UnM027;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM027');
      assert.strictEqual(objList[0].alias, 'UnM027');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::deque<int> m0');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::deque<std::string> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::pair<int,int> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::pair<std::string,int> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0043
  * @tc.name c_union_0043
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0043', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::tuple<int,int,int> m0;
    std::tuple<std::string,int,double> m1;
    std::queue<int> m2;
    std::stack<int> m3;
} UnM028;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM028');
      assert.strictEqual(objList[0].alias, 'UnM028');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::tuple<int,int,int> m0');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::tuple<std::string,int,double> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::queue<int> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::stack<int> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0044
  * @tc.name c_union_0044
  * @tc.desc h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0044', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    std::priority_queue<int> m0;
    std::multimap<int,int> m1;
    std::multiset<int> m2;
    std::unordered_map<std::string,int> m3;
} UnM029;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnM029');
      assert.strictEqual(objList[0].alias, 'UnM029');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, '');
      assert.strictEqual(objList[0].members[0].type, 'std::priority_queue<int> m0');
      assert.strictEqual(objList[0].members[1].name, '');
      assert.strictEqual(objList[0].members[1].type, 'std::multimap<int,int> m1');
      assert.strictEqual(objList[0].members[2].name, '');
      assert.strictEqual(objList[0].members[2].type, 'std::multiset<int> m2');
      assert.strictEqual(objList[0].members[3].name, '');
      assert.strictEqual(objList[0].members[3].type, 'std::unordered_map<std::string,int> m3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0045
  * @tc.name c_union_0045
  * @tc.desc h2dts parseUnion：扩充-规模：2 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0045', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
} UnN02;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN02');
      assert.strictEqual(objList[0].alias, 'UnN02');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0046
  * @tc.name c_union_0046
  * @tc.desc h2dts parseUnion：扩充-规模：3 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0046', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
} UnN03;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN03');
      assert.strictEqual(objList[0].alias, 'UnN03');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0047
  * @tc.name c_union_0047
  * @tc.desc h2dts parseUnion：扩充-规模：4 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0047', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
} UnN04;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN04');
      assert.strictEqual(objList[0].alias, 'UnN04');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0048
  * @tc.name c_union_0048
  * @tc.desc h2dts parseUnion：扩充-规模：5 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0048', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
} UnN05;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN05');
      assert.strictEqual(objList[0].alias, 'UnN05');
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0049
  * @tc.name c_union_0049
  * @tc.desc h2dts parseUnion：扩充-规模：6 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0049', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
} UnN06;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN06');
      assert.strictEqual(objList[0].alias, 'UnN06');
      assert.strictEqual(objList[0].members.length, 6);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0049 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0050
  * @tc.name c_union_0050
  * @tc.desc h2dts parseUnion：扩充-规模：7 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0050', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
} UnN07;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN07');
      assert.strictEqual(objList[0].alias, 'UnN07');
      assert.strictEqual(objList[0].members.length, 7);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0050 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0051
  * @tc.name c_union_0051
  * @tc.desc h2dts parseUnion：扩充-规模：8 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0051', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
} UnN08;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN08');
      assert.strictEqual(objList[0].alias, 'UnN08');
      assert.strictEqual(objList[0].members.length, 8);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0052
  * @tc.name c_union_0052
  * @tc.desc h2dts parseUnion：扩充-规模：9 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0052', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
    int m8;
} UnN09;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN09');
      assert.strictEqual(objList[0].alias, 'UnN09');
      assert.strictEqual(objList[0].members.length, 9);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'm8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0053
  * @tc.name c_union_0053
  * @tc.desc h2dts parseUnion：扩充-规模：10 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0053', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
    int m8;
    int m9;
} UnN10;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN10');
      assert.strictEqual(objList[0].alias, 'UnN10');
      assert.strictEqual(objList[0].members.length, 10);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'm8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'm9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0054
  * @tc.name c_union_0054
  * @tc.desc h2dts parseUnion：扩充-规模：11 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0054', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
    int m8;
    int m9;
    int m10;
} UnN11;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN11');
      assert.strictEqual(objList[0].alias, 'UnN11');
      assert.strictEqual(objList[0].members.length, 11);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'm8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'm9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.strictEqual(objList[0].members[10].name, 'm10');
      assert.strictEqual(objList[0].members[10].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0054 执行异常: ${String(err)}`);
    }
  });

});
