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
  vscode.window.showInformationMessage('Start Performance_C_Struct_Suite part07.');

  /**
  * @tc.number c_struct_0176
  * @tc.name c_struct_0176
  * @tc.desc h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0176', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct NewTSt000 {
    std::shared_ptr<int> m0;
    std::shared_ptr<std::string> m1;
    std::shared_ptr<double> m2;
    std::unique_ptr<int> m3;
    std::unique_ptr<std::string> m4;
    std::unique_ptr<char> m5;
    std::weak_ptr<int> m6;
    std::weak_ptr<std::string> m7;
} NewTSt000;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTSt000');
      assert.strictEqual(objList[0].alias, 'NewTSt000');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0176 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0177
  * @tc.name c_struct_0177
  * @tc.desc h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0177', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct NewTSt001 {
    std::optional<int> m0;
    std::optional<std::string> m1;
    std::optional<double> m2;
    std::optional<bool> m3;
    std::variant<int, std::string> m4;
    std::variant<double, bool> m5;
    std::variant<int, float, double> m6;
    std::string_view m7;
} NewTSt001;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTSt001');
      assert.strictEqual(objList[0].alias, 'NewTSt001');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'm7');
      assert.strictEqual(objList[0].members[0].type, 'std::string_view');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0177 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0177 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0178
  * @tc.name c_struct_0178
  * @tc.desc h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0178', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct NewTSt002 {
    std::bitset<8> m0;
    std::bitset<16> m1;
    std::bitset<32> m2;
    std::span<int> m3;
    std::span<double> m4;
    std::atomic<int> m5;
    std::atomic<bool> m6;
    std::atomic<long> m7;
} NewTSt002;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTSt002');
      assert.strictEqual(objList[0].alias, 'NewTSt002');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0178 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0179
  * @tc.name c_struct_0179
  * @tc.desc h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0179', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct NewTSt003 {
    std::basic_string<char> m0;
    std::basic_string<wchar_t> m1;
    std::byte m2;
    std::chrono::milliseconds m3;
    std::chrono::seconds m4;
    std::chrono::system_clock::time_point m5;
    std::filesystem::path m6;
    std::map<int, int> m7;
} NewTSt003;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTSt003');
      assert.strictEqual(objList[0].alias, 'NewTSt003');
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0].name, 'm2');
      assert.strictEqual(objList[0].members[0].type, 'std::byte');
      assert.strictEqual(objList[0].members[1].name, 'm3');
      assert.strictEqual(objList[0].members[1].type, 'std::chrono::milliseconds');
      assert.strictEqual(objList[0].members[2].name, 'm4');
      assert.strictEqual(objList[0].members[2].type, 'std::chrono::seconds');
      assert.strictEqual(objList[0].members[3].name, 'm5');
      assert.strictEqual(objList[0].members[3].type, 'std::chrono::system_clock::time_point');
      assert.strictEqual(objList[0].members[4].name, 'm6');
      assert.strictEqual(objList[0].members[4].type, 'std::filesystem::path');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0179 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0179 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0180
  * @tc.name c_struct_0180
  * @tc.desc h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0180', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct NewTSt004 {
    std::map<double, std::string> m0;
    std::map<std::string, std::string> m1;
    std::map<wchar_t, int> m2;
    std::map<size_t, std::string> m3;
    std::map<float, float> m4;
    std::vector<char> m5;
    std::vector<float> m6;
    std::vector<long> m7;
} NewTSt004;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTSt004');
      assert.strictEqual(objList[0].alias, 'NewTSt004');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0180 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0180 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0181
  * @tc.name c_struct_0181
  * @tc.desc h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0181', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct NewTSt005 {
    std::vector<unsigned int> m0;
    std::vector<std::wstring> m1;
    std::vector<short> m2;
    std::vector<int64_t> m3;
    std::vector<uint8_t> m4;
    std::vector<size_t> m5;
    std::vector<std::string_view> m6;
    std::pair<double, double> m7;
} NewTSt005;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTSt005');
      assert.strictEqual(objList[0].alias, 'NewTSt005');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'int');
      assert.strictEqual(objList[0].members[0].type, 'unsigned');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0181 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0181 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0182
  * @tc.name c_struct_0182
  * @tc.desc h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0182', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct NewTSt006 {
    std::pair<float, float> m0;
    std::pair<int, long> m1;
    std::tuple<int, std::string, bool> m2;
    std::tuple<double, double, double> m3;
    std::tuple<char, short, int> m4;
    std::tuple<std::string, std::string, std::string> m5;
    std::deque<float> m6;
    std::deque<long> m7;
} NewTSt006;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTSt006');
      assert.strictEqual(objList[0].alias, 'NewTSt006');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0182 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0182 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0183
  * @tc.name c_struct_0183
  * @tc.desc h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0183', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct NewTSt007 {
    std::set<double> m0;
    std::set<std::wstring> m1;
    std::list<float> m2;
    std::list<long long> m3;
    std::queue<std::string> m4;
    std::stack<double> m5;
    std::unordered_map<int, std::string> m6;
    std::unordered_map<std::string, double> m7;
} NewTSt007;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTSt007');
      assert.strictEqual(objList[0].alias, 'NewTSt007');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'long');
      assert.strictEqual(objList[0].members[0].type, 'long');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0183 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0183 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0184
  * @tc.name c_struct_0184
  * @tc.desc h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0184', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct NewTSt008 {
    std::unordered_set<double> m0;
    std::unordered_set<std::string> m1;
    std::array<double, 8> m2;
    std::array<float, 16> m3;
    std::array<int64_t, 4> m4;
    std::forward_list<double> m5;
    std::forward_list<std::string> m6;
    std::valarray<int> m7;
} NewTSt008;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTSt008');
      assert.strictEqual(objList[0].alias, 'NewTSt008');
      assert.strictEqual(objList[0].members.length, 0);
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0184 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0184 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0185
  * @tc.name c_struct_0185
  * @tc.desc h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0185', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct NewTSt009 {
    std::valarray<float> m0;
    std::complex<float> m1;
    std::complex<long double> m2;
    std::function<double(double)> m3;
    std::function<bool(int, std::string)> m4;
    std::function<void()> m5;
    std::vector<int>::const_iterator m6;
    std::map<std::string, int>::iterator m7;
} NewTSt009;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTSt009');
      assert.strictEqual(objList[0].alias, 'NewTSt009');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0].name, 'double');
      assert.strictEqual(objList[0].members[0].type, 'long');
      assert.strictEqual(objList[0].members[1].name, 'm6');
      assert.strictEqual(objList[0].members[1].type, 'const_iterator');
      assert.strictEqual(objList[0].members[2].name, 'm7');
      assert.strictEqual(objList[0].members[2].type, 'iterator');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0185 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0185 执行异常: ${String(err)}`);
    }
  });

});
