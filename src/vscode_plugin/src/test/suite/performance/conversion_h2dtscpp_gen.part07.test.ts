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
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part07.');

  /**
  * @tc.number : h2dtscpp_gen_0123
  * @tc.name : h2dtscpp_gen_0123
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::queue<int16_t>, std::queue<int32_t>, std::queue<int64_t... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0123', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf123_0(std::queue<int16_t> v);
void tf123_1(std::queue<int32_t> v);
void tf123_2(std::queue<int64_t> v);
void tf123_3(std::queue<unsigned> v);
void tf123_4(std::queue<bool> v);`),
        unions: parseUnion(`void tf123_0(std::queue<int16_t> v);
void tf123_1(std::queue<int32_t> v);
void tf123_2(std::queue<int64_t> v);
void tf123_3(std::queue<unsigned> v);
void tf123_4(std::queue<bool> v);`),
        structs: parseStruct(`void tf123_0(std::queue<int16_t> v);
void tf123_1(std::queue<int32_t> v);
void tf123_2(std::queue<int64_t> v);
void tf123_3(std::queue<unsigned> v);
void tf123_4(std::queue<bool> v);`),
        classes: parseClass(`void tf123_0(std::queue<int16_t> v);
void tf123_1(std::queue<int32_t> v);
void tf123_2(std::queue<int64_t> v);
void tf123_3(std::queue<unsigned> v);
void tf123_4(std::queue<bool> v);`),
        funcs: parseFunction(`void tf123_0(std::queue<int16_t> v);
void tf123_1(std::queue<int32_t> v);
void tf123_2(std::queue<int64_t> v);
void tf123_3(std::queue<unsigned> v);
void tf123_4(std::queue<bool> v);`),
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
        `h2dtscpp_gen_0123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0124
  * @tc.name : h2dtscpp_gen_0124
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::queue<char>, std::queue<wchar_t>, std::queue<char8_t>, ... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0124', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf124_0(std::queue<char> v);
void tf124_1(std::queue<wchar_t> v);
void tf124_2(std::queue<char8_t> v);
void tf124_3(std::queue<char16_t> v);
void tf124_4(std::queue<char32_t> v);`),
        unions: parseUnion(`void tf124_0(std::queue<char> v);
void tf124_1(std::queue<wchar_t> v);
void tf124_2(std::queue<char8_t> v);
void tf124_3(std::queue<char16_t> v);
void tf124_4(std::queue<char32_t> v);`),
        structs: parseStruct(`void tf124_0(std::queue<char> v);
void tf124_1(std::queue<wchar_t> v);
void tf124_2(std::queue<char8_t> v);
void tf124_3(std::queue<char16_t> v);
void tf124_4(std::queue<char32_t> v);`),
        classes: parseClass(`void tf124_0(std::queue<char> v);
void tf124_1(std::queue<wchar_t> v);
void tf124_2(std::queue<char8_t> v);
void tf124_3(std::queue<char16_t> v);
void tf124_4(std::queue<char32_t> v);`),
        funcs: parseFunction(`void tf124_0(std::queue<char> v);
void tf124_1(std::queue<wchar_t> v);
void tf124_2(std::queue<char8_t> v);
void tf124_3(std::queue<char16_t> v);
void tf124_4(std::queue<char32_t> v);`),
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
        `h2dtscpp_gen_0124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0125
  * @tc.name : h2dtscpp_gen_0125
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::queue<int>::iterator, std::queue<size_t>::iterator, std... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0125', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf125_0(std::queue<int>::iterator v);
void tf125_1(std::queue<size_t>::iterator v);
void tf125_2(std::queue<double>::iterator v);
void tf125_3(std::queue<float>::iterator v);
void tf125_4(std::queue<long>::iterator v);`),
        unions: parseUnion(`void tf125_0(std::queue<int>::iterator v);
void tf125_1(std::queue<size_t>::iterator v);
void tf125_2(std::queue<double>::iterator v);
void tf125_3(std::queue<float>::iterator v);
void tf125_4(std::queue<long>::iterator v);`),
        structs: parseStruct(`void tf125_0(std::queue<int>::iterator v);
void tf125_1(std::queue<size_t>::iterator v);
void tf125_2(std::queue<double>::iterator v);
void tf125_3(std::queue<float>::iterator v);
void tf125_4(std::queue<long>::iterator v);`),
        classes: parseClass(`void tf125_0(std::queue<int>::iterator v);
void tf125_1(std::queue<size_t>::iterator v);
void tf125_2(std::queue<double>::iterator v);
void tf125_3(std::queue<float>::iterator v);
void tf125_4(std::queue<long>::iterator v);`),
        funcs: parseFunction(`void tf125_0(std::queue<int>::iterator v);
void tf125_1(std::queue<size_t>::iterator v);
void tf125_2(std::queue<double>::iterator v);
void tf125_3(std::queue<float>::iterator v);
void tf125_4(std::queue<long>::iterator v);`),
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
        `h2dtscpp_gen_0125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0126
  * @tc.name : h2dtscpp_gen_0126
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::queue<short>::iterator, std::queue<uint8_t>::iterator, ... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0126', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf126_0(std::queue<short>::iterator v);
void tf126_1(std::queue<uint8_t>::iterator v);
void tf126_2(std::queue<uint16_t>::iterator v);
void tf126_3(std::queue<uint32_t>::iterator v);
void tf126_4(std::queue<uint64_t>::iterator v);`),
        unions: parseUnion(`void tf126_0(std::queue<short>::iterator v);
void tf126_1(std::queue<uint8_t>::iterator v);
void tf126_2(std::queue<uint16_t>::iterator v);
void tf126_3(std::queue<uint32_t>::iterator v);
void tf126_4(std::queue<uint64_t>::iterator v);`),
        structs: parseStruct(`void tf126_0(std::queue<short>::iterator v);
void tf126_1(std::queue<uint8_t>::iterator v);
void tf126_2(std::queue<uint16_t>::iterator v);
void tf126_3(std::queue<uint32_t>::iterator v);
void tf126_4(std::queue<uint64_t>::iterator v);`),
        classes: parseClass(`void tf126_0(std::queue<short>::iterator v);
void tf126_1(std::queue<uint8_t>::iterator v);
void tf126_2(std::queue<uint16_t>::iterator v);
void tf126_3(std::queue<uint32_t>::iterator v);
void tf126_4(std::queue<uint64_t>::iterator v);`),
        funcs: parseFunction(`void tf126_0(std::queue<short>::iterator v);
void tf126_1(std::queue<uint8_t>::iterator v);
void tf126_2(std::queue<uint16_t>::iterator v);
void tf126_3(std::queue<uint32_t>::iterator v);
void tf126_4(std::queue<uint64_t>::iterator v);`),
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
        `h2dtscpp_gen_0126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0127
  * @tc.name : h2dtscpp_gen_0127
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::queue<int8_t>::iterator, std::queue<int16_t>::iterator,... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0127', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf127_0(std::queue<int8_t>::iterator v);
void tf127_1(std::queue<int16_t>::iterator v);
void tf127_2(std::queue<int32_t>::iterator v);
void tf127_3(std::queue<int64_t>::iterator v);
void tf127_4(std::queue<unsigned>::iterator v);`),
        unions: parseUnion(`void tf127_0(std::queue<int8_t>::iterator v);
void tf127_1(std::queue<int16_t>::iterator v);
void tf127_2(std::queue<int32_t>::iterator v);
void tf127_3(std::queue<int64_t>::iterator v);
void tf127_4(std::queue<unsigned>::iterator v);`),
        structs: parseStruct(`void tf127_0(std::queue<int8_t>::iterator v);
void tf127_1(std::queue<int16_t>::iterator v);
void tf127_2(std::queue<int32_t>::iterator v);
void tf127_3(std::queue<int64_t>::iterator v);
void tf127_4(std::queue<unsigned>::iterator v);`),
        classes: parseClass(`void tf127_0(std::queue<int8_t>::iterator v);
void tf127_1(std::queue<int16_t>::iterator v);
void tf127_2(std::queue<int32_t>::iterator v);
void tf127_3(std::queue<int64_t>::iterator v);
void tf127_4(std::queue<unsigned>::iterator v);`),
        funcs: parseFunction(`void tf127_0(std::queue<int8_t>::iterator v);
void tf127_1(std::queue<int16_t>::iterator v);
void tf127_2(std::queue<int32_t>::iterator v);
void tf127_3(std::queue<int64_t>::iterator v);
void tf127_4(std::queue<unsigned>::iterator v);`),
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
        `h2dtscpp_gen_0127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0128
  * @tc.name : h2dtscpp_gen_0128
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::queue<bool>::iterator, std::queue<char>::iterator, std:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0128', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf128_0(std::queue<bool>::iterator v);
void tf128_1(std::queue<char>::iterator v);
void tf128_2(std::queue<wchar_t>::iterator v);
void tf128_3(std::queue<char8_t>::iterator v);
void tf128_4(std::queue<char16_t>::iterator v);`),
        unions: parseUnion(`void tf128_0(std::queue<bool>::iterator v);
void tf128_1(std::queue<char>::iterator v);
void tf128_2(std::queue<wchar_t>::iterator v);
void tf128_3(std::queue<char8_t>::iterator v);
void tf128_4(std::queue<char16_t>::iterator v);`),
        structs: parseStruct(`void tf128_0(std::queue<bool>::iterator v);
void tf128_1(std::queue<char>::iterator v);
void tf128_2(std::queue<wchar_t>::iterator v);
void tf128_3(std::queue<char8_t>::iterator v);
void tf128_4(std::queue<char16_t>::iterator v);`),
        classes: parseClass(`void tf128_0(std::queue<bool>::iterator v);
void tf128_1(std::queue<char>::iterator v);
void tf128_2(std::queue<wchar_t>::iterator v);
void tf128_3(std::queue<char8_t>::iterator v);
void tf128_4(std::queue<char16_t>::iterator v);`),
        funcs: parseFunction(`void tf128_0(std::queue<bool>::iterator v);
void tf128_1(std::queue<char>::iterator v);
void tf128_2(std::queue<wchar_t>::iterator v);
void tf128_3(std::queue<char8_t>::iterator v);
void tf128_4(std::queue<char16_t>::iterator v);`),
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
        `h2dtscpp_gen_0128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0129
  * @tc.name : h2dtscpp_gen_0129
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::queue<char32_t>::iterator, std::valarray<int>, std::val... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0129', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf129_0(std::queue<char32_t>::iterator v);
void tf129_1(std::valarray<int> v);
void tf129_2(std::valarray<size_t> v);
void tf129_3(std::valarray<double> v);
void tf129_4(std::valarray<float> v);`),
        unions: parseUnion(`void tf129_0(std::queue<char32_t>::iterator v);
void tf129_1(std::valarray<int> v);
void tf129_2(std::valarray<size_t> v);
void tf129_3(std::valarray<double> v);
void tf129_4(std::valarray<float> v);`),
        structs: parseStruct(`void tf129_0(std::queue<char32_t>::iterator v);
void tf129_1(std::valarray<int> v);
void tf129_2(std::valarray<size_t> v);
void tf129_3(std::valarray<double> v);
void tf129_4(std::valarray<float> v);`),
        classes: parseClass(`void tf129_0(std::queue<char32_t>::iterator v);
void tf129_1(std::valarray<int> v);
void tf129_2(std::valarray<size_t> v);
void tf129_3(std::valarray<double> v);
void tf129_4(std::valarray<float> v);`),
        funcs: parseFunction(`void tf129_0(std::queue<char32_t>::iterator v);
void tf129_1(std::valarray<int> v);
void tf129_2(std::valarray<size_t> v);
void tf129_3(std::valarray<double> v);
void tf129_4(std::valarray<float> v);`),
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
        `h2dtscpp_gen_0129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0130
  * @tc.name : h2dtscpp_gen_0130
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::valarray<long>, std::valarray<short>, std::valarray<uin... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0130', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf130_0(std::valarray<long> v);
void tf130_1(std::valarray<short> v);
void tf130_2(std::valarray<uint8_t> v);
void tf130_3(std::valarray<uint16_t> v);
void tf130_4(std::valarray<uint32_t> v);`),
        unions: parseUnion(`void tf130_0(std::valarray<long> v);
void tf130_1(std::valarray<short> v);
void tf130_2(std::valarray<uint8_t> v);
void tf130_3(std::valarray<uint16_t> v);
void tf130_4(std::valarray<uint32_t> v);`),
        structs: parseStruct(`void tf130_0(std::valarray<long> v);
void tf130_1(std::valarray<short> v);
void tf130_2(std::valarray<uint8_t> v);
void tf130_3(std::valarray<uint16_t> v);
void tf130_4(std::valarray<uint32_t> v);`),
        classes: parseClass(`void tf130_0(std::valarray<long> v);
void tf130_1(std::valarray<short> v);
void tf130_2(std::valarray<uint8_t> v);
void tf130_3(std::valarray<uint16_t> v);
void tf130_4(std::valarray<uint32_t> v);`),
        funcs: parseFunction(`void tf130_0(std::valarray<long> v);
void tf130_1(std::valarray<short> v);
void tf130_2(std::valarray<uint8_t> v);
void tf130_3(std::valarray<uint16_t> v);
void tf130_4(std::valarray<uint32_t> v);`),
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
        `h2dtscpp_gen_0130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0131
  * @tc.name : h2dtscpp_gen_0131
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::valarray<uint64_t>, std::valarray<int8_t>, std::valarra... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0131', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf131_0(std::valarray<uint64_t> v);
void tf131_1(std::valarray<int8_t> v);
void tf131_2(std::valarray<int16_t> v);
void tf131_3(std::valarray<int32_t> v);
void tf131_4(std::valarray<int64_t> v);`),
        unions: parseUnion(`void tf131_0(std::valarray<uint64_t> v);
void tf131_1(std::valarray<int8_t> v);
void tf131_2(std::valarray<int16_t> v);
void tf131_3(std::valarray<int32_t> v);
void tf131_4(std::valarray<int64_t> v);`),
        structs: parseStruct(`void tf131_0(std::valarray<uint64_t> v);
void tf131_1(std::valarray<int8_t> v);
void tf131_2(std::valarray<int16_t> v);
void tf131_3(std::valarray<int32_t> v);
void tf131_4(std::valarray<int64_t> v);`),
        classes: parseClass(`void tf131_0(std::valarray<uint64_t> v);
void tf131_1(std::valarray<int8_t> v);
void tf131_2(std::valarray<int16_t> v);
void tf131_3(std::valarray<int32_t> v);
void tf131_4(std::valarray<int64_t> v);`),
        funcs: parseFunction(`void tf131_0(std::valarray<uint64_t> v);
void tf131_1(std::valarray<int8_t> v);
void tf131_2(std::valarray<int16_t> v);
void tf131_3(std::valarray<int32_t> v);
void tf131_4(std::valarray<int64_t> v);`),
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
        `h2dtscpp_gen_0131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0132
  * @tc.name : h2dtscpp_gen_0132
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::valarray<unsigned>, std::valarray<bool>, std::valarray<... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0132', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf132_0(std::valarray<unsigned> v);
void tf132_1(std::valarray<bool> v);
void tf132_2(std::valarray<char> v);
void tf132_3(std::valarray<wchar_t> v);
void tf132_4(std::valarray<char8_t> v);`),
        unions: parseUnion(`void tf132_0(std::valarray<unsigned> v);
void tf132_1(std::valarray<bool> v);
void tf132_2(std::valarray<char> v);
void tf132_3(std::valarray<wchar_t> v);
void tf132_4(std::valarray<char8_t> v);`),
        structs: parseStruct(`void tf132_0(std::valarray<unsigned> v);
void tf132_1(std::valarray<bool> v);
void tf132_2(std::valarray<char> v);
void tf132_3(std::valarray<wchar_t> v);
void tf132_4(std::valarray<char8_t> v);`),
        classes: parseClass(`void tf132_0(std::valarray<unsigned> v);
void tf132_1(std::valarray<bool> v);
void tf132_2(std::valarray<char> v);
void tf132_3(std::valarray<wchar_t> v);
void tf132_4(std::valarray<char8_t> v);`),
        funcs: parseFunction(`void tf132_0(std::valarray<unsigned> v);
void tf132_1(std::valarray<bool> v);
void tf132_2(std::valarray<char> v);
void tf132_3(std::valarray<wchar_t> v);
void tf132_4(std::valarray<char8_t> v);`),
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
        `h2dtscpp_gen_0132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0133
  * @tc.name : h2dtscpp_gen_0133
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::valarray<char16_t>, std::valarray<char32_t>, std::valar... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0133', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf133_0(std::valarray<char16_t> v);
void tf133_1(std::valarray<char32_t> v);
void tf133_2(std::valarray<int>::iterator v);
void tf133_3(std::valarray<size_t>::iterator v);
void tf133_4(std::valarray<double>::iterator v);`),
        unions: parseUnion(`void tf133_0(std::valarray<char16_t> v);
void tf133_1(std::valarray<char32_t> v);
void tf133_2(std::valarray<int>::iterator v);
void tf133_3(std::valarray<size_t>::iterator v);
void tf133_4(std::valarray<double>::iterator v);`),
        structs: parseStruct(`void tf133_0(std::valarray<char16_t> v);
void tf133_1(std::valarray<char32_t> v);
void tf133_2(std::valarray<int>::iterator v);
void tf133_3(std::valarray<size_t>::iterator v);
void tf133_4(std::valarray<double>::iterator v);`),
        classes: parseClass(`void tf133_0(std::valarray<char16_t> v);
void tf133_1(std::valarray<char32_t> v);
void tf133_2(std::valarray<int>::iterator v);
void tf133_3(std::valarray<size_t>::iterator v);
void tf133_4(std::valarray<double>::iterator v);`),
        funcs: parseFunction(`void tf133_0(std::valarray<char16_t> v);
void tf133_1(std::valarray<char32_t> v);
void tf133_2(std::valarray<int>::iterator v);
void tf133_3(std::valarray<size_t>::iterator v);
void tf133_4(std::valarray<double>::iterator v);`),
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
        `h2dtscpp_gen_0133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0134
  * @tc.name : h2dtscpp_gen_0134
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::valarray<float>::iterator, std::valarray<long>::iterato... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0134', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf134_0(std::valarray<float>::iterator v);
void tf134_1(std::valarray<long>::iterator v);
void tf134_2(std::valarray<short>::iterator v);
void tf134_3(std::valarray<uint8_t>::iterator v);
void tf134_4(std::valarray<uint16_t>::iterator v);`),
        unions: parseUnion(`void tf134_0(std::valarray<float>::iterator v);
void tf134_1(std::valarray<long>::iterator v);
void tf134_2(std::valarray<short>::iterator v);
void tf134_3(std::valarray<uint8_t>::iterator v);
void tf134_4(std::valarray<uint16_t>::iterator v);`),
        structs: parseStruct(`void tf134_0(std::valarray<float>::iterator v);
void tf134_1(std::valarray<long>::iterator v);
void tf134_2(std::valarray<short>::iterator v);
void tf134_3(std::valarray<uint8_t>::iterator v);
void tf134_4(std::valarray<uint16_t>::iterator v);`),
        classes: parseClass(`void tf134_0(std::valarray<float>::iterator v);
void tf134_1(std::valarray<long>::iterator v);
void tf134_2(std::valarray<short>::iterator v);
void tf134_3(std::valarray<uint8_t>::iterator v);
void tf134_4(std::valarray<uint16_t>::iterator v);`),
        funcs: parseFunction(`void tf134_0(std::valarray<float>::iterator v);
void tf134_1(std::valarray<long>::iterator v);
void tf134_2(std::valarray<short>::iterator v);
void tf134_3(std::valarray<uint8_t>::iterator v);
void tf134_4(std::valarray<uint16_t>::iterator v);`),
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
        `h2dtscpp_gen_0134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0135
  * @tc.name : h2dtscpp_gen_0135
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::valarray<uint32_t>::iterator, std::valarray<uint64_t>::... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0135', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf135_0(std::valarray<uint32_t>::iterator v);
void tf135_1(std::valarray<uint64_t>::iterator v);
void tf135_2(std::valarray<int8_t>::iterator v);
void tf135_3(std::valarray<int16_t>::iterator v);
void tf135_4(std::valarray<int32_t>::iterator v);`),
        unions: parseUnion(`void tf135_0(std::valarray<uint32_t>::iterator v);
void tf135_1(std::valarray<uint64_t>::iterator v);
void tf135_2(std::valarray<int8_t>::iterator v);
void tf135_3(std::valarray<int16_t>::iterator v);
void tf135_4(std::valarray<int32_t>::iterator v);`),
        structs: parseStruct(`void tf135_0(std::valarray<uint32_t>::iterator v);
void tf135_1(std::valarray<uint64_t>::iterator v);
void tf135_2(std::valarray<int8_t>::iterator v);
void tf135_3(std::valarray<int16_t>::iterator v);
void tf135_4(std::valarray<int32_t>::iterator v);`),
        classes: parseClass(`void tf135_0(std::valarray<uint32_t>::iterator v);
void tf135_1(std::valarray<uint64_t>::iterator v);
void tf135_2(std::valarray<int8_t>::iterator v);
void tf135_3(std::valarray<int16_t>::iterator v);
void tf135_4(std::valarray<int32_t>::iterator v);`),
        funcs: parseFunction(`void tf135_0(std::valarray<uint32_t>::iterator v);
void tf135_1(std::valarray<uint64_t>::iterator v);
void tf135_2(std::valarray<int8_t>::iterator v);
void tf135_3(std::valarray<int16_t>::iterator v);
void tf135_4(std::valarray<int32_t>::iterator v);`),
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
        `h2dtscpp_gen_0135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0136
  * @tc.name : h2dtscpp_gen_0136
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::valarray<int64_t>::iterator, std::valarray<unsigned>::i... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0136', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf136_0(std::valarray<int64_t>::iterator v);
void tf136_1(std::valarray<unsigned>::iterator v);
void tf136_2(std::valarray<bool>::iterator v);
void tf136_3(std::valarray<char>::iterator v);
void tf136_4(std::valarray<wchar_t>::iterator v);`),
        unions: parseUnion(`void tf136_0(std::valarray<int64_t>::iterator v);
void tf136_1(std::valarray<unsigned>::iterator v);
void tf136_2(std::valarray<bool>::iterator v);
void tf136_3(std::valarray<char>::iterator v);
void tf136_4(std::valarray<wchar_t>::iterator v);`),
        structs: parseStruct(`void tf136_0(std::valarray<int64_t>::iterator v);
void tf136_1(std::valarray<unsigned>::iterator v);
void tf136_2(std::valarray<bool>::iterator v);
void tf136_3(std::valarray<char>::iterator v);
void tf136_4(std::valarray<wchar_t>::iterator v);`),
        classes: parseClass(`void tf136_0(std::valarray<int64_t>::iterator v);
void tf136_1(std::valarray<unsigned>::iterator v);
void tf136_2(std::valarray<bool>::iterator v);
void tf136_3(std::valarray<char>::iterator v);
void tf136_4(std::valarray<wchar_t>::iterator v);`),
        funcs: parseFunction(`void tf136_0(std::valarray<int64_t>::iterator v);
void tf136_1(std::valarray<unsigned>::iterator v);
void tf136_2(std::valarray<bool>::iterator v);
void tf136_3(std::valarray<char>::iterator v);
void tf136_4(std::valarray<wchar_t>::iterator v);`),
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
        `h2dtscpp_gen_0136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0137
  * @tc.name : h2dtscpp_gen_0137
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::valarray<char8_t>::iterator, std::valarray<char16_t>::i... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0137', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf137_0(std::valarray<char8_t>::iterator v);
void tf137_1(std::valarray<char16_t>::iterator v);
void tf137_2(std::valarray<char32_t>::iterator v);
void tf137_3(std::priority_queue<int> v);
void tf137_4(std::priority_queue<size_t> v);`),
        unions: parseUnion(`void tf137_0(std::valarray<char8_t>::iterator v);
void tf137_1(std::valarray<char16_t>::iterator v);
void tf137_2(std::valarray<char32_t>::iterator v);
void tf137_3(std::priority_queue<int> v);
void tf137_4(std::priority_queue<size_t> v);`),
        structs: parseStruct(`void tf137_0(std::valarray<char8_t>::iterator v);
void tf137_1(std::valarray<char16_t>::iterator v);
void tf137_2(std::valarray<char32_t>::iterator v);
void tf137_3(std::priority_queue<int> v);
void tf137_4(std::priority_queue<size_t> v);`),
        classes: parseClass(`void tf137_0(std::valarray<char8_t>::iterator v);
void tf137_1(std::valarray<char16_t>::iterator v);
void tf137_2(std::valarray<char32_t>::iterator v);
void tf137_3(std::priority_queue<int> v);
void tf137_4(std::priority_queue<size_t> v);`),
        funcs: parseFunction(`void tf137_0(std::valarray<char8_t>::iterator v);
void tf137_1(std::valarray<char16_t>::iterator v);
void tf137_2(std::valarray<char32_t>::iterator v);
void tf137_3(std::priority_queue<int> v);
void tf137_4(std::priority_queue<size_t> v);`),
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
        `h2dtscpp_gen_0137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0138
  * @tc.name : h2dtscpp_gen_0138
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::priority_queue<double>, std::priority_queue<float>, std... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0138', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf138_0(std::priority_queue<double> v);
void tf138_1(std::priority_queue<float> v);
void tf138_2(std::priority_queue<long> v);
void tf138_3(std::priority_queue<short> v);
void tf138_4(std::priority_queue<uint8_t> v);`),
        unions: parseUnion(`void tf138_0(std::priority_queue<double> v);
void tf138_1(std::priority_queue<float> v);
void tf138_2(std::priority_queue<long> v);
void tf138_3(std::priority_queue<short> v);
void tf138_4(std::priority_queue<uint8_t> v);`),
        structs: parseStruct(`void tf138_0(std::priority_queue<double> v);
void tf138_1(std::priority_queue<float> v);
void tf138_2(std::priority_queue<long> v);
void tf138_3(std::priority_queue<short> v);
void tf138_4(std::priority_queue<uint8_t> v);`),
        classes: parseClass(`void tf138_0(std::priority_queue<double> v);
void tf138_1(std::priority_queue<float> v);
void tf138_2(std::priority_queue<long> v);
void tf138_3(std::priority_queue<short> v);
void tf138_4(std::priority_queue<uint8_t> v);`),
        funcs: parseFunction(`void tf138_0(std::priority_queue<double> v);
void tf138_1(std::priority_queue<float> v);
void tf138_2(std::priority_queue<long> v);
void tf138_3(std::priority_queue<short> v);
void tf138_4(std::priority_queue<uint8_t> v);`),
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
        `h2dtscpp_gen_0138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0139
  * @tc.name : h2dtscpp_gen_0139
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::priority_queue<uint16_t>, std::priority_queue<uint32_t>... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0139', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf139_0(std::priority_queue<uint16_t> v);
void tf139_1(std::priority_queue<uint32_t> v);
void tf139_2(std::priority_queue<uint64_t> v);
void tf139_3(std::priority_queue<int8_t> v);
void tf139_4(std::priority_queue<int16_t> v);`),
        unions: parseUnion(`void tf139_0(std::priority_queue<uint16_t> v);
void tf139_1(std::priority_queue<uint32_t> v);
void tf139_2(std::priority_queue<uint64_t> v);
void tf139_3(std::priority_queue<int8_t> v);
void tf139_4(std::priority_queue<int16_t> v);`),
        structs: parseStruct(`void tf139_0(std::priority_queue<uint16_t> v);
void tf139_1(std::priority_queue<uint32_t> v);
void tf139_2(std::priority_queue<uint64_t> v);
void tf139_3(std::priority_queue<int8_t> v);
void tf139_4(std::priority_queue<int16_t> v);`),
        classes: parseClass(`void tf139_0(std::priority_queue<uint16_t> v);
void tf139_1(std::priority_queue<uint32_t> v);
void tf139_2(std::priority_queue<uint64_t> v);
void tf139_3(std::priority_queue<int8_t> v);
void tf139_4(std::priority_queue<int16_t> v);`),
        funcs: parseFunction(`void tf139_0(std::priority_queue<uint16_t> v);
void tf139_1(std::priority_queue<uint32_t> v);
void tf139_2(std::priority_queue<uint64_t> v);
void tf139_3(std::priority_queue<int8_t> v);
void tf139_4(std::priority_queue<int16_t> v);`),
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
        `h2dtscpp_gen_0139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0140
  * @tc.name : h2dtscpp_gen_0140
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::priority_queue<int32_t>, std::priority_queue<int64_t>, ... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0140', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf140_0(std::priority_queue<int32_t> v);
void tf140_1(std::priority_queue<int64_t> v);
void tf140_2(std::priority_queue<unsigned> v);
void tf140_3(std::priority_queue<bool> v);
void tf140_4(std::priority_queue<char> v);`),
        unions: parseUnion(`void tf140_0(std::priority_queue<int32_t> v);
void tf140_1(std::priority_queue<int64_t> v);
void tf140_2(std::priority_queue<unsigned> v);
void tf140_3(std::priority_queue<bool> v);
void tf140_4(std::priority_queue<char> v);`),
        structs: parseStruct(`void tf140_0(std::priority_queue<int32_t> v);
void tf140_1(std::priority_queue<int64_t> v);
void tf140_2(std::priority_queue<unsigned> v);
void tf140_3(std::priority_queue<bool> v);
void tf140_4(std::priority_queue<char> v);`),
        classes: parseClass(`void tf140_0(std::priority_queue<int32_t> v);
void tf140_1(std::priority_queue<int64_t> v);
void tf140_2(std::priority_queue<unsigned> v);
void tf140_3(std::priority_queue<bool> v);
void tf140_4(std::priority_queue<char> v);`),
        funcs: parseFunction(`void tf140_0(std::priority_queue<int32_t> v);
void tf140_1(std::priority_queue<int64_t> v);
void tf140_2(std::priority_queue<unsigned> v);
void tf140_3(std::priority_queue<bool> v);
void tf140_4(std::priority_queue<char> v);`),
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
        `h2dtscpp_gen_0140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0141
  * @tc.name : h2dtscpp_gen_0141
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::priority_queue<wchar_t>, std::priority_queue<char8_t>, ... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0141', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf141_0(std::priority_queue<wchar_t> v);
void tf141_1(std::priority_queue<char8_t> v);
void tf141_2(std::priority_queue<char16_t> v);
void tf141_3(std::priority_queue<char32_t> v);
void tf141_4(std::priority_queue<int>::iterator v);`),
        unions: parseUnion(`void tf141_0(std::priority_queue<wchar_t> v);
void tf141_1(std::priority_queue<char8_t> v);
void tf141_2(std::priority_queue<char16_t> v);
void tf141_3(std::priority_queue<char32_t> v);
void tf141_4(std::priority_queue<int>::iterator v);`),
        structs: parseStruct(`void tf141_0(std::priority_queue<wchar_t> v);
void tf141_1(std::priority_queue<char8_t> v);
void tf141_2(std::priority_queue<char16_t> v);
void tf141_3(std::priority_queue<char32_t> v);
void tf141_4(std::priority_queue<int>::iterator v);`),
        classes: parseClass(`void tf141_0(std::priority_queue<wchar_t> v);
void tf141_1(std::priority_queue<char8_t> v);
void tf141_2(std::priority_queue<char16_t> v);
void tf141_3(std::priority_queue<char32_t> v);
void tf141_4(std::priority_queue<int>::iterator v);`),
        funcs: parseFunction(`void tf141_0(std::priority_queue<wchar_t> v);
void tf141_1(std::priority_queue<char8_t> v);
void tf141_2(std::priority_queue<char16_t> v);
void tf141_3(std::priority_queue<char32_t> v);
void tf141_4(std::priority_queue<int>::iterator v);`),
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
        `h2dtscpp_gen_0141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0142
  * @tc.name : h2dtscpp_gen_0142
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::priority_queue<size_t>::iterator, std::priority_queue<d... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0142', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf142_0(std::priority_queue<size_t>::iterator v);
void tf142_1(std::priority_queue<double>::iterator v);
void tf142_2(std::priority_queue<float>::iterator v);
void tf142_3(std::priority_queue<long>::iterator v);
void tf142_4(std::priority_queue<short>::iterator v);`),
        unions: parseUnion(`void tf142_0(std::priority_queue<size_t>::iterator v);
void tf142_1(std::priority_queue<double>::iterator v);
void tf142_2(std::priority_queue<float>::iterator v);
void tf142_3(std::priority_queue<long>::iterator v);
void tf142_4(std::priority_queue<short>::iterator v);`),
        structs: parseStruct(`void tf142_0(std::priority_queue<size_t>::iterator v);
void tf142_1(std::priority_queue<double>::iterator v);
void tf142_2(std::priority_queue<float>::iterator v);
void tf142_3(std::priority_queue<long>::iterator v);
void tf142_4(std::priority_queue<short>::iterator v);`),
        classes: parseClass(`void tf142_0(std::priority_queue<size_t>::iterator v);
void tf142_1(std::priority_queue<double>::iterator v);
void tf142_2(std::priority_queue<float>::iterator v);
void tf142_3(std::priority_queue<long>::iterator v);
void tf142_4(std::priority_queue<short>::iterator v);`),
        funcs: parseFunction(`void tf142_0(std::priority_queue<size_t>::iterator v);
void tf142_1(std::priority_queue<double>::iterator v);
void tf142_2(std::priority_queue<float>::iterator v);
void tf142_3(std::priority_queue<long>::iterator v);
void tf142_4(std::priority_queue<short>::iterator v);`),
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
        `h2dtscpp_gen_0142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0143
  * @tc.name : h2dtscpp_gen_0143
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::priority_queue<uint8_t>::iterator, std::priority_queue<... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0143', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf143_0(std::priority_queue<uint8_t>::iterator v);
void tf143_1(std::priority_queue<uint16_t>::iterator v);
void tf143_2(std::priority_queue<uint32_t>::iterator v);
void tf143_3(std::priority_queue<uint64_t>::iterator v);
void tf143_4(std::priority_queue<int8_t>::iterator v);`),
        unions: parseUnion(`void tf143_0(std::priority_queue<uint8_t>::iterator v);
void tf143_1(std::priority_queue<uint16_t>::iterator v);
void tf143_2(std::priority_queue<uint32_t>::iterator v);
void tf143_3(std::priority_queue<uint64_t>::iterator v);
void tf143_4(std::priority_queue<int8_t>::iterator v);`),
        structs: parseStruct(`void tf143_0(std::priority_queue<uint8_t>::iterator v);
void tf143_1(std::priority_queue<uint16_t>::iterator v);
void tf143_2(std::priority_queue<uint32_t>::iterator v);
void tf143_3(std::priority_queue<uint64_t>::iterator v);
void tf143_4(std::priority_queue<int8_t>::iterator v);`),
        classes: parseClass(`void tf143_0(std::priority_queue<uint8_t>::iterator v);
void tf143_1(std::priority_queue<uint16_t>::iterator v);
void tf143_2(std::priority_queue<uint32_t>::iterator v);
void tf143_3(std::priority_queue<uint64_t>::iterator v);
void tf143_4(std::priority_queue<int8_t>::iterator v);`),
        funcs: parseFunction(`void tf143_0(std::priority_queue<uint8_t>::iterator v);
void tf143_1(std::priority_queue<uint16_t>::iterator v);
void tf143_2(std::priority_queue<uint32_t>::iterator v);
void tf143_3(std::priority_queue<uint64_t>::iterator v);
void tf143_4(std::priority_queue<int8_t>::iterator v);`),
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
        `h2dtscpp_gen_0143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0144
  * @tc.name : h2dtscpp_gen_0144
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::priority_queue<int16_t>::iterator, std::priority_queue<... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0144', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf144_0(std::priority_queue<int16_t>::iterator v);
void tf144_1(std::priority_queue<int32_t>::iterator v);
void tf144_2(std::priority_queue<int64_t>::iterator v);
void tf144_3(std::priority_queue<unsigned>::iterator v);
void tf144_4(std::priority_queue<bool>::iterator v);`),
        unions: parseUnion(`void tf144_0(std::priority_queue<int16_t>::iterator v);
void tf144_1(std::priority_queue<int32_t>::iterator v);
void tf144_2(std::priority_queue<int64_t>::iterator v);
void tf144_3(std::priority_queue<unsigned>::iterator v);
void tf144_4(std::priority_queue<bool>::iterator v);`),
        structs: parseStruct(`void tf144_0(std::priority_queue<int16_t>::iterator v);
void tf144_1(std::priority_queue<int32_t>::iterator v);
void tf144_2(std::priority_queue<int64_t>::iterator v);
void tf144_3(std::priority_queue<unsigned>::iterator v);
void tf144_4(std::priority_queue<bool>::iterator v);`),
        classes: parseClass(`void tf144_0(std::priority_queue<int16_t>::iterator v);
void tf144_1(std::priority_queue<int32_t>::iterator v);
void tf144_2(std::priority_queue<int64_t>::iterator v);
void tf144_3(std::priority_queue<unsigned>::iterator v);
void tf144_4(std::priority_queue<bool>::iterator v);`),
        funcs: parseFunction(`void tf144_0(std::priority_queue<int16_t>::iterator v);
void tf144_1(std::priority_queue<int32_t>::iterator v);
void tf144_2(std::priority_queue<int64_t>::iterator v);
void tf144_3(std::priority_queue<unsigned>::iterator v);
void tf144_4(std::priority_queue<bool>::iterator v);`),
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
        `h2dtscpp_gen_0144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0145
  * @tc.name : h2dtscpp_gen_0145
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::priority_queue<char>::iterator, std::priority_queue<wch... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0145', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf145_0(std::priority_queue<char>::iterator v);
void tf145_1(std::priority_queue<wchar_t>::iterator v);
void tf145_2(std::priority_queue<char8_t>::iterator v);
void tf145_3(std::priority_queue<char16_t>::iterator v);
void tf145_4(std::priority_queue<char32_t>::iterator v);`),
        unions: parseUnion(`void tf145_0(std::priority_queue<char>::iterator v);
void tf145_1(std::priority_queue<wchar_t>::iterator v);
void tf145_2(std::priority_queue<char8_t>::iterator v);
void tf145_3(std::priority_queue<char16_t>::iterator v);
void tf145_4(std::priority_queue<char32_t>::iterator v);`),
        structs: parseStruct(`void tf145_0(std::priority_queue<char>::iterator v);
void tf145_1(std::priority_queue<wchar_t>::iterator v);
void tf145_2(std::priority_queue<char8_t>::iterator v);
void tf145_3(std::priority_queue<char16_t>::iterator v);
void tf145_4(std::priority_queue<char32_t>::iterator v);`),
        classes: parseClass(`void tf145_0(std::priority_queue<char>::iterator v);
void tf145_1(std::priority_queue<wchar_t>::iterator v);
void tf145_2(std::priority_queue<char8_t>::iterator v);
void tf145_3(std::priority_queue<char16_t>::iterator v);
void tf145_4(std::priority_queue<char32_t>::iterator v);`),
        funcs: parseFunction(`void tf145_0(std::priority_queue<char>::iterator v);
void tf145_1(std::priority_queue<wchar_t>::iterator v);
void tf145_2(std::priority_queue<char8_t>::iterator v);
void tf145_3(std::priority_queue<char16_t>::iterator v);
void tf145_4(std::priority_queue<char32_t>::iterator v);`),
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
        `h2dtscpp_gen_0145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0146
  * @tc.name : h2dtscpp_gen_0146
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::map<int, int>, std::map<char, int>, std::map<char, size... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0146', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf146_0(std::map<int, int> v);
void tf146_1(std::map<char, int> v);
void tf146_2(std::map<char, size_t> v);
void tf146_3(std::map<char, unsigned> v);
void tf146_4(std::map<char, double> v);`),
        unions: parseUnion(`void tf146_0(std::map<int, int> v);
void tf146_1(std::map<char, int> v);
void tf146_2(std::map<char, size_t> v);
void tf146_3(std::map<char, unsigned> v);
void tf146_4(std::map<char, double> v);`),
        structs: parseStruct(`void tf146_0(std::map<int, int> v);
void tf146_1(std::map<char, int> v);
void tf146_2(std::map<char, size_t> v);
void tf146_3(std::map<char, unsigned> v);
void tf146_4(std::map<char, double> v);`),
        classes: parseClass(`void tf146_0(std::map<int, int> v);
void tf146_1(std::map<char, int> v);
void tf146_2(std::map<char, size_t> v);
void tf146_3(std::map<char, unsigned> v);
void tf146_4(std::map<char, double> v);`),
        funcs: parseFunction(`void tf146_0(std::map<int, int> v);
void tf146_1(std::map<char, int> v);
void tf146_2(std::map<char, size_t> v);
void tf146_3(std::map<char, unsigned> v);
void tf146_4(std::map<char, double> v);`),
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
        `h2dtscpp_gen_0146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0147
  * @tc.name : h2dtscpp_gen_0147
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::map<char, float>, std::map<char16_t, int32_t>, std::map... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0147', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf147_0(std::map<char, float> v);
void tf147_1(std::map<char16_t, int32_t> v);
void tf147_2(std::map<char32_t, size_t> v);
void tf147_3(std::map<char8_t, uint32_t> v);
void tf147_4(std::map<char32_t, int8_t> v);`),
        unions: parseUnion(`void tf147_0(std::map<char, float> v);
void tf147_1(std::map<char16_t, int32_t> v);
void tf147_2(std::map<char32_t, size_t> v);
void tf147_3(std::map<char8_t, uint32_t> v);
void tf147_4(std::map<char32_t, int8_t> v);`),
        structs: parseStruct(`void tf147_0(std::map<char, float> v);
void tf147_1(std::map<char16_t, int32_t> v);
void tf147_2(std::map<char32_t, size_t> v);
void tf147_3(std::map<char8_t, uint32_t> v);
void tf147_4(std::map<char32_t, int8_t> v);`),
        classes: parseClass(`void tf147_0(std::map<char, float> v);
void tf147_1(std::map<char16_t, int32_t> v);
void tf147_2(std::map<char32_t, size_t> v);
void tf147_3(std::map<char8_t, uint32_t> v);
void tf147_4(std::map<char32_t, int8_t> v);`),
        funcs: parseFunction(`void tf147_0(std::map<char, float> v);
void tf147_1(std::map<char16_t, int32_t> v);
void tf147_2(std::map<char32_t, size_t> v);
void tf147_3(std::map<char8_t, uint32_t> v);
void tf147_4(std::map<char32_t, int8_t> v);`),
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
        `h2dtscpp_gen_0147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0148
  * @tc.name : h2dtscpp_gen_0148
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::map<wchar_t, uint16_t>, std::map<int, bool>, std::map<c... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0148', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf148_0(std::map<wchar_t, uint16_t> v);
void tf148_1(std::map<int, bool> v);
void tf148_2(std::map<char, bool> v);
void tf148_3(std::map<int, char> v);
void tf148_4(std::map<size_t, char> v);`),
        unions: parseUnion(`void tf148_0(std::map<wchar_t, uint16_t> v);
void tf148_1(std::map<int, bool> v);
void tf148_2(std::map<char, bool> v);
void tf148_3(std::map<int, char> v);
void tf148_4(std::map<size_t, char> v);`),
        structs: parseStruct(`void tf148_0(std::map<wchar_t, uint16_t> v);
void tf148_1(std::map<int, bool> v);
void tf148_2(std::map<char, bool> v);
void tf148_3(std::map<int, char> v);
void tf148_4(std::map<size_t, char> v);`),
        classes: parseClass(`void tf148_0(std::map<wchar_t, uint16_t> v);
void tf148_1(std::map<int, bool> v);
void tf148_2(std::map<char, bool> v);
void tf148_3(std::map<int, char> v);
void tf148_4(std::map<size_t, char> v);`),
        funcs: parseFunction(`void tf148_0(std::map<wchar_t, uint16_t> v);
void tf148_1(std::map<int, bool> v);
void tf148_2(std::map<char, bool> v);
void tf148_3(std::map<int, char> v);
void tf148_4(std::map<size_t, char> v);`),
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
        `h2dtscpp_gen_0148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0149
  * @tc.name : h2dtscpp_gen_0149
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::map<unsigned, char>, std::map<int, int>::iterator, std:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0149', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf149_0(std::map<unsigned, char> v);
void tf149_1(std::map<int, int>::iterator v);
void tf149_2(std::map<char, int>::iterator v);
void tf149_3(std::map<char, size_t>::iterator v);
void tf149_4(std::map<char, unsigned>::iterator v);`),
        unions: parseUnion(`void tf149_0(std::map<unsigned, char> v);
void tf149_1(std::map<int, int>::iterator v);
void tf149_2(std::map<char, int>::iterator v);
void tf149_3(std::map<char, size_t>::iterator v);
void tf149_4(std::map<char, unsigned>::iterator v);`),
        structs: parseStruct(`void tf149_0(std::map<unsigned, char> v);
void tf149_1(std::map<int, int>::iterator v);
void tf149_2(std::map<char, int>::iterator v);
void tf149_3(std::map<char, size_t>::iterator v);
void tf149_4(std::map<char, unsigned>::iterator v);`),
        classes: parseClass(`void tf149_0(std::map<unsigned, char> v);
void tf149_1(std::map<int, int>::iterator v);
void tf149_2(std::map<char, int>::iterator v);
void tf149_3(std::map<char, size_t>::iterator v);
void tf149_4(std::map<char, unsigned>::iterator v);`),
        funcs: parseFunction(`void tf149_0(std::map<unsigned, char> v);
void tf149_1(std::map<int, int>::iterator v);
void tf149_2(std::map<char, int>::iterator v);
void tf149_3(std::map<char, size_t>::iterator v);
void tf149_4(std::map<char, unsigned>::iterator v);`),
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
        `h2dtscpp_gen_0149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0150
  * @tc.name : h2dtscpp_gen_0150
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::map<char, double>::iterator, std::map<char, float>::ite... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0150', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf150_0(std::map<char, double>::iterator v);
void tf150_1(std::map<char, float>::iterator v);
void tf150_2(std::map<char16_t, int32_t>::iterator v);
void tf150_3(std::map<char32_t, size_t>::iterator v);
void tf150_4(std::map<char8_t, uint32_t>::iterator v);`),
        unions: parseUnion(`void tf150_0(std::map<char, double>::iterator v);
void tf150_1(std::map<char, float>::iterator v);
void tf150_2(std::map<char16_t, int32_t>::iterator v);
void tf150_3(std::map<char32_t, size_t>::iterator v);
void tf150_4(std::map<char8_t, uint32_t>::iterator v);`),
        structs: parseStruct(`void tf150_0(std::map<char, double>::iterator v);
void tf150_1(std::map<char, float>::iterator v);
void tf150_2(std::map<char16_t, int32_t>::iterator v);
void tf150_3(std::map<char32_t, size_t>::iterator v);
void tf150_4(std::map<char8_t, uint32_t>::iterator v);`),
        classes: parseClass(`void tf150_0(std::map<char, double>::iterator v);
void tf150_1(std::map<char, float>::iterator v);
void tf150_2(std::map<char16_t, int32_t>::iterator v);
void tf150_3(std::map<char32_t, size_t>::iterator v);
void tf150_4(std::map<char8_t, uint32_t>::iterator v);`),
        funcs: parseFunction(`void tf150_0(std::map<char, double>::iterator v);
void tf150_1(std::map<char, float>::iterator v);
void tf150_2(std::map<char16_t, int32_t>::iterator v);
void tf150_3(std::map<char32_t, size_t>::iterator v);
void tf150_4(std::map<char8_t, uint32_t>::iterator v);`),
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
        `h2dtscpp_gen_0150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0151
  * @tc.name : h2dtscpp_gen_0151
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::map<char32_t, int8_t>::iterator, std::map<wchar_t, uint... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0151', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf151_0(std::map<char32_t, int8_t>::iterator v);
void tf151_1(std::map<wchar_t, uint16_t>::iterator v);
void tf151_2(std::map<int, bool>::iterator v);
void tf151_3(std::map<char, bool>::iterator v);
void tf151_4(std::map<int, char>::iterator v);`),
        unions: parseUnion(`void tf151_0(std::map<char32_t, int8_t>::iterator v);
void tf151_1(std::map<wchar_t, uint16_t>::iterator v);
void tf151_2(std::map<int, bool>::iterator v);
void tf151_3(std::map<char, bool>::iterator v);
void tf151_4(std::map<int, char>::iterator v);`),
        structs: parseStruct(`void tf151_0(std::map<char32_t, int8_t>::iterator v);
void tf151_1(std::map<wchar_t, uint16_t>::iterator v);
void tf151_2(std::map<int, bool>::iterator v);
void tf151_3(std::map<char, bool>::iterator v);
void tf151_4(std::map<int, char>::iterator v);`),
        classes: parseClass(`void tf151_0(std::map<char32_t, int8_t>::iterator v);
void tf151_1(std::map<wchar_t, uint16_t>::iterator v);
void tf151_2(std::map<int, bool>::iterator v);
void tf151_3(std::map<char, bool>::iterator v);
void tf151_4(std::map<int, char>::iterator v);`),
        funcs: parseFunction(`void tf151_0(std::map<char32_t, int8_t>::iterator v);
void tf151_1(std::map<wchar_t, uint16_t>::iterator v);
void tf151_2(std::map<int, bool>::iterator v);
void tf151_3(std::map<char, bool>::iterator v);
void tf151_4(std::map<int, char>::iterator v);`),
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
        `h2dtscpp_gen_0151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0152
  * @tc.name : h2dtscpp_gen_0152
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::map<size_t, char>::iterator, std::map<unsigned, char>::... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0152', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf152_0(std::map<size_t, char>::iterator v);
void tf152_1(std::map<unsigned, char>::iterator v);
void tf152_2(std::unordered_map<int, int> v);
void tf152_3(std::unordered_map<char, int> v);
void tf152_4(std::unordered_map<char, size_t> v);`),
        unions: parseUnion(`void tf152_0(std::map<size_t, char>::iterator v);
void tf152_1(std::map<unsigned, char>::iterator v);
void tf152_2(std::unordered_map<int, int> v);
void tf152_3(std::unordered_map<char, int> v);
void tf152_4(std::unordered_map<char, size_t> v);`),
        structs: parseStruct(`void tf152_0(std::map<size_t, char>::iterator v);
void tf152_1(std::map<unsigned, char>::iterator v);
void tf152_2(std::unordered_map<int, int> v);
void tf152_3(std::unordered_map<char, int> v);
void tf152_4(std::unordered_map<char, size_t> v);`),
        classes: parseClass(`void tf152_0(std::map<size_t, char>::iterator v);
void tf152_1(std::map<unsigned, char>::iterator v);
void tf152_2(std::unordered_map<int, int> v);
void tf152_3(std::unordered_map<char, int> v);
void tf152_4(std::unordered_map<char, size_t> v);`),
        funcs: parseFunction(`void tf152_0(std::map<size_t, char>::iterator v);
void tf152_1(std::map<unsigned, char>::iterator v);
void tf152_2(std::unordered_map<int, int> v);
void tf152_3(std::unordered_map<char, int> v);
void tf152_4(std::unordered_map<char, size_t> v);`),
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
        `h2dtscpp_gen_0152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0153
  * @tc.name : h2dtscpp_gen_0153
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_map<char, unsigned>, std::unordered_map<char,... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
});
