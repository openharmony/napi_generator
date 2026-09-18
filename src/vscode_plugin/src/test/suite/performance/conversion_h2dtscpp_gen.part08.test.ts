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
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part08.');

  /**
  * @tc.number : h2dtscpp_gen_0158
  * @tc.name : h2dtscpp_gen_0158
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_map<char, bool>::iterator, std::unordered_map... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0158', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf158_0(std::unordered_map<char, bool>::iterator v);
void tf158_1(std::unordered_map<int, char>::iterator v);
void tf158_2(std::unordered_map<size_t, char>::iterator v);
void tf158_3(std::unordered_map<unsigned, char>::iterator v);
void tf158_4(std::multimap<int, int> v);`),
        unions: parseUnion(`void tf158_0(std::unordered_map<char, bool>::iterator v);
void tf158_1(std::unordered_map<int, char>::iterator v);
void tf158_2(std::unordered_map<size_t, char>::iterator v);
void tf158_3(std::unordered_map<unsigned, char>::iterator v);
void tf158_4(std::multimap<int, int> v);`),
        structs: parseStruct(`void tf158_0(std::unordered_map<char, bool>::iterator v);
void tf158_1(std::unordered_map<int, char>::iterator v);
void tf158_2(std::unordered_map<size_t, char>::iterator v);
void tf158_3(std::unordered_map<unsigned, char>::iterator v);
void tf158_4(std::multimap<int, int> v);`),
        classes: parseClass(`void tf158_0(std::unordered_map<char, bool>::iterator v);
void tf158_1(std::unordered_map<int, char>::iterator v);
void tf158_2(std::unordered_map<size_t, char>::iterator v);
void tf158_3(std::unordered_map<unsigned, char>::iterator v);
void tf158_4(std::multimap<int, int> v);`),
        funcs: parseFunction(`void tf158_0(std::unordered_map<char, bool>::iterator v);
void tf158_1(std::unordered_map<int, char>::iterator v);
void tf158_2(std::unordered_map<size_t, char>::iterator v);
void tf158_3(std::unordered_map<unsigned, char>::iterator v);
void tf158_4(std::multimap<int, int> v);`),
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
        `h2dtscpp_gen_0158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0159
  * @tc.name : h2dtscpp_gen_0159
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multimap<char, int>, std::multimap<char, size_t>, std::... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0159', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf159_0(std::multimap<char, int> v);
void tf159_1(std::multimap<char, size_t> v);
void tf159_2(std::multimap<char, unsigned> v);
void tf159_3(std::multimap<char, double> v);
void tf159_4(std::multimap<char, float> v);`),
        unions: parseUnion(`void tf159_0(std::multimap<char, int> v);
void tf159_1(std::multimap<char, size_t> v);
void tf159_2(std::multimap<char, unsigned> v);
void tf159_3(std::multimap<char, double> v);
void tf159_4(std::multimap<char, float> v);`),
        structs: parseStruct(`void tf159_0(std::multimap<char, int> v);
void tf159_1(std::multimap<char, size_t> v);
void tf159_2(std::multimap<char, unsigned> v);
void tf159_3(std::multimap<char, double> v);
void tf159_4(std::multimap<char, float> v);`),
        classes: parseClass(`void tf159_0(std::multimap<char, int> v);
void tf159_1(std::multimap<char, size_t> v);
void tf159_2(std::multimap<char, unsigned> v);
void tf159_3(std::multimap<char, double> v);
void tf159_4(std::multimap<char, float> v);`),
        funcs: parseFunction(`void tf159_0(std::multimap<char, int> v);
void tf159_1(std::multimap<char, size_t> v);
void tf159_2(std::multimap<char, unsigned> v);
void tf159_3(std::multimap<char, double> v);
void tf159_4(std::multimap<char, float> v);`),
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
        `h2dtscpp_gen_0159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0160
  * @tc.name : h2dtscpp_gen_0160
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multimap<char16_t, int32_t>, std::multimap<char32_t, si... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0160', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf160_0(std::multimap<char16_t, int32_t> v);
void tf160_1(std::multimap<char32_t, size_t> v);
void tf160_2(std::multimap<char8_t, uint32_t> v);
void tf160_3(std::multimap<char32_t, int8_t> v);
void tf160_4(std::multimap<wchar_t, uint16_t> v);`),
        unions: parseUnion(`void tf160_0(std::multimap<char16_t, int32_t> v);
void tf160_1(std::multimap<char32_t, size_t> v);
void tf160_2(std::multimap<char8_t, uint32_t> v);
void tf160_3(std::multimap<char32_t, int8_t> v);
void tf160_4(std::multimap<wchar_t, uint16_t> v);`),
        structs: parseStruct(`void tf160_0(std::multimap<char16_t, int32_t> v);
void tf160_1(std::multimap<char32_t, size_t> v);
void tf160_2(std::multimap<char8_t, uint32_t> v);
void tf160_3(std::multimap<char32_t, int8_t> v);
void tf160_4(std::multimap<wchar_t, uint16_t> v);`),
        classes: parseClass(`void tf160_0(std::multimap<char16_t, int32_t> v);
void tf160_1(std::multimap<char32_t, size_t> v);
void tf160_2(std::multimap<char8_t, uint32_t> v);
void tf160_3(std::multimap<char32_t, int8_t> v);
void tf160_4(std::multimap<wchar_t, uint16_t> v);`),
        funcs: parseFunction(`void tf160_0(std::multimap<char16_t, int32_t> v);
void tf160_1(std::multimap<char32_t, size_t> v);
void tf160_2(std::multimap<char8_t, uint32_t> v);
void tf160_3(std::multimap<char32_t, int8_t> v);
void tf160_4(std::multimap<wchar_t, uint16_t> v);`),
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
        `h2dtscpp_gen_0160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0161
  * @tc.name : h2dtscpp_gen_0161
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multimap<int, bool>, std::multimap<char, bool>, std::mu... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0161', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf161_0(std::multimap<int, bool> v);
void tf161_1(std::multimap<char, bool> v);
void tf161_2(std::multimap<int, char> v);
void tf161_3(std::multimap<size_t, char> v);
void tf161_4(std::multimap<unsigned, char> v);`),
        unions: parseUnion(`void tf161_0(std::multimap<int, bool> v);
void tf161_1(std::multimap<char, bool> v);
void tf161_2(std::multimap<int, char> v);
void tf161_3(std::multimap<size_t, char> v);
void tf161_4(std::multimap<unsigned, char> v);`),
        structs: parseStruct(`void tf161_0(std::multimap<int, bool> v);
void tf161_1(std::multimap<char, bool> v);
void tf161_2(std::multimap<int, char> v);
void tf161_3(std::multimap<size_t, char> v);
void tf161_4(std::multimap<unsigned, char> v);`),
        classes: parseClass(`void tf161_0(std::multimap<int, bool> v);
void tf161_1(std::multimap<char, bool> v);
void tf161_2(std::multimap<int, char> v);
void tf161_3(std::multimap<size_t, char> v);
void tf161_4(std::multimap<unsigned, char> v);`),
        funcs: parseFunction(`void tf161_0(std::multimap<int, bool> v);
void tf161_1(std::multimap<char, bool> v);
void tf161_2(std::multimap<int, char> v);
void tf161_3(std::multimap<size_t, char> v);
void tf161_4(std::multimap<unsigned, char> v);`),
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
        `h2dtscpp_gen_0161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0162
  * @tc.name : h2dtscpp_gen_0162
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multimap<int, int>::iterator, std::multimap<char, int>:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0162', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf162_0(std::multimap<int, int>::iterator v);
void tf162_1(std::multimap<char, int>::iterator v);
void tf162_2(std::multimap<char, size_t>::iterator v);
void tf162_3(std::multimap<char, unsigned>::iterator v);
void tf162_4(std::multimap<char, double>::iterator v);`),
        unions: parseUnion(`void tf162_0(std::multimap<int, int>::iterator v);
void tf162_1(std::multimap<char, int>::iterator v);
void tf162_2(std::multimap<char, size_t>::iterator v);
void tf162_3(std::multimap<char, unsigned>::iterator v);
void tf162_4(std::multimap<char, double>::iterator v);`),
        structs: parseStruct(`void tf162_0(std::multimap<int, int>::iterator v);
void tf162_1(std::multimap<char, int>::iterator v);
void tf162_2(std::multimap<char, size_t>::iterator v);
void tf162_3(std::multimap<char, unsigned>::iterator v);
void tf162_4(std::multimap<char, double>::iterator v);`),
        classes: parseClass(`void tf162_0(std::multimap<int, int>::iterator v);
void tf162_1(std::multimap<char, int>::iterator v);
void tf162_2(std::multimap<char, size_t>::iterator v);
void tf162_3(std::multimap<char, unsigned>::iterator v);
void tf162_4(std::multimap<char, double>::iterator v);`),
        funcs: parseFunction(`void tf162_0(std::multimap<int, int>::iterator v);
void tf162_1(std::multimap<char, int>::iterator v);
void tf162_2(std::multimap<char, size_t>::iterator v);
void tf162_3(std::multimap<char, unsigned>::iterator v);
void tf162_4(std::multimap<char, double>::iterator v);`),
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
        `h2dtscpp_gen_0162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0162 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0163
  * @tc.name : h2dtscpp_gen_0163
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multimap<char, float>::iterator, std::multimap<char16_t... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0163', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf163_0(std::multimap<char, float>::iterator v);
void tf163_1(std::multimap<char16_t, int32_t>::iterator v);
void tf163_2(std::multimap<char32_t, size_t>::iterator v);
void tf163_3(std::multimap<char8_t, uint32_t>::iterator v);
void tf163_4(std::multimap<char32_t, int8_t>::iterator v);`),
        unions: parseUnion(`void tf163_0(std::multimap<char, float>::iterator v);
void tf163_1(std::multimap<char16_t, int32_t>::iterator v);
void tf163_2(std::multimap<char32_t, size_t>::iterator v);
void tf163_3(std::multimap<char8_t, uint32_t>::iterator v);
void tf163_4(std::multimap<char32_t, int8_t>::iterator v);`),
        structs: parseStruct(`void tf163_0(std::multimap<char, float>::iterator v);
void tf163_1(std::multimap<char16_t, int32_t>::iterator v);
void tf163_2(std::multimap<char32_t, size_t>::iterator v);
void tf163_3(std::multimap<char8_t, uint32_t>::iterator v);
void tf163_4(std::multimap<char32_t, int8_t>::iterator v);`),
        classes: parseClass(`void tf163_0(std::multimap<char, float>::iterator v);
void tf163_1(std::multimap<char16_t, int32_t>::iterator v);
void tf163_2(std::multimap<char32_t, size_t>::iterator v);
void tf163_3(std::multimap<char8_t, uint32_t>::iterator v);
void tf163_4(std::multimap<char32_t, int8_t>::iterator v);`),
        funcs: parseFunction(`void tf163_0(std::multimap<char, float>::iterator v);
void tf163_1(std::multimap<char16_t, int32_t>::iterator v);
void tf163_2(std::multimap<char32_t, size_t>::iterator v);
void tf163_3(std::multimap<char8_t, uint32_t>::iterator v);
void tf163_4(std::multimap<char32_t, int8_t>::iterator v);`),
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
        `h2dtscpp_gen_0163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0164
  * @tc.name : h2dtscpp_gen_0164
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multimap<wchar_t, uint16_t>::iterator, std::multimap<in... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0164', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf164_0(std::multimap<wchar_t, uint16_t>::iterator v);
void tf164_1(std::multimap<int, bool>::iterator v);
void tf164_2(std::multimap<char, bool>::iterator v);
void tf164_3(std::multimap<int, char>::iterator v);
void tf164_4(std::multimap<size_t, char>::iterator v);`),
        unions: parseUnion(`void tf164_0(std::multimap<wchar_t, uint16_t>::iterator v);
void tf164_1(std::multimap<int, bool>::iterator v);
void tf164_2(std::multimap<char, bool>::iterator v);
void tf164_3(std::multimap<int, char>::iterator v);
void tf164_4(std::multimap<size_t, char>::iterator v);`),
        structs: parseStruct(`void tf164_0(std::multimap<wchar_t, uint16_t>::iterator v);
void tf164_1(std::multimap<int, bool>::iterator v);
void tf164_2(std::multimap<char, bool>::iterator v);
void tf164_3(std::multimap<int, char>::iterator v);
void tf164_4(std::multimap<size_t, char>::iterator v);`),
        classes: parseClass(`void tf164_0(std::multimap<wchar_t, uint16_t>::iterator v);
void tf164_1(std::multimap<int, bool>::iterator v);
void tf164_2(std::multimap<char, bool>::iterator v);
void tf164_3(std::multimap<int, char>::iterator v);
void tf164_4(std::multimap<size_t, char>::iterator v);`),
        funcs: parseFunction(`void tf164_0(std::multimap<wchar_t, uint16_t>::iterator v);
void tf164_1(std::multimap<int, bool>::iterator v);
void tf164_2(std::multimap<char, bool>::iterator v);
void tf164_3(std::multimap<int, char>::iterator v);
void tf164_4(std::multimap<size_t, char>::iterator v);`),
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
        `h2dtscpp_gen_0164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0165
  * @tc.name : h2dtscpp_gen_0165
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multimap<unsigned, char>::iterator, std::unordered_mult... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0165', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf165_0(std::multimap<unsigned, char>::iterator v);
void tf165_1(std::unordered_multimap<int, int> v);
void tf165_2(std::unordered_multimap<char, int> v);
void tf165_3(std::unordered_multimap<char, size_t> v);
void tf165_4(std::unordered_multimap<char, unsigned> v);`),
        unions: parseUnion(`void tf165_0(std::multimap<unsigned, char>::iterator v);
void tf165_1(std::unordered_multimap<int, int> v);
void tf165_2(std::unordered_multimap<char, int> v);
void tf165_3(std::unordered_multimap<char, size_t> v);
void tf165_4(std::unordered_multimap<char, unsigned> v);`),
        structs: parseStruct(`void tf165_0(std::multimap<unsigned, char>::iterator v);
void tf165_1(std::unordered_multimap<int, int> v);
void tf165_2(std::unordered_multimap<char, int> v);
void tf165_3(std::unordered_multimap<char, size_t> v);
void tf165_4(std::unordered_multimap<char, unsigned> v);`),
        classes: parseClass(`void tf165_0(std::multimap<unsigned, char>::iterator v);
void tf165_1(std::unordered_multimap<int, int> v);
void tf165_2(std::unordered_multimap<char, int> v);
void tf165_3(std::unordered_multimap<char, size_t> v);
void tf165_4(std::unordered_multimap<char, unsigned> v);`),
        funcs: parseFunction(`void tf165_0(std::multimap<unsigned, char>::iterator v);
void tf165_1(std::unordered_multimap<int, int> v);
void tf165_2(std::unordered_multimap<char, int> v);
void tf165_3(std::unordered_multimap<char, size_t> v);
void tf165_4(std::unordered_multimap<char, unsigned> v);`),
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
        `h2dtscpp_gen_0165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0166
  * @tc.name : h2dtscpp_gen_0166
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multimap<char, double>, std::unordered_multim... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0166', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf166_0(std::unordered_multimap<char, double> v);
void tf166_1(std::unordered_multimap<char, float> v);
void tf166_2(std::unordered_multimap<char16_t, int32_t> v);
void tf166_3(std::unordered_multimap<char32_t, size_t> v);
void tf166_4(std::unordered_multimap<char8_t, uint32_t> v);`),
        unions: parseUnion(`void tf166_0(std::unordered_multimap<char, double> v);
void tf166_1(std::unordered_multimap<char, float> v);
void tf166_2(std::unordered_multimap<char16_t, int32_t> v);
void tf166_3(std::unordered_multimap<char32_t, size_t> v);
void tf166_4(std::unordered_multimap<char8_t, uint32_t> v);`),
        structs: parseStruct(`void tf166_0(std::unordered_multimap<char, double> v);
void tf166_1(std::unordered_multimap<char, float> v);
void tf166_2(std::unordered_multimap<char16_t, int32_t> v);
void tf166_3(std::unordered_multimap<char32_t, size_t> v);
void tf166_4(std::unordered_multimap<char8_t, uint32_t> v);`),
        classes: parseClass(`void tf166_0(std::unordered_multimap<char, double> v);
void tf166_1(std::unordered_multimap<char, float> v);
void tf166_2(std::unordered_multimap<char16_t, int32_t> v);
void tf166_3(std::unordered_multimap<char32_t, size_t> v);
void tf166_4(std::unordered_multimap<char8_t, uint32_t> v);`),
        funcs: parseFunction(`void tf166_0(std::unordered_multimap<char, double> v);
void tf166_1(std::unordered_multimap<char, float> v);
void tf166_2(std::unordered_multimap<char16_t, int32_t> v);
void tf166_3(std::unordered_multimap<char32_t, size_t> v);
void tf166_4(std::unordered_multimap<char8_t, uint32_t> v);`),
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
        `h2dtscpp_gen_0166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0167
  * @tc.name : h2dtscpp_gen_0167
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multimap<char32_t, int8_t>, std::unordered_mu... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0167', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf167_0(std::unordered_multimap<char32_t, int8_t> v);
void tf167_1(std::unordered_multimap<wchar_t, uint16_t> v);
void tf167_2(std::unordered_multimap<int, bool> v);
void tf167_3(std::unordered_multimap<char, bool> v);
void tf167_4(std::unordered_multimap<int, char> v);`),
        unions: parseUnion(`void tf167_0(std::unordered_multimap<char32_t, int8_t> v);
void tf167_1(std::unordered_multimap<wchar_t, uint16_t> v);
void tf167_2(std::unordered_multimap<int, bool> v);
void tf167_3(std::unordered_multimap<char, bool> v);
void tf167_4(std::unordered_multimap<int, char> v);`),
        structs: parseStruct(`void tf167_0(std::unordered_multimap<char32_t, int8_t> v);
void tf167_1(std::unordered_multimap<wchar_t, uint16_t> v);
void tf167_2(std::unordered_multimap<int, bool> v);
void tf167_3(std::unordered_multimap<char, bool> v);
void tf167_4(std::unordered_multimap<int, char> v);`),
        classes: parseClass(`void tf167_0(std::unordered_multimap<char32_t, int8_t> v);
void tf167_1(std::unordered_multimap<wchar_t, uint16_t> v);
void tf167_2(std::unordered_multimap<int, bool> v);
void tf167_3(std::unordered_multimap<char, bool> v);
void tf167_4(std::unordered_multimap<int, char> v);`),
        funcs: parseFunction(`void tf167_0(std::unordered_multimap<char32_t, int8_t> v);
void tf167_1(std::unordered_multimap<wchar_t, uint16_t> v);
void tf167_2(std::unordered_multimap<int, bool> v);
void tf167_3(std::unordered_multimap<char, bool> v);
void tf167_4(std::unordered_multimap<int, char> v);`),
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
        `h2dtscpp_gen_0167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0168
  * @tc.name : h2dtscpp_gen_0168
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multimap<size_t, char>, std::unordered_multim... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0168', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf168_0(std::unordered_multimap<size_t, char> v);
void tf168_1(std::unordered_multimap<unsigned, char> v);
void tf168_2(std::unordered_multimap<int, int>::iterator v);
void tf168_3(std::unordered_multimap<char, int>::iterator v);
void tf168_4(std::unordered_multimap<char, size_t>::iterator v);`),
        unions: parseUnion(`void tf168_0(std::unordered_multimap<size_t, char> v);
void tf168_1(std::unordered_multimap<unsigned, char> v);
void tf168_2(std::unordered_multimap<int, int>::iterator v);
void tf168_3(std::unordered_multimap<char, int>::iterator v);
void tf168_4(std::unordered_multimap<char, size_t>::iterator v);`),
        structs: parseStruct(`void tf168_0(std::unordered_multimap<size_t, char> v);
void tf168_1(std::unordered_multimap<unsigned, char> v);
void tf168_2(std::unordered_multimap<int, int>::iterator v);
void tf168_3(std::unordered_multimap<char, int>::iterator v);
void tf168_4(std::unordered_multimap<char, size_t>::iterator v);`),
        classes: parseClass(`void tf168_0(std::unordered_multimap<size_t, char> v);
void tf168_1(std::unordered_multimap<unsigned, char> v);
void tf168_2(std::unordered_multimap<int, int>::iterator v);
void tf168_3(std::unordered_multimap<char, int>::iterator v);
void tf168_4(std::unordered_multimap<char, size_t>::iterator v);`),
        funcs: parseFunction(`void tf168_0(std::unordered_multimap<size_t, char> v);
void tf168_1(std::unordered_multimap<unsigned, char> v);
void tf168_2(std::unordered_multimap<int, int>::iterator v);
void tf168_3(std::unordered_multimap<char, int>::iterator v);
void tf168_4(std::unordered_multimap<char, size_t>::iterator v);`),
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
        `h2dtscpp_gen_0168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0168 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0169
  * @tc.name : h2dtscpp_gen_0169
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multimap<char, unsigned>::iterator, std::unor... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0169', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf169_0(std::unordered_multimap<char, unsigned>::iterator v);
void tf169_1(std::unordered_multimap<char, double>::iterator v);
void tf169_2(std::unordered_multimap<char, float>::iterator v);
void tf169_3(std::unordered_multimap<char16_t, int32_t>::iterator v);
void tf169_4(std::unordered_multimap<char32_t, size_t>::iterator v);`),
        unions: parseUnion(`void tf169_0(std::unordered_multimap<char, unsigned>::iterator v);
void tf169_1(std::unordered_multimap<char, double>::iterator v);
void tf169_2(std::unordered_multimap<char, float>::iterator v);
void tf169_3(std::unordered_multimap<char16_t, int32_t>::iterator v);
void tf169_4(std::unordered_multimap<char32_t, size_t>::iterator v);`),
        structs: parseStruct(`void tf169_0(std::unordered_multimap<char, unsigned>::iterator v);
void tf169_1(std::unordered_multimap<char, double>::iterator v);
void tf169_2(std::unordered_multimap<char, float>::iterator v);
void tf169_3(std::unordered_multimap<char16_t, int32_t>::iterator v);
void tf169_4(std::unordered_multimap<char32_t, size_t>::iterator v);`),
        classes: parseClass(`void tf169_0(std::unordered_multimap<char, unsigned>::iterator v);
void tf169_1(std::unordered_multimap<char, double>::iterator v);
void tf169_2(std::unordered_multimap<char, float>::iterator v);
void tf169_3(std::unordered_multimap<char16_t, int32_t>::iterator v);
void tf169_4(std::unordered_multimap<char32_t, size_t>::iterator v);`),
        funcs: parseFunction(`void tf169_0(std::unordered_multimap<char, unsigned>::iterator v);
void tf169_1(std::unordered_multimap<char, double>::iterator v);
void tf169_2(std::unordered_multimap<char, float>::iterator v);
void tf169_3(std::unordered_multimap<char16_t, int32_t>::iterator v);
void tf169_4(std::unordered_multimap<char32_t, size_t>::iterator v);`),
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
        `h2dtscpp_gen_0169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0170
  * @tc.name : h2dtscpp_gen_0170
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multimap<char8_t, uint32_t>::iterator, std::u... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0170', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf170_0(std::unordered_multimap<char8_t, uint32_t>::iterator v);
void tf170_1(std::unordered_multimap<char32_t, int8_t>::iterator v);
void tf170_2(std::unordered_multimap<wchar_t, uint16_t>::iterator v);
void tf170_3(std::unordered_multimap<int, bool>::iterator v);
void tf170_4(std::unordered_multimap<char, bool>::iterator v);`),
        unions: parseUnion(`void tf170_0(std::unordered_multimap<char8_t, uint32_t>::iterator v);
void tf170_1(std::unordered_multimap<char32_t, int8_t>::iterator v);
void tf170_2(std::unordered_multimap<wchar_t, uint16_t>::iterator v);
void tf170_3(std::unordered_multimap<int, bool>::iterator v);
void tf170_4(std::unordered_multimap<char, bool>::iterator v);`),
        structs: parseStruct(`void tf170_0(std::unordered_multimap<char8_t, uint32_t>::iterator v);
void tf170_1(std::unordered_multimap<char32_t, int8_t>::iterator v);
void tf170_2(std::unordered_multimap<wchar_t, uint16_t>::iterator v);
void tf170_3(std::unordered_multimap<int, bool>::iterator v);
void tf170_4(std::unordered_multimap<char, bool>::iterator v);`),
        classes: parseClass(`void tf170_0(std::unordered_multimap<char8_t, uint32_t>::iterator v);
void tf170_1(std::unordered_multimap<char32_t, int8_t>::iterator v);
void tf170_2(std::unordered_multimap<wchar_t, uint16_t>::iterator v);
void tf170_3(std::unordered_multimap<int, bool>::iterator v);
void tf170_4(std::unordered_multimap<char, bool>::iterator v);`),
        funcs: parseFunction(`void tf170_0(std::unordered_multimap<char8_t, uint32_t>::iterator v);
void tf170_1(std::unordered_multimap<char32_t, int8_t>::iterator v);
void tf170_2(std::unordered_multimap<wchar_t, uint16_t>::iterator v);
void tf170_3(std::unordered_multimap<int, bool>::iterator v);
void tf170_4(std::unordered_multimap<char, bool>::iterator v);`),
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
        `h2dtscpp_gen_0170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0171
  * @tc.name : h2dtscpp_gen_0171
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multimap<int, char>::iterator, std::unordered... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0171', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf171_0(std::unordered_multimap<int, char>::iterator v);
void tf171_1(std::unordered_multimap<size_t, char>::iterator v);
void tf171_2(std::unordered_multimap<unsigned, char>::iterator v);
void tf171_3(std::set<int> v);
void tf171_4(std::set<size_t> v);`),
        unions: parseUnion(`void tf171_0(std::unordered_multimap<int, char>::iterator v);
void tf171_1(std::unordered_multimap<size_t, char>::iterator v);
void tf171_2(std::unordered_multimap<unsigned, char>::iterator v);
void tf171_3(std::set<int> v);
void tf171_4(std::set<size_t> v);`),
        structs: parseStruct(`void tf171_0(std::unordered_multimap<int, char>::iterator v);
void tf171_1(std::unordered_multimap<size_t, char>::iterator v);
void tf171_2(std::unordered_multimap<unsigned, char>::iterator v);
void tf171_3(std::set<int> v);
void tf171_4(std::set<size_t> v);`),
        classes: parseClass(`void tf171_0(std::unordered_multimap<int, char>::iterator v);
void tf171_1(std::unordered_multimap<size_t, char>::iterator v);
void tf171_2(std::unordered_multimap<unsigned, char>::iterator v);
void tf171_3(std::set<int> v);
void tf171_4(std::set<size_t> v);`),
        funcs: parseFunction(`void tf171_0(std::unordered_multimap<int, char>::iterator v);
void tf171_1(std::unordered_multimap<size_t, char>::iterator v);
void tf171_2(std::unordered_multimap<unsigned, char>::iterator v);
void tf171_3(std::set<int> v);
void tf171_4(std::set<size_t> v);`),
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
        `h2dtscpp_gen_0171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0172
  * @tc.name : h2dtscpp_gen_0172
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::set<double>, std::set<float>, std::set<long>, std::set<... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0172', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf172_0(std::set<double> v);
void tf172_1(std::set<float> v);
void tf172_2(std::set<long> v);
void tf172_3(std::set<short> v);
void tf172_4(std::set<uint8_t> v);`),
        unions: parseUnion(`void tf172_0(std::set<double> v);
void tf172_1(std::set<float> v);
void tf172_2(std::set<long> v);
void tf172_3(std::set<short> v);
void tf172_4(std::set<uint8_t> v);`),
        structs: parseStruct(`void tf172_0(std::set<double> v);
void tf172_1(std::set<float> v);
void tf172_2(std::set<long> v);
void tf172_3(std::set<short> v);
void tf172_4(std::set<uint8_t> v);`),
        classes: parseClass(`void tf172_0(std::set<double> v);
void tf172_1(std::set<float> v);
void tf172_2(std::set<long> v);
void tf172_3(std::set<short> v);
void tf172_4(std::set<uint8_t> v);`),
        funcs: parseFunction(`void tf172_0(std::set<double> v);
void tf172_1(std::set<float> v);
void tf172_2(std::set<long> v);
void tf172_3(std::set<short> v);
void tf172_4(std::set<uint8_t> v);`),
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
        `h2dtscpp_gen_0172 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0172 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0173
  * @tc.name : h2dtscpp_gen_0173
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::set<uint16_t>, std::set<uint32_t>, std::set<uint64_t>, ... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0173', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf173_0(std::set<uint16_t> v);
void tf173_1(std::set<uint32_t> v);
void tf173_2(std::set<uint64_t> v);
void tf173_3(std::set<int8_t> v);
void tf173_4(std::set<int16_t> v);`),
        unions: parseUnion(`void tf173_0(std::set<uint16_t> v);
void tf173_1(std::set<uint32_t> v);
void tf173_2(std::set<uint64_t> v);
void tf173_3(std::set<int8_t> v);
void tf173_4(std::set<int16_t> v);`),
        structs: parseStruct(`void tf173_0(std::set<uint16_t> v);
void tf173_1(std::set<uint32_t> v);
void tf173_2(std::set<uint64_t> v);
void tf173_3(std::set<int8_t> v);
void tf173_4(std::set<int16_t> v);`),
        classes: parseClass(`void tf173_0(std::set<uint16_t> v);
void tf173_1(std::set<uint32_t> v);
void tf173_2(std::set<uint64_t> v);
void tf173_3(std::set<int8_t> v);
void tf173_4(std::set<int16_t> v);`),
        funcs: parseFunction(`void tf173_0(std::set<uint16_t> v);
void tf173_1(std::set<uint32_t> v);
void tf173_2(std::set<uint64_t> v);
void tf173_3(std::set<int8_t> v);
void tf173_4(std::set<int16_t> v);`),
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
        `h2dtscpp_gen_0173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0174
  * @tc.name : h2dtscpp_gen_0174
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::set<int32_t>, std::set<int64_t>, std::set<unsigned>, st... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0174', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf174_0(std::set<int32_t> v);
void tf174_1(std::set<int64_t> v);
void tf174_2(std::set<unsigned> v);
void tf174_3(std::set<bool> v);
void tf174_4(std::set<char> v);`),
        unions: parseUnion(`void tf174_0(std::set<int32_t> v);
void tf174_1(std::set<int64_t> v);
void tf174_2(std::set<unsigned> v);
void tf174_3(std::set<bool> v);
void tf174_4(std::set<char> v);`),
        structs: parseStruct(`void tf174_0(std::set<int32_t> v);
void tf174_1(std::set<int64_t> v);
void tf174_2(std::set<unsigned> v);
void tf174_3(std::set<bool> v);
void tf174_4(std::set<char> v);`),
        classes: parseClass(`void tf174_0(std::set<int32_t> v);
void tf174_1(std::set<int64_t> v);
void tf174_2(std::set<unsigned> v);
void tf174_3(std::set<bool> v);
void tf174_4(std::set<char> v);`),
        funcs: parseFunction(`void tf174_0(std::set<int32_t> v);
void tf174_1(std::set<int64_t> v);
void tf174_2(std::set<unsigned> v);
void tf174_3(std::set<bool> v);
void tf174_4(std::set<char> v);`),
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
        `h2dtscpp_gen_0174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0175
  * @tc.name : h2dtscpp_gen_0175
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::set<wchar_t>, std::set<char8_t>, std::set<char16_t>, st... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0175', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf175_0(std::set<wchar_t> v);
void tf175_1(std::set<char8_t> v);
void tf175_2(std::set<char16_t> v);
void tf175_3(std::set<char32_t> v);
void tf175_4(std::set<int>::iterator v);`),
        unions: parseUnion(`void tf175_0(std::set<wchar_t> v);
void tf175_1(std::set<char8_t> v);
void tf175_2(std::set<char16_t> v);
void tf175_3(std::set<char32_t> v);
void tf175_4(std::set<int>::iterator v);`),
        structs: parseStruct(`void tf175_0(std::set<wchar_t> v);
void tf175_1(std::set<char8_t> v);
void tf175_2(std::set<char16_t> v);
void tf175_3(std::set<char32_t> v);
void tf175_4(std::set<int>::iterator v);`),
        classes: parseClass(`void tf175_0(std::set<wchar_t> v);
void tf175_1(std::set<char8_t> v);
void tf175_2(std::set<char16_t> v);
void tf175_3(std::set<char32_t> v);
void tf175_4(std::set<int>::iterator v);`),
        funcs: parseFunction(`void tf175_0(std::set<wchar_t> v);
void tf175_1(std::set<char8_t> v);
void tf175_2(std::set<char16_t> v);
void tf175_3(std::set<char32_t> v);
void tf175_4(std::set<int>::iterator v);`),
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
        `h2dtscpp_gen_0175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0175 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0176
  * @tc.name : h2dtscpp_gen_0176
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::set<size_t>::iterator, std::set<double>::iterator, std:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0176', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf176_0(std::set<size_t>::iterator v);
void tf176_1(std::set<double>::iterator v);
void tf176_2(std::set<float>::iterator v);
void tf176_3(std::set<long>::iterator v);
void tf176_4(std::set<short>::iterator v);`),
        unions: parseUnion(`void tf176_0(std::set<size_t>::iterator v);
void tf176_1(std::set<double>::iterator v);
void tf176_2(std::set<float>::iterator v);
void tf176_3(std::set<long>::iterator v);
void tf176_4(std::set<short>::iterator v);`),
        structs: parseStruct(`void tf176_0(std::set<size_t>::iterator v);
void tf176_1(std::set<double>::iterator v);
void tf176_2(std::set<float>::iterator v);
void tf176_3(std::set<long>::iterator v);
void tf176_4(std::set<short>::iterator v);`),
        classes: parseClass(`void tf176_0(std::set<size_t>::iterator v);
void tf176_1(std::set<double>::iterator v);
void tf176_2(std::set<float>::iterator v);
void tf176_3(std::set<long>::iterator v);
void tf176_4(std::set<short>::iterator v);`),
        funcs: parseFunction(`void tf176_0(std::set<size_t>::iterator v);
void tf176_1(std::set<double>::iterator v);
void tf176_2(std::set<float>::iterator v);
void tf176_3(std::set<long>::iterator v);
void tf176_4(std::set<short>::iterator v);`),
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
        `h2dtscpp_gen_0176 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0177
  * @tc.name : h2dtscpp_gen_0177
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::set<uint8_t>::iterator, std::set<uint16_t>::iterator, s... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0177', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf177_0(std::set<uint8_t>::iterator v);
void tf177_1(std::set<uint16_t>::iterator v);
void tf177_2(std::set<uint32_t>::iterator v);
void tf177_3(std::set<uint64_t>::iterator v);
void tf177_4(std::set<int8_t>::iterator v);`),
        unions: parseUnion(`void tf177_0(std::set<uint8_t>::iterator v);
void tf177_1(std::set<uint16_t>::iterator v);
void tf177_2(std::set<uint32_t>::iterator v);
void tf177_3(std::set<uint64_t>::iterator v);
void tf177_4(std::set<int8_t>::iterator v);`),
        structs: parseStruct(`void tf177_0(std::set<uint8_t>::iterator v);
void tf177_1(std::set<uint16_t>::iterator v);
void tf177_2(std::set<uint32_t>::iterator v);
void tf177_3(std::set<uint64_t>::iterator v);
void tf177_4(std::set<int8_t>::iterator v);`),
        classes: parseClass(`void tf177_0(std::set<uint8_t>::iterator v);
void tf177_1(std::set<uint16_t>::iterator v);
void tf177_2(std::set<uint32_t>::iterator v);
void tf177_3(std::set<uint64_t>::iterator v);
void tf177_4(std::set<int8_t>::iterator v);`),
        funcs: parseFunction(`void tf177_0(std::set<uint8_t>::iterator v);
void tf177_1(std::set<uint16_t>::iterator v);
void tf177_2(std::set<uint32_t>::iterator v);
void tf177_3(std::set<uint64_t>::iterator v);
void tf177_4(std::set<int8_t>::iterator v);`),
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
        `h2dtscpp_gen_0177 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0177 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0178
  * @tc.name : h2dtscpp_gen_0178
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::set<int16_t>::iterator, std::set<int32_t>::iterator, st... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0178', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf178_0(std::set<int16_t>::iterator v);
void tf178_1(std::set<int32_t>::iterator v);
void tf178_2(std::set<int64_t>::iterator v);
void tf178_3(std::set<unsigned>::iterator v);
void tf178_4(std::set<bool>::iterator v);`),
        unions: parseUnion(`void tf178_0(std::set<int16_t>::iterator v);
void tf178_1(std::set<int32_t>::iterator v);
void tf178_2(std::set<int64_t>::iterator v);
void tf178_3(std::set<unsigned>::iterator v);
void tf178_4(std::set<bool>::iterator v);`),
        structs: parseStruct(`void tf178_0(std::set<int16_t>::iterator v);
void tf178_1(std::set<int32_t>::iterator v);
void tf178_2(std::set<int64_t>::iterator v);
void tf178_3(std::set<unsigned>::iterator v);
void tf178_4(std::set<bool>::iterator v);`),
        classes: parseClass(`void tf178_0(std::set<int16_t>::iterator v);
void tf178_1(std::set<int32_t>::iterator v);
void tf178_2(std::set<int64_t>::iterator v);
void tf178_3(std::set<unsigned>::iterator v);
void tf178_4(std::set<bool>::iterator v);`),
        funcs: parseFunction(`void tf178_0(std::set<int16_t>::iterator v);
void tf178_1(std::set<int32_t>::iterator v);
void tf178_2(std::set<int64_t>::iterator v);
void tf178_3(std::set<unsigned>::iterator v);
void tf178_4(std::set<bool>::iterator v);`),
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
        `h2dtscpp_gen_0178 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0179
  * @tc.name : h2dtscpp_gen_0179
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::set<char>::iterator, std::set<wchar_t>::iterator, std::... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0179', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf179_0(std::set<char>::iterator v);
void tf179_1(std::set<wchar_t>::iterator v);
void tf179_2(std::set<char8_t>::iterator v);
void tf179_3(std::set<char16_t>::iterator v);
void tf179_4(std::set<char32_t>::iterator v);`),
        unions: parseUnion(`void tf179_0(std::set<char>::iterator v);
void tf179_1(std::set<wchar_t>::iterator v);
void tf179_2(std::set<char8_t>::iterator v);
void tf179_3(std::set<char16_t>::iterator v);
void tf179_4(std::set<char32_t>::iterator v);`),
        structs: parseStruct(`void tf179_0(std::set<char>::iterator v);
void tf179_1(std::set<wchar_t>::iterator v);
void tf179_2(std::set<char8_t>::iterator v);
void tf179_3(std::set<char16_t>::iterator v);
void tf179_4(std::set<char32_t>::iterator v);`),
        classes: parseClass(`void tf179_0(std::set<char>::iterator v);
void tf179_1(std::set<wchar_t>::iterator v);
void tf179_2(std::set<char8_t>::iterator v);
void tf179_3(std::set<char16_t>::iterator v);
void tf179_4(std::set<char32_t>::iterator v);`),
        funcs: parseFunction(`void tf179_0(std::set<char>::iterator v);
void tf179_1(std::set<wchar_t>::iterator v);
void tf179_2(std::set<char8_t>::iterator v);
void tf179_3(std::set<char16_t>::iterator v);
void tf179_4(std::set<char32_t>::iterator v);`),
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
        `h2dtscpp_gen_0179 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0179 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0180
  * @tc.name : h2dtscpp_gen_0180
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_set<int>, std::unordered_set<size_t>, std::un... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0180', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf180_0(std::unordered_set<int> v);
void tf180_1(std::unordered_set<size_t> v);
void tf180_2(std::unordered_set<double> v);
void tf180_3(std::unordered_set<float> v);
void tf180_4(std::unordered_set<long> v);`),
        unions: parseUnion(`void tf180_0(std::unordered_set<int> v);
void tf180_1(std::unordered_set<size_t> v);
void tf180_2(std::unordered_set<double> v);
void tf180_3(std::unordered_set<float> v);
void tf180_4(std::unordered_set<long> v);`),
        structs: parseStruct(`void tf180_0(std::unordered_set<int> v);
void tf180_1(std::unordered_set<size_t> v);
void tf180_2(std::unordered_set<double> v);
void tf180_3(std::unordered_set<float> v);
void tf180_4(std::unordered_set<long> v);`),
        classes: parseClass(`void tf180_0(std::unordered_set<int> v);
void tf180_1(std::unordered_set<size_t> v);
void tf180_2(std::unordered_set<double> v);
void tf180_3(std::unordered_set<float> v);
void tf180_4(std::unordered_set<long> v);`),
        funcs: parseFunction(`void tf180_0(std::unordered_set<int> v);
void tf180_1(std::unordered_set<size_t> v);
void tf180_2(std::unordered_set<double> v);
void tf180_3(std::unordered_set<float> v);
void tf180_4(std::unordered_set<long> v);`),
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
        `h2dtscpp_gen_0180 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0180 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0181
  * @tc.name : h2dtscpp_gen_0181
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_set<short>, std::unordered_set<uint8_t>, std:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0181', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf181_0(std::unordered_set<short> v);
void tf181_1(std::unordered_set<uint8_t> v);
void tf181_2(std::unordered_set<uint16_t> v);
void tf181_3(std::unordered_set<uint32_t> v);
void tf181_4(std::unordered_set<uint64_t> v);`),
        unions: parseUnion(`void tf181_0(std::unordered_set<short> v);
void tf181_1(std::unordered_set<uint8_t> v);
void tf181_2(std::unordered_set<uint16_t> v);
void tf181_3(std::unordered_set<uint32_t> v);
void tf181_4(std::unordered_set<uint64_t> v);`),
        structs: parseStruct(`void tf181_0(std::unordered_set<short> v);
void tf181_1(std::unordered_set<uint8_t> v);
void tf181_2(std::unordered_set<uint16_t> v);
void tf181_3(std::unordered_set<uint32_t> v);
void tf181_4(std::unordered_set<uint64_t> v);`),
        classes: parseClass(`void tf181_0(std::unordered_set<short> v);
void tf181_1(std::unordered_set<uint8_t> v);
void tf181_2(std::unordered_set<uint16_t> v);
void tf181_3(std::unordered_set<uint32_t> v);
void tf181_4(std::unordered_set<uint64_t> v);`),
        funcs: parseFunction(`void tf181_0(std::unordered_set<short> v);
void tf181_1(std::unordered_set<uint8_t> v);
void tf181_2(std::unordered_set<uint16_t> v);
void tf181_3(std::unordered_set<uint32_t> v);
void tf181_4(std::unordered_set<uint64_t> v);`),
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
        `h2dtscpp_gen_0181 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0181 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0182
  * @tc.name : h2dtscpp_gen_0182
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_set<int8_t>, std::unordered_set<int16_t>, std... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0182', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf182_0(std::unordered_set<int8_t> v);
void tf182_1(std::unordered_set<int16_t> v);
void tf182_2(std::unordered_set<int32_t> v);
void tf182_3(std::unordered_set<int64_t> v);
void tf182_4(std::unordered_set<unsigned> v);`),
        unions: parseUnion(`void tf182_0(std::unordered_set<int8_t> v);
void tf182_1(std::unordered_set<int16_t> v);
void tf182_2(std::unordered_set<int32_t> v);
void tf182_3(std::unordered_set<int64_t> v);
void tf182_4(std::unordered_set<unsigned> v);`),
        structs: parseStruct(`void tf182_0(std::unordered_set<int8_t> v);
void tf182_1(std::unordered_set<int16_t> v);
void tf182_2(std::unordered_set<int32_t> v);
void tf182_3(std::unordered_set<int64_t> v);
void tf182_4(std::unordered_set<unsigned> v);`),
        classes: parseClass(`void tf182_0(std::unordered_set<int8_t> v);
void tf182_1(std::unordered_set<int16_t> v);
void tf182_2(std::unordered_set<int32_t> v);
void tf182_3(std::unordered_set<int64_t> v);
void tf182_4(std::unordered_set<unsigned> v);`),
        funcs: parseFunction(`void tf182_0(std::unordered_set<int8_t> v);
void tf182_1(std::unordered_set<int16_t> v);
void tf182_2(std::unordered_set<int32_t> v);
void tf182_3(std::unordered_set<int64_t> v);
void tf182_4(std::unordered_set<unsigned> v);`),
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
        `h2dtscpp_gen_0182 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0182 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0183
  * @tc.name : h2dtscpp_gen_0183
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_set<bool>, std::unordered_set<char>, std::uno... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0183', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf183_0(std::unordered_set<bool> v);
void tf183_1(std::unordered_set<char> v);
void tf183_2(std::unordered_set<wchar_t> v);
void tf183_3(std::unordered_set<char8_t> v);
void tf183_4(std::unordered_set<char16_t> v);`),
        unions: parseUnion(`void tf183_0(std::unordered_set<bool> v);
void tf183_1(std::unordered_set<char> v);
void tf183_2(std::unordered_set<wchar_t> v);
void tf183_3(std::unordered_set<char8_t> v);
void tf183_4(std::unordered_set<char16_t> v);`),
        structs: parseStruct(`void tf183_0(std::unordered_set<bool> v);
void tf183_1(std::unordered_set<char> v);
void tf183_2(std::unordered_set<wchar_t> v);
void tf183_3(std::unordered_set<char8_t> v);
void tf183_4(std::unordered_set<char16_t> v);`),
        classes: parseClass(`void tf183_0(std::unordered_set<bool> v);
void tf183_1(std::unordered_set<char> v);
void tf183_2(std::unordered_set<wchar_t> v);
void tf183_3(std::unordered_set<char8_t> v);
void tf183_4(std::unordered_set<char16_t> v);`),
        funcs: parseFunction(`void tf183_0(std::unordered_set<bool> v);
void tf183_1(std::unordered_set<char> v);
void tf183_2(std::unordered_set<wchar_t> v);
void tf183_3(std::unordered_set<char8_t> v);
void tf183_4(std::unordered_set<char16_t> v);`),
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
        `h2dtscpp_gen_0183 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0183 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0184
  * @tc.name : h2dtscpp_gen_0184
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_set<char32_t>, std::unordered_set<int>::itera... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0184', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf184_0(std::unordered_set<char32_t> v);
void tf184_1(std::unordered_set<int>::iterator v);
void tf184_2(std::unordered_set<size_t>::iterator v);
void tf184_3(std::unordered_set<double>::iterator v);
void tf184_4(std::unordered_set<float>::iterator v);`),
        unions: parseUnion(`void tf184_0(std::unordered_set<char32_t> v);
void tf184_1(std::unordered_set<int>::iterator v);
void tf184_2(std::unordered_set<size_t>::iterator v);
void tf184_3(std::unordered_set<double>::iterator v);
void tf184_4(std::unordered_set<float>::iterator v);`),
        structs: parseStruct(`void tf184_0(std::unordered_set<char32_t> v);
void tf184_1(std::unordered_set<int>::iterator v);
void tf184_2(std::unordered_set<size_t>::iterator v);
void tf184_3(std::unordered_set<double>::iterator v);
void tf184_4(std::unordered_set<float>::iterator v);`),
        classes: parseClass(`void tf184_0(std::unordered_set<char32_t> v);
void tf184_1(std::unordered_set<int>::iterator v);
void tf184_2(std::unordered_set<size_t>::iterator v);
void tf184_3(std::unordered_set<double>::iterator v);
void tf184_4(std::unordered_set<float>::iterator v);`),
        funcs: parseFunction(`void tf184_0(std::unordered_set<char32_t> v);
void tf184_1(std::unordered_set<int>::iterator v);
void tf184_2(std::unordered_set<size_t>::iterator v);
void tf184_3(std::unordered_set<double>::iterator v);
void tf184_4(std::unordered_set<float>::iterator v);`),
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
        `h2dtscpp_gen_0184 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0184 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0185
  * @tc.name : h2dtscpp_gen_0185
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_set<long>::iterator, std::unordered_set<short... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0185', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf185_0(std::unordered_set<long>::iterator v);
void tf185_1(std::unordered_set<short>::iterator v);
void tf185_2(std::unordered_set<uint8_t>::iterator v);
void tf185_3(std::unordered_set<uint16_t>::iterator v);
void tf185_4(std::unordered_set<uint32_t>::iterator v);`),
        unions: parseUnion(`void tf185_0(std::unordered_set<long>::iterator v);
void tf185_1(std::unordered_set<short>::iterator v);
void tf185_2(std::unordered_set<uint8_t>::iterator v);
void tf185_3(std::unordered_set<uint16_t>::iterator v);
void tf185_4(std::unordered_set<uint32_t>::iterator v);`),
        structs: parseStruct(`void tf185_0(std::unordered_set<long>::iterator v);
void tf185_1(std::unordered_set<short>::iterator v);
void tf185_2(std::unordered_set<uint8_t>::iterator v);
void tf185_3(std::unordered_set<uint16_t>::iterator v);
void tf185_4(std::unordered_set<uint32_t>::iterator v);`),
        classes: parseClass(`void tf185_0(std::unordered_set<long>::iterator v);
void tf185_1(std::unordered_set<short>::iterator v);
void tf185_2(std::unordered_set<uint8_t>::iterator v);
void tf185_3(std::unordered_set<uint16_t>::iterator v);
void tf185_4(std::unordered_set<uint32_t>::iterator v);`),
        funcs: parseFunction(`void tf185_0(std::unordered_set<long>::iterator v);
void tf185_1(std::unordered_set<short>::iterator v);
void tf185_2(std::unordered_set<uint8_t>::iterator v);
void tf185_3(std::unordered_set<uint16_t>::iterator v);
void tf185_4(std::unordered_set<uint32_t>::iterator v);`),
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
        `h2dtscpp_gen_0185 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0185 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0186
  * @tc.name : h2dtscpp_gen_0186
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_set<uint64_t>::iterator, std::unordered_set<i... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0186', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf186_0(std::unordered_set<uint64_t>::iterator v);
void tf186_1(std::unordered_set<int8_t>::iterator v);
void tf186_2(std::unordered_set<int16_t>::iterator v);
void tf186_3(std::unordered_set<int32_t>::iterator v);
void tf186_4(std::unordered_set<int64_t>::iterator v);`),
        unions: parseUnion(`void tf186_0(std::unordered_set<uint64_t>::iterator v);
void tf186_1(std::unordered_set<int8_t>::iterator v);
void tf186_2(std::unordered_set<int16_t>::iterator v);
void tf186_3(std::unordered_set<int32_t>::iterator v);
void tf186_4(std::unordered_set<int64_t>::iterator v);`),
        structs: parseStruct(`void tf186_0(std::unordered_set<uint64_t>::iterator v);
void tf186_1(std::unordered_set<int8_t>::iterator v);
void tf186_2(std::unordered_set<int16_t>::iterator v);
void tf186_3(std::unordered_set<int32_t>::iterator v);
void tf186_4(std::unordered_set<int64_t>::iterator v);`),
        classes: parseClass(`void tf186_0(std::unordered_set<uint64_t>::iterator v);
void tf186_1(std::unordered_set<int8_t>::iterator v);
void tf186_2(std::unordered_set<int16_t>::iterator v);
void tf186_3(std::unordered_set<int32_t>::iterator v);
void tf186_4(std::unordered_set<int64_t>::iterator v);`),
        funcs: parseFunction(`void tf186_0(std::unordered_set<uint64_t>::iterator v);
void tf186_1(std::unordered_set<int8_t>::iterator v);
void tf186_2(std::unordered_set<int16_t>::iterator v);
void tf186_3(std::unordered_set<int32_t>::iterator v);
void tf186_4(std::unordered_set<int64_t>::iterator v);`),
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
        `h2dtscpp_gen_0186 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0186 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0187
  * @tc.name : h2dtscpp_gen_0187
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_set<unsigned>::iterator, std::unordered_set<b... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0187', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf187_0(std::unordered_set<unsigned>::iterator v);
void tf187_1(std::unordered_set<bool>::iterator v);
void tf187_2(std::unordered_set<char>::iterator v);
void tf187_3(std::unordered_set<wchar_t>::iterator v);
void tf187_4(std::unordered_set<char8_t>::iterator v);`),
        unions: parseUnion(`void tf187_0(std::unordered_set<unsigned>::iterator v);
void tf187_1(std::unordered_set<bool>::iterator v);
void tf187_2(std::unordered_set<char>::iterator v);
void tf187_3(std::unordered_set<wchar_t>::iterator v);
void tf187_4(std::unordered_set<char8_t>::iterator v);`),
        structs: parseStruct(`void tf187_0(std::unordered_set<unsigned>::iterator v);
void tf187_1(std::unordered_set<bool>::iterator v);
void tf187_2(std::unordered_set<char>::iterator v);
void tf187_3(std::unordered_set<wchar_t>::iterator v);
void tf187_4(std::unordered_set<char8_t>::iterator v);`),
        classes: parseClass(`void tf187_0(std::unordered_set<unsigned>::iterator v);
void tf187_1(std::unordered_set<bool>::iterator v);
void tf187_2(std::unordered_set<char>::iterator v);
void tf187_3(std::unordered_set<wchar_t>::iterator v);
void tf187_4(std::unordered_set<char8_t>::iterator v);`),
        funcs: parseFunction(`void tf187_0(std::unordered_set<unsigned>::iterator v);
void tf187_1(std::unordered_set<bool>::iterator v);
void tf187_2(std::unordered_set<char>::iterator v);
void tf187_3(std::unordered_set<wchar_t>::iterator v);
void tf187_4(std::unordered_set<char8_t>::iterator v);`),
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
        `h2dtscpp_gen_0187 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0187 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0188
  * @tc.name : h2dtscpp_gen_0188
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_set<char16_t>::iterator, std::unordered_set<c... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
});
