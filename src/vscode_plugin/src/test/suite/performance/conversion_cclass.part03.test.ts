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
import { getDtsFunction, getDtsClasses, getDtsStructs, getDtsEnum, getDtsUnions, genDtsFile } from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import { GenInfo, ParseObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse/gen：同一输入执行 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;      // 执行 10 次 ≤ 6s（实测约 0.1~3s/用例）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_C_Class_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Class_Suite part03.');

  /**
  * @tc.number c_class_0065
  * @tc.name c_class_0065
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（uint64_t/std::string/string/std::wstring/long/void 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0065', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM037 {
    uint64_t m0;
    std::string m1;
    string m2;
    std::wstring m3;
    long double m4;
    void m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM037');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'string');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'long double');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'void');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0065 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0066
  * @tc.name c_class_0066
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::vector<int>/std::vector<std::string>/std::vector<double>/std::vector<bool>/std::map<std::string,int>/std::map<int,std::string> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0066', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM038 {
    std::vector<int> m0;
    std::vector<std::string> m1;
    std::vector<double> m2;
    std::vector<bool> m3;
    std::map<std::string,int> m4;
    std::map<int,std::string> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM038');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0066 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0067
  * @tc.name c_class_0067
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::set<int>/std::set<std::string>/std::list<int>/std::list<std::string>/std::deque<int>/std::deque<std::string> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0067', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM039 {
    std::set<int> m0;
    std::set<std::string> m1;
    std::list<int> m2;
    std::list<std::string> m3;
    std::deque<int> m4;
    std::deque<std::string> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM039');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::list<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::deque<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0067 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0068
  * @tc.name c_class_0068
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::pair<int,int>/std::pair<std::string,int>/std::tuple<int,int,int>/std::tuple<std::string,int,double>/std::queue<int>/std::stack<int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0068', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM040 {
    std::pair<int,int> m0;
    std::pair<std::string,int> m1;
    std::tuple<int,int,int> m2;
    std::tuple<std::string,int,double> m3;
    std::queue<int> m4;
    std::stack<int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM040');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::pair<int,int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::pair<std::string,int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::tuple<int,int,int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::queue<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::stack<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0068 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0069
  * @tc.name c_class_0069
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::priority_queue<int>/std::multimap<int,int>/std::multiset<int>/std::unordered_map<std::string,int>/std::unordered_set<int>/std::unordered_multimap<int,int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0069', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM041 {
    std::priority_queue<int> m0;
    std::multimap<int,int> m1;
    std::multiset<int> m2;
    std::unordered_map<std::string,int> m3;
    std::unordered_set<int> m4;
    std::unordered_multimap<int,int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM041');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::multimap<int,int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::unordered_map<std::string,int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::unordered_set<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::unordered_multimap<int,int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0069 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0070
  * @tc.name c_class_0070
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::unordered_multiset<int>/std::array<int,10>/std::array<std::string,5>/std::forward_list<int>/std::valarray<double>/std::complex<double> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0070', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM042 {
    std::unordered_multiset<int> m0;
    std::array<int,10> m1;
    std::array<std::string,5> m2;
    std::forward_list<int> m3;
    std::valarray<double> m4;
    std::complex<double> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM042');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::unordered_multiset<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::array<int,10>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::array<std::string,5>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::forward_list<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::valarray<double>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::complex<double>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0070 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0070 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0071
  * @tc.name c_class_0071
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::function<int(int,int)>/std::function<void(std::string)>/int/char/short/long 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0071', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM043 {
    std::function<int(int,int)> m0;
    std::function<void(std::string)> m1;
    int m2;
    char m3;
    short m4;
    long m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM043');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::function<int(int,int)>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::function<void(std::string)>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'int');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'char');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'short');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'long');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0071 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0072
  * @tc.name c_class_0072
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（long/float/double/bool/unsigned/unsigned 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0072', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM044 {
    long long m0;
    float m1;
    double m2;
    bool m3;
    unsigned int m4;
    unsigned char m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM044');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'long long');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'float');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'double');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'bool');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'unsigned char');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0072 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0073
  * @tc.name c_class_0073
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/unsigned/unsigned/signed/signed/signed 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0073', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM045 {
    unsigned short m0;
    unsigned long m1;
    unsigned long long m2;
    signed char m3;
    signed short m4;
    signed long m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM045');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'signed char');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'signed short');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'signed long');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0073 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0074
  * @tc.name c_class_0074
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（wchar_t/char16_t/char32_t/size_t/int8_t/int16_t 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0074', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM046 {
    wchar_t m0;
    char16_t m1;
    char32_t m2;
    size_t m3;
    int8_t m4;
    int16_t m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM046');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'size_t');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'int16_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0074 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0075
  * @tc.name c_class_0075
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（int32_t/int64_t/uint8_t/uint16_t/uint32_t/uint64_t 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0075', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM047 {
    int32_t m0;
    int64_t m1;
    uint8_t m2;
    uint16_t m3;
    uint32_t m4;
    uint64_t m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM047');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'uint64_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0075 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0076
  * @tc.name c_class_0076
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::string/string/std::wstring/long/void/std::vector<int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0076', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM048 {
    std::string m0;
    string m1;
    std::wstring m2;
    long double m3;
    void m4;
    std::vector<int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM048');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::string');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'string');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'long double');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'void');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::vector<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0076 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0077
  * @tc.name c_class_0077
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::vector<std::string>/std::vector<double>/std::vector<bool>/std::map<std::string,int>/std::map<int,std::string>/std::set<int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0077', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM049 {
    std::vector<std::string> m0;
    std::vector<double> m1;
    std::vector<bool> m2;
    std::map<std::string,int> m3;
    std::map<int,std::string> m4;
    std::set<int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM049');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::set<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0077 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0078
  * @tc.name c_class_0078
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::set<std::string>/std::list<int>/std::list<std::string>/std::deque<int>/std::deque<std::string>/std::pair<int,int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0078', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM050 {
    std::set<std::string> m0;
    std::list<int> m1;
    std::list<std::string> m2;
    std::deque<int> m3;
    std::deque<std::string> m4;
    std::pair<int,int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM050');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::list<int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::deque<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::pair<int,int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0078 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0079
  * @tc.name c_class_0079
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::pair<std::string,int>/std::tuple<int,int,int>/std::tuple<std::string,int,double>/std::queue<int>/std::stack<int>/std::priority_queue<int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0079', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM051 {
    std::pair<std::string,int> m0;
    std::tuple<int,int,int> m1;
    std::tuple<std::string,int,double> m2;
    std::queue<int> m3;
    std::stack<int> m4;
    std::priority_queue<int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM051');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::pair<std::string,int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::tuple<int,int,int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::queue<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::stack<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0079 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0080
  * @tc.name c_class_0080
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::multimap<int,int>/std::multiset<int>/std::unordered_map<std::string,int>/std::unordered_set<int>/std::unordered_multimap<int,int>/std::unordered_multiset<int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0080', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM052 {
    std::multimap<int,int> m0;
    std::multiset<int> m1;
    std::unordered_map<std::string,int> m2;
    std::unordered_set<int> m3;
    std::unordered_multimap<int,int> m4;
    std::unordered_multiset<int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM052');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::multimap<int,int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::unordered_map<std::string,int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::unordered_set<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::unordered_multimap<int,int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::unordered_multiset<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0080 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0081
  * @tc.name c_class_0081
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::array<int,10>/std::array<std::string,5>/std::forward_list<int>/std::valarray<double>/std::complex<double>/std::function<int(int,int)> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0081', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM053 {
    std::array<int,10> m0;
    std::array<std::string,5> m1;
    std::forward_list<int> m2;
    std::valarray<double> m3;
    std::complex<double> m4;
    std::function<int(int,int)> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM053');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::array<int,10>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::array<std::string,5>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::forward_list<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::valarray<double>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::complex<double>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::function<int(int,int)>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0081 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0082
  * @tc.name c_class_0082
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::function<void(std::string)>/int/char/short/long/long 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0082', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM054 {
    std::function<void(std::string)> m0;
    int m1;
    char m2;
    short m3;
    long m4;
    long long m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM054');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::function<void(std::string)>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'int');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'char');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'short');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'long');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'long long');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0082 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0083
  * @tc.name c_class_0083
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（float/double/bool/unsigned/unsigned/unsigned 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0083', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM055 {
    float m0;
    double m1;
    bool m2;
    unsigned int m3;
    unsigned char m4;
    unsigned short m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM055');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'float');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'bool');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'unsigned short');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0083 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0084
  * @tc.name c_class_0084
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/unsigned/signed/signed/signed/wchar_t 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0084', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM056 {
    unsigned long m0;
    unsigned long long m1;
    signed char m2;
    signed short m3;
    signed long m4;
    wchar_t m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM056');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'signed char');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'signed short');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'signed long');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'wchar_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0084 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0085
  * @tc.name c_class_0085
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（char16_t/char32_t/size_t/int8_t/int16_t/int32_t 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0085', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM057 {
    char16_t m0;
    char32_t m1;
    size_t m2;
    int8_t m3;
    int16_t m4;
    int32_t m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM057');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'size_t');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'int32_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0085 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0086
  * @tc.name c_class_0086
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（int64_t/uint8_t/uint16_t/uint32_t/uint64_t/std::string 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0086', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM058 {
    int64_t m0;
    uint8_t m1;
    uint16_t m2;
    uint32_t m3;
    uint64_t m4;
    std::string m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM058');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0086 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0087
  * @tc.name c_class_0087
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（string/std::wstring/long/void/std::vector<int>/std::vector<std::string> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0087', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM059 {
    string m0;
    std::wstring m1;
    long double m2;
    void m3;
    std::vector<int> m4;
    std::vector<std::string> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM059');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'string');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'long double');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'void');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0087 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0088
  * @tc.name c_class_0088
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0088', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC000 {
    std::vector<int> c0;
    std::vector<std::string> c1;
    std::vector<double> c2;
    std::vector<bool> c3;
    std::map<std::string,int> c4;
    std::map<int,std::string> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC000');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0088 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0089
  * @tc.name c_class_0089
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0089', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC001 {
    std::set<int> c0;
    std::set<std::string> c1;
    std::list<int> c2;
    std::list<std::string> c3;
    std::deque<int> c4;
    std::deque<std::string> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC001');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::list<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::deque<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0089 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0090
  * @tc.name c_class_0090
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0090', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC002 {
    std::pair<int,int> c0;
    std::pair<std::string,int> c1;
    std::tuple<int,int,int> c2;
    std::tuple<std::string,int,double> c3;
    std::queue<int> c4;
    std::stack<int> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC002');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::pair<int,int>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::pair<std::string,int>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::tuple<int,int,int>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::queue<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::stack<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0091
  * @tc.name c_class_0091
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0091', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC003 {
    std::priority_queue<int> c0;
    std::multimap<int,int> c1;
    std::multiset<int> c2;
    std::unordered_map<std::string,int> c3;
    std::unordered_set<int> c4;
    std::unordered_multimap<int,int> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC003');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::multimap<int,int>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::unordered_map<std::string,int>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::unordered_set<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::unordered_multimap<int,int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0092
  * @tc.name c_class_0092
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0092', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC004 {
    std::unordered_multiset<int> c0;
    std::array<int,10> c1;
    std::array<std::string,5> c2;
    std::forward_list<int> c3;
    std::valarray<double> c4;
    std::complex<double> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC004');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::unordered_multiset<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::array<int,10>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::array<std::string,5>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::forward_list<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::valarray<double>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::complex<double>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0093
  * @tc.name c_class_0093
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0093', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC005 {
    std::function<int(int,int)> c0;
    std::function<void(std::string)> c1;
    std::vector<int> c2;
    std::vector<std::string> c3;
    std::vector<double> c4;
    std::vector<bool> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC005');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::function<int(int,int)>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::function<void(std::string)>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0094
  * @tc.name c_class_0094
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0094', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC006 {
    std::map<std::string,int> c0;
    std::map<int,std::string> c1;
    std::set<int> c2;
    std::set<std::string> c3;
    std::list<int> c4;
    std::list<std::string> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC006');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::list<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0095
  * @tc.name c_class_0095
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0095', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC007 {
    std::deque<int> c0;
    std::deque<std::string> c1;
    std::pair<int,int> c2;
    std::pair<std::string,int> c3;
    std::tuple<int,int,int> c4;
    std::tuple<std::string,int,double> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC007');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::deque<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::pair<int,int>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::pair<std::string,int>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::tuple<int,int,int>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0095 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0096
  * @tc.name c_class_0096
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0096', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC008 {
    std::queue<int> c0;
    std::stack<int> c1;
    std::priority_queue<int> c2;
    std::multimap<int,int> c3;
    std::multiset<int> c4;
    std::unordered_map<std::string,int> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC008');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::queue<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::stack<int>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::multimap<int,int>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::unordered_map<std::string,int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0096 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0097
  * @tc.name c_class_0097
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0097', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC009 {
    std::unordered_set<int> c0;
    std::unordered_multimap<int,int> c1;
    std::unordered_multiset<int> c2;
    std::array<int,10> c3;
    std::array<std::string,5> c4;
    std::forward_list<int> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC009');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::unordered_set<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::unordered_multimap<int,int>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::unordered_multiset<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::array<int,10>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::array<std::string,5>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::forward_list<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0097 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0098
  * @tc.name c_class_0098
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0098', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC010 {
    std::valarray<double> c0;
    std::complex<double> c1;
    std::function<int(int,int)> c2;
    std::function<void(std::string)> c3;
    std::vector<int> c4;
    std::vector<std::string> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC010');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::valarray<double>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::complex<double>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::function<int(int,int)>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::function<void(std::string)>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0098 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0099
  * @tc.name c_class_0099
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0099', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC011 {
    std::vector<double> c0;
    std::vector<bool> c1;
    std::map<std::string,int> c2;
    std::map<int,std::string> c3;
    std::set<int> c4;
    std::set<std::string> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC011');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0099 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0099 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0100
  * @tc.name c_class_0100
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0100', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC012 {
    std::list<int> c0;
    std::list<std::string> c1;
    std::deque<int> c2;
    std::deque<std::string> c3;
    std::pair<int,int> c4;
    std::pair<std::string,int> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC012');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::list<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::deque<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::pair<int,int>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::pair<std::string,int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0100 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0101
  * @tc.name c_class_0101
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0101', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC013 {
    std::tuple<int,int,int> c0;
    std::tuple<std::string,int,double> c1;
    std::queue<int> c2;
    std::stack<int> c3;
    std::priority_queue<int> c4;
    std::multimap<int,int> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC013');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::tuple<int,int,int>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::queue<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::stack<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::multimap<int,int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0101 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0101 执行异常: ${String(err)}`);
    }
  });

});
