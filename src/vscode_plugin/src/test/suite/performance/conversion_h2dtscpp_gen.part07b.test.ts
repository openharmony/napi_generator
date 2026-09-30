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
  test('h2dtscpp_gen_0155', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf155_0(std::unordered_map<int, char> v);
void tf155_1(std::unordered_map<size_t, char> v);
void tf155_2(std::unordered_map<unsigned, char> v);
void tf155_3(std::unordered_map<int, int>::iterator v);
void tf155_4(std::unordered_map<char, int>::iterator v);`),
        unions: parseUnion(`void tf155_0(std::unordered_map<int, char> v);
void tf155_1(std::unordered_map<size_t, char> v);
void tf155_2(std::unordered_map<unsigned, char> v);
void tf155_3(std::unordered_map<int, int>::iterator v);
void tf155_4(std::unordered_map<char, int>::iterator v);`),
        structs: parseStruct(`void tf155_0(std::unordered_map<int, char> v);
void tf155_1(std::unordered_map<size_t, char> v);
void tf155_2(std::unordered_map<unsigned, char> v);
void tf155_3(std::unordered_map<int, int>::iterator v);
void tf155_4(std::unordered_map<char, int>::iterator v);`),
        classes: parseClass(`void tf155_0(std::unordered_map<int, char> v);
void tf155_1(std::unordered_map<size_t, char> v);
void tf155_2(std::unordered_map<unsigned, char> v);
void tf155_3(std::unordered_map<int, int>::iterator v);
void tf155_4(std::unordered_map<char, int>::iterator v);`),
        funcs: parseFunction(`void tf155_0(std::unordered_map<int, char> v);
void tf155_1(std::unordered_map<size_t, char> v);
void tf155_2(std::unordered_map<unsigned, char> v);
void tf155_3(std::unordered_map<int, int>::iterator v);
void tf155_4(std::unordered_map<char, int>::iterator v);`),
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
        `h2dtscpp_gen_0155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0156
  * @tc.name : h2dtscpp_gen_0156
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_map<char, size_t>::iterator, std::unordered_m... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0156', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf156_0(std::unordered_map<char, size_t>::iterator v);
void tf156_1(std::unordered_map<char, unsigned>::iterator v);
void tf156_2(std::unordered_map<char, double>::iterator v);
void tf156_3(std::unordered_map<char, float>::iterator v);
void tf156_4(std::unordered_map<char16_t, int32_t>::iterator v);`),
        unions: parseUnion(`void tf156_0(std::unordered_map<char, size_t>::iterator v);
void tf156_1(std::unordered_map<char, unsigned>::iterator v);
void tf156_2(std::unordered_map<char, double>::iterator v);
void tf156_3(std::unordered_map<char, float>::iterator v);
void tf156_4(std::unordered_map<char16_t, int32_t>::iterator v);`),
        structs: parseStruct(`void tf156_0(std::unordered_map<char, size_t>::iterator v);
void tf156_1(std::unordered_map<char, unsigned>::iterator v);
void tf156_2(std::unordered_map<char, double>::iterator v);
void tf156_3(std::unordered_map<char, float>::iterator v);
void tf156_4(std::unordered_map<char16_t, int32_t>::iterator v);`),
        classes: parseClass(`void tf156_0(std::unordered_map<char, size_t>::iterator v);
void tf156_1(std::unordered_map<char, unsigned>::iterator v);
void tf156_2(std::unordered_map<char, double>::iterator v);
void tf156_3(std::unordered_map<char, float>::iterator v);
void tf156_4(std::unordered_map<char16_t, int32_t>::iterator v);`),
        funcs: parseFunction(`void tf156_0(std::unordered_map<char, size_t>::iterator v);
void tf156_1(std::unordered_map<char, unsigned>::iterator v);
void tf156_2(std::unordered_map<char, double>::iterator v);
void tf156_3(std::unordered_map<char, float>::iterator v);
void tf156_4(std::unordered_map<char16_t, int32_t>::iterator v);`),
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
        `h2dtscpp_gen_0156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0157
  * @tc.name : h2dtscpp_gen_0157
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_map<char32_t, size_t>::iterator, std::unorder... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0157', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf157_0(std::unordered_map<char32_t, size_t>::iterator v);
void tf157_1(std::unordered_map<char8_t, uint32_t>::iterator v);
void tf157_2(std::unordered_map<char32_t, int8_t>::iterator v);
void tf157_3(std::unordered_map<wchar_t, uint16_t>::iterator v);
void tf157_4(std::unordered_map<int, bool>::iterator v);`),
        unions: parseUnion(`void tf157_0(std::unordered_map<char32_t, size_t>::iterator v);
void tf157_1(std::unordered_map<char8_t, uint32_t>::iterator v);
void tf157_2(std::unordered_map<char32_t, int8_t>::iterator v);
void tf157_3(std::unordered_map<wchar_t, uint16_t>::iterator v);
void tf157_4(std::unordered_map<int, bool>::iterator v);`),
        structs: parseStruct(`void tf157_0(std::unordered_map<char32_t, size_t>::iterator v);
void tf157_1(std::unordered_map<char8_t, uint32_t>::iterator v);
void tf157_2(std::unordered_map<char32_t, int8_t>::iterator v);
void tf157_3(std::unordered_map<wchar_t, uint16_t>::iterator v);
void tf157_4(std::unordered_map<int, bool>::iterator v);`),
        classes: parseClass(`void tf157_0(std::unordered_map<char32_t, size_t>::iterator v);
void tf157_1(std::unordered_map<char8_t, uint32_t>::iterator v);
void tf157_2(std::unordered_map<char32_t, int8_t>::iterator v);
void tf157_3(std::unordered_map<wchar_t, uint16_t>::iterator v);
void tf157_4(std::unordered_map<int, bool>::iterator v);`),
        funcs: parseFunction(`void tf157_0(std::unordered_map<char32_t, size_t>::iterator v);
void tf157_1(std::unordered_map<char8_t, uint32_t>::iterator v);
void tf157_2(std::unordered_map<char32_t, int8_t>::iterator v);
void tf157_3(std::unordered_map<wchar_t, uint16_t>::iterator v);
void tf157_4(std::unordered_map<int, bool>::iterator v);`),
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
        `h2dtscpp_gen_0157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0157 执行异常: ${String(err)}`);
    }
  });
});
