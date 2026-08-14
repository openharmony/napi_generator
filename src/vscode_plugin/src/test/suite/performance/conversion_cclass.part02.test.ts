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
  vscode.window.showInformationMessage('Start Performance_C_Class_Suite part02.');

  /**
  * @tc.number c_class_0028
  * @tc.name c_class_0028
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（int/char/short/long/long/float 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0028', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM000 {
    int m0;
    char m1;
    short m2;
    long m3;
    long long m4;
    float m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM000');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0029
  * @tc.name c_class_0029
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（double/bool/unsigned/unsigned/unsigned/unsigned 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0029', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM001 {
    double m0;
    bool m1;
    unsigned int m2;
    unsigned char m3;
    unsigned short m4;
    unsigned long m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM001');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'double');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'bool');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'unsigned long');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0030
  * @tc.name c_class_0030
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/signed/signed/signed/wchar_t/char16_t 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0030', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM002 {
    unsigned long long m0;
    signed char m1;
    signed short m2;
    signed long m3;
    wchar_t m4;
    char16_t m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM002');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'signed char');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'signed short');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'signed long');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'char16_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0031
  * @tc.name c_class_0031
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（char32_t/size_t/int8_t/int16_t/int32_t/int64_t 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0031', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM003 {
    char32_t m0;
    size_t m1;
    int8_t m2;
    int16_t m3;
    int32_t m4;
    int64_t m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM003');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'size_t');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'int64_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0032
  * @tc.name c_class_0032
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（uint8_t/uint16_t/uint32_t/uint64_t/std::string/string 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0032', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM004 {
    uint8_t m0;
    uint16_t m1;
    uint32_t m2;
    uint64_t m3;
    std::string m4;
    string m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM004');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::string');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'string');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0033
  * @tc.name c_class_0033
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::wstring/long/void/std::vector<int>/std::vector<std::string>/std::vector<double> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0033', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM005 {
    std::wstring m0;
    long double m1;
    void m2;
    std::vector<int> m3;
    std::vector<std::string> m4;
    std::vector<double> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM005');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'long double');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'void');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::vector<double>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0034
  * @tc.name c_class_0034
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::vector<bool>/std::map<std::string,int>/std::map<int,std::string>/std::set<int>/std::set<std::string>/std::list<int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0034', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM006 {
    std::vector<bool> m0;
    std::map<std::string,int> m1;
    std::map<int,std::string> m2;
    std::set<int> m3;
    std::set<std::string> m4;
    std::list<int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM006');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::list<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0035
  * @tc.name c_class_0035
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::list<std::string>/std::deque<int>/std::deque<std::string>/std::pair<int,int>/std::pair<std::string,int>/std::tuple<int,int,int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0035', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM007 {
    std::list<std::string> m0;
    std::deque<int> m1;
    std::deque<std::string> m2;
    std::pair<int,int> m3;
    std::pair<std::string,int> m4;
    std::tuple<int,int,int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM007');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::deque<int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::pair<int,int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::pair<std::string,int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::tuple<int,int,int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0036
  * @tc.name c_class_0036
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::tuple<std::string,int,double>/std::queue<int>/std::stack<int>/std::priority_queue<int>/std::multimap<int,int>/std::multiset<int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0036', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM008 {
    std::tuple<std::string,int,double> m0;
    std::queue<int> m1;
    std::stack<int> m2;
    std::priority_queue<int> m3;
    std::multimap<int,int> m4;
    std::multiset<int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM008');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::queue<int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::stack<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::multimap<int,int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0037
  * @tc.name c_class_0037
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::unordered_map<std::string,int>/std::unordered_set<int>/std::unordered_multimap<int,int>/std::unordered_multiset<int>/std::array<int,10>/std::array<std::string,5> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0037', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM009 {
    std::unordered_map<std::string,int> m0;
    std::unordered_set<int> m1;
    std::unordered_multimap<int,int> m2;
    std::unordered_multiset<int> m3;
    std::array<int,10> m4;
    std::array<std::string,5> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM009');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::unordered_map<std::string,int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::unordered_set<int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::unordered_multimap<int,int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::unordered_multiset<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::array<int,10>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::array<std::string,5>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0038
  * @tc.name c_class_0038
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::forward_list<int>/std::valarray<double>/std::complex<double>/std::function<int(int,int)>/std::function<void(std::string)>/int 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0038', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM010 {
    std::forward_list<int> m0;
    std::valarray<double> m1;
    std::complex<double> m2;
    std::function<int(int,int)> m3;
    std::function<void(std::string)> m4;
    int m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM010');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::forward_list<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::valarray<double>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::complex<double>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::function<int(int,int)>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::function<void(std::string)>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0039
  * @tc.name c_class_0039
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（char/short/long/long/float/double 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0039', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM011 {
    char m0;
    short m1;
    long m2;
    long long m3;
    float m4;
    double m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM011');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'char');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'short');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'long');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'long long');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'float');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'double');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0040
  * @tc.name c_class_0040
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（bool/unsigned/unsigned/unsigned/unsigned/unsigned 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0040', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM012 {
    bool m0;
    unsigned int m1;
    unsigned char m2;
    unsigned short m3;
    unsigned long m4;
    unsigned long long m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM012');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'bool');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'unsigned long long');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0041
  * @tc.name c_class_0041
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（signed/signed/signed/wchar_t/char16_t/char32_t 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0041', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM013 {
    signed char m0;
    signed short m1;
    signed long m2;
    wchar_t m3;
    char16_t m4;
    char32_t m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM013');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'signed char');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'signed short');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'signed long');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'char32_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0042
  * @tc.name c_class_0042
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（size_t/int8_t/int16_t/int32_t/int64_t/uint8_t 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0042', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM014 {
    size_t m0;
    int8_t m1;
    int16_t m2;
    int32_t m3;
    int64_t m4;
    uint8_t m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM014');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'size_t');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'uint8_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0043
  * @tc.name c_class_0043
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（uint16_t/uint32_t/uint64_t/std::string/string/std::wstring 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0043', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM015 {
    uint16_t m0;
    uint32_t m1;
    uint64_t m2;
    std::string m3;
    string m4;
    std::wstring m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM015');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'string');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::wstring');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0044
  * @tc.name c_class_0044
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（long/void/std::vector<int>/std::vector<std::string>/std::vector<double>/std::vector<bool> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0044', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM016 {
    long double m0;
    void m1;
    std::vector<int> m2;
    std::vector<std::string> m3;
    std::vector<double> m4;
    std::vector<bool> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM016');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'long double');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'void');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0045
  * @tc.name c_class_0045
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::map<std::string,int>/std::map<int,std::string>/std::set<int>/std::set<std::string>/std::list<int>/std::list<std::string> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0045', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM017 {
    std::map<std::string,int> m0;
    std::map<int,std::string> m1;
    std::set<int> m2;
    std::set<std::string> m3;
    std::list<int> m4;
    std::list<std::string> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM017');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::list<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0046
  * @tc.name c_class_0046
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::deque<int>/std::deque<std::string>/std::pair<int,int>/std::pair<std::string,int>/std::tuple<int,int,int>/std::tuple<std::string,int,double> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0046', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM018 {
    std::deque<int> m0;
    std::deque<std::string> m1;
    std::pair<int,int> m2;
    std::pair<std::string,int> m3;
    std::tuple<int,int,int> m4;
    std::tuple<std::string,int,double> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM018');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::deque<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::pair<int,int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::pair<std::string,int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::tuple<int,int,int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0047
  * @tc.name c_class_0047
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::queue<int>/std::stack<int>/std::priority_queue<int>/std::multimap<int,int>/std::multiset<int>/std::unordered_map<std::string,int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0047', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM019 {
    std::queue<int> m0;
    std::stack<int> m1;
    std::priority_queue<int> m2;
    std::multimap<int,int> m3;
    std::multiset<int> m4;
    std::unordered_map<std::string,int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM019');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::queue<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::stack<int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::multimap<int,int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::unordered_map<std::string,int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0048
  * @tc.name c_class_0048
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::unordered_set<int>/std::unordered_multimap<int,int>/std::unordered_multiset<int>/std::array<int,10>/std::array<std::string,5>/std::forward_list<int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0048', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM020 {
    std::unordered_set<int> m0;
    std::unordered_multimap<int,int> m1;
    std::unordered_multiset<int> m2;
    std::array<int,10> m3;
    std::array<std::string,5> m4;
    std::forward_list<int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM020');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::unordered_set<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::unordered_multimap<int,int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::unordered_multiset<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::array<int,10>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::array<std::string,5>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::forward_list<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0049
  * @tc.name c_class_0049
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::valarray<double>/std::complex<double>/std::function<int(int,int)>/std::function<void(std::string)>/int/char 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0049', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM021 {
    std::valarray<double> m0;
    std::complex<double> m1;
    std::function<int(int,int)> m2;
    std::function<void(std::string)> m3;
    int m4;
    char m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM021');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::valarray<double>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::complex<double>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::function<int(int,int)>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::function<void(std::string)>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'int');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'char');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0049 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0050
  * @tc.name c_class_0050
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（short/long/long/float/double/bool 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0050', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM022 {
    short m0;
    long m1;
    long long m2;
    float m3;
    double m4;
    bool m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM022');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'short');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'long');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'long long');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'float');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'double');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'bool');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0050 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0051
  * @tc.name c_class_0051
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/unsigned/unsigned/unsigned/unsigned/signed 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0051', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM023 {
    unsigned int m0;
    unsigned char m1;
    unsigned short m2;
    unsigned long m3;
    unsigned long long m4;
    signed char m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM023');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'signed char');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0052
  * @tc.name c_class_0052
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（signed/signed/wchar_t/char16_t/char32_t/size_t 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0052', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM024 {
    signed short m0;
    signed long m1;
    wchar_t m2;
    char16_t m3;
    char32_t m4;
    size_t m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM024');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'signed short');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'signed long');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'size_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0053
  * @tc.name c_class_0053
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（int8_t/int16_t/int32_t/int64_t/uint8_t/uint16_t 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0053', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM025 {
    int8_t m0;
    int16_t m1;
    int32_t m2;
    int64_t m3;
    uint8_t m4;
    uint16_t m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM025');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'uint16_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0054
  * @tc.name c_class_0054
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（uint32_t/uint64_t/std::string/string/std::wstring/long 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0054', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM026 {
    uint32_t m0;
    uint64_t m1;
    std::string m2;
    string m3;
    std::wstring m4;
    long double m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM026');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::string');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'string');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'long double');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0055
  * @tc.name c_class_0055
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（void/std::vector<int>/std::vector<std::string>/std::vector<double>/std::vector<bool>/std::map<std::string,int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0055', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM027 {
    void m0;
    std::vector<int> m1;
    std::vector<std::string> m2;
    std::vector<double> m3;
    std::vector<bool> m4;
    std::map<std::string,int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM027');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'void');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0056
  * @tc.name c_class_0056
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::map<int,std::string>/std::set<int>/std::set<std::string>/std::list<int>/std::list<std::string>/std::deque<int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0056', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM028 {
    std::map<int,std::string> m0;
    std::set<int> m1;
    std::set<std::string> m2;
    std::list<int> m3;
    std::list<std::string> m4;
    std::deque<int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM028');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::list<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::deque<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0057
  * @tc.name c_class_0057
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::deque<std::string>/std::pair<int,int>/std::pair<std::string,int>/std::tuple<int,int,int>/std::tuple<std::string,int,double>/std::queue<int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0057', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM029 {
    std::deque<std::string> m0;
    std::pair<int,int> m1;
    std::pair<std::string,int> m2;
    std::tuple<int,int,int> m3;
    std::tuple<std::string,int,double> m4;
    std::queue<int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM029');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::pair<int,int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::pair<std::string,int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::tuple<int,int,int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::queue<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0058
  * @tc.name c_class_0058
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::stack<int>/std::priority_queue<int>/std::multimap<int,int>/std::multiset<int>/std::unordered_map<std::string,int>/std::unordered_set<int> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0058', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM030 {
    std::stack<int> m0;
    std::priority_queue<int> m1;
    std::multimap<int,int> m2;
    std::multiset<int> m3;
    std::unordered_map<std::string,int> m4;
    std::unordered_set<int> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM030');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::stack<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::multimap<int,int>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::unordered_map<std::string,int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::unordered_set<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0058 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0059
  * @tc.name c_class_0059
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::unordered_multimap<int,int>/std::unordered_multiset<int>/std::array<int,10>/std::array<std::string,5>/std::forward_list<int>/std::valarray<double> 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0059', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM031 {
    std::unordered_multimap<int,int> m0;
    std::unordered_multiset<int> m1;
    std::array<int,10> m2;
    std::array<std::string,5> m3;
    std::forward_list<int> m4;
    std::valarray<double> m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM031');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::unordered_multimap<int,int>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::unordered_multiset<int>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::array<int,10>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::array<std::string,5>');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::forward_list<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::valarray<double>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0059 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0060
  * @tc.name c_class_0060
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（std::complex<double>/std::function<int(int,int)>/std::function<void(std::string)>/int/char/short 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0060', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM032 {
    std::complex<double> m0;
    std::function<int(int,int)> m1;
    std::function<void(std::string)> m2;
    int m3;
    char m4;
    short m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM032');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::complex<double>');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::function<int(int,int)>');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::function<void(std::string)>');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'int');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'char');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'short');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0060 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0061
  * @tc.name c_class_0061
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（long/long/float/double/bool/unsigned 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0061', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM033 {
    long m0;
    long long m1;
    float m2;
    double m3;
    bool m4;
    unsigned int m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM033');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'long');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'long long');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'float');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'double');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'bool');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'unsigned int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0061 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0062
  * @tc.name c_class_0062
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/unsigned/unsigned/unsigned/signed/signed 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0062', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM034 {
    unsigned char m0;
    unsigned short m1;
    unsigned long m2;
    unsigned long long m3;
    signed char m4;
    signed short m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM034');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'signed char');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'signed short');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0062 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0063
  * @tc.name c_class_0063
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（signed/wchar_t/char16_t/char32_t/size_t/int8_t 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0063', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM035 {
    signed long m0;
    wchar_t m1;
    char16_t m2;
    char32_t m3;
    size_t m4;
    int8_t m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM035');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'signed long');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'size_t');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'int8_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0063 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0064
  * @tc.name c_class_0064
  * @tc.desc h2dts parseClass：扩充-成员矩阵：6 成员（int16_t/int32_t/int64_t/uint8_t/uint16_t/uint32_t 等） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0064', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsM036 {
    int16_t m0;
    int32_t m1;
    int64_t m2;
    uint8_t m3;
    uint16_t m4;
    uint32_t m5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsM036');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'm0');
      assert.strictEqual(objList[0].variableList[0].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[1].name, 'm1');
      assert.strictEqual(objList[0].variableList[1].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[2].name, 'm2');
      assert.strictEqual(objList[0].variableList[2].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[3].name, 'm3');
      assert.strictEqual(objList[0].variableList[3].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[4].name, 'm4');
      assert.strictEqual(objList[0].variableList[4].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[5].name, 'm5');
      assert.strictEqual(objList[0].variableList[5].type, 'uint32_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0064 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0064 执行异常: ${String(err)}`);
    }
  });

});
