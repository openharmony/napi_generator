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
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part11.');

  /**
  * @tc.number : h2dtscpp_gen_0263
  * @tc.name : h2dtscpp_gen_0263
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multimap<charb *, size_t>::iterator, std::uno... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0263', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf263_0(std::unordered_multimap<charb *, size_t>::iterator v);
void tf263_1(std::unordered_multimap<std::string, long long>::iterator v);
void tf263_2(std::unordered_multimap<char *, int *>::iterator v);
void tf263_3(std::unordered_multimap<char *, unsigned long long>::iterator v);
void tf263_4(std::unordered_multimap<std::string, unsigned short>::iterator v);`),
        unions: parseUnion(`void tf263_0(std::unordered_multimap<charb *, size_t>::iterator v);
void tf263_1(std::unordered_multimap<std::string, long long>::iterator v);
void tf263_2(std::unordered_multimap<char *, int *>::iterator v);
void tf263_3(std::unordered_multimap<char *, unsigned long long>::iterator v);
void tf263_4(std::unordered_multimap<std::string, unsigned short>::iterator v);`),
        structs: parseStruct(`void tf263_0(std::unordered_multimap<charb *, size_t>::iterator v);
void tf263_1(std::unordered_multimap<std::string, long long>::iterator v);
void tf263_2(std::unordered_multimap<char *, int *>::iterator v);
void tf263_3(std::unordered_multimap<char *, unsigned long long>::iterator v);
void tf263_4(std::unordered_multimap<std::string, unsigned short>::iterator v);`),
        classes: parseClass(`void tf263_0(std::unordered_multimap<charb *, size_t>::iterator v);
void tf263_1(std::unordered_multimap<std::string, long long>::iterator v);
void tf263_2(std::unordered_multimap<char *, int *>::iterator v);
void tf263_3(std::unordered_multimap<char *, unsigned long long>::iterator v);
void tf263_4(std::unordered_multimap<std::string, unsigned short>::iterator v);`),
        funcs: parseFunction(`void tf263_0(std::unordered_multimap<charb *, size_t>::iterator v);
void tf263_1(std::unordered_multimap<std::string, long long>::iterator v);
void tf263_2(std::unordered_multimap<char *, int *>::iterator v);
void tf263_3(std::unordered_multimap<char *, unsigned long long>::iterator v);
void tf263_4(std::unordered_multimap<std::string, unsigned short>::iterator v);`),
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
        `h2dtscpp_gen_0263 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0263 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0264
  * @tc.name : h2dtscpp_gen_0264
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multimap<int *, std::string>::iterator, std::... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0264', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf264_0(std::unordered_multimap<int *, std::string>::iterator v);
void tf264_1(std::unordered_multimap<double, char *>::iterator v);
void tf264_2(std::unordered_multimap<int *, char>::iterator v);
void tf264_3(std::set<std::string> v);
void tf264_4(std::set<char *> v);`),
        unions: parseUnion(`void tf264_0(std::unordered_multimap<int *, std::string>::iterator v);
void tf264_1(std::unordered_multimap<double, char *>::iterator v);
void tf264_2(std::unordered_multimap<int *, char>::iterator v);
void tf264_3(std::set<std::string> v);
void tf264_4(std::set<char *> v);`),
        structs: parseStruct(`void tf264_0(std::unordered_multimap<int *, std::string>::iterator v);
void tf264_1(std::unordered_multimap<double, char *>::iterator v);
void tf264_2(std::unordered_multimap<int *, char>::iterator v);
void tf264_3(std::set<std::string> v);
void tf264_4(std::set<char *> v);`),
        classes: parseClass(`void tf264_0(std::unordered_multimap<int *, std::string>::iterator v);
void tf264_1(std::unordered_multimap<double, char *>::iterator v);
void tf264_2(std::unordered_multimap<int *, char>::iterator v);
void tf264_3(std::set<std::string> v);
void tf264_4(std::set<char *> v);`),
        funcs: parseFunction(`void tf264_0(std::unordered_multimap<int *, std::string>::iterator v);
void tf264_1(std::unordered_multimap<double, char *>::iterator v);
void tf264_2(std::unordered_multimap<int *, char>::iterator v);
void tf264_3(std::set<std::string> v);
void tf264_4(std::set<char *> v);`),
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
        `h2dtscpp_gen_0264 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0264 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0265
  * @tc.name : h2dtscpp_gen_0265
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::set<long long>, std::set<unsigned short>, std::set<unsi... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0265', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf265_0(std::set<long long> v);
void tf265_1(std::set<unsigned short> v);
void tf265_2(std::set<unsigned long> v);
void tf265_3(std::set<unsigned long long> v);
void tf265_4(std::set<int *> v);`),
        unions: parseUnion(`void tf265_0(std::set<long long> v);
void tf265_1(std::set<unsigned short> v);
void tf265_2(std::set<unsigned long> v);
void tf265_3(std::set<unsigned long long> v);
void tf265_4(std::set<int *> v);`),
        structs: parseStruct(`void tf265_0(std::set<long long> v);
void tf265_1(std::set<unsigned short> v);
void tf265_2(std::set<unsigned long> v);
void tf265_3(std::set<unsigned long long> v);
void tf265_4(std::set<int *> v);`),
        classes: parseClass(`void tf265_0(std::set<long long> v);
void tf265_1(std::set<unsigned short> v);
void tf265_2(std::set<unsigned long> v);
void tf265_3(std::set<unsigned long long> v);
void tf265_4(std::set<int *> v);`),
        funcs: parseFunction(`void tf265_0(std::set<long long> v);
void tf265_1(std::set<unsigned short> v);
void tf265_2(std::set<unsigned long> v);
void tf265_3(std::set<unsigned long long> v);
void tf265_4(std::set<int *> v);`),
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
        `h2dtscpp_gen_0265 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0265 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0266
  * @tc.name : h2dtscpp_gen_0266
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::set<std::string>::iterator, std::set<char *>::iterator,... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0266', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf266_0(std::set<std::string>::iterator v);
void tf266_1(std::set<char *>::iterator v);
void tf266_2(std::set<long long>::iterator v);
void tf266_3(std::set<unsigned short>::iterator v);
void tf266_4(std::set<unsigned long>::iterator v);`),
        unions: parseUnion(`void tf266_0(std::set<std::string>::iterator v);
void tf266_1(std::set<char *>::iterator v);
void tf266_2(std::set<long long>::iterator v);
void tf266_3(std::set<unsigned short>::iterator v);
void tf266_4(std::set<unsigned long>::iterator v);`),
        structs: parseStruct(`void tf266_0(std::set<std::string>::iterator v);
void tf266_1(std::set<char *>::iterator v);
void tf266_2(std::set<long long>::iterator v);
void tf266_3(std::set<unsigned short>::iterator v);
void tf266_4(std::set<unsigned long>::iterator v);`),
        classes: parseClass(`void tf266_0(std::set<std::string>::iterator v);
void tf266_1(std::set<char *>::iterator v);
void tf266_2(std::set<long long>::iterator v);
void tf266_3(std::set<unsigned short>::iterator v);
void tf266_4(std::set<unsigned long>::iterator v);`),
        funcs: parseFunction(`void tf266_0(std::set<std::string>::iterator v);
void tf266_1(std::set<char *>::iterator v);
void tf266_2(std::set<long long>::iterator v);
void tf266_3(std::set<unsigned short>::iterator v);
void tf266_4(std::set<unsigned long>::iterator v);`),
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
        `h2dtscpp_gen_0266 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0266 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0267
  * @tc.name : h2dtscpp_gen_0267
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::set<unsigned long long>::iterator, std::set<int *>::ite... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0267', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf267_0(std::set<unsigned long long>::iterator v);
void tf267_1(std::set<int *>::iterator v);
void tf267_2(std::unordered_set<std::string> v);
void tf267_3(std::unordered_set<char *> v);
void tf267_4(std::unordered_set<long long> v);`),
        unions: parseUnion(`void tf267_0(std::set<unsigned long long>::iterator v);
void tf267_1(std::set<int *>::iterator v);
void tf267_2(std::unordered_set<std::string> v);
void tf267_3(std::unordered_set<char *> v);
void tf267_4(std::unordered_set<long long> v);`),
        structs: parseStruct(`void tf267_0(std::set<unsigned long long>::iterator v);
void tf267_1(std::set<int *>::iterator v);
void tf267_2(std::unordered_set<std::string> v);
void tf267_3(std::unordered_set<char *> v);
void tf267_4(std::unordered_set<long long> v);`),
        classes: parseClass(`void tf267_0(std::set<unsigned long long>::iterator v);
void tf267_1(std::set<int *>::iterator v);
void tf267_2(std::unordered_set<std::string> v);
void tf267_3(std::unordered_set<char *> v);
void tf267_4(std::unordered_set<long long> v);`),
        funcs: parseFunction(`void tf267_0(std::set<unsigned long long>::iterator v);
void tf267_1(std::set<int *>::iterator v);
void tf267_2(std::unordered_set<std::string> v);
void tf267_3(std::unordered_set<char *> v);
void tf267_4(std::unordered_set<long long> v);`),
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
        `h2dtscpp_gen_0267 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0267 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0268
  * @tc.name : h2dtscpp_gen_0268
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_set<unsigned short>, std::unordered_set<unsig... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0268', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf268_0(std::unordered_set<unsigned short> v);
void tf268_1(std::unordered_set<unsigned long> v);
void tf268_2(std::unordered_set<unsigned long long> v);
void tf268_3(std::unordered_set<int *> v);
void tf268_4(std::unordered_set<std::string>::iterator v);`),
        unions: parseUnion(`void tf268_0(std::unordered_set<unsigned short> v);
void tf268_1(std::unordered_set<unsigned long> v);
void tf268_2(std::unordered_set<unsigned long long> v);
void tf268_3(std::unordered_set<int *> v);
void tf268_4(std::unordered_set<std::string>::iterator v);`),
        structs: parseStruct(`void tf268_0(std::unordered_set<unsigned short> v);
void tf268_1(std::unordered_set<unsigned long> v);
void tf268_2(std::unordered_set<unsigned long long> v);
void tf268_3(std::unordered_set<int *> v);
void tf268_4(std::unordered_set<std::string>::iterator v);`),
        classes: parseClass(`void tf268_0(std::unordered_set<unsigned short> v);
void tf268_1(std::unordered_set<unsigned long> v);
void tf268_2(std::unordered_set<unsigned long long> v);
void tf268_3(std::unordered_set<int *> v);
void tf268_4(std::unordered_set<std::string>::iterator v);`),
        funcs: parseFunction(`void tf268_0(std::unordered_set<unsigned short> v);
void tf268_1(std::unordered_set<unsigned long> v);
void tf268_2(std::unordered_set<unsigned long long> v);
void tf268_3(std::unordered_set<int *> v);
void tf268_4(std::unordered_set<std::string>::iterator v);`),
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
        `h2dtscpp_gen_0268 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0268 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0269
  * @tc.name : h2dtscpp_gen_0269
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_set<char *>::iterator, std::unordered_set<lon... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0269', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf269_0(std::unordered_set<char *>::iterator v);
void tf269_1(std::unordered_set<long long>::iterator v);
void tf269_2(std::unordered_set<unsigned short>::iterator v);
void tf269_3(std::unordered_set<unsigned long>::iterator v);
void tf269_4(std::unordered_set<unsigned long long>::iterator v);`),
        unions: parseUnion(`void tf269_0(std::unordered_set<char *>::iterator v);
void tf269_1(std::unordered_set<long long>::iterator v);
void tf269_2(std::unordered_set<unsigned short>::iterator v);
void tf269_3(std::unordered_set<unsigned long>::iterator v);
void tf269_4(std::unordered_set<unsigned long long>::iterator v);`),
        structs: parseStruct(`void tf269_0(std::unordered_set<char *>::iterator v);
void tf269_1(std::unordered_set<long long>::iterator v);
void tf269_2(std::unordered_set<unsigned short>::iterator v);
void tf269_3(std::unordered_set<unsigned long>::iterator v);
void tf269_4(std::unordered_set<unsigned long long>::iterator v);`),
        classes: parseClass(`void tf269_0(std::unordered_set<char *>::iterator v);
void tf269_1(std::unordered_set<long long>::iterator v);
void tf269_2(std::unordered_set<unsigned short>::iterator v);
void tf269_3(std::unordered_set<unsigned long>::iterator v);
void tf269_4(std::unordered_set<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void tf269_0(std::unordered_set<char *>::iterator v);
void tf269_1(std::unordered_set<long long>::iterator v);
void tf269_2(std::unordered_set<unsigned short>::iterator v);
void tf269_3(std::unordered_set<unsigned long>::iterator v);
void tf269_4(std::unordered_set<unsigned long long>::iterator v);`),
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
        `h2dtscpp_gen_0269 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0269 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0270
  * @tc.name : h2dtscpp_gen_0270
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_set<int *>::iterator, std::multiset<std::stri... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0270', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf270_0(std::unordered_set<int *>::iterator v);
void tf270_1(std::multiset<std::string> v);
void tf270_2(std::multiset<char *> v);
void tf270_3(std::multiset<long long> v);
void tf270_4(std::multiset<unsigned short> v);`),
        unions: parseUnion(`void tf270_0(std::unordered_set<int *>::iterator v);
void tf270_1(std::multiset<std::string> v);
void tf270_2(std::multiset<char *> v);
void tf270_3(std::multiset<long long> v);
void tf270_4(std::multiset<unsigned short> v);`),
        structs: parseStruct(`void tf270_0(std::unordered_set<int *>::iterator v);
void tf270_1(std::multiset<std::string> v);
void tf270_2(std::multiset<char *> v);
void tf270_3(std::multiset<long long> v);
void tf270_4(std::multiset<unsigned short> v);`),
        classes: parseClass(`void tf270_0(std::unordered_set<int *>::iterator v);
void tf270_1(std::multiset<std::string> v);
void tf270_2(std::multiset<char *> v);
void tf270_3(std::multiset<long long> v);
void tf270_4(std::multiset<unsigned short> v);`),
        funcs: parseFunction(`void tf270_0(std::unordered_set<int *>::iterator v);
void tf270_1(std::multiset<std::string> v);
void tf270_2(std::multiset<char *> v);
void tf270_3(std::multiset<long long> v);
void tf270_4(std::multiset<unsigned short> v);`),
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
        `h2dtscpp_gen_0270 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0270 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0271
  * @tc.name : h2dtscpp_gen_0271
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multiset<unsigned long>, std::multiset<unsigned long lo... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0271', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf271_0(std::multiset<unsigned long> v);
void tf271_1(std::multiset<unsigned long long> v);
void tf271_2(std::multiset<int *> v);
void tf271_3(std::multiset<std::string>::iterator v);
void tf271_4(std::multiset<char *>::iterator v);`),
        unions: parseUnion(`void tf271_0(std::multiset<unsigned long> v);
void tf271_1(std::multiset<unsigned long long> v);
void tf271_2(std::multiset<int *> v);
void tf271_3(std::multiset<std::string>::iterator v);
void tf271_4(std::multiset<char *>::iterator v);`),
        structs: parseStruct(`void tf271_0(std::multiset<unsigned long> v);
void tf271_1(std::multiset<unsigned long long> v);
void tf271_2(std::multiset<int *> v);
void tf271_3(std::multiset<std::string>::iterator v);
void tf271_4(std::multiset<char *>::iterator v);`),
        classes: parseClass(`void tf271_0(std::multiset<unsigned long> v);
void tf271_1(std::multiset<unsigned long long> v);
void tf271_2(std::multiset<int *> v);
void tf271_3(std::multiset<std::string>::iterator v);
void tf271_4(std::multiset<char *>::iterator v);`),
        funcs: parseFunction(`void tf271_0(std::multiset<unsigned long> v);
void tf271_1(std::multiset<unsigned long long> v);
void tf271_2(std::multiset<int *> v);
void tf271_3(std::multiset<std::string>::iterator v);
void tf271_4(std::multiset<char *>::iterator v);`),
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
        `h2dtscpp_gen_0271 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0271 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0272
  * @tc.name : h2dtscpp_gen_0272
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multiset<long long>::iterator, std::multiset<unsigned s... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0272', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf272_0(std::multiset<long long>::iterator v);
void tf272_1(std::multiset<unsigned short>::iterator v);
void tf272_2(std::multiset<unsigned long>::iterator v);
void tf272_3(std::multiset<unsigned long long>::iterator v);
void tf272_4(std::multiset<int *>::iterator v);`),
        unions: parseUnion(`void tf272_0(std::multiset<long long>::iterator v);
void tf272_1(std::multiset<unsigned short>::iterator v);
void tf272_2(std::multiset<unsigned long>::iterator v);
void tf272_3(std::multiset<unsigned long long>::iterator v);
void tf272_4(std::multiset<int *>::iterator v);`),
        structs: parseStruct(`void tf272_0(std::multiset<long long>::iterator v);
void tf272_1(std::multiset<unsigned short>::iterator v);
void tf272_2(std::multiset<unsigned long>::iterator v);
void tf272_3(std::multiset<unsigned long long>::iterator v);
void tf272_4(std::multiset<int *>::iterator v);`),
        classes: parseClass(`void tf272_0(std::multiset<long long>::iterator v);
void tf272_1(std::multiset<unsigned short>::iterator v);
void tf272_2(std::multiset<unsigned long>::iterator v);
void tf272_3(std::multiset<unsigned long long>::iterator v);
void tf272_4(std::multiset<int *>::iterator v);`),
        funcs: parseFunction(`void tf272_0(std::multiset<long long>::iterator v);
void tf272_1(std::multiset<unsigned short>::iterator v);
void tf272_2(std::multiset<unsigned long>::iterator v);
void tf272_3(std::multiset<unsigned long long>::iterator v);
void tf272_4(std::multiset<int *>::iterator v);`),
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
        `h2dtscpp_gen_0272 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0272 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0273
  * @tc.name : h2dtscpp_gen_0273
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multiset<std::string>, std::unordered_multise... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0273', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf273_0(std::unordered_multiset<std::string> v);
void tf273_1(std::unordered_multiset<char *> v);
void tf273_2(std::unordered_multiset<long long> v);
void tf273_3(std::unordered_multiset<unsigned short> v);
void tf273_4(std::unordered_multiset<unsigned long> v);`),
        unions: parseUnion(`void tf273_0(std::unordered_multiset<std::string> v);
void tf273_1(std::unordered_multiset<char *> v);
void tf273_2(std::unordered_multiset<long long> v);
void tf273_3(std::unordered_multiset<unsigned short> v);
void tf273_4(std::unordered_multiset<unsigned long> v);`),
        structs: parseStruct(`void tf273_0(std::unordered_multiset<std::string> v);
void tf273_1(std::unordered_multiset<char *> v);
void tf273_2(std::unordered_multiset<long long> v);
void tf273_3(std::unordered_multiset<unsigned short> v);
void tf273_4(std::unordered_multiset<unsigned long> v);`),
        classes: parseClass(`void tf273_0(std::unordered_multiset<std::string> v);
void tf273_1(std::unordered_multiset<char *> v);
void tf273_2(std::unordered_multiset<long long> v);
void tf273_3(std::unordered_multiset<unsigned short> v);
void tf273_4(std::unordered_multiset<unsigned long> v);`),
        funcs: parseFunction(`void tf273_0(std::unordered_multiset<std::string> v);
void tf273_1(std::unordered_multiset<char *> v);
void tf273_2(std::unordered_multiset<long long> v);
void tf273_3(std::unordered_multiset<unsigned short> v);
void tf273_4(std::unordered_multiset<unsigned long> v);`),
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
        `h2dtscpp_gen_0273 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0273 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0274
  * @tc.name : h2dtscpp_gen_0274
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multiset<unsigned long long>, std::unordered_... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0274', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf274_0(std::unordered_multiset<unsigned long long> v);
void tf274_1(std::unordered_multiset<int *> v);
void tf274_2(std::unordered_multiset<std::string>::iterator v);
void tf274_3(std::unordered_multiset<char *>::iterator v);
void tf274_4(std::unordered_multiset<long long>::iterator v);`),
        unions: parseUnion(`void tf274_0(std::unordered_multiset<unsigned long long> v);
void tf274_1(std::unordered_multiset<int *> v);
void tf274_2(std::unordered_multiset<std::string>::iterator v);
void tf274_3(std::unordered_multiset<char *>::iterator v);
void tf274_4(std::unordered_multiset<long long>::iterator v);`),
        structs: parseStruct(`void tf274_0(std::unordered_multiset<unsigned long long> v);
void tf274_1(std::unordered_multiset<int *> v);
void tf274_2(std::unordered_multiset<std::string>::iterator v);
void tf274_3(std::unordered_multiset<char *>::iterator v);
void tf274_4(std::unordered_multiset<long long>::iterator v);`),
        classes: parseClass(`void tf274_0(std::unordered_multiset<unsigned long long> v);
void tf274_1(std::unordered_multiset<int *> v);
void tf274_2(std::unordered_multiset<std::string>::iterator v);
void tf274_3(std::unordered_multiset<char *>::iterator v);
void tf274_4(std::unordered_multiset<long long>::iterator v);`),
        funcs: parseFunction(`void tf274_0(std::unordered_multiset<unsigned long long> v);
void tf274_1(std::unordered_multiset<int *> v);
void tf274_2(std::unordered_multiset<std::string>::iterator v);
void tf274_3(std::unordered_multiset<char *>::iterator v);
void tf274_4(std::unordered_multiset<long long>::iterator v);`),
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
        `h2dtscpp_gen_0274 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0274 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0275
  * @tc.name : h2dtscpp_gen_0275
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_multiset<unsigned short>::iterator, std::unor... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0275', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf275_0(std::unordered_multiset<unsigned short>::iterator v);
void tf275_1(std::unordered_multiset<unsigned long>::iterator v);
void tf275_2(std::unordered_multiset<unsigned long long>::iterator v);
void tf275_3(std::unordered_multiset<int *>::iterator v);
void tf275_4(std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        unions: parseUnion(`void tf275_0(std::unordered_multiset<unsigned short>::iterator v);
void tf275_1(std::unordered_multiset<unsigned long>::iterator v);
void tf275_2(std::unordered_multiset<unsigned long long>::iterator v);
void tf275_3(std::unordered_multiset<int *>::iterator v);
void tf275_4(std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        structs: parseStruct(`void tf275_0(std::unordered_multiset<unsigned short>::iterator v);
void tf275_1(std::unordered_multiset<unsigned long>::iterator v);
void tf275_2(std::unordered_multiset<unsigned long long>::iterator v);
void tf275_3(std::unordered_multiset<int *>::iterator v);
void tf275_4(std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        classes: parseClass(`void tf275_0(std::unordered_multiset<unsigned short>::iterator v);
void tf275_1(std::unordered_multiset<unsigned long>::iterator v);
void tf275_2(std::unordered_multiset<unsigned long long>::iterator v);
void tf275_3(std::unordered_multiset<int *>::iterator v);
void tf275_4(std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
        funcs: parseFunction(`void tf275_0(std::unordered_multiset<unsigned short>::iterator v);
void tf275_1(std::unordered_multiset<unsigned long>::iterator v);
void tf275_2(std::unordered_multiset<unsigned long long>::iterator v);
void tf275_3(std::unordered_multiset<int *>::iterator v);
void tf275_4(std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`),
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
        `h2dtscpp_gen_0275 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0275 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0276
  * @tc.name : h2dtscpp_gen_0276
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::pair<int16_t, bool,  int64_t, std::string, int32_t, cha... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0276', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf276_0(std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);
void tf276_1(std::complex<long long, int *> v);
void tf276_2(std::complex<unsigned short, unsigned long> v);
void tf276_3(std::complex<int64_t, unsigned long long> v);
void tf276_4(std::chrono::hours v);`),
        unions: parseUnion(`void tf276_0(std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);
void tf276_1(std::complex<long long, int *> v);
void tf276_2(std::complex<unsigned short, unsigned long> v);
void tf276_3(std::complex<int64_t, unsigned long long> v);
void tf276_4(std::chrono::hours v);`),
        structs: parseStruct(`void tf276_0(std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);
void tf276_1(std::complex<long long, int *> v);
void tf276_2(std::complex<unsigned short, unsigned long> v);
void tf276_3(std::complex<int64_t, unsigned long long> v);
void tf276_4(std::chrono::hours v);`),
        classes: parseClass(`void tf276_0(std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);
void tf276_1(std::complex<long long, int *> v);
void tf276_2(std::complex<unsigned short, unsigned long> v);
void tf276_3(std::complex<int64_t, unsigned long long> v);
void tf276_4(std::chrono::hours v);`),
        funcs: parseFunction(`void tf276_0(std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);
void tf276_1(std::complex<long long, int *> v);
void tf276_2(std::complex<unsigned short, unsigned long> v);
void tf276_3(std::complex<int64_t, unsigned long long> v);
void tf276_4(std::chrono::hours v);`),
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
        `h2dtscpp_gen_0276 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0276 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0277
  * @tc.name : h2dtscpp_gen_0277
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unique_ptr<char *>, std::unique_ptr<long long>, std::un... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0277', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf277_0(std::unique_ptr<char *> v);
void tf277_1(std::unique_ptr<long long> v);
void tf277_2(std::unique_ptr<unsigned short> v);
void tf277_3(std::unique_ptr<unsigned long> v);
void tf277_4(std::unique_ptr<unsigned long long> v);`),
        unions: parseUnion(`void tf277_0(std::unique_ptr<char *> v);
void tf277_1(std::unique_ptr<long long> v);
void tf277_2(std::unique_ptr<unsigned short> v);
void tf277_3(std::unique_ptr<unsigned long> v);
void tf277_4(std::unique_ptr<unsigned long long> v);`),
        structs: parseStruct(`void tf277_0(std::unique_ptr<char *> v);
void tf277_1(std::unique_ptr<long long> v);
void tf277_2(std::unique_ptr<unsigned short> v);
void tf277_3(std::unique_ptr<unsigned long> v);
void tf277_4(std::unique_ptr<unsigned long long> v);`),
        classes: parseClass(`void tf277_0(std::unique_ptr<char *> v);
void tf277_1(std::unique_ptr<long long> v);
void tf277_2(std::unique_ptr<unsigned short> v);
void tf277_3(std::unique_ptr<unsigned long> v);
void tf277_4(std::unique_ptr<unsigned long long> v);`),
        funcs: parseFunction(`void tf277_0(std::unique_ptr<char *> v);
void tf277_1(std::unique_ptr<long long> v);
void tf277_2(std::unique_ptr<unsigned short> v);
void tf277_3(std::unique_ptr<unsigned long> v);
void tf277_4(std::unique_ptr<unsigned long long> v);`),
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
        `h2dtscpp_gen_0277 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0277 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0278
  * @tc.name : h2dtscpp_gen_0278
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unique_ptr<int *>, std::shared_ptr<std::string>, std::s... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0278', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf278_0(std::unique_ptr<int *> v);
void tf278_1(std::shared_ptr<std::string> v);
void tf278_2(std::shared_ptr<char *> v);
void tf278_3(std::shared_ptr<long long> v);
void tf278_4(std::shared_ptr<unsigned short> v);`),
        unions: parseUnion(`void tf278_0(std::unique_ptr<int *> v);
void tf278_1(std::shared_ptr<std::string> v);
void tf278_2(std::shared_ptr<char *> v);
void tf278_3(std::shared_ptr<long long> v);
void tf278_4(std::shared_ptr<unsigned short> v);`),
        structs: parseStruct(`void tf278_0(std::unique_ptr<int *> v);
void tf278_1(std::shared_ptr<std::string> v);
void tf278_2(std::shared_ptr<char *> v);
void tf278_3(std::shared_ptr<long long> v);
void tf278_4(std::shared_ptr<unsigned short> v);`),
        classes: parseClass(`void tf278_0(std::unique_ptr<int *> v);
void tf278_1(std::shared_ptr<std::string> v);
void tf278_2(std::shared_ptr<char *> v);
void tf278_3(std::shared_ptr<long long> v);
void tf278_4(std::shared_ptr<unsigned short> v);`),
        funcs: parseFunction(`void tf278_0(std::unique_ptr<int *> v);
void tf278_1(std::shared_ptr<std::string> v);
void tf278_2(std::shared_ptr<char *> v);
void tf278_3(std::shared_ptr<long long> v);
void tf278_4(std::shared_ptr<unsigned short> v);`),
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
        `h2dtscpp_gen_0278 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0278 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0279
  * @tc.name : h2dtscpp_gen_0279
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::shared_ptr<unsigned long>, std::shared_ptr<unsigned lon... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0279', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf279_0(std::shared_ptr<unsigned long> v);
void tf279_1(std::shared_ptr<unsigned long long> v);
void tf279_2(std::shared_ptr<int *> v);
void tf279_3(std::weak_ptr<std::string> v);
void tf279_4(std::weak_ptr<char *> v);`),
        unions: parseUnion(`void tf279_0(std::shared_ptr<unsigned long> v);
void tf279_1(std::shared_ptr<unsigned long long> v);
void tf279_2(std::shared_ptr<int *> v);
void tf279_3(std::weak_ptr<std::string> v);
void tf279_4(std::weak_ptr<char *> v);`),
        structs: parseStruct(`void tf279_0(std::shared_ptr<unsigned long> v);
void tf279_1(std::shared_ptr<unsigned long long> v);
void tf279_2(std::shared_ptr<int *> v);
void tf279_3(std::weak_ptr<std::string> v);
void tf279_4(std::weak_ptr<char *> v);`),
        classes: parseClass(`void tf279_0(std::shared_ptr<unsigned long> v);
void tf279_1(std::shared_ptr<unsigned long long> v);
void tf279_2(std::shared_ptr<int *> v);
void tf279_3(std::weak_ptr<std::string> v);
void tf279_4(std::weak_ptr<char *> v);`),
        funcs: parseFunction(`void tf279_0(std::shared_ptr<unsigned long> v);
void tf279_1(std::shared_ptr<unsigned long long> v);
void tf279_2(std::shared_ptr<int *> v);
void tf279_3(std::weak_ptr<std::string> v);
void tf279_4(std::weak_ptr<char *> v);`),
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
        `h2dtscpp_gen_0279 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0279 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0280
  * @tc.name : h2dtscpp_gen_0280
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::weak_ptr<long long>, std::weak_ptr<unsigned short>, std... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0280', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf280_0(std::weak_ptr<long long> v);
void tf280_1(std::weak_ptr<unsigned short> v);
void tf280_2(std::weak_ptr<unsigned long> v);
void tf280_3(std::weak_ptr<unsigned long long> v);
void tf280_4(std::weak_ptr<int *> v);`),
        unions: parseUnion(`void tf280_0(std::weak_ptr<long long> v);
void tf280_1(std::weak_ptr<unsigned short> v);
void tf280_2(std::weak_ptr<unsigned long> v);
void tf280_3(std::weak_ptr<unsigned long long> v);
void tf280_4(std::weak_ptr<int *> v);`),
        structs: parseStruct(`void tf280_0(std::weak_ptr<long long> v);
void tf280_1(std::weak_ptr<unsigned short> v);
void tf280_2(std::weak_ptr<unsigned long> v);
void tf280_3(std::weak_ptr<unsigned long long> v);
void tf280_4(std::weak_ptr<int *> v);`),
        classes: parseClass(`void tf280_0(std::weak_ptr<long long> v);
void tf280_1(std::weak_ptr<unsigned short> v);
void tf280_2(std::weak_ptr<unsigned long> v);
void tf280_3(std::weak_ptr<unsigned long long> v);
void tf280_4(std::weak_ptr<int *> v);`),
        funcs: parseFunction(`void tf280_0(std::weak_ptr<long long> v);
void tf280_1(std::weak_ptr<unsigned short> v);
void tf280_2(std::weak_ptr<unsigned long> v);
void tf280_3(std::weak_ptr<unsigned long long> v);
void tf280_4(std::weak_ptr<int *> v);`),
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
        `h2dtscpp_gen_0280 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0280 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0281
  * @tc.name : h2dtscpp_gen_0281
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 int$#, MyType, defined type, std::weak_ptr< 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0281', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf281_0(int\$# v);
void tf281_1(MyType v);
void tf281_2(defined type v);
void tf281_3(std::weak_ptr< v);`),
        unions: parseUnion(`void tf281_0(int\$# v);
void tf281_1(MyType v);
void tf281_2(defined type v);
void tf281_3(std::weak_ptr< v);`),
        structs: parseStruct(`void tf281_0(int\$# v);
void tf281_1(MyType v);
void tf281_2(defined type v);
void tf281_3(std::weak_ptr< v);`),
        classes: parseClass(`void tf281_0(int\$# v);
void tf281_1(MyType v);
void tf281_2(defined type v);
void tf281_3(std::weak_ptr< v);`),
        funcs: parseFunction(`void tf281_0(int\$# v);
void tf281_1(MyType v);
void tf281_2(defined type v);
void tf281_3(std::weak_ptr< v);`),
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
      assert.strictEqual(transResult.funcs.length, 4);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0281 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0281 执行异常: ${String(err)}`);
    }
  });
});
