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
  test('h2dtscpp_gen_0223', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf223_0(std::weak_ptr<wchar_t> v);
void tf223_1(std::weak_ptr<char8_t> v);
void tf223_2(std::weak_ptr<char16_t> v);
void tf223_3(std::weak_ptr<char32_t> v);
void tf223_4(std::string v);`),
        unions: parseUnion(`void tf223_0(std::weak_ptr<wchar_t> v);
void tf223_1(std::weak_ptr<char8_t> v);
void tf223_2(std::weak_ptr<char16_t> v);
void tf223_3(std::weak_ptr<char32_t> v);
void tf223_4(std::string v);`),
        structs: parseStruct(`void tf223_0(std::weak_ptr<wchar_t> v);
void tf223_1(std::weak_ptr<char8_t> v);
void tf223_2(std::weak_ptr<char16_t> v);
void tf223_3(std::weak_ptr<char32_t> v);
void tf223_4(std::string v);`),
        classes: parseClass(`void tf223_0(std::weak_ptr<wchar_t> v);
void tf223_1(std::weak_ptr<char8_t> v);
void tf223_2(std::weak_ptr<char16_t> v);
void tf223_3(std::weak_ptr<char32_t> v);
void tf223_4(std::string v);`),
        funcs: parseFunction(`void tf223_0(std::weak_ptr<wchar_t> v);
void tf223_1(std::weak_ptr<char8_t> v);
void tf223_2(std::weak_ptr<char16_t> v);
void tf223_3(std::weak_ptr<char32_t> v);
void tf223_4(std::string v);`),
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
        `h2dtscpp_gen_0223 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0223 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0224
  * @tc.name : h2dtscpp_gen_0224
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::vector<std::string>, char *, long long, unsigned short,... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0224', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf224_0(std::vector<std::string> v);
void tf224_1(char * v);
void tf224_2(long long v);
void tf224_3(unsigned short v);
void tf224_4(unsigned long v);`),
        unions: parseUnion(`void tf224_0(std::vector<std::string> v);
void tf224_1(char * v);
void tf224_2(long long v);
void tf224_3(unsigned short v);
void tf224_4(unsigned long v);`),
        structs: parseStruct(`void tf224_0(std::vector<std::string> v);
void tf224_1(char * v);
void tf224_2(long long v);
void tf224_3(unsigned short v);
void tf224_4(unsigned long v);`),
        classes: parseClass(`void tf224_0(std::vector<std::string> v);
void tf224_1(char * v);
void tf224_2(long long v);
void tf224_3(unsigned short v);
void tf224_4(unsigned long v);`),
        funcs: parseFunction(`void tf224_0(std::vector<std::string> v);
void tf224_1(char * v);
void tf224_2(long long v);
void tf224_3(unsigned short v);
void tf224_4(unsigned long v);`),
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
        `h2dtscpp_gen_0224 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0224 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0225
  * @tc.name : h2dtscpp_gen_0225
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 unsigned long long, std::vector<long long>, std::vector<unsi... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
});
