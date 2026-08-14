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
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part04.');

  /**
  * @tc.number h2dtscpp_gen_0043
  * @tc.name h2dtscpp_gen_0043
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj 新类型：组 1 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0043', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf0_0(std::shared_ptr<int> v);
void tf0_1(std::shared_ptr<std::string> v);
void tf0_2(std::shared_ptr<double> v);
void tf0_3(std::unique_ptr<int> v);
void tf0_4(std::unique_ptr<std::string> v);`),
        unions: parseUnion(`void tf0_0(std::shared_ptr<int> v);
void tf0_1(std::shared_ptr<std::string> v);
void tf0_2(std::shared_ptr<double> v);
void tf0_3(std::unique_ptr<int> v);
void tf0_4(std::unique_ptr<std::string> v);`),
        structs: parseStruct(`void tf0_0(std::shared_ptr<int> v);
void tf0_1(std::shared_ptr<std::string> v);
void tf0_2(std::shared_ptr<double> v);
void tf0_3(std::unique_ptr<int> v);
void tf0_4(std::unique_ptr<std::string> v);`),
        classes: parseClass(`void tf0_0(std::shared_ptr<int> v);
void tf0_1(std::shared_ptr<std::string> v);
void tf0_2(std::shared_ptr<double> v);
void tf0_3(std::unique_ptr<int> v);
void tf0_4(std::unique_ptr<std::string> v);`),
        funcs: parseFunction(`void tf0_0(std::shared_ptr<int> v);
void tf0_1(std::shared_ptr<std::string> v);
void tf0_2(std::shared_ptr<double> v);
void tf0_3(std::unique_ptr<int> v);
void tf0_4(std::unique_ptr<std::string> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0044
  * @tc.name h2dtscpp_gen_0044
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj 新类型：组 2 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0044', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf1_0(std::unique_ptr<char> v);
void tf1_1(std::weak_ptr<int> v);
void tf1_2(std::weak_ptr<std::string> v);
void tf1_3(std::optional<int> v);
void tf1_4(std::optional<std::string> v);`),
        unions: parseUnion(`void tf1_0(std::unique_ptr<char> v);
void tf1_1(std::weak_ptr<int> v);
void tf1_2(std::weak_ptr<std::string> v);
void tf1_3(std::optional<int> v);
void tf1_4(std::optional<std::string> v);`),
        structs: parseStruct(`void tf1_0(std::unique_ptr<char> v);
void tf1_1(std::weak_ptr<int> v);
void tf1_2(std::weak_ptr<std::string> v);
void tf1_3(std::optional<int> v);
void tf1_4(std::optional<std::string> v);`),
        classes: parseClass(`void tf1_0(std::unique_ptr<char> v);
void tf1_1(std::weak_ptr<int> v);
void tf1_2(std::weak_ptr<std::string> v);
void tf1_3(std::optional<int> v);
void tf1_4(std::optional<std::string> v);`),
        funcs: parseFunction(`void tf1_0(std::unique_ptr<char> v);
void tf1_1(std::weak_ptr<int> v);
void tf1_2(std::weak_ptr<std::string> v);
void tf1_3(std::optional<int> v);
void tf1_4(std::optional<std::string> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0045
  * @tc.name h2dtscpp_gen_0045
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj 新类型：组 3 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0045', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf2_0(std::optional<double> v);
void tf2_1(std::optional<bool> v);
void tf2_2(std::variant<int, std::string> v);
void tf2_3(std::variant<double, bool> v);
void tf2_4(std::variant<int, float, double> v);`),
        unions: parseUnion(`void tf2_0(std::optional<double> v);
void tf2_1(std::optional<bool> v);
void tf2_2(std::variant<int, std::string> v);
void tf2_3(std::variant<double, bool> v);
void tf2_4(std::variant<int, float, double> v);`),
        structs: parseStruct(`void tf2_0(std::optional<double> v);
void tf2_1(std::optional<bool> v);
void tf2_2(std::variant<int, std::string> v);
void tf2_3(std::variant<double, bool> v);
void tf2_4(std::variant<int, float, double> v);`),
        classes: parseClass(`void tf2_0(std::optional<double> v);
void tf2_1(std::optional<bool> v);
void tf2_2(std::variant<int, std::string> v);
void tf2_3(std::variant<double, bool> v);
void tf2_4(std::variant<int, float, double> v);`),
        funcs: parseFunction(`void tf2_0(std::optional<double> v);
void tf2_1(std::optional<bool> v);
void tf2_2(std::variant<int, std::string> v);
void tf2_3(std::variant<double, bool> v);
void tf2_4(std::variant<int, float, double> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0046
  * @tc.name h2dtscpp_gen_0046
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj 新类型：组 4 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0046', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf3_0(std::string_view v);
void tf3_1(std::bitset<8> v);
void tf3_2(std::bitset<16> v);
void tf3_3(std::bitset<32> v);
void tf3_4(std::span<int> v);`),
        unions: parseUnion(`void tf3_0(std::string_view v);
void tf3_1(std::bitset<8> v);
void tf3_2(std::bitset<16> v);
void tf3_3(std::bitset<32> v);
void tf3_4(std::span<int> v);`),
        structs: parseStruct(`void tf3_0(std::string_view v);
void tf3_1(std::bitset<8> v);
void tf3_2(std::bitset<16> v);
void tf3_3(std::bitset<32> v);
void tf3_4(std::span<int> v);`),
        classes: parseClass(`void tf3_0(std::string_view v);
void tf3_1(std::bitset<8> v);
void tf3_2(std::bitset<16> v);
void tf3_3(std::bitset<32> v);
void tf3_4(std::span<int> v);`),
        funcs: parseFunction(`void tf3_0(std::string_view v);
void tf3_1(std::bitset<8> v);
void tf3_2(std::bitset<16> v);
void tf3_3(std::bitset<32> v);
void tf3_4(std::span<int> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0047
  * @tc.name h2dtscpp_gen_0047
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj 新类型：组 5 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0047', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf4_0(std::span<double> v);
void tf4_1(std::atomic<int> v);
void tf4_2(std::atomic<bool> v);
void tf4_3(std::atomic<long> v);
void tf4_4(std::basic_string<char> v);`),
        unions: parseUnion(`void tf4_0(std::span<double> v);
void tf4_1(std::atomic<int> v);
void tf4_2(std::atomic<bool> v);
void tf4_3(std::atomic<long> v);
void tf4_4(std::basic_string<char> v);`),
        structs: parseStruct(`void tf4_0(std::span<double> v);
void tf4_1(std::atomic<int> v);
void tf4_2(std::atomic<bool> v);
void tf4_3(std::atomic<long> v);
void tf4_4(std::basic_string<char> v);`),
        classes: parseClass(`void tf4_0(std::span<double> v);
void tf4_1(std::atomic<int> v);
void tf4_2(std::atomic<bool> v);
void tf4_3(std::atomic<long> v);
void tf4_4(std::basic_string<char> v);`),
        funcs: parseFunction(`void tf4_0(std::span<double> v);
void tf4_1(std::atomic<int> v);
void tf4_2(std::atomic<bool> v);
void tf4_3(std::atomic<long> v);
void tf4_4(std::basic_string<char> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0048
  * @tc.name h2dtscpp_gen_0048
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj 新类型：组 6 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0048', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf5_0(std::basic_string<wchar_t> v);
void tf5_1(std::byte v);
void tf5_2(std::chrono::milliseconds v);
void tf5_3(std::chrono::seconds v);
void tf5_4(std::chrono::system_clock::time_point v);`),
        unions: parseUnion(`void tf5_0(std::basic_string<wchar_t> v);
void tf5_1(std::byte v);
void tf5_2(std::chrono::milliseconds v);
void tf5_3(std::chrono::seconds v);
void tf5_4(std::chrono::system_clock::time_point v);`),
        structs: parseStruct(`void tf5_0(std::basic_string<wchar_t> v);
void tf5_1(std::byte v);
void tf5_2(std::chrono::milliseconds v);
void tf5_3(std::chrono::seconds v);
void tf5_4(std::chrono::system_clock::time_point v);`),
        classes: parseClass(`void tf5_0(std::basic_string<wchar_t> v);
void tf5_1(std::byte v);
void tf5_2(std::chrono::milliseconds v);
void tf5_3(std::chrono::seconds v);
void tf5_4(std::chrono::system_clock::time_point v);`),
        funcs: parseFunction(`void tf5_0(std::basic_string<wchar_t> v);
void tf5_1(std::byte v);
void tf5_2(std::chrono::milliseconds v);
void tf5_3(std::chrono::seconds v);
void tf5_4(std::chrono::system_clock::time_point v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0049
  * @tc.name h2dtscpp_gen_0049
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj 新类型：组 7 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0049', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf6_0(std::filesystem::path v);
void tf6_1(std::map<int, int> v);
void tf6_2(std::map<double, std::string> v);
void tf6_3(std::map<std::string, std::string> v);
void tf6_4(std::map<wchar_t, int> v);`),
        unions: parseUnion(`void tf6_0(std::filesystem::path v);
void tf6_1(std::map<int, int> v);
void tf6_2(std::map<double, std::string> v);
void tf6_3(std::map<std::string, std::string> v);
void tf6_4(std::map<wchar_t, int> v);`),
        structs: parseStruct(`void tf6_0(std::filesystem::path v);
void tf6_1(std::map<int, int> v);
void tf6_2(std::map<double, std::string> v);
void tf6_3(std::map<std::string, std::string> v);
void tf6_4(std::map<wchar_t, int> v);`),
        classes: parseClass(`void tf6_0(std::filesystem::path v);
void tf6_1(std::map<int, int> v);
void tf6_2(std::map<double, std::string> v);
void tf6_3(std::map<std::string, std::string> v);
void tf6_4(std::map<wchar_t, int> v);`),
        funcs: parseFunction(`void tf6_0(std::filesystem::path v);
void tf6_1(std::map<int, int> v);
void tf6_2(std::map<double, std::string> v);
void tf6_3(std::map<std::string, std::string> v);
void tf6_4(std::map<wchar_t, int> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0049 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0050
  * @tc.name h2dtscpp_gen_0050
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj 新类型：组 8 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0050', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf7_0(std::map<size_t, std::string> v);
void tf7_1(std::map<float, float> v);
void tf7_2(std::vector<char> v);
void tf7_3(std::vector<float> v);
void tf7_4(std::vector<long> v);`),
        unions: parseUnion(`void tf7_0(std::map<size_t, std::string> v);
void tf7_1(std::map<float, float> v);
void tf7_2(std::vector<char> v);
void tf7_3(std::vector<float> v);
void tf7_4(std::vector<long> v);`),
        structs: parseStruct(`void tf7_0(std::map<size_t, std::string> v);
void tf7_1(std::map<float, float> v);
void tf7_2(std::vector<char> v);
void tf7_3(std::vector<float> v);
void tf7_4(std::vector<long> v);`),
        classes: parseClass(`void tf7_0(std::map<size_t, std::string> v);
void tf7_1(std::map<float, float> v);
void tf7_2(std::vector<char> v);
void tf7_3(std::vector<float> v);
void tf7_4(std::vector<long> v);`),
        funcs: parseFunction(`void tf7_0(std::map<size_t, std::string> v);
void tf7_1(std::map<float, float> v);
void tf7_2(std::vector<char> v);
void tf7_3(std::vector<float> v);
void tf7_4(std::vector<long> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0050 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0051
  * @tc.name h2dtscpp_gen_0051
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj 新类型：组 9 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0051', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf8_0(std::vector<unsigned int> v);
void tf8_1(std::vector<std::wstring> v);
void tf8_2(std::vector<short> v);
void tf8_3(std::vector<int64_t> v);
void tf8_4(std::vector<uint8_t> v);`),
        unions: parseUnion(`void tf8_0(std::vector<unsigned int> v);
void tf8_1(std::vector<std::wstring> v);
void tf8_2(std::vector<short> v);
void tf8_3(std::vector<int64_t> v);
void tf8_4(std::vector<uint8_t> v);`),
        structs: parseStruct(`void tf8_0(std::vector<unsigned int> v);
void tf8_1(std::vector<std::wstring> v);
void tf8_2(std::vector<short> v);
void tf8_3(std::vector<int64_t> v);
void tf8_4(std::vector<uint8_t> v);`),
        classes: parseClass(`void tf8_0(std::vector<unsigned int> v);
void tf8_1(std::vector<std::wstring> v);
void tf8_2(std::vector<short> v);
void tf8_3(std::vector<int64_t> v);
void tf8_4(std::vector<uint8_t> v);`),
        funcs: parseFunction(`void tf8_0(std::vector<unsigned int> v);
void tf8_1(std::vector<std::wstring> v);
void tf8_2(std::vector<short> v);
void tf8_3(std::vector<int64_t> v);
void tf8_4(std::vector<uint8_t> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0052
  * @tc.name h2dtscpp_gen_0052
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj 新类型：组 10 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0052', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf9_0(std::vector<size_t> v);
void tf9_1(std::vector<std::string_view> v);
void tf9_2(std::pair<double, double> v);
void tf9_3(std::pair<float, float> v);
void tf9_4(std::pair<int, long> v);`),
        unions: parseUnion(`void tf9_0(std::vector<size_t> v);
void tf9_1(std::vector<std::string_view> v);
void tf9_2(std::pair<double, double> v);
void tf9_3(std::pair<float, float> v);
void tf9_4(std::pair<int, long> v);`),
        structs: parseStruct(`void tf9_0(std::vector<size_t> v);
void tf9_1(std::vector<std::string_view> v);
void tf9_2(std::pair<double, double> v);
void tf9_3(std::pair<float, float> v);
void tf9_4(std::pair<int, long> v);`),
        classes: parseClass(`void tf9_0(std::vector<size_t> v);
void tf9_1(std::vector<std::string_view> v);
void tf9_2(std::pair<double, double> v);
void tf9_3(std::pair<float, float> v);
void tf9_4(std::pair<int, long> v);`),
        funcs: parseFunction(`void tf9_0(std::vector<size_t> v);
void tf9_1(std::vector<std::string_view> v);
void tf9_2(std::pair<double, double> v);
void tf9_3(std::pair<float, float> v);
void tf9_4(std::pair<int, long> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0052 执行异常: ${String(err)}`);
    }
  });

});
