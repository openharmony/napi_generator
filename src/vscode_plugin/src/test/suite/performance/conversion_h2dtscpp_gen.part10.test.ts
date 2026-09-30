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
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part10.');

  /**
  * @tc.number : h2dtscpp_gen_0228
  * @tc.name : h2dtscpp_gen_0228
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::array<char *, 10>, std::array<long long, 10>, std::arra... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0228', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf228_0(std::array<char *, 10> v);
void tf228_1(std::array<long long, 10> v);
void tf228_2(std::array<unsigned short, 10> v);
void tf228_3(std::array<unsigned long, 10> v);
void tf228_4(std::array<unsigned long long, 10> v);`),
        unions: parseUnion(`void tf228_0(std::array<char *, 10> v);
void tf228_1(std::array<long long, 10> v);
void tf228_2(std::array<unsigned short, 10> v);
void tf228_3(std::array<unsigned long, 10> v);
void tf228_4(std::array<unsigned long long, 10> v);`),
        structs: parseStruct(`void tf228_0(std::array<char *, 10> v);
void tf228_1(std::array<long long, 10> v);
void tf228_2(std::array<unsigned short, 10> v);
void tf228_3(std::array<unsigned long, 10> v);
void tf228_4(std::array<unsigned long long, 10> v);`),
        classes: parseClass(`void tf228_0(std::array<char *, 10> v);
void tf228_1(std::array<long long, 10> v);
void tf228_2(std::array<unsigned short, 10> v);
void tf228_3(std::array<unsigned long, 10> v);
void tf228_4(std::array<unsigned long long, 10> v);`),
        funcs: parseFunction(`void tf228_0(std::array<char *, 10> v);
void tf228_1(std::array<long long, 10> v);
void tf228_2(std::array<unsigned short, 10> v);
void tf228_3(std::array<unsigned long, 10> v);
void tf228_4(std::array<unsigned long long, 10> v);`),
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
        `h2dtscpp_gen_0228 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0228 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0229
  * @tc.name : h2dtscpp_gen_0229
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::array<int *, 10>, std::array<std::string, 10>::iterator... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0229', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf229_0(std::array<int *, 10> v);
void tf229_1(std::array<std::string, 10>::iterator v);
void tf229_2(std::array<char *, 10>::iterator v);
void tf229_3(std::array<long long, 10>::iterator v);
void tf229_4(std::array<unsigned short, 10>::iterator v);`),
        unions: parseUnion(`void tf229_0(std::array<int *, 10> v);
void tf229_1(std::array<std::string, 10>::iterator v);
void tf229_2(std::array<char *, 10>::iterator v);
void tf229_3(std::array<long long, 10>::iterator v);
void tf229_4(std::array<unsigned short, 10>::iterator v);`),
        structs: parseStruct(`void tf229_0(std::array<int *, 10> v);
void tf229_1(std::array<std::string, 10>::iterator v);
void tf229_2(std::array<char *, 10>::iterator v);
void tf229_3(std::array<long long, 10>::iterator v);
void tf229_4(std::array<unsigned short, 10>::iterator v);`),
        classes: parseClass(`void tf229_0(std::array<int *, 10> v);
void tf229_1(std::array<std::string, 10>::iterator v);
void tf229_2(std::array<char *, 10>::iterator v);
void tf229_3(std::array<long long, 10>::iterator v);
void tf229_4(std::array<unsigned short, 10>::iterator v);`),
        funcs: parseFunction(`void tf229_0(std::array<int *, 10> v);
void tf229_1(std::array<std::string, 10>::iterator v);
void tf229_2(std::array<char *, 10>::iterator v);
void tf229_3(std::array<long long, 10>::iterator v);
void tf229_4(std::array<unsigned short, 10>::iterator v);`),
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
        `h2dtscpp_gen_0229 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0229 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0230
  * @tc.name : h2dtscpp_gen_0230
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::array<unsigned long, 10>::iterator, std::array<unsigned... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0230', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf230_0(std::array<unsigned long, 10>::iterator v);
void tf230_1(std::array<unsigned long long, 10>::iterator v);
void tf230_2(std::array<int *, 10>::iterator v);
void tf230_3(std::deque<std::string> v);
void tf230_4(std::deque<char *> v);`),
        unions: parseUnion(`void tf230_0(std::array<unsigned long, 10>::iterator v);
void tf230_1(std::array<unsigned long long, 10>::iterator v);
void tf230_2(std::array<int *, 10>::iterator v);
void tf230_3(std::deque<std::string> v);
void tf230_4(std::deque<char *> v);`),
        structs: parseStruct(`void tf230_0(std::array<unsigned long, 10>::iterator v);
void tf230_1(std::array<unsigned long long, 10>::iterator v);
void tf230_2(std::array<int *, 10>::iterator v);
void tf230_3(std::deque<std::string> v);
void tf230_4(std::deque<char *> v);`),
        classes: parseClass(`void tf230_0(std::array<unsigned long, 10>::iterator v);
void tf230_1(std::array<unsigned long long, 10>::iterator v);
void tf230_2(std::array<int *, 10>::iterator v);
void tf230_3(std::deque<std::string> v);
void tf230_4(std::deque<char *> v);`),
        funcs: parseFunction(`void tf230_0(std::array<unsigned long, 10>::iterator v);
void tf230_1(std::array<unsigned long long, 10>::iterator v);
void tf230_2(std::array<int *, 10>::iterator v);
void tf230_3(std::deque<std::string> v);
void tf230_4(std::deque<char *> v);`),
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
        `h2dtscpp_gen_0230 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0230 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0231
  * @tc.name : h2dtscpp_gen_0231
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::deque<long long>, std::deque<unsigned short>, std::dequ... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0231', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf231_0(std::deque<long long> v);
void tf231_1(std::deque<unsigned short> v);
void tf231_2(std::deque<unsigned long> v);
void tf231_3(std::deque<unsigned long long> v);
void tf231_4(std::deque<int *> v);`),
        unions: parseUnion(`void tf231_0(std::deque<long long> v);
void tf231_1(std::deque<unsigned short> v);
void tf231_2(std::deque<unsigned long> v);
void tf231_3(std::deque<unsigned long long> v);
void tf231_4(std::deque<int *> v);`),
        structs: parseStruct(`void tf231_0(std::deque<long long> v);
void tf231_1(std::deque<unsigned short> v);
void tf231_2(std::deque<unsigned long> v);
void tf231_3(std::deque<unsigned long long> v);
void tf231_4(std::deque<int *> v);`),
        classes: parseClass(`void tf231_0(std::deque<long long> v);
void tf231_1(std::deque<unsigned short> v);
void tf231_2(std::deque<unsigned long> v);
void tf231_3(std::deque<unsigned long long> v);
void tf231_4(std::deque<int *> v);`),
        funcs: parseFunction(`void tf231_0(std::deque<long long> v);
void tf231_1(std::deque<unsigned short> v);
void tf231_2(std::deque<unsigned long> v);
void tf231_3(std::deque<unsigned long long> v);
void tf231_4(std::deque<int *> v);`),
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
        `h2dtscpp_gen_0231 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0231 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0232
  * @tc.name : h2dtscpp_gen_0232
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::deque<std::string>::iterator, std::deque<char *>::itera... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0232', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf232_0(std::deque<std::string>::iterator v);
void tf232_1(std::deque<char *>::iterator v);
void tf232_2(std::deque<long long>::iterator v);
void tf232_3(std::deque<unsigned short>::iterator v);
void tf232_4(std::deque<unsigned long>::iterator v);`),
        unions: parseUnion(`void tf232_0(std::deque<std::string>::iterator v);
void tf232_1(std::deque<char *>::iterator v);
void tf232_2(std::deque<long long>::iterator v);
void tf232_3(std::deque<unsigned short>::iterator v);
void tf232_4(std::deque<unsigned long>::iterator v);`),
        structs: parseStruct(`void tf232_0(std::deque<std::string>::iterator v);
void tf232_1(std::deque<char *>::iterator v);
void tf232_2(std::deque<long long>::iterator v);
void tf232_3(std::deque<unsigned short>::iterator v);
void tf232_4(std::deque<unsigned long>::iterator v);`),
        classes: parseClass(`void tf232_0(std::deque<std::string>::iterator v);
void tf232_1(std::deque<char *>::iterator v);
void tf232_2(std::deque<long long>::iterator v);
void tf232_3(std::deque<unsigned short>::iterator v);
void tf232_4(std::deque<unsigned long>::iterator v);`),
        funcs: parseFunction(`void tf232_0(std::deque<std::string>::iterator v);
void tf232_1(std::deque<char *>::iterator v);
void tf232_2(std::deque<long long>::iterator v);
void tf232_3(std::deque<unsigned short>::iterator v);
void tf232_4(std::deque<unsigned long>::iterator v);`),
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
        `h2dtscpp_gen_0232 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0232 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0233
  * @tc.name : h2dtscpp_gen_0233
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::deque<unsigned long long>::iterator, std::deque<int *>:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0233', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf233_0(std::deque<unsigned long long>::iterator v);
void tf233_1(std::deque<int *>::iterator v);
void tf233_2(std::list<std::string> v);
void tf233_3(std::list<char *> v);
void tf233_4(std::list<long long> v);`),
        unions: parseUnion(`void tf233_0(std::deque<unsigned long long>::iterator v);
void tf233_1(std::deque<int *>::iterator v);
void tf233_2(std::list<std::string> v);
void tf233_3(std::list<char *> v);
void tf233_4(std::list<long long> v);`),
        structs: parseStruct(`void tf233_0(std::deque<unsigned long long>::iterator v);
void tf233_1(std::deque<int *>::iterator v);
void tf233_2(std::list<std::string> v);
void tf233_3(std::list<char *> v);
void tf233_4(std::list<long long> v);`),
        classes: parseClass(`void tf233_0(std::deque<unsigned long long>::iterator v);
void tf233_1(std::deque<int *>::iterator v);
void tf233_2(std::list<std::string> v);
void tf233_3(std::list<char *> v);
void tf233_4(std::list<long long> v);`),
        funcs: parseFunction(`void tf233_0(std::deque<unsigned long long>::iterator v);
void tf233_1(std::deque<int *>::iterator v);
void tf233_2(std::list<std::string> v);
void tf233_3(std::list<char *> v);
void tf233_4(std::list<long long> v);`),
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
        `h2dtscpp_gen_0233 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0233 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0234
  * @tc.name : h2dtscpp_gen_0234
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::list<unsigned short>, std::list<unsigned long>, std::li... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0234', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf234_0(std::list<unsigned short> v);
void tf234_1(std::list<unsigned long> v);
void tf234_2(std::list<unsigned long long> v);
void tf234_3(std::list<int *> v);
void tf234_4(std::list<std::string>::iterator v);`),
        unions: parseUnion(`void tf234_0(std::list<unsigned short> v);
void tf234_1(std::list<unsigned long> v);
void tf234_2(std::list<unsigned long long> v);
void tf234_3(std::list<int *> v);
void tf234_4(std::list<std::string>::iterator v);`),
        structs: parseStruct(`void tf234_0(std::list<unsigned short> v);
void tf234_1(std::list<unsigned long> v);
void tf234_2(std::list<unsigned long long> v);
void tf234_3(std::list<int *> v);
void tf234_4(std::list<std::string>::iterator v);`),
        classes: parseClass(`void tf234_0(std::list<unsigned short> v);
void tf234_1(std::list<unsigned long> v);
void tf234_2(std::list<unsigned long long> v);
void tf234_3(std::list<int *> v);
void tf234_4(std::list<std::string>::iterator v);`),
        funcs: parseFunction(`void tf234_0(std::list<unsigned short> v);
void tf234_1(std::list<unsigned long> v);
void tf234_2(std::list<unsigned long long> v);
void tf234_3(std::list<int *> v);
void tf234_4(std::list<std::string>::iterator v);`),
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
        `h2dtscpp_gen_0234 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0234 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0235
  * @tc.name : h2dtscpp_gen_0235
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::list<char *>::iterator, std::list<long long>::iterator,... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0235', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf235_0(std::list<char *>::iterator v);
void tf235_1(std::list<long long>::iterator v);
void tf235_2(std::list<unsigned short>::iterator v);
void tf235_3(std::list<unsigned long>::iterator v);
void tf235_4(std::list<unsigned long long>::iterator v);`),
        unions: parseUnion(`void tf235_0(std::list<char *>::iterator v);
void tf235_1(std::list<long long>::iterator v);
void tf235_2(std::list<unsigned short>::iterator v);
void tf235_3(std::list<unsigned long>::iterator v);
void tf235_4(std::list<unsigned long long>::iterator v);`),
        structs: parseStruct(`void tf235_0(std::list<char *>::iterator v);
void tf235_1(std::list<long long>::iterator v);
void tf235_2(std::list<unsigned short>::iterator v);
void tf235_3(std::list<unsigned long>::iterator v);
void tf235_4(std::list<unsigned long long>::iterator v);`),
        classes: parseClass(`void tf235_0(std::list<char *>::iterator v);
void tf235_1(std::list<long long>::iterator v);
void tf235_2(std::list<unsigned short>::iterator v);
void tf235_3(std::list<unsigned long>::iterator v);
void tf235_4(std::list<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void tf235_0(std::list<char *>::iterator v);
void tf235_1(std::list<long long>::iterator v);
void tf235_2(std::list<unsigned short>::iterator v);
void tf235_3(std::list<unsigned long>::iterator v);
void tf235_4(std::list<unsigned long long>::iterator v);`),
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
        `h2dtscpp_gen_0235 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0235 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0236
  * @tc.name : h2dtscpp_gen_0236
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::list<int *>::iterator, std::forward_list<std::string>, ... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0236', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf236_0(std::list<int *>::iterator v);
void tf236_1(std::forward_list<std::string> v);
void tf236_2(std::forward_list<char *> v);
void tf236_3(std::forward_list<long long> v);
void tf236_4(std::forward_list<unsigned short> v);`),
        unions: parseUnion(`void tf236_0(std::list<int *>::iterator v);
void tf236_1(std::forward_list<std::string> v);
void tf236_2(std::forward_list<char *> v);
void tf236_3(std::forward_list<long long> v);
void tf236_4(std::forward_list<unsigned short> v);`),
        structs: parseStruct(`void tf236_0(std::list<int *>::iterator v);
void tf236_1(std::forward_list<std::string> v);
void tf236_2(std::forward_list<char *> v);
void tf236_3(std::forward_list<long long> v);
void tf236_4(std::forward_list<unsigned short> v);`),
        classes: parseClass(`void tf236_0(std::list<int *>::iterator v);
void tf236_1(std::forward_list<std::string> v);
void tf236_2(std::forward_list<char *> v);
void tf236_3(std::forward_list<long long> v);
void tf236_4(std::forward_list<unsigned short> v);`),
        funcs: parseFunction(`void tf236_0(std::list<int *>::iterator v);
void tf236_1(std::forward_list<std::string> v);
void tf236_2(std::forward_list<char *> v);
void tf236_3(std::forward_list<long long> v);
void tf236_4(std::forward_list<unsigned short> v);`),
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
        `h2dtscpp_gen_0236 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0236 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0237
  * @tc.name : h2dtscpp_gen_0237
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::forward_list<unsigned long>, std::forward_list<unsigned... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0237', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf237_0(std::forward_list<unsigned long> v);
void tf237_1(std::forward_list<unsigned long long> v);
void tf237_2(std::forward_list<int *> v);
void tf237_3(std::forward_list<std::string>::iterator v);
void tf237_4(std::forward_list<char *>::iterator v);`),
        unions: parseUnion(`void tf237_0(std::forward_list<unsigned long> v);
void tf237_1(std::forward_list<unsigned long long> v);
void tf237_2(std::forward_list<int *> v);
void tf237_3(std::forward_list<std::string>::iterator v);
void tf237_4(std::forward_list<char *>::iterator v);`),
        structs: parseStruct(`void tf237_0(std::forward_list<unsigned long> v);
void tf237_1(std::forward_list<unsigned long long> v);
void tf237_2(std::forward_list<int *> v);
void tf237_3(std::forward_list<std::string>::iterator v);
void tf237_4(std::forward_list<char *>::iterator v);`),
        classes: parseClass(`void tf237_0(std::forward_list<unsigned long> v);
void tf237_1(std::forward_list<unsigned long long> v);
void tf237_2(std::forward_list<int *> v);
void tf237_3(std::forward_list<std::string>::iterator v);
void tf237_4(std::forward_list<char *>::iterator v);`),
        funcs: parseFunction(`void tf237_0(std::forward_list<unsigned long> v);
void tf237_1(std::forward_list<unsigned long long> v);
void tf237_2(std::forward_list<int *> v);
void tf237_3(std::forward_list<std::string>::iterator v);
void tf237_4(std::forward_list<char *>::iterator v);`),
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
        `h2dtscpp_gen_0237 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0237 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0238
  * @tc.name : h2dtscpp_gen_0238
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::forward_list<long long>::iterator, std::forward_list<un... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0238', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf238_0(std::forward_list<long long>::iterator v);
void tf238_1(std::forward_list<unsigned short>::iterator v);
void tf238_2(std::forward_list<unsigned long>::iterator v);
void tf238_3(std::forward_list<unsigned long long>::iterator v);
void tf238_4(std::forward_list<int *>::iterator v);`),
        unions: parseUnion(`void tf238_0(std::forward_list<long long>::iterator v);
void tf238_1(std::forward_list<unsigned short>::iterator v);
void tf238_2(std::forward_list<unsigned long>::iterator v);
void tf238_3(std::forward_list<unsigned long long>::iterator v);
void tf238_4(std::forward_list<int *>::iterator v);`),
        structs: parseStruct(`void tf238_0(std::forward_list<long long>::iterator v);
void tf238_1(std::forward_list<unsigned short>::iterator v);
void tf238_2(std::forward_list<unsigned long>::iterator v);
void tf238_3(std::forward_list<unsigned long long>::iterator v);
void tf238_4(std::forward_list<int *>::iterator v);`),
        classes: parseClass(`void tf238_0(std::forward_list<long long>::iterator v);
void tf238_1(std::forward_list<unsigned short>::iterator v);
void tf238_2(std::forward_list<unsigned long>::iterator v);
void tf238_3(std::forward_list<unsigned long long>::iterator v);
void tf238_4(std::forward_list<int *>::iterator v);`),
        funcs: parseFunction(`void tf238_0(std::forward_list<long long>::iterator v);
void tf238_1(std::forward_list<unsigned short>::iterator v);
void tf238_2(std::forward_list<unsigned long>::iterator v);
void tf238_3(std::forward_list<unsigned long long>::iterator v);
void tf238_4(std::forward_list<int *>::iterator v);`),
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
        `h2dtscpp_gen_0238 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0238 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0239
  * @tc.name : h2dtscpp_gen_0239
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::stack<std::string>, std::stack<char *>, std::stack<long... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0239', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf239_0(std::stack<std::string> v);
void tf239_1(std::stack<char *> v);
void tf239_2(std::stack<long long> v);
void tf239_3(std::stack<unsigned short> v);
void tf239_4(std::stack<unsigned long> v);`),
        unions: parseUnion(`void tf239_0(std::stack<std::string> v);
void tf239_1(std::stack<char *> v);
void tf239_2(std::stack<long long> v);
void tf239_3(std::stack<unsigned short> v);
void tf239_4(std::stack<unsigned long> v);`),
        structs: parseStruct(`void tf239_0(std::stack<std::string> v);
void tf239_1(std::stack<char *> v);
void tf239_2(std::stack<long long> v);
void tf239_3(std::stack<unsigned short> v);
void tf239_4(std::stack<unsigned long> v);`),
        classes: parseClass(`void tf239_0(std::stack<std::string> v);
void tf239_1(std::stack<char *> v);
void tf239_2(std::stack<long long> v);
void tf239_3(std::stack<unsigned short> v);
void tf239_4(std::stack<unsigned long> v);`),
        funcs: parseFunction(`void tf239_0(std::stack<std::string> v);
void tf239_1(std::stack<char *> v);
void tf239_2(std::stack<long long> v);
void tf239_3(std::stack<unsigned short> v);
void tf239_4(std::stack<unsigned long> v);`),
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
        `h2dtscpp_gen_0239 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0239 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0240
  * @tc.name : h2dtscpp_gen_0240
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::stack<unsigned long long>, std::stack<int *>, std::stac... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0240', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf240_0(std::stack<unsigned long long> v);
void tf240_1(std::stack<int *> v);
void tf240_2(std::stack<std::string>::iterator v);
void tf240_3(std::stack<char *>::iterator v);
void tf240_4(std::stack<long long>::iterator v);`),
        unions: parseUnion(`void tf240_0(std::stack<unsigned long long> v);
void tf240_1(std::stack<int *> v);
void tf240_2(std::stack<std::string>::iterator v);
void tf240_3(std::stack<char *>::iterator v);
void tf240_4(std::stack<long long>::iterator v);`),
        structs: parseStruct(`void tf240_0(std::stack<unsigned long long> v);
void tf240_1(std::stack<int *> v);
void tf240_2(std::stack<std::string>::iterator v);
void tf240_3(std::stack<char *>::iterator v);
void tf240_4(std::stack<long long>::iterator v);`),
        classes: parseClass(`void tf240_0(std::stack<unsigned long long> v);
void tf240_1(std::stack<int *> v);
void tf240_2(std::stack<std::string>::iterator v);
void tf240_3(std::stack<char *>::iterator v);
void tf240_4(std::stack<long long>::iterator v);`),
        funcs: parseFunction(`void tf240_0(std::stack<unsigned long long> v);
void tf240_1(std::stack<int *> v);
void tf240_2(std::stack<std::string>::iterator v);
void tf240_3(std::stack<char *>::iterator v);
void tf240_4(std::stack<long long>::iterator v);`),
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
        `h2dtscpp_gen_0240 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0240 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0241
  * @tc.name : h2dtscpp_gen_0241
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::stack<unsigned short>::iterator, std::stack<unsigned lo... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0241', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf241_0(std::stack<unsigned short>::iterator v);
void tf241_1(std::stack<unsigned long>::iterator v);
void tf241_2(std::stack<unsigned long long>::iterator v);
void tf241_3(std::stack<int *>::iterator v);
void tf241_4(std::queue<std::string> v);`),
        unions: parseUnion(`void tf241_0(std::stack<unsigned short>::iterator v);
void tf241_1(std::stack<unsigned long>::iterator v);
void tf241_2(std::stack<unsigned long long>::iterator v);
void tf241_3(std::stack<int *>::iterator v);
void tf241_4(std::queue<std::string> v);`),
        structs: parseStruct(`void tf241_0(std::stack<unsigned short>::iterator v);
void tf241_1(std::stack<unsigned long>::iterator v);
void tf241_2(std::stack<unsigned long long>::iterator v);
void tf241_3(std::stack<int *>::iterator v);
void tf241_4(std::queue<std::string> v);`),
        classes: parseClass(`void tf241_0(std::stack<unsigned short>::iterator v);
void tf241_1(std::stack<unsigned long>::iterator v);
void tf241_2(std::stack<unsigned long long>::iterator v);
void tf241_3(std::stack<int *>::iterator v);
void tf241_4(std::queue<std::string> v);`),
        funcs: parseFunction(`void tf241_0(std::stack<unsigned short>::iterator v);
void tf241_1(std::stack<unsigned long>::iterator v);
void tf241_2(std::stack<unsigned long long>::iterator v);
void tf241_3(std::stack<int *>::iterator v);
void tf241_4(std::queue<std::string> v);`),
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
        `h2dtscpp_gen_0241 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0241 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0242
  * @tc.name : h2dtscpp_gen_0242
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::queue<char *>, std::queue<long long>, std::queue<unsign... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0242', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf242_0(std::queue<char *> v);
void tf242_1(std::queue<long long> v);
void tf242_2(std::queue<unsigned short> v);
void tf242_3(std::queue<unsigned long> v);
void tf242_4(std::queue<unsigned long long> v);`),
        unions: parseUnion(`void tf242_0(std::queue<char *> v);
void tf242_1(std::queue<long long> v);
void tf242_2(std::queue<unsigned short> v);
void tf242_3(std::queue<unsigned long> v);
void tf242_4(std::queue<unsigned long long> v);`),
        structs: parseStruct(`void tf242_0(std::queue<char *> v);
void tf242_1(std::queue<long long> v);
void tf242_2(std::queue<unsigned short> v);
void tf242_3(std::queue<unsigned long> v);
void tf242_4(std::queue<unsigned long long> v);`),
        classes: parseClass(`void tf242_0(std::queue<char *> v);
void tf242_1(std::queue<long long> v);
void tf242_2(std::queue<unsigned short> v);
void tf242_3(std::queue<unsigned long> v);
void tf242_4(std::queue<unsigned long long> v);`),
        funcs: parseFunction(`void tf242_0(std::queue<char *> v);
void tf242_1(std::queue<long long> v);
void tf242_2(std::queue<unsigned short> v);
void tf242_3(std::queue<unsigned long> v);
void tf242_4(std::queue<unsigned long long> v);`),
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
        `h2dtscpp_gen_0242 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0242 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0243
  * @tc.name : h2dtscpp_gen_0243
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::queue<int *>, std::queue<std::string>::iterator, std::q... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0243', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf243_0(std::queue<int *> v);
void tf243_1(std::queue<std::string>::iterator v);
void tf243_2(std::queue<char *>::iterator v);
void tf243_3(std::queue<long long>::iterator v);
void tf243_4(std::queue<unsigned short>::iterator v);`),
        unions: parseUnion(`void tf243_0(std::queue<int *> v);
void tf243_1(std::queue<std::string>::iterator v);
void tf243_2(std::queue<char *>::iterator v);
void tf243_3(std::queue<long long>::iterator v);
void tf243_4(std::queue<unsigned short>::iterator v);`),
        structs: parseStruct(`void tf243_0(std::queue<int *> v);
void tf243_1(std::queue<std::string>::iterator v);
void tf243_2(std::queue<char *>::iterator v);
void tf243_3(std::queue<long long>::iterator v);
void tf243_4(std::queue<unsigned short>::iterator v);`),
        classes: parseClass(`void tf243_0(std::queue<int *> v);
void tf243_1(std::queue<std::string>::iterator v);
void tf243_2(std::queue<char *>::iterator v);
void tf243_3(std::queue<long long>::iterator v);
void tf243_4(std::queue<unsigned short>::iterator v);`),
        funcs: parseFunction(`void tf243_0(std::queue<int *> v);
void tf243_1(std::queue<std::string>::iterator v);
void tf243_2(std::queue<char *>::iterator v);
void tf243_3(std::queue<long long>::iterator v);
void tf243_4(std::queue<unsigned short>::iterator v);`),
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
        `h2dtscpp_gen_0243 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0243 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0244
  * @tc.name : h2dtscpp_gen_0244
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::queue<unsigned long>::iterator, std::queue<unsigned lon... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0244', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf244_0(std::queue<unsigned long>::iterator v);
void tf244_1(std::queue<unsigned long long>::iterator v);
void tf244_2(std::queue<int *>::iterator v);
void tf244_3(std::valarray<std::string> v);
void tf244_4(std::valarray<char *> v);`),
        unions: parseUnion(`void tf244_0(std::queue<unsigned long>::iterator v);
void tf244_1(std::queue<unsigned long long>::iterator v);
void tf244_2(std::queue<int *>::iterator v);
void tf244_3(std::valarray<std::string> v);
void tf244_4(std::valarray<char *> v);`),
        structs: parseStruct(`void tf244_0(std::queue<unsigned long>::iterator v);
void tf244_1(std::queue<unsigned long long>::iterator v);
void tf244_2(std::queue<int *>::iterator v);
void tf244_3(std::valarray<std::string> v);
void tf244_4(std::valarray<char *> v);`),
        classes: parseClass(`void tf244_0(std::queue<unsigned long>::iterator v);
void tf244_1(std::queue<unsigned long long>::iterator v);
void tf244_2(std::queue<int *>::iterator v);
void tf244_3(std::valarray<std::string> v);
void tf244_4(std::valarray<char *> v);`),
        funcs: parseFunction(`void tf244_0(std::queue<unsigned long>::iterator v);
void tf244_1(std::queue<unsigned long long>::iterator v);
void tf244_2(std::queue<int *>::iterator v);
void tf244_3(std::valarray<std::string> v);
void tf244_4(std::valarray<char *> v);`),
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
        `h2dtscpp_gen_0244 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0244 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0245
  * @tc.name : h2dtscpp_gen_0245
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::valarray<long long>, std::valarray<unsigned short>, std... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0245', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf245_0(std::valarray<long long> v);
void tf245_1(std::valarray<unsigned short> v);
void tf245_2(std::valarray<unsigned long> v);
void tf245_3(std::valarray<unsigned long long> v);
void tf245_4(std::valarray<int *> v);`),
        unions: parseUnion(`void tf245_0(std::valarray<long long> v);
void tf245_1(std::valarray<unsigned short> v);
void tf245_2(std::valarray<unsigned long> v);
void tf245_3(std::valarray<unsigned long long> v);
void tf245_4(std::valarray<int *> v);`),
        structs: parseStruct(`void tf245_0(std::valarray<long long> v);
void tf245_1(std::valarray<unsigned short> v);
void tf245_2(std::valarray<unsigned long> v);
void tf245_3(std::valarray<unsigned long long> v);
void tf245_4(std::valarray<int *> v);`),
        classes: parseClass(`void tf245_0(std::valarray<long long> v);
void tf245_1(std::valarray<unsigned short> v);
void tf245_2(std::valarray<unsigned long> v);
void tf245_3(std::valarray<unsigned long long> v);
void tf245_4(std::valarray<int *> v);`),
        funcs: parseFunction(`void tf245_0(std::valarray<long long> v);
void tf245_1(std::valarray<unsigned short> v);
void tf245_2(std::valarray<unsigned long> v);
void tf245_3(std::valarray<unsigned long long> v);
void tf245_4(std::valarray<int *> v);`),
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
        `h2dtscpp_gen_0245 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0245 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0246
  * @tc.name : h2dtscpp_gen_0246
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::valarray<std::string>::iterator, std::valarray<char *>:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0246', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf246_0(std::valarray<std::string>::iterator v);
void tf246_1(std::valarray<char *>::iterator v);
void tf246_2(std::valarray<long long>::iterator v);
void tf246_3(std::valarray<unsigned short>::iterator v);
void tf246_4(std::valarray<unsigned long>::iterator v);`),
        unions: parseUnion(`void tf246_0(std::valarray<std::string>::iterator v);
void tf246_1(std::valarray<char *>::iterator v);
void tf246_2(std::valarray<long long>::iterator v);
void tf246_3(std::valarray<unsigned short>::iterator v);
void tf246_4(std::valarray<unsigned long>::iterator v);`),
        structs: parseStruct(`void tf246_0(std::valarray<std::string>::iterator v);
void tf246_1(std::valarray<char *>::iterator v);
void tf246_2(std::valarray<long long>::iterator v);
void tf246_3(std::valarray<unsigned short>::iterator v);
void tf246_4(std::valarray<unsigned long>::iterator v);`),
        classes: parseClass(`void tf246_0(std::valarray<std::string>::iterator v);
void tf246_1(std::valarray<char *>::iterator v);
void tf246_2(std::valarray<long long>::iterator v);
void tf246_3(std::valarray<unsigned short>::iterator v);
void tf246_4(std::valarray<unsigned long>::iterator v);`),
        funcs: parseFunction(`void tf246_0(std::valarray<std::string>::iterator v);
void tf246_1(std::valarray<char *>::iterator v);
void tf246_2(std::valarray<long long>::iterator v);
void tf246_3(std::valarray<unsigned short>::iterator v);
void tf246_4(std::valarray<unsigned long>::iterator v);`),
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
        `h2dtscpp_gen_0246 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0246 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0247
  * @tc.name : h2dtscpp_gen_0247
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::valarray<unsigned long long>::iterator, std::valarray<i... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0247', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf247_0(std::valarray<unsigned long long>::iterator v);
void tf247_1(std::valarray<int *>::iterator v);
void tf247_2(std::priority_queue<std::string> v);
void tf247_3(std::priority_queue<char *> v);
void tf247_4(std::priority_queue<long long> v);`),
        unions: parseUnion(`void tf247_0(std::valarray<unsigned long long>::iterator v);
void tf247_1(std::valarray<int *>::iterator v);
void tf247_2(std::priority_queue<std::string> v);
void tf247_3(std::priority_queue<char *> v);
void tf247_4(std::priority_queue<long long> v);`),
        structs: parseStruct(`void tf247_0(std::valarray<unsigned long long>::iterator v);
void tf247_1(std::valarray<int *>::iterator v);
void tf247_2(std::priority_queue<std::string> v);
void tf247_3(std::priority_queue<char *> v);
void tf247_4(std::priority_queue<long long> v);`),
        classes: parseClass(`void tf247_0(std::valarray<unsigned long long>::iterator v);
void tf247_1(std::valarray<int *>::iterator v);
void tf247_2(std::priority_queue<std::string> v);
void tf247_3(std::priority_queue<char *> v);
void tf247_4(std::priority_queue<long long> v);`),
        funcs: parseFunction(`void tf247_0(std::valarray<unsigned long long>::iterator v);
void tf247_1(std::valarray<int *>::iterator v);
void tf247_2(std::priority_queue<std::string> v);
void tf247_3(std::priority_queue<char *> v);
void tf247_4(std::priority_queue<long long> v);`),
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
        `h2dtscpp_gen_0247 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0247 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0248
  * @tc.name : h2dtscpp_gen_0248
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::priority_queue<unsigned short>, std::priority_queue<uns... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0248', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf248_0(std::priority_queue<unsigned short> v);
void tf248_1(std::priority_queue<unsigned long> v);
void tf248_2(std::priority_queue<unsigned long long> v);
void tf248_3(std::priority_queue<int *> v);
void tf248_4(std::priority_queue<std::string>::iterator v);`),
        unions: parseUnion(`void tf248_0(std::priority_queue<unsigned short> v);
void tf248_1(std::priority_queue<unsigned long> v);
void tf248_2(std::priority_queue<unsigned long long> v);
void tf248_3(std::priority_queue<int *> v);
void tf248_4(std::priority_queue<std::string>::iterator v);`),
        structs: parseStruct(`void tf248_0(std::priority_queue<unsigned short> v);
void tf248_1(std::priority_queue<unsigned long> v);
void tf248_2(std::priority_queue<unsigned long long> v);
void tf248_3(std::priority_queue<int *> v);
void tf248_4(std::priority_queue<std::string>::iterator v);`),
        classes: parseClass(`void tf248_0(std::priority_queue<unsigned short> v);
void tf248_1(std::priority_queue<unsigned long> v);
void tf248_2(std::priority_queue<unsigned long long> v);
void tf248_3(std::priority_queue<int *> v);
void tf248_4(std::priority_queue<std::string>::iterator v);`),
        funcs: parseFunction(`void tf248_0(std::priority_queue<unsigned short> v);
void tf248_1(std::priority_queue<unsigned long> v);
void tf248_2(std::priority_queue<unsigned long long> v);
void tf248_3(std::priority_queue<int *> v);
void tf248_4(std::priority_queue<std::string>::iterator v);`),
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
        `h2dtscpp_gen_0248 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0248 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0249
  * @tc.name : h2dtscpp_gen_0249
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::priority_queue<char *>::iterator, std::priority_queue<l... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0249', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf249_0(std::priority_queue<char *>::iterator v);
void tf249_1(std::priority_queue<long long>::iterator v);
void tf249_2(std::priority_queue<unsigned short>::iterator v);
void tf249_3(std::priority_queue<unsigned long>::iterator v);
void tf249_4(std::priority_queue<unsigned long long>::iterator v);`),
        unions: parseUnion(`void tf249_0(std::priority_queue<char *>::iterator v);
void tf249_1(std::priority_queue<long long>::iterator v);
void tf249_2(std::priority_queue<unsigned short>::iterator v);
void tf249_3(std::priority_queue<unsigned long>::iterator v);
void tf249_4(std::priority_queue<unsigned long long>::iterator v);`),
        structs: parseStruct(`void tf249_0(std::priority_queue<char *>::iterator v);
void tf249_1(std::priority_queue<long long>::iterator v);
void tf249_2(std::priority_queue<unsigned short>::iterator v);
void tf249_3(std::priority_queue<unsigned long>::iterator v);
void tf249_4(std::priority_queue<unsigned long long>::iterator v);`),
        classes: parseClass(`void tf249_0(std::priority_queue<char *>::iterator v);
void tf249_1(std::priority_queue<long long>::iterator v);
void tf249_2(std::priority_queue<unsigned short>::iterator v);
void tf249_3(std::priority_queue<unsigned long>::iterator v);
void tf249_4(std::priority_queue<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void tf249_0(std::priority_queue<char *>::iterator v);
void tf249_1(std::priority_queue<long long>::iterator v);
void tf249_2(std::priority_queue<unsigned short>::iterator v);
void tf249_3(std::priority_queue<unsigned long>::iterator v);
void tf249_4(std::priority_queue<unsigned long long>::iterator v);`),
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
        `h2dtscpp_gen_0249 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0249 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0250
  * @tc.name : h2dtscpp_gen_0250
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::priority_queue<int *>::iterator, std::map<std::string, ... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0250', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf250_0(std::priority_queue<int *>::iterator v);
void tf250_1(std::map<std::string, int> v);
void tf250_2(std::map<charb *, size_t> v);
void tf250_3(std::map<std::string, long long> v);
void tf250_4(std::map<char *, int *> v);`),
        unions: parseUnion(`void tf250_0(std::priority_queue<int *>::iterator v);
void tf250_1(std::map<std::string, int> v);
void tf250_2(std::map<charb *, size_t> v);
void tf250_3(std::map<std::string, long long> v);
void tf250_4(std::map<char *, int *> v);`),
        structs: parseStruct(`void tf250_0(std::priority_queue<int *>::iterator v);
void tf250_1(std::map<std::string, int> v);
void tf250_2(std::map<charb *, size_t> v);
void tf250_3(std::map<std::string, long long> v);
void tf250_4(std::map<char *, int *> v);`),
        classes: parseClass(`void tf250_0(std::priority_queue<int *>::iterator v);
void tf250_1(std::map<std::string, int> v);
void tf250_2(std::map<charb *, size_t> v);
void tf250_3(std::map<std::string, long long> v);
void tf250_4(std::map<char *, int *> v);`),
        funcs: parseFunction(`void tf250_0(std::priority_queue<int *>::iterator v);
void tf250_1(std::map<std::string, int> v);
void tf250_2(std::map<charb *, size_t> v);
void tf250_3(std::map<std::string, long long> v);
void tf250_4(std::map<char *, int *> v);`),
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
        `h2dtscpp_gen_0250 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0250 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0251
  * @tc.name : h2dtscpp_gen_0251
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::map<char *, unsigned long long>, std::map<std::string, ... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0251', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf251_0(std::map<char *, unsigned long long> v);
void tf251_1(std::map<std::string, unsigned short> v);
void tf251_2(std::map<int *, std::string> v);
void tf251_3(std::map<double, char *> v);
void tf251_4(std::map<int *, char> v);`),
        unions: parseUnion(`void tf251_0(std::map<char *, unsigned long long> v);
void tf251_1(std::map<std::string, unsigned short> v);
void tf251_2(std::map<int *, std::string> v);
void tf251_3(std::map<double, char *> v);
void tf251_4(std::map<int *, char> v);`),
        structs: parseStruct(`void tf251_0(std::map<char *, unsigned long long> v);
void tf251_1(std::map<std::string, unsigned short> v);
void tf251_2(std::map<int *, std::string> v);
void tf251_3(std::map<double, char *> v);
void tf251_4(std::map<int *, char> v);`),
        classes: parseClass(`void tf251_0(std::map<char *, unsigned long long> v);
void tf251_1(std::map<std::string, unsigned short> v);
void tf251_2(std::map<int *, std::string> v);
void tf251_3(std::map<double, char *> v);
void tf251_4(std::map<int *, char> v);`),
        funcs: parseFunction(`void tf251_0(std::map<char *, unsigned long long> v);
void tf251_1(std::map<std::string, unsigned short> v);
void tf251_2(std::map<int *, std::string> v);
void tf251_3(std::map<double, char *> v);
void tf251_4(std::map<int *, char> v);`),
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
        `h2dtscpp_gen_0251 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0251 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0252
  * @tc.name : h2dtscpp_gen_0252
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::map<std::string, int>::iterator, std::map<charb *, size... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0252', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf252_0(std::map<std::string, int>::iterator v);
void tf252_1(std::map<charb *, size_t>::iterator v);
void tf252_2(std::map<std::string, long long>::iterator v);
void tf252_3(std::map<char *, int *>::iterator v);
void tf252_4(std::map<char *, unsigned long long>::iterator v);`),
        unions: parseUnion(`void tf252_0(std::map<std::string, int>::iterator v);
void tf252_1(std::map<charb *, size_t>::iterator v);
void tf252_2(std::map<std::string, long long>::iterator v);
void tf252_3(std::map<char *, int *>::iterator v);
void tf252_4(std::map<char *, unsigned long long>::iterator v);`),
        structs: parseStruct(`void tf252_0(std::map<std::string, int>::iterator v);
void tf252_1(std::map<charb *, size_t>::iterator v);
void tf252_2(std::map<std::string, long long>::iterator v);
void tf252_3(std::map<char *, int *>::iterator v);
void tf252_4(std::map<char *, unsigned long long>::iterator v);`),
        classes: parseClass(`void tf252_0(std::map<std::string, int>::iterator v);
void tf252_1(std::map<charb *, size_t>::iterator v);
void tf252_2(std::map<std::string, long long>::iterator v);
void tf252_3(std::map<char *, int *>::iterator v);
void tf252_4(std::map<char *, unsigned long long>::iterator v);`),
        funcs: parseFunction(`void tf252_0(std::map<std::string, int>::iterator v);
void tf252_1(std::map<charb *, size_t>::iterator v);
void tf252_2(std::map<std::string, long long>::iterator v);
void tf252_3(std::map<char *, int *>::iterator v);
void tf252_4(std::map<char *, unsigned long long>::iterator v);`),
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
        `h2dtscpp_gen_0252 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0252 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0253
  * @tc.name : h2dtscpp_gen_0253
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::map<std::string, unsigned short>::iterator, std::map<in... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0253', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf253_0(std::map<std::string, unsigned short>::iterator v);
void tf253_1(std::map<int *, std::string>::iterator v);
void tf253_2(std::map<double, char *>::iterator v);
void tf253_3(std::map<int *, char>::iterator v);
void tf253_4(std::unordered_map<std::string, int> v);`),
        unions: parseUnion(`void tf253_0(std::map<std::string, unsigned short>::iterator v);
void tf253_1(std::map<int *, std::string>::iterator v);
void tf253_2(std::map<double, char *>::iterator v);
void tf253_3(std::map<int *, char>::iterator v);
void tf253_4(std::unordered_map<std::string, int> v);`),
        structs: parseStruct(`void tf253_0(std::map<std::string, unsigned short>::iterator v);
void tf253_1(std::map<int *, std::string>::iterator v);
void tf253_2(std::map<double, char *>::iterator v);
void tf253_3(std::map<int *, char>::iterator v);
void tf253_4(std::unordered_map<std::string, int> v);`),
        classes: parseClass(`void tf253_0(std::map<std::string, unsigned short>::iterator v);
void tf253_1(std::map<int *, std::string>::iterator v);
void tf253_2(std::map<double, char *>::iterator v);
void tf253_3(std::map<int *, char>::iterator v);
void tf253_4(std::unordered_map<std::string, int> v);`),
        funcs: parseFunction(`void tf253_0(std::map<std::string, unsigned short>::iterator v);
void tf253_1(std::map<int *, std::string>::iterator v);
void tf253_2(std::map<double, char *>::iterator v);
void tf253_3(std::map<int *, char>::iterator v);
void tf253_4(std::unordered_map<std::string, int> v);`),
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
        `h2dtscpp_gen_0253 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0253 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0254
  * @tc.name : h2dtscpp_gen_0254
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_map<charb *, size_t>, std::unordered_map<std:... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0254', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf254_0(std::unordered_map<charb *, size_t> v);
void tf254_1(std::unordered_map<std::string, long long> v);
void tf254_2(std::unordered_map<char *, int *> v);
void tf254_3(std::unordered_map<char *, unsigned long long> v);
void tf254_4(std::unordered_map<std::string, unsigned short> v);`),
        unions: parseUnion(`void tf254_0(std::unordered_map<charb *, size_t> v);
void tf254_1(std::unordered_map<std::string, long long> v);
void tf254_2(std::unordered_map<char *, int *> v);
void tf254_3(std::unordered_map<char *, unsigned long long> v);
void tf254_4(std::unordered_map<std::string, unsigned short> v);`),
        structs: parseStruct(`void tf254_0(std::unordered_map<charb *, size_t> v);
void tf254_1(std::unordered_map<std::string, long long> v);
void tf254_2(std::unordered_map<char *, int *> v);
void tf254_3(std::unordered_map<char *, unsigned long long> v);
void tf254_4(std::unordered_map<std::string, unsigned short> v);`),
        classes: parseClass(`void tf254_0(std::unordered_map<charb *, size_t> v);
void tf254_1(std::unordered_map<std::string, long long> v);
void tf254_2(std::unordered_map<char *, int *> v);
void tf254_3(std::unordered_map<char *, unsigned long long> v);
void tf254_4(std::unordered_map<std::string, unsigned short> v);`),
        funcs: parseFunction(`void tf254_0(std::unordered_map<charb *, size_t> v);
void tf254_1(std::unordered_map<std::string, long long> v);
void tf254_2(std::unordered_map<char *, int *> v);
void tf254_3(std::unordered_map<char *, unsigned long long> v);
void tf254_4(std::unordered_map<std::string, unsigned short> v);`),
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
        `h2dtscpp_gen_0254 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0255
  * @tc.name : h2dtscpp_gen_0255
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_map<int *, std::string>, std::unordered_map<d... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0255', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf255_0(std::unordered_map<int *, std::string> v);
void tf255_1(std::unordered_map<double, char *> v);
void tf255_2(std::unordered_map<int *, char> v);
void tf255_3(std::unordered_map<std::string, int>::iterator v);
void tf255_4(std::unordered_map<charb *, size_t>::iterator v);`),
        unions: parseUnion(`void tf255_0(std::unordered_map<int *, std::string> v);
void tf255_1(std::unordered_map<double, char *> v);
void tf255_2(std::unordered_map<int *, char> v);
void tf255_3(std::unordered_map<std::string, int>::iterator v);
void tf255_4(std::unordered_map<charb *, size_t>::iterator v);`),
        structs: parseStruct(`void tf255_0(std::unordered_map<int *, std::string> v);
void tf255_1(std::unordered_map<double, char *> v);
void tf255_2(std::unordered_map<int *, char> v);
void tf255_3(std::unordered_map<std::string, int>::iterator v);
void tf255_4(std::unordered_map<charb *, size_t>::iterator v);`),
        classes: parseClass(`void tf255_0(std::unordered_map<int *, std::string> v);
void tf255_1(std::unordered_map<double, char *> v);
void tf255_2(std::unordered_map<int *, char> v);
void tf255_3(std::unordered_map<std::string, int>::iterator v);
void tf255_4(std::unordered_map<charb *, size_t>::iterator v);`),
        funcs: parseFunction(`void tf255_0(std::unordered_map<int *, std::string> v);
void tf255_1(std::unordered_map<double, char *> v);
void tf255_2(std::unordered_map<int *, char> v);
void tf255_3(std::unordered_map<std::string, int>::iterator v);
void tf255_4(std::unordered_map<charb *, size_t>::iterator v);`),
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
        `h2dtscpp_gen_0255 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0256
  * @tc.name : h2dtscpp_gen_0256
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_map<std::string, long long>::iterator, std::u... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0256', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf256_0(std::unordered_map<std::string, long long>::iterator v);
void tf256_1(std::unordered_map<char *, int *>::iterator v);
void tf256_2(std::unordered_map<char *, unsigned long long>::iterator v);
void tf256_3(std::unordered_map<std::string, unsigned short>::iterator v);
void tf256_4(std::unordered_map<int *, std::string>::iterator v);`),
        unions: parseUnion(`void tf256_0(std::unordered_map<std::string, long long>::iterator v);
void tf256_1(std::unordered_map<char *, int *>::iterator v);
void tf256_2(std::unordered_map<char *, unsigned long long>::iterator v);
void tf256_3(std::unordered_map<std::string, unsigned short>::iterator v);
void tf256_4(std::unordered_map<int *, std::string>::iterator v);`),
        structs: parseStruct(`void tf256_0(std::unordered_map<std::string, long long>::iterator v);
void tf256_1(std::unordered_map<char *, int *>::iterator v);
void tf256_2(std::unordered_map<char *, unsigned long long>::iterator v);
void tf256_3(std::unordered_map<std::string, unsigned short>::iterator v);
void tf256_4(std::unordered_map<int *, std::string>::iterator v);`),
        classes: parseClass(`void tf256_0(std::unordered_map<std::string, long long>::iterator v);
void tf256_1(std::unordered_map<char *, int *>::iterator v);
void tf256_2(std::unordered_map<char *, unsigned long long>::iterator v);
void tf256_3(std::unordered_map<std::string, unsigned short>::iterator v);
void tf256_4(std::unordered_map<int *, std::string>::iterator v);`),
        funcs: parseFunction(`void tf256_0(std::unordered_map<std::string, long long>::iterator v);
void tf256_1(std::unordered_map<char *, int *>::iterator v);
void tf256_2(std::unordered_map<char *, unsigned long long>::iterator v);
void tf256_3(std::unordered_map<std::string, unsigned short>::iterator v);
void tf256_4(std::unordered_map<int *, std::string>::iterator v);`),
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
        `h2dtscpp_gen_0256 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0256 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0257
  * @tc.name : h2dtscpp_gen_0257
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::unordered_map<double, char *>::iterator, std::unordered... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0257', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf257_0(std::unordered_map<double, char *>::iterator v);
void tf257_1(std::unordered_map<int *, char>::iterator v);
void tf257_2(std::multimap<std::string, int> v);
void tf257_3(std::multimap<charb *, size_t> v);
void tf257_4(std::multimap<std::string, long long> v);`),
        unions: parseUnion(`void tf257_0(std::unordered_map<double, char *>::iterator v);
void tf257_1(std::unordered_map<int *, char>::iterator v);
void tf257_2(std::multimap<std::string, int> v);
void tf257_3(std::multimap<charb *, size_t> v);
void tf257_4(std::multimap<std::string, long long> v);`),
        structs: parseStruct(`void tf257_0(std::unordered_map<double, char *>::iterator v);
void tf257_1(std::unordered_map<int *, char>::iterator v);
void tf257_2(std::multimap<std::string, int> v);
void tf257_3(std::multimap<charb *, size_t> v);
void tf257_4(std::multimap<std::string, long long> v);`),
        classes: parseClass(`void tf257_0(std::unordered_map<double, char *>::iterator v);
void tf257_1(std::unordered_map<int *, char>::iterator v);
void tf257_2(std::multimap<std::string, int> v);
void tf257_3(std::multimap<charb *, size_t> v);
void tf257_4(std::multimap<std::string, long long> v);`),
        funcs: parseFunction(`void tf257_0(std::unordered_map<double, char *>::iterator v);
void tf257_1(std::unordered_map<int *, char>::iterator v);
void tf257_2(std::multimap<std::string, int> v);
void tf257_3(std::multimap<charb *, size_t> v);
void tf257_4(std::multimap<std::string, long long> v);`),
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
        `h2dtscpp_gen_0257 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0257 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0258
  * @tc.name : h2dtscpp_gen_0258
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::multimap<char *, int *>, std::multimap<char *, unsigned... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
});
