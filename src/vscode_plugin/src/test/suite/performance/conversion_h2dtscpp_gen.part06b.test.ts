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
  test('h2dtscpp_gen_0120', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf120_0(std::stack<wchar_t>::iterator v);
void tf120_1(std::stack<char8_t>::iterator v);
void tf120_2(std::stack<char16_t>::iterator v);
void tf120_3(std::stack<char32_t>::iterator v);
void tf120_4(std::queue<int> v);`),
        unions: parseUnion(`void tf120_0(std::stack<wchar_t>::iterator v);
void tf120_1(std::stack<char8_t>::iterator v);
void tf120_2(std::stack<char16_t>::iterator v);
void tf120_3(std::stack<char32_t>::iterator v);
void tf120_4(std::queue<int> v);`),
        structs: parseStruct(`void tf120_0(std::stack<wchar_t>::iterator v);
void tf120_1(std::stack<char8_t>::iterator v);
void tf120_2(std::stack<char16_t>::iterator v);
void tf120_3(std::stack<char32_t>::iterator v);
void tf120_4(std::queue<int> v);`),
        classes: parseClass(`void tf120_0(std::stack<wchar_t>::iterator v);
void tf120_1(std::stack<char8_t>::iterator v);
void tf120_2(std::stack<char16_t>::iterator v);
void tf120_3(std::stack<char32_t>::iterator v);
void tf120_4(std::queue<int> v);`),
        funcs: parseFunction(`void tf120_0(std::stack<wchar_t>::iterator v);
void tf120_1(std::stack<char8_t>::iterator v);
void tf120_2(std::stack<char16_t>::iterator v);
void tf120_3(std::stack<char32_t>::iterator v);
void tf120_4(std::queue<int> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0120 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0121
  * @tc.name : h2dtscpp_gen_0121
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::queue<size_t>, std::queue<double>, std::queue<float>, s... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0121', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf121_0(std::queue<size_t> v);
void tf121_1(std::queue<double> v);
void tf121_2(std::queue<float> v);
void tf121_3(std::queue<long> v);
void tf121_4(std::queue<short> v);`),
        unions: parseUnion(`void tf121_0(std::queue<size_t> v);
void tf121_1(std::queue<double> v);
void tf121_2(std::queue<float> v);
void tf121_3(std::queue<long> v);
void tf121_4(std::queue<short> v);`),
        structs: parseStruct(`void tf121_0(std::queue<size_t> v);
void tf121_1(std::queue<double> v);
void tf121_2(std::queue<float> v);
void tf121_3(std::queue<long> v);
void tf121_4(std::queue<short> v);`),
        classes: parseClass(`void tf121_0(std::queue<size_t> v);
void tf121_1(std::queue<double> v);
void tf121_2(std::queue<float> v);
void tf121_3(std::queue<long> v);
void tf121_4(std::queue<short> v);`),
        funcs: parseFunction(`void tf121_0(std::queue<size_t> v);
void tf121_1(std::queue<double> v);
void tf121_2(std::queue<float> v);
void tf121_3(std::queue<long> v);
void tf121_4(std::queue<short> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0121 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0122
  * @tc.name : h2dtscpp_gen_0122
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::queue<uint8_t>, std::queue<uint16_t>, std::queue<uint32... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0122', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf122_0(std::queue<uint8_t> v);
void tf122_1(std::queue<uint16_t> v);
void tf122_2(std::queue<uint32_t> v);
void tf122_3(std::queue<uint64_t> v);
void tf122_4(std::queue<int8_t> v);`),
        unions: parseUnion(`void tf122_0(std::queue<uint8_t> v);
void tf122_1(std::queue<uint16_t> v);
void tf122_2(std::queue<uint32_t> v);
void tf122_3(std::queue<uint64_t> v);
void tf122_4(std::queue<int8_t> v);`),
        structs: parseStruct(`void tf122_0(std::queue<uint8_t> v);
void tf122_1(std::queue<uint16_t> v);
void tf122_2(std::queue<uint32_t> v);
void tf122_3(std::queue<uint64_t> v);
void tf122_4(std::queue<int8_t> v);`),
        classes: parseClass(`void tf122_0(std::queue<uint8_t> v);
void tf122_1(std::queue<uint16_t> v);
void tf122_2(std::queue<uint32_t> v);
void tf122_3(std::queue<uint64_t> v);
void tf122_4(std::queue<int8_t> v);`),
        funcs: parseFunction(`void tf122_0(std::queue<uint8_t> v);
void tf122_1(std::queue<uint16_t> v);
void tf122_2(std::queue<uint32_t> v);
void tf122_3(std::queue<uint64_t> v);
void tf122_4(std::queue<int8_t> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0122 执行异常: ${String(err)}`);
    }
  });
});
