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
  test('h2dtscpp_gen_0258', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf258_0(std::multimap<char *, int *> v);
void tf258_1(std::multimap<char *, unsigned long long> v);
void tf258_2(std::multimap<std::string, unsigned short> v);
void tf258_3(std::multimap<int *, std::string> v);
void tf258_4(std::multimap<double, char *> v);`),
        unions: parseUnion(`void tf258_0(std::multimap<char *, int *> v);
void tf258_1(std::multimap<char *, unsigned long long> v);
void tf258_2(std::multimap<std::string, unsigned short> v);
void tf258_3(std::multimap<int *, std::string> v);
void tf258_4(std::multimap<double, char *> v);`),
        structs: parseStruct(`void tf258_0(std::multimap<char *, int *> v);
void tf258_1(std::multimap<char *, unsigned long long> v);
void tf258_2(std::multimap<std::string, unsigned short> v);
void tf258_3(std::multimap<int *, std::string> v);
void tf258_4(std::multimap<double, char *> v);`),
        classes: parseClass(`void tf258_0(std::multimap<char *, int *> v);
void tf258_1(std::multimap<char *, unsigned long long> v);
void tf258_2(std::multimap<std::string, unsigned short> v);
void tf258_3(std::multimap<int *, std::string> v);
void tf258_4(std::multimap<double, char *> v);`),
        funcs: parseFunction(`void tf258_0(std::multimap<char *, int *> v);
void tf258_1(std::multimap<char *, unsigned long long> v);
void tf258_2(std::multimap<std::string, unsigned short> v);
void tf258_3(std::multimap<int *, std::string> v);
void tf258_4(std::multimap<double, char *> v);`),
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
        `h2dtscpp_gen_0258 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0258 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0259
  * @tc.name : h2dtscpp_gen_0259
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multimap<int *, char>, std::multimap<std::string, int>:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0259', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf259_0(std::multimap<int *, char> v);
void tf259_1(std::multimap<std::string, int>::iterator v);
void tf259_2(std::multimap<charb *, size_t>::iterator v);
void tf259_3(std::multimap<std::string, long long>::iterator v);
void tf259_4(std::multimap<char *, int *>::iterator v);`),
        unions: parseUnion(`void tf259_0(std::multimap<int *, char> v);
void tf259_1(std::multimap<std::string, int>::iterator v);
void tf259_2(std::multimap<charb *, size_t>::iterator v);
void tf259_3(std::multimap<std::string, long long>::iterator v);
void tf259_4(std::multimap<char *, int *>::iterator v);`),
        structs: parseStruct(`void tf259_0(std::multimap<int *, char> v);
void tf259_1(std::multimap<std::string, int>::iterator v);
void tf259_2(std::multimap<charb *, size_t>::iterator v);
void tf259_3(std::multimap<std::string, long long>::iterator v);
void tf259_4(std::multimap<char *, int *>::iterator v);`),
        classes: parseClass(`void tf259_0(std::multimap<int *, char> v);
void tf259_1(std::multimap<std::string, int>::iterator v);
void tf259_2(std::multimap<charb *, size_t>::iterator v);
void tf259_3(std::multimap<std::string, long long>::iterator v);
void tf259_4(std::multimap<char *, int *>::iterator v);`),
        funcs: parseFunction(`void tf259_0(std::multimap<int *, char> v);
void tf259_1(std::multimap<std::string, int>::iterator v);
void tf259_2(std::multimap<charb *, size_t>::iterator v);
void tf259_3(std::multimap<std::string, long long>::iterator v);
void tf259_4(std::multimap<char *, int *>::iterator v);`),
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
        `h2dtscpp_gen_0259 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0259 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0260
  * @tc.name : h2dtscpp_gen_0260
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multimap<char *, unsigned long long>::iterator, std::mu... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
});
