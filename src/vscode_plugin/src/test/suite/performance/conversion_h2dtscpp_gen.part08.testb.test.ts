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
  test('h2dtscpp_gen_0188', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf188_0(std::unordered_set<char16_t>::iterator v);
void tf188_1(std::unordered_set<char32_t>::iterator v);
void tf188_2(std::multiset<int> v);
void tf188_3(std::multiset<size_t> v);
void tf188_4(std::multiset<double> v);`),
        unions: parseUnion(`void tf188_0(std::unordered_set<char16_t>::iterator v);
void tf188_1(std::unordered_set<char32_t>::iterator v);
void tf188_2(std::multiset<int> v);
void tf188_3(std::multiset<size_t> v);
void tf188_4(std::multiset<double> v);`),
        structs: parseStruct(`void tf188_0(std::unordered_set<char16_t>::iterator v);
void tf188_1(std::unordered_set<char32_t>::iterator v);
void tf188_2(std::multiset<int> v);
void tf188_3(std::multiset<size_t> v);
void tf188_4(std::multiset<double> v);`),
        classes: parseClass(`void tf188_0(std::unordered_set<char16_t>::iterator v);
void tf188_1(std::unordered_set<char32_t>::iterator v);
void tf188_2(std::multiset<int> v);
void tf188_3(std::multiset<size_t> v);
void tf188_4(std::multiset<double> v);`),
        funcs: parseFunction(`void tf188_0(std::unordered_set<char16_t>::iterator v);
void tf188_1(std::unordered_set<char32_t>::iterator v);
void tf188_2(std::multiset<int> v);
void tf188_3(std::multiset<size_t> v);
void tf188_4(std::multiset<double> v);`),
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
        `h2dtscpp_gen_0188 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0188 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0189
  * @tc.name : h2dtscpp_gen_0189
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multiset<float>, std::multiset<long>, std::multiset<sho... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0189', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf189_0(std::multiset<float> v);
void tf189_1(std::multiset<long> v);
void tf189_2(std::multiset<short> v);
void tf189_3(std::multiset<uint8_t> v);
void tf189_4(std::multiset<uint16_t> v);`),
        unions: parseUnion(`void tf189_0(std::multiset<float> v);
void tf189_1(std::multiset<long> v);
void tf189_2(std::multiset<short> v);
void tf189_3(std::multiset<uint8_t> v);
void tf189_4(std::multiset<uint16_t> v);`),
        structs: parseStruct(`void tf189_0(std::multiset<float> v);
void tf189_1(std::multiset<long> v);
void tf189_2(std::multiset<short> v);
void tf189_3(std::multiset<uint8_t> v);
void tf189_4(std::multiset<uint16_t> v);`),
        classes: parseClass(`void tf189_0(std::multiset<float> v);
void tf189_1(std::multiset<long> v);
void tf189_2(std::multiset<short> v);
void tf189_3(std::multiset<uint8_t> v);
void tf189_4(std::multiset<uint16_t> v);`),
        funcs: parseFunction(`void tf189_0(std::multiset<float> v);
void tf189_1(std::multiset<long> v);
void tf189_2(std::multiset<short> v);
void tf189_3(std::multiset<uint8_t> v);
void tf189_4(std::multiset<uint16_t> v);`),
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
        `h2dtscpp_gen_0189 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0189 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0190
  * @tc.name : h2dtscpp_gen_0190
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multiset<uint32_t>, std::multiset<uint64_t>, std::multi... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
});
