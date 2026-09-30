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
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part09.');

  /**
  * @tc.number : h2dtscpp_gen_0193
  * @tc.name : h2dtscpp_gen_0193
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multiset<double>::iterator, std::multiset<float>::itera... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0193', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf193_0(std::multiset<double>::iterator v);
void tf193_1(std::multiset<float>::iterator v);
void tf193_2(std::multiset<long>::iterator v);
void tf193_3(std::multiset<short>::iterator v);
void tf193_4(std::multiset<uint8_t>::iterator v);`),
        unions: parseUnion(`void tf193_0(std::multiset<double>::iterator v);
void tf193_1(std::multiset<float>::iterator v);
void tf193_2(std::multiset<long>::iterator v);
void tf193_3(std::multiset<short>::iterator v);
void tf193_4(std::multiset<uint8_t>::iterator v);`),
        structs: parseStruct(`void tf193_0(std::multiset<double>::iterator v);
void tf193_1(std::multiset<float>::iterator v);
void tf193_2(std::multiset<long>::iterator v);
void tf193_3(std::multiset<short>::iterator v);
void tf193_4(std::multiset<uint8_t>::iterator v);`),
        classes: parseClass(`void tf193_0(std::multiset<double>::iterator v);
void tf193_1(std::multiset<float>::iterator v);
void tf193_2(std::multiset<long>::iterator v);
void tf193_3(std::multiset<short>::iterator v);
void tf193_4(std::multiset<uint8_t>::iterator v);`),
        funcs: parseFunction(`void tf193_0(std::multiset<double>::iterator v);
void tf193_1(std::multiset<float>::iterator v);
void tf193_2(std::multiset<long>::iterator v);
void tf193_3(std::multiset<short>::iterator v);
void tf193_4(std::multiset<uint8_t>::iterator v);`),
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
        `h2dtscpp_gen_0193 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0193 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0194
  * @tc.name : h2dtscpp_gen_0194
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multiset<uint16_t>::iterator, std::multiset<uint32_t>::... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0194', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf194_0(std::multiset<uint16_t>::iterator v);
void tf194_1(std::multiset<uint32_t>::iterator v);
void tf194_2(std::multiset<uint64_t>::iterator v);
void tf194_3(std::multiset<int8_t>::iterator v);
void tf194_4(std::multiset<int16_t>::iterator v);`),
        unions: parseUnion(`void tf194_0(std::multiset<uint16_t>::iterator v);
void tf194_1(std::multiset<uint32_t>::iterator v);
void tf194_2(std::multiset<uint64_t>::iterator v);
void tf194_3(std::multiset<int8_t>::iterator v);
void tf194_4(std::multiset<int16_t>::iterator v);`),
        structs: parseStruct(`void tf194_0(std::multiset<uint16_t>::iterator v);
void tf194_1(std::multiset<uint32_t>::iterator v);
void tf194_2(std::multiset<uint64_t>::iterator v);
void tf194_3(std::multiset<int8_t>::iterator v);
void tf194_4(std::multiset<int16_t>::iterator v);`),
        classes: parseClass(`void tf194_0(std::multiset<uint16_t>::iterator v);
void tf194_1(std::multiset<uint32_t>::iterator v);
void tf194_2(std::multiset<uint64_t>::iterator v);
void tf194_3(std::multiset<int8_t>::iterator v);
void tf194_4(std::multiset<int16_t>::iterator v);`),
        funcs: parseFunction(`void tf194_0(std::multiset<uint16_t>::iterator v);
void tf194_1(std::multiset<uint32_t>::iterator v);
void tf194_2(std::multiset<uint64_t>::iterator v);
void tf194_3(std::multiset<int8_t>::iterator v);
void tf194_4(std::multiset<int16_t>::iterator v);`),
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
        `h2dtscpp_gen_0194 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0194 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0195
  * @tc.name : h2dtscpp_gen_0195
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multiset<int32_t>::iterator, std::multiset<int64_t>::it... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0195', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf195_0(std::multiset<int32_t>::iterator v);
void tf195_1(std::multiset<int64_t>::iterator v);
void tf195_2(std::multiset<unsigned>::iterator v);
void tf195_3(std::multiset<bool>::iterator v);
void tf195_4(std::multiset<char>::iterator v);`),
        unions: parseUnion(`void tf195_0(std::multiset<int32_t>::iterator v);
void tf195_1(std::multiset<int64_t>::iterator v);
void tf195_2(std::multiset<unsigned>::iterator v);
void tf195_3(std::multiset<bool>::iterator v);
void tf195_4(std::multiset<char>::iterator v);`),
        structs: parseStruct(`void tf195_0(std::multiset<int32_t>::iterator v);
void tf195_1(std::multiset<int64_t>::iterator v);
void tf195_2(std::multiset<unsigned>::iterator v);
void tf195_3(std::multiset<bool>::iterator v);
void tf195_4(std::multiset<char>::iterator v);`),
        classes: parseClass(`void tf195_0(std::multiset<int32_t>::iterator v);
void tf195_1(std::multiset<int64_t>::iterator v);
void tf195_2(std::multiset<unsigned>::iterator v);
void tf195_3(std::multiset<bool>::iterator v);
void tf195_4(std::multiset<char>::iterator v);`),
        funcs: parseFunction(`void tf195_0(std::multiset<int32_t>::iterator v);
void tf195_1(std::multiset<int64_t>::iterator v);
void tf195_2(std::multiset<unsigned>::iterator v);
void tf195_3(std::multiset<bool>::iterator v);
void tf195_4(std::multiset<char>::iterator v);`),
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
        `h2dtscpp_gen_0195 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0195 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0196
  * @tc.name : h2dtscpp_gen_0196
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multiset<wchar_t>::iterator, std::multiset<char8_t>::it... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0196', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf196_0(std::multiset<wchar_t>::iterator v);
void tf196_1(std::multiset<char8_t>::iterator v);
void tf196_2(std::multiset<char16_t>::iterator v);
void tf196_3(std::multiset<char32_t>::iterator v);
void tf196_4(std::unordered_multiset<int> v);`),
        unions: parseUnion(`void tf196_0(std::multiset<wchar_t>::iterator v);
void tf196_1(std::multiset<char8_t>::iterator v);
void tf196_2(std::multiset<char16_t>::iterator v);
void tf196_3(std::multiset<char32_t>::iterator v);
void tf196_4(std::unordered_multiset<int> v);`),
        structs: parseStruct(`void tf196_0(std::multiset<wchar_t>::iterator v);
void tf196_1(std::multiset<char8_t>::iterator v);
void tf196_2(std::multiset<char16_t>::iterator v);
void tf196_3(std::multiset<char32_t>::iterator v);
void tf196_4(std::unordered_multiset<int> v);`),
        classes: parseClass(`void tf196_0(std::multiset<wchar_t>::iterator v);
void tf196_1(std::multiset<char8_t>::iterator v);
void tf196_2(std::multiset<char16_t>::iterator v);
void tf196_3(std::multiset<char32_t>::iterator v);
void tf196_4(std::unordered_multiset<int> v);`),
        funcs: parseFunction(`void tf196_0(std::multiset<wchar_t>::iterator v);
void tf196_1(std::multiset<char8_t>::iterator v);
void tf196_2(std::multiset<char16_t>::iterator v);
void tf196_3(std::multiset<char32_t>::iterator v);
void tf196_4(std::unordered_multiset<int> v);`),
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
        `h2dtscpp_gen_0196 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0196 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0197
  * @tc.name : h2dtscpp_gen_0197
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multiset<size_t>, std::unordered_multiset<dou... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0197', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf197_0(std::unordered_multiset<size_t> v);
void tf197_1(std::unordered_multiset<double> v);
void tf197_2(std::unordered_multiset<float> v);
void tf197_3(std::unordered_multiset<long> v);
void tf197_4(std::unordered_multiset<short> v);`),
        unions: parseUnion(`void tf197_0(std::unordered_multiset<size_t> v);
void tf197_1(std::unordered_multiset<double> v);
void tf197_2(std::unordered_multiset<float> v);
void tf197_3(std::unordered_multiset<long> v);
void tf197_4(std::unordered_multiset<short> v);`),
        structs: parseStruct(`void tf197_0(std::unordered_multiset<size_t> v);
void tf197_1(std::unordered_multiset<double> v);
void tf197_2(std::unordered_multiset<float> v);
void tf197_3(std::unordered_multiset<long> v);
void tf197_4(std::unordered_multiset<short> v);`),
        classes: parseClass(`void tf197_0(std::unordered_multiset<size_t> v);
void tf197_1(std::unordered_multiset<double> v);
void tf197_2(std::unordered_multiset<float> v);
void tf197_3(std::unordered_multiset<long> v);
void tf197_4(std::unordered_multiset<short> v);`),
        funcs: parseFunction(`void tf197_0(std::unordered_multiset<size_t> v);
void tf197_1(std::unordered_multiset<double> v);
void tf197_2(std::unordered_multiset<float> v);
void tf197_3(std::unordered_multiset<long> v);
void tf197_4(std::unordered_multiset<short> v);`),
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
        `h2dtscpp_gen_0197 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0197 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0198
  * @tc.name : h2dtscpp_gen_0198
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multiset<uint8_t>, std::unordered_multiset<ui... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0198', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf198_0(std::unordered_multiset<uint8_t> v);
void tf198_1(std::unordered_multiset<uint16_t> v);
void tf198_2(std::unordered_multiset<uint32_t> v);
void tf198_3(std::unordered_multiset<uint64_t> v);
void tf198_4(std::unordered_multiset<int8_t> v);`),
        unions: parseUnion(`void tf198_0(std::unordered_multiset<uint8_t> v);
void tf198_1(std::unordered_multiset<uint16_t> v);
void tf198_2(std::unordered_multiset<uint32_t> v);
void tf198_3(std::unordered_multiset<uint64_t> v);
void tf198_4(std::unordered_multiset<int8_t> v);`),
        structs: parseStruct(`void tf198_0(std::unordered_multiset<uint8_t> v);
void tf198_1(std::unordered_multiset<uint16_t> v);
void tf198_2(std::unordered_multiset<uint32_t> v);
void tf198_3(std::unordered_multiset<uint64_t> v);
void tf198_4(std::unordered_multiset<int8_t> v);`),
        classes: parseClass(`void tf198_0(std::unordered_multiset<uint8_t> v);
void tf198_1(std::unordered_multiset<uint16_t> v);
void tf198_2(std::unordered_multiset<uint32_t> v);
void tf198_3(std::unordered_multiset<uint64_t> v);
void tf198_4(std::unordered_multiset<int8_t> v);`),
        funcs: parseFunction(`void tf198_0(std::unordered_multiset<uint8_t> v);
void tf198_1(std::unordered_multiset<uint16_t> v);
void tf198_2(std::unordered_multiset<uint32_t> v);
void tf198_3(std::unordered_multiset<uint64_t> v);
void tf198_4(std::unordered_multiset<int8_t> v);`),
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
        `h2dtscpp_gen_0198 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0198 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0199
  * @tc.name : h2dtscpp_gen_0199
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multiset<int16_t>, std::unordered_multiset<in... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0199', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf199_0(std::unordered_multiset<int16_t> v);
void tf199_1(std::unordered_multiset<int32_t> v);
void tf199_2(std::unordered_multiset<int64_t> v);
void tf199_3(std::unordered_multiset<unsigned> v);
void tf199_4(std::unordered_multiset<bool> v);`),
        unions: parseUnion(`void tf199_0(std::unordered_multiset<int16_t> v);
void tf199_1(std::unordered_multiset<int32_t> v);
void tf199_2(std::unordered_multiset<int64_t> v);
void tf199_3(std::unordered_multiset<unsigned> v);
void tf199_4(std::unordered_multiset<bool> v);`),
        structs: parseStruct(`void tf199_0(std::unordered_multiset<int16_t> v);
void tf199_1(std::unordered_multiset<int32_t> v);
void tf199_2(std::unordered_multiset<int64_t> v);
void tf199_3(std::unordered_multiset<unsigned> v);
void tf199_4(std::unordered_multiset<bool> v);`),
        classes: parseClass(`void tf199_0(std::unordered_multiset<int16_t> v);
void tf199_1(std::unordered_multiset<int32_t> v);
void tf199_2(std::unordered_multiset<int64_t> v);
void tf199_3(std::unordered_multiset<unsigned> v);
void tf199_4(std::unordered_multiset<bool> v);`),
        funcs: parseFunction(`void tf199_0(std::unordered_multiset<int16_t> v);
void tf199_1(std::unordered_multiset<int32_t> v);
void tf199_2(std::unordered_multiset<int64_t> v);
void tf199_3(std::unordered_multiset<unsigned> v);
void tf199_4(std::unordered_multiset<bool> v);`),
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
        `h2dtscpp_gen_0199 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0199 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0200
  * @tc.name : h2dtscpp_gen_0200
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multiset<char>, std::unordered_multiset<wchar... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0200', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf200_0(std::unordered_multiset<char> v);
void tf200_1(std::unordered_multiset<wchar_t> v);
void tf200_2(std::unordered_multiset<char8_t> v);
void tf200_3(std::unordered_multiset<char16_t> v);
void tf200_4(std::unordered_multiset<char32_t> v);`),
        unions: parseUnion(`void tf200_0(std::unordered_multiset<char> v);
void tf200_1(std::unordered_multiset<wchar_t> v);
void tf200_2(std::unordered_multiset<char8_t> v);
void tf200_3(std::unordered_multiset<char16_t> v);
void tf200_4(std::unordered_multiset<char32_t> v);`),
        structs: parseStruct(`void tf200_0(std::unordered_multiset<char> v);
void tf200_1(std::unordered_multiset<wchar_t> v);
void tf200_2(std::unordered_multiset<char8_t> v);
void tf200_3(std::unordered_multiset<char16_t> v);
void tf200_4(std::unordered_multiset<char32_t> v);`),
        classes: parseClass(`void tf200_0(std::unordered_multiset<char> v);
void tf200_1(std::unordered_multiset<wchar_t> v);
void tf200_2(std::unordered_multiset<char8_t> v);
void tf200_3(std::unordered_multiset<char16_t> v);
void tf200_4(std::unordered_multiset<char32_t> v);`),
        funcs: parseFunction(`void tf200_0(std::unordered_multiset<char> v);
void tf200_1(std::unordered_multiset<wchar_t> v);
void tf200_2(std::unordered_multiset<char8_t> v);
void tf200_3(std::unordered_multiset<char16_t> v);
void tf200_4(std::unordered_multiset<char32_t> v);`),
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
        `h2dtscpp_gen_0200 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0200 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0201
  * @tc.name : h2dtscpp_gen_0201
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multiset<int>::iterator, std::unordered_multi... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0201', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf201_0(std::unordered_multiset<int>::iterator v);
void tf201_1(std::unordered_multiset<size_t>::iterator v);
void tf201_2(std::unordered_multiset<double>::iterator v);
void tf201_3(std::unordered_multiset<float>::iterator v);
void tf201_4(std::unordered_multiset<long>::iterator v);`),
        unions: parseUnion(`void tf201_0(std::unordered_multiset<int>::iterator v);
void tf201_1(std::unordered_multiset<size_t>::iterator v);
void tf201_2(std::unordered_multiset<double>::iterator v);
void tf201_3(std::unordered_multiset<float>::iterator v);
void tf201_4(std::unordered_multiset<long>::iterator v);`),
        structs: parseStruct(`void tf201_0(std::unordered_multiset<int>::iterator v);
void tf201_1(std::unordered_multiset<size_t>::iterator v);
void tf201_2(std::unordered_multiset<double>::iterator v);
void tf201_3(std::unordered_multiset<float>::iterator v);
void tf201_4(std::unordered_multiset<long>::iterator v);`),
        classes: parseClass(`void tf201_0(std::unordered_multiset<int>::iterator v);
void tf201_1(std::unordered_multiset<size_t>::iterator v);
void tf201_2(std::unordered_multiset<double>::iterator v);
void tf201_3(std::unordered_multiset<float>::iterator v);
void tf201_4(std::unordered_multiset<long>::iterator v);`),
        funcs: parseFunction(`void tf201_0(std::unordered_multiset<int>::iterator v);
void tf201_1(std::unordered_multiset<size_t>::iterator v);
void tf201_2(std::unordered_multiset<double>::iterator v);
void tf201_3(std::unordered_multiset<float>::iterator v);
void tf201_4(std::unordered_multiset<long>::iterator v);`),
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
        `h2dtscpp_gen_0201 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0201 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0202
  * @tc.name : h2dtscpp_gen_0202
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multiset<short>::iterator, std::unordered_mul... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0202', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf202_0(std::unordered_multiset<short>::iterator v);
void tf202_1(std::unordered_multiset<uint8_t>::iterator v);
void tf202_2(std::unordered_multiset<uint16_t>::iterator v);
void tf202_3(std::unordered_multiset<uint32_t>::iterator v);
void tf202_4(std::unordered_multiset<uint64_t>::iterator v);`),
        unions: parseUnion(`void tf202_0(std::unordered_multiset<short>::iterator v);
void tf202_1(std::unordered_multiset<uint8_t>::iterator v);
void tf202_2(std::unordered_multiset<uint16_t>::iterator v);
void tf202_3(std::unordered_multiset<uint32_t>::iterator v);
void tf202_4(std::unordered_multiset<uint64_t>::iterator v);`),
        structs: parseStruct(`void tf202_0(std::unordered_multiset<short>::iterator v);
void tf202_1(std::unordered_multiset<uint8_t>::iterator v);
void tf202_2(std::unordered_multiset<uint16_t>::iterator v);
void tf202_3(std::unordered_multiset<uint32_t>::iterator v);
void tf202_4(std::unordered_multiset<uint64_t>::iterator v);`),
        classes: parseClass(`void tf202_0(std::unordered_multiset<short>::iterator v);
void tf202_1(std::unordered_multiset<uint8_t>::iterator v);
void tf202_2(std::unordered_multiset<uint16_t>::iterator v);
void tf202_3(std::unordered_multiset<uint32_t>::iterator v);
void tf202_4(std::unordered_multiset<uint64_t>::iterator v);`),
        funcs: parseFunction(`void tf202_0(std::unordered_multiset<short>::iterator v);
void tf202_1(std::unordered_multiset<uint8_t>::iterator v);
void tf202_2(std::unordered_multiset<uint16_t>::iterator v);
void tf202_3(std::unordered_multiset<uint32_t>::iterator v);
void tf202_4(std::unordered_multiset<uint64_t>::iterator v);`),
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
        `h2dtscpp_gen_0202 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0202 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0203
  * @tc.name : h2dtscpp_gen_0203
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multiset<int8_t>::iterator, std::unordered_mu... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0203', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf203_0(std::unordered_multiset<int8_t>::iterator v);
void tf203_1(std::unordered_multiset<int16_t>::iterator v);
void tf203_2(std::unordered_multiset<int32_t>::iterator v);
void tf203_3(std::unordered_multiset<int64_t>::iterator v);
void tf203_4(std::unordered_multiset<unsigned>::iterator v);`),
        unions: parseUnion(`void tf203_0(std::unordered_multiset<int8_t>::iterator v);
void tf203_1(std::unordered_multiset<int16_t>::iterator v);
void tf203_2(std::unordered_multiset<int32_t>::iterator v);
void tf203_3(std::unordered_multiset<int64_t>::iterator v);
void tf203_4(std::unordered_multiset<unsigned>::iterator v);`),
        structs: parseStruct(`void tf203_0(std::unordered_multiset<int8_t>::iterator v);
void tf203_1(std::unordered_multiset<int16_t>::iterator v);
void tf203_2(std::unordered_multiset<int32_t>::iterator v);
void tf203_3(std::unordered_multiset<int64_t>::iterator v);
void tf203_4(std::unordered_multiset<unsigned>::iterator v);`),
        classes: parseClass(`void tf203_0(std::unordered_multiset<int8_t>::iterator v);
void tf203_1(std::unordered_multiset<int16_t>::iterator v);
void tf203_2(std::unordered_multiset<int32_t>::iterator v);
void tf203_3(std::unordered_multiset<int64_t>::iterator v);
void tf203_4(std::unordered_multiset<unsigned>::iterator v);`),
        funcs: parseFunction(`void tf203_0(std::unordered_multiset<int8_t>::iterator v);
void tf203_1(std::unordered_multiset<int16_t>::iterator v);
void tf203_2(std::unordered_multiset<int32_t>::iterator v);
void tf203_3(std::unordered_multiset<int64_t>::iterator v);
void tf203_4(std::unordered_multiset<unsigned>::iterator v);`),
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
        `h2dtscpp_gen_0203 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0203 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0204
  * @tc.name : h2dtscpp_gen_0204
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multiset<bool>::iterator, std::unordered_mult... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0204', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf204_0(std::unordered_multiset<bool>::iterator v);
void tf204_1(std::unordered_multiset<char>::iterator v);
void tf204_2(std::unordered_multiset<wchar_t>::iterator v);
void tf204_3(std::unordered_multiset<char8_t>::iterator v);
void tf204_4(std::unordered_multiset<char16_t>::iterator v);`),
        unions: parseUnion(`void tf204_0(std::unordered_multiset<bool>::iterator v);
void tf204_1(std::unordered_multiset<char>::iterator v);
void tf204_2(std::unordered_multiset<wchar_t>::iterator v);
void tf204_3(std::unordered_multiset<char8_t>::iterator v);
void tf204_4(std::unordered_multiset<char16_t>::iterator v);`),
        structs: parseStruct(`void tf204_0(std::unordered_multiset<bool>::iterator v);
void tf204_1(std::unordered_multiset<char>::iterator v);
void tf204_2(std::unordered_multiset<wchar_t>::iterator v);
void tf204_3(std::unordered_multiset<char8_t>::iterator v);
void tf204_4(std::unordered_multiset<char16_t>::iterator v);`),
        classes: parseClass(`void tf204_0(std::unordered_multiset<bool>::iterator v);
void tf204_1(std::unordered_multiset<char>::iterator v);
void tf204_2(std::unordered_multiset<wchar_t>::iterator v);
void tf204_3(std::unordered_multiset<char8_t>::iterator v);
void tf204_4(std::unordered_multiset<char16_t>::iterator v);`),
        funcs: parseFunction(`void tf204_0(std::unordered_multiset<bool>::iterator v);
void tf204_1(std::unordered_multiset<char>::iterator v);
void tf204_2(std::unordered_multiset<wchar_t>::iterator v);
void tf204_3(std::unordered_multiset<char8_t>::iterator v);
void tf204_4(std::unordered_multiset<char16_t>::iterator v);`),
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
        `h2dtscpp_gen_0204 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0204 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0205
  * @tc.name : h2dtscpp_gen_0205
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multiset<char32_t>::iterator, std::tuple<int,... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0205', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf205_0(std::unordered_multiset<char32_t>::iterator v);
void tf205_1(std::tuple<int, char, bool, size_t> v);
void tf205_2(std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t> v);
void tf205_3(std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);
void tf205_4(std::pair<int, char, bool, size_t> v);`),
        unions: parseUnion(`void tf205_0(std::unordered_multiset<char32_t>::iterator v);
void tf205_1(std::tuple<int, char, bool, size_t> v);
void tf205_2(std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t> v);
void tf205_3(std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);
void tf205_4(std::pair<int, char, bool, size_t> v);`),
        structs: parseStruct(`void tf205_0(std::unordered_multiset<char32_t>::iterator v);
void tf205_1(std::tuple<int, char, bool, size_t> v);
void tf205_2(std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t> v);
void tf205_3(std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);
void tf205_4(std::pair<int, char, bool, size_t> v);`),
        classes: parseClass(`void tf205_0(std::unordered_multiset<char32_t>::iterator v);
void tf205_1(std::tuple<int, char, bool, size_t> v);
void tf205_2(std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t> v);
void tf205_3(std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);
void tf205_4(std::pair<int, char, bool, size_t> v);`),
        funcs: parseFunction(`void tf205_0(std::unordered_multiset<char32_t>::iterator v);
void tf205_1(std::tuple<int, char, bool, size_t> v);
void tf205_2(std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t> v);
void tf205_3(std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);
void tf205_4(std::pair<int, char, bool, size_t> v);`),
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
        `h2dtscpp_gen_0205 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0205 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0206
  * @tc.name : h2dtscpp_gen_0206
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::pair<double, wchar_t, uint32_t, float, long, short, cha... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0206', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf206_0(std::pair<double, wchar_t, uint32_t, float, long, short, char32_t> v);
void tf206_1(std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);
void tf206_2(std::complex<int, double> v);
void tf206_3(std::complex<float, int32_t> v);
void tf206_4(std::complex<long, uint32_t> v);`),
        unions: parseUnion(`void tf206_0(std::pair<double, wchar_t, uint32_t, float, long, short, char32_t> v);
void tf206_1(std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);
void tf206_2(std::complex<int, double> v);
void tf206_3(std::complex<float, int32_t> v);
void tf206_4(std::complex<long, uint32_t> v);`),
        structs: parseStruct(`void tf206_0(std::pair<double, wchar_t, uint32_t, float, long, short, char32_t> v);
void tf206_1(std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);
void tf206_2(std::complex<int, double> v);
void tf206_3(std::complex<float, int32_t> v);
void tf206_4(std::complex<long, uint32_t> v);`),
        classes: parseClass(`void tf206_0(std::pair<double, wchar_t, uint32_t, float, long, short, char32_t> v);
void tf206_1(std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);
void tf206_2(std::complex<int, double> v);
void tf206_3(std::complex<float, int32_t> v);
void tf206_4(std::complex<long, uint32_t> v);`),
        funcs: parseFunction(`void tf206_0(std::pair<double, wchar_t, uint32_t, float, long, short, char32_t> v);
void tf206_1(std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);
void tf206_2(std::complex<int, double> v);
void tf206_3(std::complex<float, int32_t> v);
void tf206_4(std::complex<long, uint32_t> v);`),
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
        `h2dtscpp_gen_0206 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0206 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0207
  * @tc.name : h2dtscpp_gen_0207
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::complex<unsigned, short>, std::complex<uint8_t, size_t>... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0207', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf207_0(std::complex<unsigned, short> v);
void tf207_1(std::complex<uint8_t, size_t> v);
void tf207_2(std::complex<uint16_t, uint64_t> v);
void tf207_3(std::complex<int8_t, int16_t> v);
void tf207_4(std::time_t v);`),
        unions: parseUnion(`void tf207_0(std::complex<unsigned, short> v);
void tf207_1(std::complex<uint8_t, size_t> v);
void tf207_2(std::complex<uint16_t, uint64_t> v);
void tf207_3(std::complex<int8_t, int16_t> v);
void tf207_4(std::time_t v);`),
        structs: parseStruct(`void tf207_0(std::complex<unsigned, short> v);
void tf207_1(std::complex<uint8_t, size_t> v);
void tf207_2(std::complex<uint16_t, uint64_t> v);
void tf207_3(std::complex<int8_t, int16_t> v);
void tf207_4(std::time_t v);`),
        classes: parseClass(`void tf207_0(std::complex<unsigned, short> v);
void tf207_1(std::complex<uint8_t, size_t> v);
void tf207_2(std::complex<uint16_t, uint64_t> v);
void tf207_3(std::complex<int8_t, int16_t> v);
void tf207_4(std::time_t v);`),
        funcs: parseFunction(`void tf207_0(std::complex<unsigned, short> v);
void tf207_1(std::complex<uint8_t, size_t> v);
void tf207_2(std::complex<uint16_t, uint64_t> v);
void tf207_3(std::complex<int8_t, int16_t> v);
void tf207_4(std::time_t v);`),
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
        `h2dtscpp_gen_0207 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0207 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0208
  * @tc.name : h2dtscpp_gen_0208
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::clock_t, std::tm, std::chrono::duration<double>, std::c... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0208', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf208_0(std::clock_t v);
void tf208_1(std::tm v);
void tf208_2(std::chrono::duration<double> v);
void tf208_3(std::chrono::system_clock::time_point v);
void tf208_4(std::chrono::steady_clock::time_point v);`),
        unions: parseUnion(`void tf208_0(std::clock_t v);
void tf208_1(std::tm v);
void tf208_2(std::chrono::duration<double> v);
void tf208_3(std::chrono::system_clock::time_point v);
void tf208_4(std::chrono::steady_clock::time_point v);`),
        structs: parseStruct(`void tf208_0(std::clock_t v);
void tf208_1(std::tm v);
void tf208_2(std::chrono::duration<double> v);
void tf208_3(std::chrono::system_clock::time_point v);
void tf208_4(std::chrono::steady_clock::time_point v);`),
        classes: parseClass(`void tf208_0(std::clock_t v);
void tf208_1(std::tm v);
void tf208_2(std::chrono::duration<double> v);
void tf208_3(std::chrono::system_clock::time_point v);
void tf208_4(std::chrono::steady_clock::time_point v);`),
        funcs: parseFunction(`void tf208_0(std::clock_t v);
void tf208_1(std::tm v);
void tf208_2(std::chrono::duration<double> v);
void tf208_3(std::chrono::system_clock::time_point v);
void tf208_4(std::chrono::steady_clock::time_point v);`),
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
        `h2dtscpp_gen_0208 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0208 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0209
  * @tc.name : h2dtscpp_gen_0209
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::chrono::seconds, std::chrono::milliseconds, std::chrono... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0209', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf209_0(std::chrono::seconds v);
void tf209_1(std::chrono::milliseconds v);
void tf209_2(std::chrono::microseconds v);
void tf209_3(std::chrono::nanoseconds v);
void tf209_4(std::time v);`),
        unions: parseUnion(`void tf209_0(std::chrono::seconds v);
void tf209_1(std::chrono::milliseconds v);
void tf209_2(std::chrono::microseconds v);
void tf209_3(std::chrono::nanoseconds v);
void tf209_4(std::time v);`),
        structs: parseStruct(`void tf209_0(std::chrono::seconds v);
void tf209_1(std::chrono::milliseconds v);
void tf209_2(std::chrono::microseconds v);
void tf209_3(std::chrono::nanoseconds v);
void tf209_4(std::time v);`),
        classes: parseClass(`void tf209_0(std::chrono::seconds v);
void tf209_1(std::chrono::milliseconds v);
void tf209_2(std::chrono::microseconds v);
void tf209_3(std::chrono::nanoseconds v);
void tf209_4(std::time v);`),
        funcs: parseFunction(`void tf209_0(std::chrono::seconds v);
void tf209_1(std::chrono::milliseconds v);
void tf209_2(std::chrono::microseconds v);
void tf209_3(std::chrono::nanoseconds v);
void tf209_4(std::time v);`),
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
        `h2dtscpp_gen_0209 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0209 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0210
  * @tc.name : h2dtscpp_gen_0210
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::function<void(long, long)>, std::function<void()>, std:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0210', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf210_0(std::function<void(long, long)> v);
void tf210_1(std::function<void()> v);
void tf210_2(std::function<int(float)> v);
void tf210_3(std::function<void(double)> v);
void tf210_4(std::function<void(char, short, short)> v);`),
        unions: parseUnion(`void tf210_0(std::function<void(long, long)> v);
void tf210_1(std::function<void()> v);
void tf210_2(std::function<int(float)> v);
void tf210_3(std::function<void(double)> v);
void tf210_4(std::function<void(char, short, short)> v);`),
        structs: parseStruct(`void tf210_0(std::function<void(long, long)> v);
void tf210_1(std::function<void()> v);
void tf210_2(std::function<int(float)> v);
void tf210_3(std::function<void(double)> v);
void tf210_4(std::function<void(char, short, short)> v);`),
        classes: parseClass(`void tf210_0(std::function<void(long, long)> v);
void tf210_1(std::function<void()> v);
void tf210_2(std::function<int(float)> v);
void tf210_3(std::function<void(double)> v);
void tf210_4(std::function<void(char, short, short)> v);`),
        funcs: parseFunction(`void tf210_0(std::function<void(long, long)> v);
void tf210_1(std::function<void()> v);
void tf210_2(std::function<int(float)> v);
void tf210_3(std::function<void(double)> v);
void tf210_4(std::function<void(char, short, short)> v);`),
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
        `h2dtscpp_gen_0210 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0210 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0211
  * @tc.name : h2dtscpp_gen_0211
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::function<void(char16_t, uint16_t)>, std::function<unsig... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0211', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf211_0(std::function<void(char16_t, uint16_t)> v);
void tf211_1(std::function<unsigned(char64_t, size_t)> v);
void tf211_2(std::function<char32_t(char8_t, int32_t)> v);
void tf211_3(std::function<uint64_t(wchar_t, uint32_t)> v);
void tf211_4(std::function<int64_t(int8_t, int16_t)> v);`),
        unions: parseUnion(`void tf211_0(std::function<void(char16_t, uint16_t)> v);
void tf211_1(std::function<unsigned(char64_t, size_t)> v);
void tf211_2(std::function<char32_t(char8_t, int32_t)> v);
void tf211_3(std::function<uint64_t(wchar_t, uint32_t)> v);
void tf211_4(std::function<int64_t(int8_t, int16_t)> v);`),
        structs: parseStruct(`void tf211_0(std::function<void(char16_t, uint16_t)> v);
void tf211_1(std::function<unsigned(char64_t, size_t)> v);
void tf211_2(std::function<char32_t(char8_t, int32_t)> v);
void tf211_3(std::function<uint64_t(wchar_t, uint32_t)> v);
void tf211_4(std::function<int64_t(int8_t, int16_t)> v);`),
        classes: parseClass(`void tf211_0(std::function<void(char16_t, uint16_t)> v);
void tf211_1(std::function<unsigned(char64_t, size_t)> v);
void tf211_2(std::function<char32_t(char8_t, int32_t)> v);
void tf211_3(std::function<uint64_t(wchar_t, uint32_t)> v);
void tf211_4(std::function<int64_t(int8_t, int16_t)> v);`),
        funcs: parseFunction(`void tf211_0(std::function<void(char16_t, uint16_t)> v);
void tf211_1(std::function<unsigned(char64_t, size_t)> v);
void tf211_2(std::function<char32_t(char8_t, int32_t)> v);
void tf211_3(std::function<uint64_t(wchar_t, uint32_t)> v);
void tf211_4(std::function<int64_t(int8_t, int16_t)> v);`),
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
        `h2dtscpp_gen_0211 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0211 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0212
  * @tc.name : h2dtscpp_gen_0212
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unique_ptr<long>, std::unique_ptr<short>, std::unique_p... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0212', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf212_0(std::unique_ptr<long> v);
void tf212_1(std::unique_ptr<short> v);
void tf212_2(std::unique_ptr<uint8_t> v);
void tf212_3(std::unique_ptr<uint16_t> v);
void tf212_4(std::unique_ptr<uint32_t> v);`),
        unions: parseUnion(`void tf212_0(std::unique_ptr<long> v);
void tf212_1(std::unique_ptr<short> v);
void tf212_2(std::unique_ptr<uint8_t> v);
void tf212_3(std::unique_ptr<uint16_t> v);
void tf212_4(std::unique_ptr<uint32_t> v);`),
        structs: parseStruct(`void tf212_0(std::unique_ptr<long> v);
void tf212_1(std::unique_ptr<short> v);
void tf212_2(std::unique_ptr<uint8_t> v);
void tf212_3(std::unique_ptr<uint16_t> v);
void tf212_4(std::unique_ptr<uint32_t> v);`),
        classes: parseClass(`void tf212_0(std::unique_ptr<long> v);
void tf212_1(std::unique_ptr<short> v);
void tf212_2(std::unique_ptr<uint8_t> v);
void tf212_3(std::unique_ptr<uint16_t> v);
void tf212_4(std::unique_ptr<uint32_t> v);`),
        funcs: parseFunction(`void tf212_0(std::unique_ptr<long> v);
void tf212_1(std::unique_ptr<short> v);
void tf212_2(std::unique_ptr<uint8_t> v);
void tf212_3(std::unique_ptr<uint16_t> v);
void tf212_4(std::unique_ptr<uint32_t> v);`),
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
        `h2dtscpp_gen_0212 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0212 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0213
  * @tc.name : h2dtscpp_gen_0213
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unique_ptr<uint64_t>, std::unique_ptr<int8_t>, std::uni... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0213', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf213_0(std::unique_ptr<uint64_t> v);
void tf213_1(std::unique_ptr<int8_t> v);
void tf213_2(std::unique_ptr<int16_t> v);
void tf213_3(std::unique_ptr<int32_t> v);
void tf213_4(std::unique_ptr<int64_t> v);`),
        unions: parseUnion(`void tf213_0(std::unique_ptr<uint64_t> v);
void tf213_1(std::unique_ptr<int8_t> v);
void tf213_2(std::unique_ptr<int16_t> v);
void tf213_3(std::unique_ptr<int32_t> v);
void tf213_4(std::unique_ptr<int64_t> v);`),
        structs: parseStruct(`void tf213_0(std::unique_ptr<uint64_t> v);
void tf213_1(std::unique_ptr<int8_t> v);
void tf213_2(std::unique_ptr<int16_t> v);
void tf213_3(std::unique_ptr<int32_t> v);
void tf213_4(std::unique_ptr<int64_t> v);`),
        classes: parseClass(`void tf213_0(std::unique_ptr<uint64_t> v);
void tf213_1(std::unique_ptr<int8_t> v);
void tf213_2(std::unique_ptr<int16_t> v);
void tf213_3(std::unique_ptr<int32_t> v);
void tf213_4(std::unique_ptr<int64_t> v);`),
        funcs: parseFunction(`void tf213_0(std::unique_ptr<uint64_t> v);
void tf213_1(std::unique_ptr<int8_t> v);
void tf213_2(std::unique_ptr<int16_t> v);
void tf213_3(std::unique_ptr<int32_t> v);
void tf213_4(std::unique_ptr<int64_t> v);`),
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
        `h2dtscpp_gen_0213 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0213 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0214
  * @tc.name : h2dtscpp_gen_0214
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unique_ptr<unsigned>, std::unique_ptr<bool>, std::uniqu... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0214', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf214_0(std::unique_ptr<unsigned> v);
void tf214_1(std::unique_ptr<bool> v);
void tf214_2(std::unique_ptr<char> v);
void tf214_3(std::unique_ptr<wchar_t> v);
void tf214_4(std::unique_ptr<char8_t> v);`),
        unions: parseUnion(`void tf214_0(std::unique_ptr<unsigned> v);
void tf214_1(std::unique_ptr<bool> v);
void tf214_2(std::unique_ptr<char> v);
void tf214_3(std::unique_ptr<wchar_t> v);
void tf214_4(std::unique_ptr<char8_t> v);`),
        structs: parseStruct(`void tf214_0(std::unique_ptr<unsigned> v);
void tf214_1(std::unique_ptr<bool> v);
void tf214_2(std::unique_ptr<char> v);
void tf214_3(std::unique_ptr<wchar_t> v);
void tf214_4(std::unique_ptr<char8_t> v);`),
        classes: parseClass(`void tf214_0(std::unique_ptr<unsigned> v);
void tf214_1(std::unique_ptr<bool> v);
void tf214_2(std::unique_ptr<char> v);
void tf214_3(std::unique_ptr<wchar_t> v);
void tf214_4(std::unique_ptr<char8_t> v);`),
        funcs: parseFunction(`void tf214_0(std::unique_ptr<unsigned> v);
void tf214_1(std::unique_ptr<bool> v);
void tf214_2(std::unique_ptr<char> v);
void tf214_3(std::unique_ptr<wchar_t> v);
void tf214_4(std::unique_ptr<char8_t> v);`),
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
        `h2dtscpp_gen_0214 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0214 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0215
  * @tc.name : h2dtscpp_gen_0215
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unique_ptr<char16_t>, std::unique_ptr<char32_t>, std::s... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0215', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf215_0(std::unique_ptr<char16_t> v);
void tf215_1(std::unique_ptr<char32_t> v);
void tf215_2(std::shared_ptr<int> v);
void tf215_3(std::shared_ptr<size_t> v);
void tf215_4(std::shared_ptr<double> v);`),
        unions: parseUnion(`void tf215_0(std::unique_ptr<char16_t> v);
void tf215_1(std::unique_ptr<char32_t> v);
void tf215_2(std::shared_ptr<int> v);
void tf215_3(std::shared_ptr<size_t> v);
void tf215_4(std::shared_ptr<double> v);`),
        structs: parseStruct(`void tf215_0(std::unique_ptr<char16_t> v);
void tf215_1(std::unique_ptr<char32_t> v);
void tf215_2(std::shared_ptr<int> v);
void tf215_3(std::shared_ptr<size_t> v);
void tf215_4(std::shared_ptr<double> v);`),
        classes: parseClass(`void tf215_0(std::unique_ptr<char16_t> v);
void tf215_1(std::unique_ptr<char32_t> v);
void tf215_2(std::shared_ptr<int> v);
void tf215_3(std::shared_ptr<size_t> v);
void tf215_4(std::shared_ptr<double> v);`),
        funcs: parseFunction(`void tf215_0(std::unique_ptr<char16_t> v);
void tf215_1(std::unique_ptr<char32_t> v);
void tf215_2(std::shared_ptr<int> v);
void tf215_3(std::shared_ptr<size_t> v);
void tf215_4(std::shared_ptr<double> v);`),
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
        `h2dtscpp_gen_0215 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0215 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0216
  * @tc.name : h2dtscpp_gen_0216
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::shared_ptr<float>, std::shared_ptr<long>, std::shared_p... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0216', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf216_0(std::shared_ptr<float> v);
void tf216_1(std::shared_ptr<long> v);
void tf216_2(std::shared_ptr<short> v);
void tf216_3(std::shared_ptr<uint8_t> v);
void tf216_4(std::shared_ptr<uint16_t> v);`),
        unions: parseUnion(`void tf216_0(std::shared_ptr<float> v);
void tf216_1(std::shared_ptr<long> v);
void tf216_2(std::shared_ptr<short> v);
void tf216_3(std::shared_ptr<uint8_t> v);
void tf216_4(std::shared_ptr<uint16_t> v);`),
        structs: parseStruct(`void tf216_0(std::shared_ptr<float> v);
void tf216_1(std::shared_ptr<long> v);
void tf216_2(std::shared_ptr<short> v);
void tf216_3(std::shared_ptr<uint8_t> v);
void tf216_4(std::shared_ptr<uint16_t> v);`),
        classes: parseClass(`void tf216_0(std::shared_ptr<float> v);
void tf216_1(std::shared_ptr<long> v);
void tf216_2(std::shared_ptr<short> v);
void tf216_3(std::shared_ptr<uint8_t> v);
void tf216_4(std::shared_ptr<uint16_t> v);`),
        funcs: parseFunction(`void tf216_0(std::shared_ptr<float> v);
void tf216_1(std::shared_ptr<long> v);
void tf216_2(std::shared_ptr<short> v);
void tf216_3(std::shared_ptr<uint8_t> v);
void tf216_4(std::shared_ptr<uint16_t> v);`),
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
        `h2dtscpp_gen_0216 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0216 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0217
  * @tc.name : h2dtscpp_gen_0217
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::shared_ptr<uint32_t>, std::shared_ptr<uint64_t>, std::s... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0217', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf217_0(std::shared_ptr<uint32_t> v);
void tf217_1(std::shared_ptr<uint64_t> v);
void tf217_2(std::shared_ptr<int8_t> v);
void tf217_3(std::shared_ptr<int16_t> v);
void tf217_4(std::shared_ptr<int32_t> v);`),
        unions: parseUnion(`void tf217_0(std::shared_ptr<uint32_t> v);
void tf217_1(std::shared_ptr<uint64_t> v);
void tf217_2(std::shared_ptr<int8_t> v);
void tf217_3(std::shared_ptr<int16_t> v);
void tf217_4(std::shared_ptr<int32_t> v);`),
        structs: parseStruct(`void tf217_0(std::shared_ptr<uint32_t> v);
void tf217_1(std::shared_ptr<uint64_t> v);
void tf217_2(std::shared_ptr<int8_t> v);
void tf217_3(std::shared_ptr<int16_t> v);
void tf217_4(std::shared_ptr<int32_t> v);`),
        classes: parseClass(`void tf217_0(std::shared_ptr<uint32_t> v);
void tf217_1(std::shared_ptr<uint64_t> v);
void tf217_2(std::shared_ptr<int8_t> v);
void tf217_3(std::shared_ptr<int16_t> v);
void tf217_4(std::shared_ptr<int32_t> v);`),
        funcs: parseFunction(`void tf217_0(std::shared_ptr<uint32_t> v);
void tf217_1(std::shared_ptr<uint64_t> v);
void tf217_2(std::shared_ptr<int8_t> v);
void tf217_3(std::shared_ptr<int16_t> v);
void tf217_4(std::shared_ptr<int32_t> v);`),
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
        `h2dtscpp_gen_0217 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0217 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0218
  * @tc.name : h2dtscpp_gen_0218
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::shared_ptr<int64_t>, std::shared_ptr<unsigned>, std::sh... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0218', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf218_0(std::shared_ptr<int64_t> v);
void tf218_1(std::shared_ptr<unsigned> v);
void tf218_2(std::shared_ptr<bool> v);
void tf218_3(std::shared_ptr<char> v);
void tf218_4(std::shared_ptr<wchar_t> v);`),
        unions: parseUnion(`void tf218_0(std::shared_ptr<int64_t> v);
void tf218_1(std::shared_ptr<unsigned> v);
void tf218_2(std::shared_ptr<bool> v);
void tf218_3(std::shared_ptr<char> v);
void tf218_4(std::shared_ptr<wchar_t> v);`),
        structs: parseStruct(`void tf218_0(std::shared_ptr<int64_t> v);
void tf218_1(std::shared_ptr<unsigned> v);
void tf218_2(std::shared_ptr<bool> v);
void tf218_3(std::shared_ptr<char> v);
void tf218_4(std::shared_ptr<wchar_t> v);`),
        classes: parseClass(`void tf218_0(std::shared_ptr<int64_t> v);
void tf218_1(std::shared_ptr<unsigned> v);
void tf218_2(std::shared_ptr<bool> v);
void tf218_3(std::shared_ptr<char> v);
void tf218_4(std::shared_ptr<wchar_t> v);`),
        funcs: parseFunction(`void tf218_0(std::shared_ptr<int64_t> v);
void tf218_1(std::shared_ptr<unsigned> v);
void tf218_2(std::shared_ptr<bool> v);
void tf218_3(std::shared_ptr<char> v);
void tf218_4(std::shared_ptr<wchar_t> v);`),
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
        `h2dtscpp_gen_0218 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0218 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0219
  * @tc.name : h2dtscpp_gen_0219
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::shared_ptr<char8_t>, std::shared_ptr<char16_t>, std::sh... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0219', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf219_0(std::shared_ptr<char8_t> v);
void tf219_1(std::shared_ptr<char16_t> v);
void tf219_2(std::shared_ptr<char32_t> v);
void tf219_3(std::weak_ptr<int> v);
void tf219_4(std::weak_ptr<size_t> v);`),
        unions: parseUnion(`void tf219_0(std::shared_ptr<char8_t> v);
void tf219_1(std::shared_ptr<char16_t> v);
void tf219_2(std::shared_ptr<char32_t> v);
void tf219_3(std::weak_ptr<int> v);
void tf219_4(std::weak_ptr<size_t> v);`),
        structs: parseStruct(`void tf219_0(std::shared_ptr<char8_t> v);
void tf219_1(std::shared_ptr<char16_t> v);
void tf219_2(std::shared_ptr<char32_t> v);
void tf219_3(std::weak_ptr<int> v);
void tf219_4(std::weak_ptr<size_t> v);`),
        classes: parseClass(`void tf219_0(std::shared_ptr<char8_t> v);
void tf219_1(std::shared_ptr<char16_t> v);
void tf219_2(std::shared_ptr<char32_t> v);
void tf219_3(std::weak_ptr<int> v);
void tf219_4(std::weak_ptr<size_t> v);`),
        funcs: parseFunction(`void tf219_0(std::shared_ptr<char8_t> v);
void tf219_1(std::shared_ptr<char16_t> v);
void tf219_2(std::shared_ptr<char32_t> v);
void tf219_3(std::weak_ptr<int> v);
void tf219_4(std::weak_ptr<size_t> v);`),
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
        `h2dtscpp_gen_0219 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0219 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0220
  * @tc.name : h2dtscpp_gen_0220
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::weak_ptr<double>, std::weak_ptr<float>, std::weak_ptr<l... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0220', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf220_0(std::weak_ptr<double> v);
void tf220_1(std::weak_ptr<float> v);
void tf220_2(std::weak_ptr<long> v);
void tf220_3(std::weak_ptr<short> v);
void tf220_4(std::weak_ptr<uint8_t> v);`),
        unions: parseUnion(`void tf220_0(std::weak_ptr<double> v);
void tf220_1(std::weak_ptr<float> v);
void tf220_2(std::weak_ptr<long> v);
void tf220_3(std::weak_ptr<short> v);
void tf220_4(std::weak_ptr<uint8_t> v);`),
        structs: parseStruct(`void tf220_0(std::weak_ptr<double> v);
void tf220_1(std::weak_ptr<float> v);
void tf220_2(std::weak_ptr<long> v);
void tf220_3(std::weak_ptr<short> v);
void tf220_4(std::weak_ptr<uint8_t> v);`),
        classes: parseClass(`void tf220_0(std::weak_ptr<double> v);
void tf220_1(std::weak_ptr<float> v);
void tf220_2(std::weak_ptr<long> v);
void tf220_3(std::weak_ptr<short> v);
void tf220_4(std::weak_ptr<uint8_t> v);`),
        funcs: parseFunction(`void tf220_0(std::weak_ptr<double> v);
void tf220_1(std::weak_ptr<float> v);
void tf220_2(std::weak_ptr<long> v);
void tf220_3(std::weak_ptr<short> v);
void tf220_4(std::weak_ptr<uint8_t> v);`),
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
        `h2dtscpp_gen_0220 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0220 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0221
  * @tc.name : h2dtscpp_gen_0221
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::weak_ptr<uint16_t>, std::weak_ptr<uint32_t>, std::weak_... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0221', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf221_0(std::weak_ptr<uint16_t> v);
void tf221_1(std::weak_ptr<uint32_t> v);
void tf221_2(std::weak_ptr<uint64_t> v);
void tf221_3(std::weak_ptr<int8_t> v);
void tf221_4(std::weak_ptr<int16_t> v);`),
        unions: parseUnion(`void tf221_0(std::weak_ptr<uint16_t> v);
void tf221_1(std::weak_ptr<uint32_t> v);
void tf221_2(std::weak_ptr<uint64_t> v);
void tf221_3(std::weak_ptr<int8_t> v);
void tf221_4(std::weak_ptr<int16_t> v);`),
        structs: parseStruct(`void tf221_0(std::weak_ptr<uint16_t> v);
void tf221_1(std::weak_ptr<uint32_t> v);
void tf221_2(std::weak_ptr<uint64_t> v);
void tf221_3(std::weak_ptr<int8_t> v);
void tf221_4(std::weak_ptr<int16_t> v);`),
        classes: parseClass(`void tf221_0(std::weak_ptr<uint16_t> v);
void tf221_1(std::weak_ptr<uint32_t> v);
void tf221_2(std::weak_ptr<uint64_t> v);
void tf221_3(std::weak_ptr<int8_t> v);
void tf221_4(std::weak_ptr<int16_t> v);`),
        funcs: parseFunction(`void tf221_0(std::weak_ptr<uint16_t> v);
void tf221_1(std::weak_ptr<uint32_t> v);
void tf221_2(std::weak_ptr<uint64_t> v);
void tf221_3(std::weak_ptr<int8_t> v);
void tf221_4(std::weak_ptr<int16_t> v);`),
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
        `h2dtscpp_gen_0221 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0221 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0222
  * @tc.name : h2dtscpp_gen_0222
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::weak_ptr<int32_t>, std::weak_ptr<int64_t>, std::weak_pt... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0222', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf222_0(std::weak_ptr<int32_t> v);
void tf222_1(std::weak_ptr<int64_t> v);
void tf222_2(std::weak_ptr<unsigned> v);
void tf222_3(std::weak_ptr<bool> v);
void tf222_4(std::weak_ptr<char> v);`),
        unions: parseUnion(`void tf222_0(std::weak_ptr<int32_t> v);
void tf222_1(std::weak_ptr<int64_t> v);
void tf222_2(std::weak_ptr<unsigned> v);
void tf222_3(std::weak_ptr<bool> v);
void tf222_4(std::weak_ptr<char> v);`),
        structs: parseStruct(`void tf222_0(std::weak_ptr<int32_t> v);
void tf222_1(std::weak_ptr<int64_t> v);
void tf222_2(std::weak_ptr<unsigned> v);
void tf222_3(std::weak_ptr<bool> v);
void tf222_4(std::weak_ptr<char> v);`),
        classes: parseClass(`void tf222_0(std::weak_ptr<int32_t> v);
void tf222_1(std::weak_ptr<int64_t> v);
void tf222_2(std::weak_ptr<unsigned> v);
void tf222_3(std::weak_ptr<bool> v);
void tf222_4(std::weak_ptr<char> v);`),
        funcs: parseFunction(`void tf222_0(std::weak_ptr<int32_t> v);
void tf222_1(std::weak_ptr<int64_t> v);
void tf222_2(std::weak_ptr<unsigned> v);
void tf222_3(std::weak_ptr<bool> v);
void tf222_4(std::weak_ptr<char> v);`),
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
        `h2dtscpp_gen_0222 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0222 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0223
  * @tc.name : h2dtscpp_gen_0223
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::weak_ptr<wchar_t>, std::weak_ptr<char8_t>, std::weak_pt... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
});
