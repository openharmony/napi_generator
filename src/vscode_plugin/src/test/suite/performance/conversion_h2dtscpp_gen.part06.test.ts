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
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part06.');

  /**
  * @tc.number : h2dtscpp_gen_0088
  * @tc.name : h2dtscpp_gen_0088
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::deque<long>, std::deque<short>, std::deque<uint8_t>, st... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0088', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf88_0(std::deque<long> v);
void tf88_1(std::deque<short> v);
void tf88_2(std::deque<uint8_t> v);
void tf88_3(std::deque<uint16_t> v);
void tf88_4(std::deque<uint32_t> v);`),
        unions: parseUnion(`void tf88_0(std::deque<long> v);
void tf88_1(std::deque<short> v);
void tf88_2(std::deque<uint8_t> v);
void tf88_3(std::deque<uint16_t> v);
void tf88_4(std::deque<uint32_t> v);`),
        structs: parseStruct(`void tf88_0(std::deque<long> v);
void tf88_1(std::deque<short> v);
void tf88_2(std::deque<uint8_t> v);
void tf88_3(std::deque<uint16_t> v);
void tf88_4(std::deque<uint32_t> v);`),
        classes: parseClass(`void tf88_0(std::deque<long> v);
void tf88_1(std::deque<short> v);
void tf88_2(std::deque<uint8_t> v);
void tf88_3(std::deque<uint16_t> v);
void tf88_4(std::deque<uint32_t> v);`),
        funcs: parseFunction(`void tf88_0(std::deque<long> v);
void tf88_1(std::deque<short> v);
void tf88_2(std::deque<uint8_t> v);
void tf88_3(std::deque<uint16_t> v);
void tf88_4(std::deque<uint32_t> v);`),
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
        `h2dtscpp_gen_0088 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0089
  * @tc.name : h2dtscpp_gen_0089
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::deque<uint64_t>, std::deque<int8_t>, std::deque<int16_t... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0089', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf89_0(std::deque<uint64_t> v);
void tf89_1(std::deque<int8_t> v);
void tf89_2(std::deque<int16_t> v);
void tf89_3(std::deque<int32_t> v);
void tf89_4(std::deque<int64_t> v);`),
        unions: parseUnion(`void tf89_0(std::deque<uint64_t> v);
void tf89_1(std::deque<int8_t> v);
void tf89_2(std::deque<int16_t> v);
void tf89_3(std::deque<int32_t> v);
void tf89_4(std::deque<int64_t> v);`),
        structs: parseStruct(`void tf89_0(std::deque<uint64_t> v);
void tf89_1(std::deque<int8_t> v);
void tf89_2(std::deque<int16_t> v);
void tf89_3(std::deque<int32_t> v);
void tf89_4(std::deque<int64_t> v);`),
        classes: parseClass(`void tf89_0(std::deque<uint64_t> v);
void tf89_1(std::deque<int8_t> v);
void tf89_2(std::deque<int16_t> v);
void tf89_3(std::deque<int32_t> v);
void tf89_4(std::deque<int64_t> v);`),
        funcs: parseFunction(`void tf89_0(std::deque<uint64_t> v);
void tf89_1(std::deque<int8_t> v);
void tf89_2(std::deque<int16_t> v);
void tf89_3(std::deque<int32_t> v);
void tf89_4(std::deque<int64_t> v);`),
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
        `h2dtscpp_gen_0089 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0090
  * @tc.name : h2dtscpp_gen_0090
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::deque<unsigned>, std::deque<bool>, std::deque<char>, st... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0090', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf90_0(std::deque<unsigned> v);
void tf90_1(std::deque<bool> v);
void tf90_2(std::deque<char> v);
void tf90_3(std::deque<wchar_t> v);
void tf90_4(std::deque<char8_t> v);`),
        unions: parseUnion(`void tf90_0(std::deque<unsigned> v);
void tf90_1(std::deque<bool> v);
void tf90_2(std::deque<char> v);
void tf90_3(std::deque<wchar_t> v);
void tf90_4(std::deque<char8_t> v);`),
        structs: parseStruct(`void tf90_0(std::deque<unsigned> v);
void tf90_1(std::deque<bool> v);
void tf90_2(std::deque<char> v);
void tf90_3(std::deque<wchar_t> v);
void tf90_4(std::deque<char8_t> v);`),
        classes: parseClass(`void tf90_0(std::deque<unsigned> v);
void tf90_1(std::deque<bool> v);
void tf90_2(std::deque<char> v);
void tf90_3(std::deque<wchar_t> v);
void tf90_4(std::deque<char8_t> v);`),
        funcs: parseFunction(`void tf90_0(std::deque<unsigned> v);
void tf90_1(std::deque<bool> v);
void tf90_2(std::deque<char> v);
void tf90_3(std::deque<wchar_t> v);
void tf90_4(std::deque<char8_t> v);`),
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
        `h2dtscpp_gen_0090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0091
  * @tc.name : h2dtscpp_gen_0091
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::deque<char16_t>, std::deque<char32_t>, std::deque<int>:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0091', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf91_0(std::deque<char16_t> v);
void tf91_1(std::deque<char32_t> v);
void tf91_2(std::deque<int>::iterator v);
void tf91_3(std::deque<size_t>::iterator v);
void tf91_4(std::deque<double>::iterator v);`),
        unions: parseUnion(`void tf91_0(std::deque<char16_t> v);
void tf91_1(std::deque<char32_t> v);
void tf91_2(std::deque<int>::iterator v);
void tf91_3(std::deque<size_t>::iterator v);
void tf91_4(std::deque<double>::iterator v);`),
        structs: parseStruct(`void tf91_0(std::deque<char16_t> v);
void tf91_1(std::deque<char32_t> v);
void tf91_2(std::deque<int>::iterator v);
void tf91_3(std::deque<size_t>::iterator v);
void tf91_4(std::deque<double>::iterator v);`),
        classes: parseClass(`void tf91_0(std::deque<char16_t> v);
void tf91_1(std::deque<char32_t> v);
void tf91_2(std::deque<int>::iterator v);
void tf91_3(std::deque<size_t>::iterator v);
void tf91_4(std::deque<double>::iterator v);`),
        funcs: parseFunction(`void tf91_0(std::deque<char16_t> v);
void tf91_1(std::deque<char32_t> v);
void tf91_2(std::deque<int>::iterator v);
void tf91_3(std::deque<size_t>::iterator v);
void tf91_4(std::deque<double>::iterator v);`),
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
        `h2dtscpp_gen_0091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0092
  * @tc.name : h2dtscpp_gen_0092
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::deque<float>::iterator, std::deque<long>::iterator, std... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0092', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf92_0(std::deque<float>::iterator v);
void tf92_1(std::deque<long>::iterator v);
void tf92_2(std::deque<short>::iterator v);
void tf92_3(std::deque<uint8_t>::iterator v);
void tf92_4(std::deque<uint16_t>::iterator v);`),
        unions: parseUnion(`void tf92_0(std::deque<float>::iterator v);
void tf92_1(std::deque<long>::iterator v);
void tf92_2(std::deque<short>::iterator v);
void tf92_3(std::deque<uint8_t>::iterator v);
void tf92_4(std::deque<uint16_t>::iterator v);`),
        structs: parseStruct(`void tf92_0(std::deque<float>::iterator v);
void tf92_1(std::deque<long>::iterator v);
void tf92_2(std::deque<short>::iterator v);
void tf92_3(std::deque<uint8_t>::iterator v);
void tf92_4(std::deque<uint16_t>::iterator v);`),
        classes: parseClass(`void tf92_0(std::deque<float>::iterator v);
void tf92_1(std::deque<long>::iterator v);
void tf92_2(std::deque<short>::iterator v);
void tf92_3(std::deque<uint8_t>::iterator v);
void tf92_4(std::deque<uint16_t>::iterator v);`),
        funcs: parseFunction(`void tf92_0(std::deque<float>::iterator v);
void tf92_1(std::deque<long>::iterator v);
void tf92_2(std::deque<short>::iterator v);
void tf92_3(std::deque<uint8_t>::iterator v);
void tf92_4(std::deque<uint16_t>::iterator v);`),
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
        `h2dtscpp_gen_0092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0093
  * @tc.name : h2dtscpp_gen_0093
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::deque<uint32_t>::iterator, std::deque<uint64_t>::iterat... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0093', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf93_0(std::deque<uint32_t>::iterator v);
void tf93_1(std::deque<uint64_t>::iterator v);
void tf93_2(std::deque<int8_t>::iterator v);
void tf93_3(std::deque<int16_t>::iterator v);
void tf93_4(std::deque<int32_t>::iterator v);`),
        unions: parseUnion(`void tf93_0(std::deque<uint32_t>::iterator v);
void tf93_1(std::deque<uint64_t>::iterator v);
void tf93_2(std::deque<int8_t>::iterator v);
void tf93_3(std::deque<int16_t>::iterator v);
void tf93_4(std::deque<int32_t>::iterator v);`),
        structs: parseStruct(`void tf93_0(std::deque<uint32_t>::iterator v);
void tf93_1(std::deque<uint64_t>::iterator v);
void tf93_2(std::deque<int8_t>::iterator v);
void tf93_3(std::deque<int16_t>::iterator v);
void tf93_4(std::deque<int32_t>::iterator v);`),
        classes: parseClass(`void tf93_0(std::deque<uint32_t>::iterator v);
void tf93_1(std::deque<uint64_t>::iterator v);
void tf93_2(std::deque<int8_t>::iterator v);
void tf93_3(std::deque<int16_t>::iterator v);
void tf93_4(std::deque<int32_t>::iterator v);`),
        funcs: parseFunction(`void tf93_0(std::deque<uint32_t>::iterator v);
void tf93_1(std::deque<uint64_t>::iterator v);
void tf93_2(std::deque<int8_t>::iterator v);
void tf93_3(std::deque<int16_t>::iterator v);
void tf93_4(std::deque<int32_t>::iterator v);`),
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
        `h2dtscpp_gen_0093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0094
  * @tc.name : h2dtscpp_gen_0094
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::deque<int64_t>::iterator, std::deque<unsigned>::iterato... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0094', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf94_0(std::deque<int64_t>::iterator v);
void tf94_1(std::deque<unsigned>::iterator v);
void tf94_2(std::deque<bool>::iterator v);
void tf94_3(std::deque<char>::iterator v);
void tf94_4(std::deque<wchar_t>::iterator v);`),
        unions: parseUnion(`void tf94_0(std::deque<int64_t>::iterator v);
void tf94_1(std::deque<unsigned>::iterator v);
void tf94_2(std::deque<bool>::iterator v);
void tf94_3(std::deque<char>::iterator v);
void tf94_4(std::deque<wchar_t>::iterator v);`),
        structs: parseStruct(`void tf94_0(std::deque<int64_t>::iterator v);
void tf94_1(std::deque<unsigned>::iterator v);
void tf94_2(std::deque<bool>::iterator v);
void tf94_3(std::deque<char>::iterator v);
void tf94_4(std::deque<wchar_t>::iterator v);`),
        classes: parseClass(`void tf94_0(std::deque<int64_t>::iterator v);
void tf94_1(std::deque<unsigned>::iterator v);
void tf94_2(std::deque<bool>::iterator v);
void tf94_3(std::deque<char>::iterator v);
void tf94_4(std::deque<wchar_t>::iterator v);`),
        funcs: parseFunction(`void tf94_0(std::deque<int64_t>::iterator v);
void tf94_1(std::deque<unsigned>::iterator v);
void tf94_2(std::deque<bool>::iterator v);
void tf94_3(std::deque<char>::iterator v);
void tf94_4(std::deque<wchar_t>::iterator v);`),
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
        `h2dtscpp_gen_0094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0095
  * @tc.name : h2dtscpp_gen_0095
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::deque<char8_t>::iterator, std::deque<char16_t>::iterato... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0095', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf95_0(std::deque<char8_t>::iterator v);
void tf95_1(std::deque<char16_t>::iterator v);
void tf95_2(std::deque<char32_t>::iterator v);
void tf95_3(std::list<int> v);
void tf95_4(std::list<size_t> v);`),
        unions: parseUnion(`void tf95_0(std::deque<char8_t>::iterator v);
void tf95_1(std::deque<char16_t>::iterator v);
void tf95_2(std::deque<char32_t>::iterator v);
void tf95_3(std::list<int> v);
void tf95_4(std::list<size_t> v);`),
        structs: parseStruct(`void tf95_0(std::deque<char8_t>::iterator v);
void tf95_1(std::deque<char16_t>::iterator v);
void tf95_2(std::deque<char32_t>::iterator v);
void tf95_3(std::list<int> v);
void tf95_4(std::list<size_t> v);`),
        classes: parseClass(`void tf95_0(std::deque<char8_t>::iterator v);
void tf95_1(std::deque<char16_t>::iterator v);
void tf95_2(std::deque<char32_t>::iterator v);
void tf95_3(std::list<int> v);
void tf95_4(std::list<size_t> v);`),
        funcs: parseFunction(`void tf95_0(std::deque<char8_t>::iterator v);
void tf95_1(std::deque<char16_t>::iterator v);
void tf95_2(std::deque<char32_t>::iterator v);
void tf95_3(std::list<int> v);
void tf95_4(std::list<size_t> v);`),
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
        `h2dtscpp_gen_0095 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0096
  * @tc.name : h2dtscpp_gen_0096
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::list<double>, std::list<float>, std::list<long>, std::l... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0096', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf96_0(std::list<double> v);
void tf96_1(std::list<float> v);
void tf96_2(std::list<long> v);
void tf96_3(std::list<short> v);
void tf96_4(std::list<uint8_t> v);`),
        unions: parseUnion(`void tf96_0(std::list<double> v);
void tf96_1(std::list<float> v);
void tf96_2(std::list<long> v);
void tf96_3(std::list<short> v);
void tf96_4(std::list<uint8_t> v);`),
        structs: parseStruct(`void tf96_0(std::list<double> v);
void tf96_1(std::list<float> v);
void tf96_2(std::list<long> v);
void tf96_3(std::list<short> v);
void tf96_4(std::list<uint8_t> v);`),
        classes: parseClass(`void tf96_0(std::list<double> v);
void tf96_1(std::list<float> v);
void tf96_2(std::list<long> v);
void tf96_3(std::list<short> v);
void tf96_4(std::list<uint8_t> v);`),
        funcs: parseFunction(`void tf96_0(std::list<double> v);
void tf96_1(std::list<float> v);
void tf96_2(std::list<long> v);
void tf96_3(std::list<short> v);
void tf96_4(std::list<uint8_t> v);`),
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
        `h2dtscpp_gen_0096 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0097
  * @tc.name : h2dtscpp_gen_0097
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::list<uint16_t>, std::list<uint32_t>, std::list<uint64_t... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0097', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf97_0(std::list<uint16_t> v);
void tf97_1(std::list<uint32_t> v);
void tf97_2(std::list<uint64_t> v);
void tf97_3(std::list<int8_t> v);
void tf97_4(std::list<int16_t> v);`),
        unions: parseUnion(`void tf97_0(std::list<uint16_t> v);
void tf97_1(std::list<uint32_t> v);
void tf97_2(std::list<uint64_t> v);
void tf97_3(std::list<int8_t> v);
void tf97_4(std::list<int16_t> v);`),
        structs: parseStruct(`void tf97_0(std::list<uint16_t> v);
void tf97_1(std::list<uint32_t> v);
void tf97_2(std::list<uint64_t> v);
void tf97_3(std::list<int8_t> v);
void tf97_4(std::list<int16_t> v);`),
        classes: parseClass(`void tf97_0(std::list<uint16_t> v);
void tf97_1(std::list<uint32_t> v);
void tf97_2(std::list<uint64_t> v);
void tf97_3(std::list<int8_t> v);
void tf97_4(std::list<int16_t> v);`),
        funcs: parseFunction(`void tf97_0(std::list<uint16_t> v);
void tf97_1(std::list<uint32_t> v);
void tf97_2(std::list<uint64_t> v);
void tf97_3(std::list<int8_t> v);
void tf97_4(std::list<int16_t> v);`),
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
        `h2dtscpp_gen_0097 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0098
  * @tc.name : h2dtscpp_gen_0098
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::list<int32_t>, std::list<int64_t>, std::list<unsigned>,... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0098', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf98_0(std::list<int32_t> v);
void tf98_1(std::list<int64_t> v);
void tf98_2(std::list<unsigned> v);
void tf98_3(std::list<bool> v);
void tf98_4(std::list<char> v);`),
        unions: parseUnion(`void tf98_0(std::list<int32_t> v);
void tf98_1(std::list<int64_t> v);
void tf98_2(std::list<unsigned> v);
void tf98_3(std::list<bool> v);
void tf98_4(std::list<char> v);`),
        structs: parseStruct(`void tf98_0(std::list<int32_t> v);
void tf98_1(std::list<int64_t> v);
void tf98_2(std::list<unsigned> v);
void tf98_3(std::list<bool> v);
void tf98_4(std::list<char> v);`),
        classes: parseClass(`void tf98_0(std::list<int32_t> v);
void tf98_1(std::list<int64_t> v);
void tf98_2(std::list<unsigned> v);
void tf98_3(std::list<bool> v);
void tf98_4(std::list<char> v);`),
        funcs: parseFunction(`void tf98_0(std::list<int32_t> v);
void tf98_1(std::list<int64_t> v);
void tf98_2(std::list<unsigned> v);
void tf98_3(std::list<bool> v);
void tf98_4(std::list<char> v);`),
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
        `h2dtscpp_gen_0098 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0099
  * @tc.name : h2dtscpp_gen_0099
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::list<wchar_t>, std::list<char8_t>, std::list<char16_t>,... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0099', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf99_0(std::list<wchar_t> v);
void tf99_1(std::list<char8_t> v);
void tf99_2(std::list<char16_t> v);
void tf99_3(std::list<char32_t> v);
void tf99_4(std::list<int>::iterator v);`),
        unions: parseUnion(`void tf99_0(std::list<wchar_t> v);
void tf99_1(std::list<char8_t> v);
void tf99_2(std::list<char16_t> v);
void tf99_3(std::list<char32_t> v);
void tf99_4(std::list<int>::iterator v);`),
        structs: parseStruct(`void tf99_0(std::list<wchar_t> v);
void tf99_1(std::list<char8_t> v);
void tf99_2(std::list<char16_t> v);
void tf99_3(std::list<char32_t> v);
void tf99_4(std::list<int>::iterator v);`),
        classes: parseClass(`void tf99_0(std::list<wchar_t> v);
void tf99_1(std::list<char8_t> v);
void tf99_2(std::list<char16_t> v);
void tf99_3(std::list<char32_t> v);
void tf99_4(std::list<int>::iterator v);`),
        funcs: parseFunction(`void tf99_0(std::list<wchar_t> v);
void tf99_1(std::list<char8_t> v);
void tf99_2(std::list<char16_t> v);
void tf99_3(std::list<char32_t> v);
void tf99_4(std::list<int>::iterator v);`),
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
        `h2dtscpp_gen_0099 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0099 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0100
  * @tc.name : h2dtscpp_gen_0100
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::list<size_t>::iterator, std::list<double>::iterator, st... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0100', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf100_0(std::list<size_t>::iterator v);
void tf100_1(std::list<double>::iterator v);
void tf100_2(std::list<float>::iterator v);
void tf100_3(std::list<long>::iterator v);
void tf100_4(std::list<short>::iterator v);`),
        unions: parseUnion(`void tf100_0(std::list<size_t>::iterator v);
void tf100_1(std::list<double>::iterator v);
void tf100_2(std::list<float>::iterator v);
void tf100_3(std::list<long>::iterator v);
void tf100_4(std::list<short>::iterator v);`),
        structs: parseStruct(`void tf100_0(std::list<size_t>::iterator v);
void tf100_1(std::list<double>::iterator v);
void tf100_2(std::list<float>::iterator v);
void tf100_3(std::list<long>::iterator v);
void tf100_4(std::list<short>::iterator v);`),
        classes: parseClass(`void tf100_0(std::list<size_t>::iterator v);
void tf100_1(std::list<double>::iterator v);
void tf100_2(std::list<float>::iterator v);
void tf100_3(std::list<long>::iterator v);
void tf100_4(std::list<short>::iterator v);`),
        funcs: parseFunction(`void tf100_0(std::list<size_t>::iterator v);
void tf100_1(std::list<double>::iterator v);
void tf100_2(std::list<float>::iterator v);
void tf100_3(std::list<long>::iterator v);
void tf100_4(std::list<short>::iterator v);`),
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
        `h2dtscpp_gen_0100 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0101
  * @tc.name : h2dtscpp_gen_0101
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::list<uint8_t>::iterator, std::list<uint16_t>::iterator,... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0101', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf101_0(std::list<uint8_t>::iterator v);
void tf101_1(std::list<uint16_t>::iterator v);
void tf101_2(std::list<uint32_t>::iterator v);
void tf101_3(std::list<uint64_t>::iterator v);
void tf101_4(std::list<int8_t>::iterator v);`),
        unions: parseUnion(`void tf101_0(std::list<uint8_t>::iterator v);
void tf101_1(std::list<uint16_t>::iterator v);
void tf101_2(std::list<uint32_t>::iterator v);
void tf101_3(std::list<uint64_t>::iterator v);
void tf101_4(std::list<int8_t>::iterator v);`),
        structs: parseStruct(`void tf101_0(std::list<uint8_t>::iterator v);
void tf101_1(std::list<uint16_t>::iterator v);
void tf101_2(std::list<uint32_t>::iterator v);
void tf101_3(std::list<uint64_t>::iterator v);
void tf101_4(std::list<int8_t>::iterator v);`),
        classes: parseClass(`void tf101_0(std::list<uint8_t>::iterator v);
void tf101_1(std::list<uint16_t>::iterator v);
void tf101_2(std::list<uint32_t>::iterator v);
void tf101_3(std::list<uint64_t>::iterator v);
void tf101_4(std::list<int8_t>::iterator v);`),
        funcs: parseFunction(`void tf101_0(std::list<uint8_t>::iterator v);
void tf101_1(std::list<uint16_t>::iterator v);
void tf101_2(std::list<uint32_t>::iterator v);
void tf101_3(std::list<uint64_t>::iterator v);
void tf101_4(std::list<int8_t>::iterator v);`),
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
        `h2dtscpp_gen_0101 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0101 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0102
  * @tc.name : h2dtscpp_gen_0102
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::list<int16_t>::iterator, std::list<int32_t>::iterator, ... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0102', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf102_0(std::list<int16_t>::iterator v);
void tf102_1(std::list<int32_t>::iterator v);
void tf102_2(std::list<int64_t>::iterator v);
void tf102_3(std::list<unsigned>::iterator v);
void tf102_4(std::list<bool>::iterator v);`),
        unions: parseUnion(`void tf102_0(std::list<int16_t>::iterator v);
void tf102_1(std::list<int32_t>::iterator v);
void tf102_2(std::list<int64_t>::iterator v);
void tf102_3(std::list<unsigned>::iterator v);
void tf102_4(std::list<bool>::iterator v);`),
        structs: parseStruct(`void tf102_0(std::list<int16_t>::iterator v);
void tf102_1(std::list<int32_t>::iterator v);
void tf102_2(std::list<int64_t>::iterator v);
void tf102_3(std::list<unsigned>::iterator v);
void tf102_4(std::list<bool>::iterator v);`),
        classes: parseClass(`void tf102_0(std::list<int16_t>::iterator v);
void tf102_1(std::list<int32_t>::iterator v);
void tf102_2(std::list<int64_t>::iterator v);
void tf102_3(std::list<unsigned>::iterator v);
void tf102_4(std::list<bool>::iterator v);`),
        funcs: parseFunction(`void tf102_0(std::list<int16_t>::iterator v);
void tf102_1(std::list<int32_t>::iterator v);
void tf102_2(std::list<int64_t>::iterator v);
void tf102_3(std::list<unsigned>::iterator v);
void tf102_4(std::list<bool>::iterator v);`),
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
        `h2dtscpp_gen_0102 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0102 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0103
  * @tc.name : h2dtscpp_gen_0103
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::list<char>::iterator, std::list<wchar_t>::iterator, std... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0103', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf103_0(std::list<char>::iterator v);
void tf103_1(std::list<wchar_t>::iterator v);
void tf103_2(std::list<char8_t>::iterator v);
void tf103_3(std::list<char16_t>::iterator v);
void tf103_4(std::list<char32_t>::iterator v);`),
        unions: parseUnion(`void tf103_0(std::list<char>::iterator v);
void tf103_1(std::list<wchar_t>::iterator v);
void tf103_2(std::list<char8_t>::iterator v);
void tf103_3(std::list<char16_t>::iterator v);
void tf103_4(std::list<char32_t>::iterator v);`),
        structs: parseStruct(`void tf103_0(std::list<char>::iterator v);
void tf103_1(std::list<wchar_t>::iterator v);
void tf103_2(std::list<char8_t>::iterator v);
void tf103_3(std::list<char16_t>::iterator v);
void tf103_4(std::list<char32_t>::iterator v);`),
        classes: parseClass(`void tf103_0(std::list<char>::iterator v);
void tf103_1(std::list<wchar_t>::iterator v);
void tf103_2(std::list<char8_t>::iterator v);
void tf103_3(std::list<char16_t>::iterator v);
void tf103_4(std::list<char32_t>::iterator v);`),
        funcs: parseFunction(`void tf103_0(std::list<char>::iterator v);
void tf103_1(std::list<wchar_t>::iterator v);
void tf103_2(std::list<char8_t>::iterator v);
void tf103_3(std::list<char16_t>::iterator v);
void tf103_4(std::list<char32_t>::iterator v);`),
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
        `h2dtscpp_gen_0103 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0104
  * @tc.name : h2dtscpp_gen_0104
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::forward_list<int>, std::forward_list<size_t>, std::forw... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0104', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf104_0(std::forward_list<int> v);
void tf104_1(std::forward_list<size_t> v);
void tf104_2(std::forward_list<double> v);
void tf104_3(std::forward_list<float> v);
void tf104_4(std::forward_list<long> v);`),
        unions: parseUnion(`void tf104_0(std::forward_list<int> v);
void tf104_1(std::forward_list<size_t> v);
void tf104_2(std::forward_list<double> v);
void tf104_3(std::forward_list<float> v);
void tf104_4(std::forward_list<long> v);`),
        structs: parseStruct(`void tf104_0(std::forward_list<int> v);
void tf104_1(std::forward_list<size_t> v);
void tf104_2(std::forward_list<double> v);
void tf104_3(std::forward_list<float> v);
void tf104_4(std::forward_list<long> v);`),
        classes: parseClass(`void tf104_0(std::forward_list<int> v);
void tf104_1(std::forward_list<size_t> v);
void tf104_2(std::forward_list<double> v);
void tf104_3(std::forward_list<float> v);
void tf104_4(std::forward_list<long> v);`),
        funcs: parseFunction(`void tf104_0(std::forward_list<int> v);
void tf104_1(std::forward_list<size_t> v);
void tf104_2(std::forward_list<double> v);
void tf104_3(std::forward_list<float> v);
void tf104_4(std::forward_list<long> v);`),
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
        `h2dtscpp_gen_0104 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0105
  * @tc.name : h2dtscpp_gen_0105
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::forward_list<short>, std::forward_list<uint8_t>, std::f... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0105', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf105_0(std::forward_list<short> v);
void tf105_1(std::forward_list<uint8_t> v);
void tf105_2(std::forward_list<uint16_t> v);
void tf105_3(std::forward_list<uint32_t> v);
void tf105_4(std::forward_list<uint64_t> v);`),
        unions: parseUnion(`void tf105_0(std::forward_list<short> v);
void tf105_1(std::forward_list<uint8_t> v);
void tf105_2(std::forward_list<uint16_t> v);
void tf105_3(std::forward_list<uint32_t> v);
void tf105_4(std::forward_list<uint64_t> v);`),
        structs: parseStruct(`void tf105_0(std::forward_list<short> v);
void tf105_1(std::forward_list<uint8_t> v);
void tf105_2(std::forward_list<uint16_t> v);
void tf105_3(std::forward_list<uint32_t> v);
void tf105_4(std::forward_list<uint64_t> v);`),
        classes: parseClass(`void tf105_0(std::forward_list<short> v);
void tf105_1(std::forward_list<uint8_t> v);
void tf105_2(std::forward_list<uint16_t> v);
void tf105_3(std::forward_list<uint32_t> v);
void tf105_4(std::forward_list<uint64_t> v);`),
        funcs: parseFunction(`void tf105_0(std::forward_list<short> v);
void tf105_1(std::forward_list<uint8_t> v);
void tf105_2(std::forward_list<uint16_t> v);
void tf105_3(std::forward_list<uint32_t> v);
void tf105_4(std::forward_list<uint64_t> v);`),
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
        `h2dtscpp_gen_0105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0106
  * @tc.name : h2dtscpp_gen_0106
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::forward_list<int8_t>, std::forward_list<int16_t>, std::... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0106', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf106_0(std::forward_list<int8_t> v);
void tf106_1(std::forward_list<int16_t> v);
void tf106_2(std::forward_list<int32_t> v);
void tf106_3(std::forward_list<int64_t> v);
void tf106_4(std::forward_list<unsigned> v);`),
        unions: parseUnion(`void tf106_0(std::forward_list<int8_t> v);
void tf106_1(std::forward_list<int16_t> v);
void tf106_2(std::forward_list<int32_t> v);
void tf106_3(std::forward_list<int64_t> v);
void tf106_4(std::forward_list<unsigned> v);`),
        structs: parseStruct(`void tf106_0(std::forward_list<int8_t> v);
void tf106_1(std::forward_list<int16_t> v);
void tf106_2(std::forward_list<int32_t> v);
void tf106_3(std::forward_list<int64_t> v);
void tf106_4(std::forward_list<unsigned> v);`),
        classes: parseClass(`void tf106_0(std::forward_list<int8_t> v);
void tf106_1(std::forward_list<int16_t> v);
void tf106_2(std::forward_list<int32_t> v);
void tf106_3(std::forward_list<int64_t> v);
void tf106_4(std::forward_list<unsigned> v);`),
        funcs: parseFunction(`void tf106_0(std::forward_list<int8_t> v);
void tf106_1(std::forward_list<int16_t> v);
void tf106_2(std::forward_list<int32_t> v);
void tf106_3(std::forward_list<int64_t> v);
void tf106_4(std::forward_list<unsigned> v);`),
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
        `h2dtscpp_gen_0106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0107
  * @tc.name : h2dtscpp_gen_0107
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::forward_list<bool>, std::forward_list<char>, std::forwa... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0107', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf107_0(std::forward_list<bool> v);
void tf107_1(std::forward_list<char> v);
void tf107_2(std::forward_list<wchar_t> v);
void tf107_3(std::forward_list<char8_t> v);
void tf107_4(std::forward_list<char16_t> v);`),
        unions: parseUnion(`void tf107_0(std::forward_list<bool> v);
void tf107_1(std::forward_list<char> v);
void tf107_2(std::forward_list<wchar_t> v);
void tf107_3(std::forward_list<char8_t> v);
void tf107_4(std::forward_list<char16_t> v);`),
        structs: parseStruct(`void tf107_0(std::forward_list<bool> v);
void tf107_1(std::forward_list<char> v);
void tf107_2(std::forward_list<wchar_t> v);
void tf107_3(std::forward_list<char8_t> v);
void tf107_4(std::forward_list<char16_t> v);`),
        classes: parseClass(`void tf107_0(std::forward_list<bool> v);
void tf107_1(std::forward_list<char> v);
void tf107_2(std::forward_list<wchar_t> v);
void tf107_3(std::forward_list<char8_t> v);
void tf107_4(std::forward_list<char16_t> v);`),
        funcs: parseFunction(`void tf107_0(std::forward_list<bool> v);
void tf107_1(std::forward_list<char> v);
void tf107_2(std::forward_list<wchar_t> v);
void tf107_3(std::forward_list<char8_t> v);
void tf107_4(std::forward_list<char16_t> v);`),
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
        `h2dtscpp_gen_0107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0108
  * @tc.name : h2dtscpp_gen_0108
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::forward_list<char32_t>, std::forward_list<int>::iterato... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0108', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf108_0(std::forward_list<char32_t> v);
void tf108_1(std::forward_list<int>::iterator v);
void tf108_2(std::forward_list<size_t>::iterator v);
void tf108_3(std::forward_list<double>::iterator v);
void tf108_4(std::forward_list<float>::iterator v);`),
        unions: parseUnion(`void tf108_0(std::forward_list<char32_t> v);
void tf108_1(std::forward_list<int>::iterator v);
void tf108_2(std::forward_list<size_t>::iterator v);
void tf108_3(std::forward_list<double>::iterator v);
void tf108_4(std::forward_list<float>::iterator v);`),
        structs: parseStruct(`void tf108_0(std::forward_list<char32_t> v);
void tf108_1(std::forward_list<int>::iterator v);
void tf108_2(std::forward_list<size_t>::iterator v);
void tf108_3(std::forward_list<double>::iterator v);
void tf108_4(std::forward_list<float>::iterator v);`),
        classes: parseClass(`void tf108_0(std::forward_list<char32_t> v);
void tf108_1(std::forward_list<int>::iterator v);
void tf108_2(std::forward_list<size_t>::iterator v);
void tf108_3(std::forward_list<double>::iterator v);
void tf108_4(std::forward_list<float>::iterator v);`),
        funcs: parseFunction(`void tf108_0(std::forward_list<char32_t> v);
void tf108_1(std::forward_list<int>::iterator v);
void tf108_2(std::forward_list<size_t>::iterator v);
void tf108_3(std::forward_list<double>::iterator v);
void tf108_4(std::forward_list<float>::iterator v);`),
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
        `h2dtscpp_gen_0108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0109
  * @tc.name : h2dtscpp_gen_0109
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::forward_list<long>::iterator, std::forward_list<short>:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0109', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf109_0(std::forward_list<long>::iterator v);
void tf109_1(std::forward_list<short>::iterator v);
void tf109_2(std::forward_list<uint8_t>::iterator v);
void tf109_3(std::forward_list<uint16_t>::iterator v);
void tf109_4(std::forward_list<uint32_t>::iterator v);`),
        unions: parseUnion(`void tf109_0(std::forward_list<long>::iterator v);
void tf109_1(std::forward_list<short>::iterator v);
void tf109_2(std::forward_list<uint8_t>::iterator v);
void tf109_3(std::forward_list<uint16_t>::iterator v);
void tf109_4(std::forward_list<uint32_t>::iterator v);`),
        structs: parseStruct(`void tf109_0(std::forward_list<long>::iterator v);
void tf109_1(std::forward_list<short>::iterator v);
void tf109_2(std::forward_list<uint8_t>::iterator v);
void tf109_3(std::forward_list<uint16_t>::iterator v);
void tf109_4(std::forward_list<uint32_t>::iterator v);`),
        classes: parseClass(`void tf109_0(std::forward_list<long>::iterator v);
void tf109_1(std::forward_list<short>::iterator v);
void tf109_2(std::forward_list<uint8_t>::iterator v);
void tf109_3(std::forward_list<uint16_t>::iterator v);
void tf109_4(std::forward_list<uint32_t>::iterator v);`),
        funcs: parseFunction(`void tf109_0(std::forward_list<long>::iterator v);
void tf109_1(std::forward_list<short>::iterator v);
void tf109_2(std::forward_list<uint8_t>::iterator v);
void tf109_3(std::forward_list<uint16_t>::iterator v);
void tf109_4(std::forward_list<uint32_t>::iterator v);`),
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
        `h2dtscpp_gen_0109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0110
  * @tc.name : h2dtscpp_gen_0110
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::forward_list<uint64_t>::iterator, std::forward_list<int... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0110', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf110_0(std::forward_list<uint64_t>::iterator v);
void tf110_1(std::forward_list<int8_t>::iterator v);
void tf110_2(std::forward_list<int16_t>::iterator v);
void tf110_3(std::forward_list<int32_t>::iterator v);
void tf110_4(std::forward_list<int64_t>::iterator v);`),
        unions: parseUnion(`void tf110_0(std::forward_list<uint64_t>::iterator v);
void tf110_1(std::forward_list<int8_t>::iterator v);
void tf110_2(std::forward_list<int16_t>::iterator v);
void tf110_3(std::forward_list<int32_t>::iterator v);
void tf110_4(std::forward_list<int64_t>::iterator v);`),
        structs: parseStruct(`void tf110_0(std::forward_list<uint64_t>::iterator v);
void tf110_1(std::forward_list<int8_t>::iterator v);
void tf110_2(std::forward_list<int16_t>::iterator v);
void tf110_3(std::forward_list<int32_t>::iterator v);
void tf110_4(std::forward_list<int64_t>::iterator v);`),
        classes: parseClass(`void tf110_0(std::forward_list<uint64_t>::iterator v);
void tf110_1(std::forward_list<int8_t>::iterator v);
void tf110_2(std::forward_list<int16_t>::iterator v);
void tf110_3(std::forward_list<int32_t>::iterator v);
void tf110_4(std::forward_list<int64_t>::iterator v);`),
        funcs: parseFunction(`void tf110_0(std::forward_list<uint64_t>::iterator v);
void tf110_1(std::forward_list<int8_t>::iterator v);
void tf110_2(std::forward_list<int16_t>::iterator v);
void tf110_3(std::forward_list<int32_t>::iterator v);
void tf110_4(std::forward_list<int64_t>::iterator v);`),
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
        `h2dtscpp_gen_0110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0111
  * @tc.name : h2dtscpp_gen_0111
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::forward_list<unsigned>::iterator, std::forward_list<boo... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0111', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf111_0(std::forward_list<unsigned>::iterator v);
void tf111_1(std::forward_list<bool>::iterator v);
void tf111_2(std::forward_list<char>::iterator v);
void tf111_3(std::forward_list<wchar_t>::iterator v);
void tf111_4(std::forward_list<char8_t>::iterator v);`),
        unions: parseUnion(`void tf111_0(std::forward_list<unsigned>::iterator v);
void tf111_1(std::forward_list<bool>::iterator v);
void tf111_2(std::forward_list<char>::iterator v);
void tf111_3(std::forward_list<wchar_t>::iterator v);
void tf111_4(std::forward_list<char8_t>::iterator v);`),
        structs: parseStruct(`void tf111_0(std::forward_list<unsigned>::iterator v);
void tf111_1(std::forward_list<bool>::iterator v);
void tf111_2(std::forward_list<char>::iterator v);
void tf111_3(std::forward_list<wchar_t>::iterator v);
void tf111_4(std::forward_list<char8_t>::iterator v);`),
        classes: parseClass(`void tf111_0(std::forward_list<unsigned>::iterator v);
void tf111_1(std::forward_list<bool>::iterator v);
void tf111_2(std::forward_list<char>::iterator v);
void tf111_3(std::forward_list<wchar_t>::iterator v);
void tf111_4(std::forward_list<char8_t>::iterator v);`),
        funcs: parseFunction(`void tf111_0(std::forward_list<unsigned>::iterator v);
void tf111_1(std::forward_list<bool>::iterator v);
void tf111_2(std::forward_list<char>::iterator v);
void tf111_3(std::forward_list<wchar_t>::iterator v);
void tf111_4(std::forward_list<char8_t>::iterator v);`),
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
        `h2dtscpp_gen_0111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0112
  * @tc.name : h2dtscpp_gen_0112
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::forward_list<char16_t>::iterator, std::forward_list<cha... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0112', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf112_0(std::forward_list<char16_t>::iterator v);
void tf112_1(std::forward_list<char32_t>::iterator v);
void tf112_2(std::stack<int> v);
void tf112_3(std::stack<size_t> v);
void tf112_4(std::stack<double> v);`),
        unions: parseUnion(`void tf112_0(std::forward_list<char16_t>::iterator v);
void tf112_1(std::forward_list<char32_t>::iterator v);
void tf112_2(std::stack<int> v);
void tf112_3(std::stack<size_t> v);
void tf112_4(std::stack<double> v);`),
        structs: parseStruct(`void tf112_0(std::forward_list<char16_t>::iterator v);
void tf112_1(std::forward_list<char32_t>::iterator v);
void tf112_2(std::stack<int> v);
void tf112_3(std::stack<size_t> v);
void tf112_4(std::stack<double> v);`),
        classes: parseClass(`void tf112_0(std::forward_list<char16_t>::iterator v);
void tf112_1(std::forward_list<char32_t>::iterator v);
void tf112_2(std::stack<int> v);
void tf112_3(std::stack<size_t> v);
void tf112_4(std::stack<double> v);`),
        funcs: parseFunction(`void tf112_0(std::forward_list<char16_t>::iterator v);
void tf112_1(std::forward_list<char32_t>::iterator v);
void tf112_2(std::stack<int> v);
void tf112_3(std::stack<size_t> v);
void tf112_4(std::stack<double> v);`),
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
        `h2dtscpp_gen_0112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0113
  * @tc.name : h2dtscpp_gen_0113
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::stack<float>, std::stack<long>, std::stack<short>, std:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0113', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf113_0(std::stack<float> v);
void tf113_1(std::stack<long> v);
void tf113_2(std::stack<short> v);
void tf113_3(std::stack<uint8_t> v);
void tf113_4(std::stack<uint16_t> v);`),
        unions: parseUnion(`void tf113_0(std::stack<float> v);
void tf113_1(std::stack<long> v);
void tf113_2(std::stack<short> v);
void tf113_3(std::stack<uint8_t> v);
void tf113_4(std::stack<uint16_t> v);`),
        structs: parseStruct(`void tf113_0(std::stack<float> v);
void tf113_1(std::stack<long> v);
void tf113_2(std::stack<short> v);
void tf113_3(std::stack<uint8_t> v);
void tf113_4(std::stack<uint16_t> v);`),
        classes: parseClass(`void tf113_0(std::stack<float> v);
void tf113_1(std::stack<long> v);
void tf113_2(std::stack<short> v);
void tf113_3(std::stack<uint8_t> v);
void tf113_4(std::stack<uint16_t> v);`),
        funcs: parseFunction(`void tf113_0(std::stack<float> v);
void tf113_1(std::stack<long> v);
void tf113_2(std::stack<short> v);
void tf113_3(std::stack<uint8_t> v);
void tf113_4(std::stack<uint16_t> v);`),
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
        `h2dtscpp_gen_0113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0114
  * @tc.name : h2dtscpp_gen_0114
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::stack<uint32_t>, std::stack<uint64_t>, std::stack<int8_... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0114', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf114_0(std::stack<uint32_t> v);
void tf114_1(std::stack<uint64_t> v);
void tf114_2(std::stack<int8_t> v);
void tf114_3(std::stack<int16_t> v);
void tf114_4(std::stack<int32_t> v);`),
        unions: parseUnion(`void tf114_0(std::stack<uint32_t> v);
void tf114_1(std::stack<uint64_t> v);
void tf114_2(std::stack<int8_t> v);
void tf114_3(std::stack<int16_t> v);
void tf114_4(std::stack<int32_t> v);`),
        structs: parseStruct(`void tf114_0(std::stack<uint32_t> v);
void tf114_1(std::stack<uint64_t> v);
void tf114_2(std::stack<int8_t> v);
void tf114_3(std::stack<int16_t> v);
void tf114_4(std::stack<int32_t> v);`),
        classes: parseClass(`void tf114_0(std::stack<uint32_t> v);
void tf114_1(std::stack<uint64_t> v);
void tf114_2(std::stack<int8_t> v);
void tf114_3(std::stack<int16_t> v);
void tf114_4(std::stack<int32_t> v);`),
        funcs: parseFunction(`void tf114_0(std::stack<uint32_t> v);
void tf114_1(std::stack<uint64_t> v);
void tf114_2(std::stack<int8_t> v);
void tf114_3(std::stack<int16_t> v);
void tf114_4(std::stack<int32_t> v);`),
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
        `h2dtscpp_gen_0114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0115
  * @tc.name : h2dtscpp_gen_0115
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::stack<int64_t>, std::stack<unsigned>, std::stack<bool>,... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0115', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf115_0(std::stack<int64_t> v);
void tf115_1(std::stack<unsigned> v);
void tf115_2(std::stack<bool> v);
void tf115_3(std::stack<char> v);
void tf115_4(std::stack<wchar_t> v);`),
        unions: parseUnion(`void tf115_0(std::stack<int64_t> v);
void tf115_1(std::stack<unsigned> v);
void tf115_2(std::stack<bool> v);
void tf115_3(std::stack<char> v);
void tf115_4(std::stack<wchar_t> v);`),
        structs: parseStruct(`void tf115_0(std::stack<int64_t> v);
void tf115_1(std::stack<unsigned> v);
void tf115_2(std::stack<bool> v);
void tf115_3(std::stack<char> v);
void tf115_4(std::stack<wchar_t> v);`),
        classes: parseClass(`void tf115_0(std::stack<int64_t> v);
void tf115_1(std::stack<unsigned> v);
void tf115_2(std::stack<bool> v);
void tf115_3(std::stack<char> v);
void tf115_4(std::stack<wchar_t> v);`),
        funcs: parseFunction(`void tf115_0(std::stack<int64_t> v);
void tf115_1(std::stack<unsigned> v);
void tf115_2(std::stack<bool> v);
void tf115_3(std::stack<char> v);
void tf115_4(std::stack<wchar_t> v);`),
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
        `h2dtscpp_gen_0115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0116
  * @tc.name : h2dtscpp_gen_0116
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::stack<char8_t>, std::stack<char16_t>, std::stack<char32... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0116', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf116_0(std::stack<char8_t> v);
void tf116_1(std::stack<char16_t> v);
void tf116_2(std::stack<char32_t> v);
void tf116_3(std::stack<int>::iterator v);
void tf116_4(std::stack<size_t>::iterator v);`),
        unions: parseUnion(`void tf116_0(std::stack<char8_t> v);
void tf116_1(std::stack<char16_t> v);
void tf116_2(std::stack<char32_t> v);
void tf116_3(std::stack<int>::iterator v);
void tf116_4(std::stack<size_t>::iterator v);`),
        structs: parseStruct(`void tf116_0(std::stack<char8_t> v);
void tf116_1(std::stack<char16_t> v);
void tf116_2(std::stack<char32_t> v);
void tf116_3(std::stack<int>::iterator v);
void tf116_4(std::stack<size_t>::iterator v);`),
        classes: parseClass(`void tf116_0(std::stack<char8_t> v);
void tf116_1(std::stack<char16_t> v);
void tf116_2(std::stack<char32_t> v);
void tf116_3(std::stack<int>::iterator v);
void tf116_4(std::stack<size_t>::iterator v);`),
        funcs: parseFunction(`void tf116_0(std::stack<char8_t> v);
void tf116_1(std::stack<char16_t> v);
void tf116_2(std::stack<char32_t> v);
void tf116_3(std::stack<int>::iterator v);
void tf116_4(std::stack<size_t>::iterator v);`),
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
        `h2dtscpp_gen_0116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0117
  * @tc.name : h2dtscpp_gen_0117
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::stack<double>::iterator, std::stack<float>::iterator, s... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0117', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf117_0(std::stack<double>::iterator v);
void tf117_1(std::stack<float>::iterator v);
void tf117_2(std::stack<long>::iterator v);
void tf117_3(std::stack<short>::iterator v);
void tf117_4(std::stack<uint8_t>::iterator v);`),
        unions: parseUnion(`void tf117_0(std::stack<double>::iterator v);
void tf117_1(std::stack<float>::iterator v);
void tf117_2(std::stack<long>::iterator v);
void tf117_3(std::stack<short>::iterator v);
void tf117_4(std::stack<uint8_t>::iterator v);`),
        structs: parseStruct(`void tf117_0(std::stack<double>::iterator v);
void tf117_1(std::stack<float>::iterator v);
void tf117_2(std::stack<long>::iterator v);
void tf117_3(std::stack<short>::iterator v);
void tf117_4(std::stack<uint8_t>::iterator v);`),
        classes: parseClass(`void tf117_0(std::stack<double>::iterator v);
void tf117_1(std::stack<float>::iterator v);
void tf117_2(std::stack<long>::iterator v);
void tf117_3(std::stack<short>::iterator v);
void tf117_4(std::stack<uint8_t>::iterator v);`),
        funcs: parseFunction(`void tf117_0(std::stack<double>::iterator v);
void tf117_1(std::stack<float>::iterator v);
void tf117_2(std::stack<long>::iterator v);
void tf117_3(std::stack<short>::iterator v);
void tf117_4(std::stack<uint8_t>::iterator v);`),
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
        `h2dtscpp_gen_0117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0118
  * @tc.name : h2dtscpp_gen_0118
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::stack<uint16_t>::iterator, std::stack<uint32_t>::iterat... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
});
