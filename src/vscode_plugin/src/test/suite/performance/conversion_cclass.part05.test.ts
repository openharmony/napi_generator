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
  vscode.window.showInformationMessage('Start Performance_C_Class_Suite part05.');

  /**
  * @tc.number c_class_0138
  * @tc.name c_class_0138
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0138', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR010 {
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
      assert.strictEqual(objList[0].name, 'ClsR010');
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
        `c_class_0138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0139
  * @tc.name c_class_0139
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0139', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR011 {
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
      assert.strictEqual(objList[0].name, 'ClsR011');
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
        `c_class_0139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0140
  * @tc.name c_class_0140
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0140', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR012 {
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
      assert.strictEqual(objList[0].name, 'ClsR012');
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
        `c_class_0140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0141
  * @tc.name c_class_0141
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0141', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR013 {
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
      assert.strictEqual(objList[0].name, 'ClsR013');
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
        `c_class_0141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0142
  * @tc.name c_class_0142
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0142', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR014 {
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
      assert.strictEqual(objList[0].name, 'ClsR014');
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
        `c_class_0142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0143
  * @tc.name c_class_0143
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0143', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR015 {
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
      assert.strictEqual(objList[0].name, 'ClsR015');
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
        `c_class_0143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0144
  * @tc.name c_class_0144
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0144', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR016 {
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
      assert.strictEqual(objList[0].name, 'ClsR016');
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
        `c_class_0144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0145
  * @tc.name c_class_0145
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0145', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR017 {
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
      assert.strictEqual(objList[0].name, 'ClsR017');
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
        `c_class_0145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0146
  * @tc.name c_class_0146
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0146', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR018 {
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
      assert.strictEqual(objList[0].name, 'ClsR018');
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
        `c_class_0146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0147
  * @tc.name c_class_0147
  * @tc.desc h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0147', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsR019 {
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
      assert.strictEqual(objList[0].name, 'ClsR019');
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
        `c_class_0147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0148
  * @tc.name c_class_0148
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0148', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP000 {
    void m0(int v);
    void m1(char v);
    void m2(short v);
    void m3(long v);
    void m4(long long v);
    void m5(float v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP000');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'int');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'char');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'short');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'long');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'long long');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'float');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0149
  * @tc.name c_class_0149
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0149', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP001 {
    void m0(double v);
    void m1(bool v);
    void m2(unsigned int v);
    void m3(unsigned char v);
    void m4(unsigned short v);
    void m5(unsigned long v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP001');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'double');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'bool');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'unsigned int');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'unsigned char');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'unsigned short');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'unsigned long');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0150
  * @tc.name c_class_0150
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0150', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP002 {
    void m0(unsigned long long v);
    void m1(signed char v);
    void m2(signed short v);
    void m3(signed long v);
    void m4(wchar_t v);
    void m5(char16_t v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP002');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'signed char');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'signed short');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'signed long');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'wchar_t');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'char16_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0151
  * @tc.name c_class_0151
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0151', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP003 {
    void m0(char32_t v);
    void m1(size_t v);
    void m2(int8_t v);
    void m3(int16_t v);
    void m4(int32_t v);
    void m5(int64_t v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP003');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'size_t');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'int8_t');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'int16_t');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'int32_t');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'int64_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0152
  * @tc.name c_class_0152
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0152', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP004 {
    void m0(uint8_t v);
    void m1(uint16_t v);
    void m2(uint32_t v);
    void m3(uint64_t v);
    void m4(std::string v);
    void m5(string v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP004');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'uint8_t');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'uint16_t');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'uint32_t');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'uint64_t');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'std::string');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0153
  * @tc.name c_class_0153
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0153', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP005 {
    void m0(std::wstring v);
    void m1(long double v);
    void m2(void v);
    void m3(std::vector<int> v);
    void m4(std::vector<std::string> v);
    void m5(std::vector<double> v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP005');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'std::wstring');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'long double');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'void');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'std::vector<int>');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'std::vector<double>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0154
  * @tc.name c_class_0154
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0154', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP006 {
    void m0(std::vector<bool> v);
    void m1(std::map<std::string,int> v);
    void m2(std::map<int,std::string> v);
    void m3(std::set<int> v);
    void m4(std::set<std::string> v);
    void m5(std::list<int> v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP006');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'std::map<std::string');
      assert.strictEqual(objList[0].functionList[1].parameters[1].type, 'int>');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'std::map<int');
      assert.strictEqual(objList[0].functionList[2].parameters[1].type, 'std::string>');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'std::set<int>');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'std::list<int>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0155
  * @tc.name c_class_0155
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0155', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP007 {
    void m0(std::list<std::string> v);
    void m1(std::deque<int> v);
    void m2(std::deque<std::string> v);
    void m3(std::pair<int,int> v);
    void m4(std::pair<std::string,int> v);
    void m5(std::tuple<int,int,int> v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP007');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'std::deque<int>');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'std::pair<int');
      assert.strictEqual(objList[0].functionList[3].parameters[1].type, 'int>');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'std::pair<std::string');
      assert.strictEqual(objList[0].functionList[4].parameters[1].type, 'int>');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 3);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'std::tuple<int');
      assert.strictEqual(objList[0].functionList[5].parameters[1].type, 'int');
      assert.strictEqual(objList[0].functionList[5].parameters[2].type, 'int>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0156
  * @tc.name c_class_0156
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0156', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP008 {
    void m0(std::tuple<std::string,int,double> v);
    void m1(std::queue<int> v);
    void m2(std::stack<int> v);
    void m3(std::priority_queue<int> v);
    void m4(std::multimap<int,int> v);
    void m5(std::multiset<int> v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP008');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 3);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'std::tuple<std::string');
      assert.strictEqual(objList[0].functionList[0].parameters[1].type, 'int');
      assert.strictEqual(objList[0].functionList[0].parameters[2].type, 'double>');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'std::queue<int>');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'std::stack<int>');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'std::multimap<int');
      assert.strictEqual(objList[0].functionList[4].parameters[1].type, 'int>');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'std::multiset<int>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0157
  * @tc.name c_class_0157
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0157', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP009 {
    void m0(std::unordered_map<std::string,int> v);
    void m1(std::unordered_set<int> v);
    void m2(std::unordered_multimap<int,int> v);
    void m3(std::unordered_multiset<int> v);
    void m4(std::array<int,10> v);
    void m5(std::array<std::string,5> v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP009');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'std::unordered_map<std::string');
      assert.strictEqual(objList[0].functionList[0].parameters[1].type, 'int>');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'std::unordered_set<int>');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'std::unordered_multimap<int');
      assert.strictEqual(objList[0].functionList[2].parameters[1].type, 'int>');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'std::unordered_multiset<int>');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'std::array<int');
      assert.strictEqual(objList[0].functionList[4].parameters[1].type, '10>');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'std::array<std::string');
      assert.strictEqual(objList[0].functionList[5].parameters[1].type, '5>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0157 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0158
  * @tc.name c_class_0158
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0158', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP010 {
    void m0(std::forward_list<int> v);
    void m1(std::valarray<double> v);
    void m2(std::complex<double> v);
    void m3(std::function<int(int,int)> v);
    void m4(std::function<void(std::string)> v);
    void m5(int v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP010');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'std::forward_list<int>');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'std::valarray<double>');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'std::complex<double>');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'std::function<int(int');
      assert.strictEqual(objList[0].functionList[3].parameters[1].type, 'int)>');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'std::function<void(std::string)>');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0159
  * @tc.name c_class_0159
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0159', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP011 {
    void m0(char v);
    void m1(short v);
    void m2(long v);
    void m3(long long v);
    void m4(float v);
    void m5(double v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP011');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'char');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'short');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'long');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'long long');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'float');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0160
  * @tc.name c_class_0160
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0160', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP012 {
    void m0(bool v);
    void m1(unsigned int v);
    void m2(unsigned char v);
    void m3(unsigned short v);
    void m4(unsigned long v);
    void m5(unsigned long long v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP012');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'bool');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'unsigned int');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'unsigned char');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'unsigned short');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'unsigned long');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'unsigned long long');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0161
  * @tc.name c_class_0161
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0161', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP013 {
    void m0(signed char v);
    void m1(signed short v);
    void m2(signed long v);
    void m3(wchar_t v);
    void m4(char16_t v);
    void m5(char32_t v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP013');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'signed char');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'signed short');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'signed long');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'wchar_t');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'char16_t');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'char32_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0162
  * @tc.name c_class_0162
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0162', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP014 {
    void m0(size_t v);
    void m1(int8_t v);
    void m2(int16_t v);
    void m3(int32_t v);
    void m4(int64_t v);
    void m5(uint8_t v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP014');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'size_t');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'int8_t');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'int16_t');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'int32_t');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'int64_t');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'uint8_t');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0162 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0163
  * @tc.name c_class_0163
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0163', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP015 {
    void m0(uint16_t v);
    void m1(uint32_t v);
    void m2(uint64_t v);
    void m3(std::string v);
    void m4(string v);
    void m5(std::wstring v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP015');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'uint16_t');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'uint32_t');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'uint64_t');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'std::string');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'string');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'std::wstring');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0164
  * @tc.name c_class_0164
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0164', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP016 {
    void m0(long double v);
    void m1(void v);
    void m2(std::vector<int> v);
    void m3(std::vector<std::string> v);
    void m4(std::vector<double> v);
    void m5(std::vector<bool> v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP016');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'long double');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'void');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'std::vector<int>');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'std::vector<double>');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'std::vector<bool>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0165
  * @tc.name c_class_0165
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0165', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP017 {
    void m0(std::map<std::string,int> v);
    void m1(std::map<int,std::string> v);
    void m2(std::set<int> v);
    void m3(std::set<std::string> v);
    void m4(std::list<int> v);
    void m5(std::list<std::string> v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP017');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'std::map<std::string');
      assert.strictEqual(objList[0].functionList[0].parameters[1].type, 'int>');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'std::map<int');
      assert.strictEqual(objList[0].functionList[1].parameters[1].type, 'std::string>');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'std::set<int>');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'std::list<int>');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'std::list<std::string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0166
  * @tc.name c_class_0166
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0166', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP018 {
    void m0(std::deque<int> v);
    void m1(std::deque<std::string> v);
    void m2(std::pair<int,int> v);
    void m3(std::pair<std::string,int> v);
    void m4(std::tuple<int,int,int> v);
    void m5(std::tuple<std::string,int,double> v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP018');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'std::deque<int>');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'std::pair<int');
      assert.strictEqual(objList[0].functionList[2].parameters[1].type, 'int>');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'std::pair<std::string');
      assert.strictEqual(objList[0].functionList[3].parameters[1].type, 'int>');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 3);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'std::tuple<int');
      assert.strictEqual(objList[0].functionList[4].parameters[1].type, 'int');
      assert.strictEqual(objList[0].functionList[4].parameters[2].type, 'int>');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 3);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'std::tuple<std::string');
      assert.strictEqual(objList[0].functionList[5].parameters[1].type, 'int');
      assert.strictEqual(objList[0].functionList[5].parameters[2].type, 'double>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0167
  * @tc.name c_class_0167
  * @tc.desc h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0167', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsP019 {
    void m0(std::queue<int> v);
    void m1(std::stack<int> v);
    void m2(std::priority_queue<int> v);
    void m3(std::multimap<int,int> v);
    void m4(std::multiset<int> v);
    void m5(std::unordered_map<std::string,int> v);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsP019');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 6);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'std::queue<int>');
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'std::stack<int>');
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'std::multimap<int');
      assert.strictEqual(objList[0].functionList[3].parameters[1].type, 'int>');
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].functionList[5].name, 'm5');
      assert.strictEqual(objList[0].functionList[5].returns, 'void');
      assert.strictEqual((objList[0].functionList[5].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[5].parameters[0].type, 'std::unordered_map<std::string');
      assert.strictEqual(objList[0].functionList[5].parameters[1].type, 'int>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0168
  * @tc.name c_class_0168
  * @tc.desc h2dts parseClass：扩充-规模：5 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0168', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN005 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN005');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 5);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0168 执行异常: ${String(err)}`);
    }
  });

});
