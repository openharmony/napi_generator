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

suite('Performance_C_Class_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Class_Suite part09.');

  /**
  * @tc.number c_class_0238
  * @tc.name c_class_0238
  * @tc.desc h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0238', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class NewTCls000 {
    std::shared_ptr<int> m0;
    std::shared_ptr<std::string> m1;
    std::shared_ptr<double> m2;
    std::unique_ptr<int> m3;
    std::unique_ptr<std::string> m4;
    std::unique_ptr<char> m5;
    std::weak_ptr<int> m6;
    std::weak_ptr<std::string> m7;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTCls000');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 8);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::shared_ptr<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::shared_ptr<std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::shared_ptr<double>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::unique_ptr<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::unique_ptr<std::string>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::unique_ptr<char>');
      assert.strictEqual(objList[0].variableList[6].name, 'm6');
      assert.strictEqual(objList[0].variableList[6].type, 'std::weak_ptr<int>');
      assert.strictEqual(objList[0].variableList[7].name, 'm7');
      assert.strictEqual(objList[0].variableList[7].type, 'std::weak_ptr<std::string>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0238 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0238 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0239
  * @tc.name c_class_0239
  * @tc.desc h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0239', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class NewTCls001 {
    std::optional<int> m0;
    std::optional<std::string> m1;
    std::optional<double> m2;
    std::optional<bool> m3;
    std::variant<int, std::string> m4;
    std::variant<double, bool> m5;
    std::variant<int, float, double> m6;
    std::string_view m7;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTCls001');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 8);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::optional<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::optional<std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::optional<double>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::optional<bool>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::variant<int, std::string>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::variant<double, bool>');
      assert.strictEqual(objList[0].variableList[6].name, 'm6');
      assert.strictEqual(objList[0].variableList[6].type, 'std::variant<int, float, double>');
      assert.strictEqual(objList[0].variableList[7].name, 'm7');
      assert.strictEqual(objList[0].variableList[7].type, 'std::string_view');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0239 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0239 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0240
  * @tc.name c_class_0240
  * @tc.desc h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0240', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class NewTCls002 {
    std::bitset<8> m0;
    std::bitset<16> m1;
    std::bitset<32> m2;
    std::span<int> m3;
    std::span<double> m4;
    std::atomic<int> m5;
    std::atomic<bool> m6;
    std::atomic<long> m7;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTCls002');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 8);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::bitset<8>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::bitset<16>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::bitset<32>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::span<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::span<double>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::atomic<int>');
      assert.strictEqual(objList[0].variableList[6].name, 'm6');
      assert.strictEqual(objList[0].variableList[6].type, 'std::atomic<bool>');
      assert.strictEqual(objList[0].variableList[7].name, 'm7');
      assert.strictEqual(objList[0].variableList[7].type, 'std::atomic<long>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0240 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0240 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0241
  * @tc.name c_class_0241
  * @tc.desc h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0241', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class NewTCls003 {
    std::basic_string<char> m0;
    std::basic_string<wchar_t> m1;
    std::byte m2;
    std::chrono::milliseconds m3;
    std::chrono::seconds m4;
    std::chrono::system_clock::time_point m5;
    std::filesystem::path m6;
    std::map<int, int> m7;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTCls003');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 8);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::basic_string<char>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::basic_string<wchar_t>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::byte');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::chrono::milliseconds');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::chrono::seconds');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::chrono::system_clock::time_point');
      assert.strictEqual(objList[0].variableList[6].name, 'm6');
      assert.strictEqual(objList[0].variableList[6].type, 'std::filesystem::path');
      assert.strictEqual(objList[0].variableList[7].name, 'm7');
      assert.strictEqual(objList[0].variableList[7].type, 'std::map<int, int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0241 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0241 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0242
  * @tc.name c_class_0242
  * @tc.desc h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0242', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class NewTCls004 {
    std::map<double, std::string> m0;
    std::map<std::string, std::string> m1;
    std::map<wchar_t, int> m2;
    std::map<size_t, std::string> m3;
    std::map<float, float> m4;
    std::vector<char> m5;
    std::vector<float> m6;
    std::vector<long> m7;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTCls004');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 8);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::map<double, std::string>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::map<std::string, std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::map<wchar_t, int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::map<size_t, std::string>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::map<float, float>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::vector<char>');
      assert.strictEqual(objList[0].variableList[6].name, 'm6');
      assert.strictEqual(objList[0].variableList[6].type, 'std::vector<float>');
      assert.strictEqual(objList[0].variableList[7].name, 'm7');
      assert.strictEqual(objList[0].variableList[7].type, 'std::vector<long>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0242 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0242 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0243
  * @tc.name c_class_0243
  * @tc.desc h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0243', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class NewTCls005 {
    std::vector<unsigned int> m0;
    std::vector<std::wstring> m1;
    std::vector<short> m2;
    std::vector<int64_t> m3;
    std::vector<uint8_t> m4;
    std::vector<size_t> m5;
    std::vector<std::string_view> m6;
    std::pair<double, double> m7;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTCls005');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 8);
      assert.strictEqual(objList[0].variableList[0].name, 'int');
      assert.strictEqual(objList[0].variableList[0].type, 'unsigned');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::vector<std::wstring>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::vector<short>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::vector<int64_t>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::vector<uint8_t>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::vector<size_t>');
      assert.strictEqual(objList[0].variableList[6].name, 'm6');
      assert.strictEqual(objList[0].variableList[6].type, 'std::vector<std::string_view>');
      assert.strictEqual(objList[0].variableList[7].name, 'm7');
      assert.strictEqual(objList[0].variableList[7].type, 'std::pair<double, double>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0243 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0243 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0244
  * @tc.name c_class_0244
  * @tc.desc h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0244', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class NewTCls006 {
    std::pair<float, float> m0;
    std::pair<int, long> m1;
    std::tuple<int, std::string, bool> m2;
    std::tuple<double, double, double> m3;
    std::tuple<char, short, int> m4;
    std::tuple<std::string, std::string, std::string> m5;
    std::deque<float> m6;
    std::deque<long> m7;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTCls006');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 8);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::pair<float, float>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::pair<int, long>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::tuple<int, std::string, bool>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::tuple<double, double, double>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::tuple<char, short, int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::tuple<std::string, std::string, std::string>');
      assert.strictEqual(objList[0].variableList[6].name, 'm6');
      assert.strictEqual(objList[0].variableList[6].type, 'std::deque<float>');
      assert.strictEqual(objList[0].variableList[7].name, 'm7');
      assert.strictEqual(objList[0].variableList[7].type, 'std::deque<long>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0244 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0244 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0245
  * @tc.name c_class_0245
  * @tc.desc h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0245', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class NewTCls007 {
    std::set<double> m0;
    std::set<std::wstring> m1;
    std::list<float> m2;
    std::list<long long> m3;
    std::queue<std::string> m4;
    std::stack<double> m5;
    std::unordered_map<int, std::string> m6;
    std::unordered_map<std::string, double> m7;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTCls007');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 8);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::set<double>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::set<std::wstring>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::list<float>');
      assert.strictEqual(objList[0].variableList[3].name, 'long');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::queue<std::string>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::stack<double>');
      assert.strictEqual(objList[0].variableList[6].name, 'm6');
      assert.strictEqual(objList[0].variableList[6].type, 'std::unordered_map<int, std::string>');
      assert.strictEqual(objList[0].variableList[7].name, 'm7');
      assert.strictEqual(objList[0].variableList[7].type, 'std::unordered_map<std::string, double>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0245 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0245 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0246
  * @tc.name c_class_0246
  * @tc.desc h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0246', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class NewTCls008 {
    std::unordered_set<double> m0;
    std::unordered_set<std::string> m1;
    std::array<double, 8> m2;
    std::array<float, 16> m3;
    std::array<int64_t, 4> m4;
    std::forward_list<double> m5;
    std::forward_list<std::string> m6;
    std::valarray<int> m7;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTCls008');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 8);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::unordered_set<double>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::unordered_set<std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::array<double, 8>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::array<float, 16>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::array<int64_t, 4>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::forward_list<double>');
      assert.strictEqual(objList[0].variableList[6].name, 'm6');
      assert.strictEqual(objList[0].variableList[6].type, 'std::forward_list<std::string>');
      assert.strictEqual(objList[0].variableList[7].name, 'm7');
      assert.strictEqual(objList[0].variableList[7].type, 'std::valarray<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0246 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0246 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0247
  * @tc.name c_class_0247
  * @tc.desc h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0247', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class NewTCls009 {
    std::valarray<float> m0;
    std::complex<float> m1;
    std::complex<long double> m2;
    std::function<double(double)> m3;
    std::function<bool(int, std::string)> m4;
    std::function<void()> m5;
    std::vector<int>::const_iterator m6;
    std::map<std::string, int>::iterator m7;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NewTCls009');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 8);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::valarray<float>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::complex<float>');
      assert.strictEqual(objList[0].variableList[2].name, 'double');
      assert.strictEqual(objList[0].variableList[2].type, 'long');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::function<double(double)>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::function<bool(int, std::string)>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::function<void()>');
      assert.strictEqual(objList[0].variableList[6].name, 'm6');
      assert.strictEqual(objList[0].variableList[6].type, 'const_iterator');
      assert.strictEqual(objList[0].variableList[7].name, 'm7');
      assert.strictEqual(objList[0].variableList[7].type, 'iterator');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0247 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0247 执行异常: ${String(err)}`);
    }
  });

});
