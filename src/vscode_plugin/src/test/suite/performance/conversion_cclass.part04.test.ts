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
  vscode.window.showInformationMessage('Start Performance_C_Class_Suite part04.');

  /**
  * @tc.number c_class_0102
  * @tc.name c_class_0102
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0102', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC014 {
    std::multiset<int> c0;
    std::unordered_map<std::string,int> c1;
    std::unordered_set<int> c2;
    std::unordered_multimap<int,int> c3;
    std::unordered_multiset<int> c4;
    std::array<int,10> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC014');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::unordered_map<std::string,int>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::unordered_set<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::unordered_multimap<int,int>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::unordered_multiset<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::array<int,10>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0102 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0102 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0103
  * @tc.name c_class_0103
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0103', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC015 {
    std::array<std::string,5> c0;
    std::forward_list<int> c1;
    std::valarray<double> c2;
    std::complex<double> c3;
    std::function<int(int,int)> c4;
    std::function<void(std::string)> c5;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsC015');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'c0');
      assert.strictEqual(objList[0].variableList[0].type, 'std::array<std::string,5>');
      assert.strictEqual(objList[0].variableList[1].name, 'c1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::forward_list<int>');
      assert.strictEqual(objList[0].variableList[2].name, 'c2');
      assert.strictEqual(objList[0].variableList[2].type, 'std::valarray<double>');
      assert.strictEqual(objList[0].variableList[3].name, 'c3');
      assert.strictEqual(objList[0].variableList[3].type, 'std::complex<double>');
      assert.strictEqual(objList[0].variableList[4].name, 'c4');
      assert.strictEqual(objList[0].variableList[4].type, 'std::function<int(int,int)>');
      assert.strictEqual(objList[0].variableList[5].name, 'c5');
      assert.strictEqual(objList[0].variableList[5].type, 'std::function<void(std::string)>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0103 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0104
  * @tc.name c_class_0104
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0104', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC016 {
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
      assert.strictEqual(objList[0].name, 'ClsC016');
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
        `c_class_0104 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0105
  * @tc.name c_class_0105
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0105', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC017 {
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
      assert.strictEqual(objList[0].name, 'ClsC017');
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
        `c_class_0105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0106
  * @tc.name c_class_0106
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0106', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC018 {
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
      assert.strictEqual(objList[0].name, 'ClsC018');
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
        `c_class_0106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0107
  * @tc.name c_class_0107
  * @tc.desc h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0107', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsC019 {
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
      assert.strictEqual(objList[0].name, 'ClsC019');
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
        `c_class_0107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0108
  * @tc.name c_class_0108
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0108', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA000 {
    int a[4];
    double d[8];
    char* p;
    std::string s[4];
    int* ip;
    float f[16];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA000');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0109
  * @tc.name c_class_0109
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0109', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA001 {
    int a[5];
    double d[9];
    char* p;
    std::string s[5];
    int* ip;
    float f[17];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA001');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0110
  * @tc.name c_class_0110
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0110', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA002 {
    int a[6];
    double d[10];
    char* p;
    std::string s[6];
    int* ip;
    float f[18];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA002');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0111
  * @tc.name c_class_0111
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0111', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA003 {
    int a[7];
    double d[11];
    char* p;
    std::string s[7];
    int* ip;
    float f[19];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA003');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0112
  * @tc.name c_class_0112
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0112', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA004 {
    int a[8];
    double d[12];
    char* p;
    std::string s[8];
    int* ip;
    float f[20];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA004');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0113
  * @tc.name c_class_0113
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0113', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA005 {
    int a[9];
    double d[13];
    char* p;
    std::string s[4];
    int* ip;
    float f[21];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA005');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0114
  * @tc.name c_class_0114
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0114', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA006 {
    int a[10];
    double d[14];
    char* p;
    std::string s[5];
    int* ip;
    float f[22];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA006');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0115
  * @tc.name c_class_0115
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0115', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA007 {
    int a[11];
    double d[15];
    char* p;
    std::string s[6];
    int* ip;
    float f[23];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA007');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0116
  * @tc.name c_class_0116
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0116', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA008 {
    int a[12];
    double d[16];
    char* p;
    std::string s[7];
    int* ip;
    float f[24];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA008');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0117
  * @tc.name c_class_0117
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0117', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA009 {
    int a[13];
    double d[17];
    char* p;
    std::string s[8];
    int* ip;
    float f[25];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA009');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0118
  * @tc.name c_class_0118
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0118', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA010 {
    int a[14];
    double d[18];
    char* p;
    std::string s[4];
    int* ip;
    float f[26];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA010');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0118 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0119
  * @tc.name c_class_0119
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0119', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA011 {
    int a[15];
    double d[19];
    char* p;
    std::string s[5];
    int* ip;
    float f[27];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA011');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0119 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0119 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0120
  * @tc.name c_class_0120
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0120', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA012 {
    int a[16];
    double d[20];
    char* p;
    std::string s[6];
    int* ip;
    float f[28];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA012');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0120 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0121
  * @tc.name c_class_0121
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0121', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA013 {
    int a[17];
    double d[21];
    char* p;
    std::string s[7];
    int* ip;
    float f[29];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA013');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0121 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0122
  * @tc.name c_class_0122
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0122', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA014 {
    int a[18];
    double d[22];
    char* p;
    std::string s[8];
    int* ip;
    float f[30];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA014');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0123
  * @tc.name c_class_0123
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0123', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA015 {
    int a[19];
    double d[23];
    char* p;
    std::string s[4];
    int* ip;
    float f[31];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA015');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0124
  * @tc.name c_class_0124
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0124', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA016 {
    int a[20];
    double d[24];
    char* p;
    std::string s[5];
    int* ip;
    float f[32];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA016');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0125
  * @tc.name c_class_0125
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0125', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA017 {
    int a[21];
    double d[25];
    char* p;
    std::string s[6];
    int* ip;
    float f[33];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA017');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0126
  * @tc.name c_class_0126
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0126', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA018 {
    int a[22];
    double d[26];
    char* p;
    std::string s[7];
    int* ip;
    float f[34];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA018');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0127
  * @tc.name c_class_0127
  * @tc.desc h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0127', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsA019 {
    int a[23];
    double d[27];
    char* p;
    std::string s[8];
    int* ip;
    float f[35];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsA019');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 'p');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 's');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string');
      assert.strictEqual(objList[0].variableList[4].name, 'ip');
      assert.strictEqual(objList[0].variableList[4].type, 'int*');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0128
  * @tc.name c_class_0128
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0128', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR000 {
    int m0();
    char m1();
    short m2();
    long m3();
    long long m4();
    float m5();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsR000');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'int');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'char');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'short');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'long');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'long long');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'float');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0129
  * @tc.name c_class_0129
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0129', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR001 {
    double m0();
    bool m1();
    unsigned int m2();
    size_t m3();
    wchar_t m4();
    void m5();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsR001');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'double');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'bool');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'unsigned int');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'size_t');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'wchar_t');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0130
  * @tc.name c_class_0130
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0130', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR002 {
    int8_t m0();
    uint64_t m1();
    long double m2();
    int m3();
    char m4();
    short m5();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsR002');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'int8_t');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'uint64_t');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'long double');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'int');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'char');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'short');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0131
  * @tc.name c_class_0131
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0131', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR003 {
    long m0();
    long long m1();
    float m2();
    double m3();
    bool m4();
    unsigned int m5();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsR003');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'long');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'long long');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'float');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'double');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'bool');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'unsigned int');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0132
  * @tc.name c_class_0132
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0132', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR004 {
    size_t m0();
    wchar_t m1();
    void m2();
    int8_t m3();
    uint64_t m4();
    long double m5();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsR004');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'size_t');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'wchar_t');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'int8_t');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'uint64_t');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'long double');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0133
  * @tc.name c_class_0133
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0133', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR005 {
    int m0();
    char m1();
    short m2();
    long m3();
    long long m4();
    float m5();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsR005');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'int');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'char');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'short');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'long');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'long long');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'float');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0134
  * @tc.name c_class_0134
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0134', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR006 {
    double m0();
    bool m1();
    unsigned int m2();
    size_t m3();
    wchar_t m4();
    void m5();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsR006');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'double');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'bool');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'unsigned int');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'size_t');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'wchar_t');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0135
  * @tc.name c_class_0135
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0135', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR007 {
    int8_t m0();
    uint64_t m1();
    long double m2();
    int m3();
    char m4();
    short m5();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsR007');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'int8_t');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'uint64_t');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'long double');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'int');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'char');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'short');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0136
  * @tc.name c_class_0136
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0136', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR008 {
    long m0();
    long long m1();
    float m2();
    double m3();
    bool m4();
    unsigned int m5();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsR008');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'long');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'long long');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'float');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'double');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'bool');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'unsigned int');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0137
  * @tc.name c_class_0137
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0137', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR009 {
    size_t m0();
    wchar_t m1();
    void m2();
    int8_t m3();
    uint64_t m4();
    long double m5();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsR009');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'size_t');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'wchar_t');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'int8_t');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'uint64_t');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'long double');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0137 执行异常: ${String(err)}`);
    }
  });

});
