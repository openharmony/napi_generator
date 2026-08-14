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
  vscode.window.showInformationMessage('Start Performance_C_Class_Suite.');

  /**
  * @tc.number c_class_0001
  * @tc.name c_class_0001
  * @tc.desc h2dts parseClass：class-变量：4 基础类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0001', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC {
    int len;
    std::string name;
    bool flag;
    double ratio;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 4);
      assert.strictEqual(objList[0].variableList[0].name, 'len');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'name');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].variableList[2].name, 'flag');
      assert.strictEqual(objList[0].variableList[2].type, 'bool');
      assert.strictEqual(objList[0].variableList[3].name, 'ratio');
      assert.strictEqual(objList[0].variableList[3].type, 'double');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0001 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0002
  * @tc.name c_class_0002
  * @tc.desc h2dts parseClass：class-变量：char/long/long long/float 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0002', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC {
    char ch;
    long lv;
    long long llv;
    float fv;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 4);
      assert.strictEqual(objList[0].variableList[0].name, 'ch');
      assert.strictEqual(objList[0].variableList[0].type, 'char');
      assert.strictEqual(objList[0].variableList[1].name, 'lv');
      assert.strictEqual(objList[0].variableList[1].type, 'long');
      assert.strictEqual(objList[0].variableList[2].name, 'llv');
      assert.strictEqual(objList[0].variableList[2].type, 'long long');
      assert.strictEqual(objList[0].variableList[3].name, 'fv');
      assert.strictEqual(objList[0].variableList[3].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0002 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0003
  * @tc.name c_class_0003
  * @tc.desc h2dts parseClass：class-变量：unsigned int/short/wchar_t/size_t 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0003', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC {
    unsigned int ui;
    short sh;
    wchar_t wc;
    size_t sz;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 4);
      assert.strictEqual(objList[0].variableList[0].name, 'ui');
      assert.strictEqual(objList[0].variableList[0].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[1].name, 'sh');
      assert.strictEqual(objList[0].variableList[1].type, 'short');
      assert.strictEqual(objList[0].variableList[2].name, 'wc');
      assert.strictEqual(objList[0].variableList[2].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[3].name, 'sz');
      assert.strictEqual(objList[0].variableList[3].type, 'size_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0003 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0004
  * @tc.name c_class_0004
  * @tc.desc h2dts parseClass：class-变量：std::wstring/char16_t/char32_t/long double 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0004', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC {
    std::wstring ws;
    char16_t c16;
    char32_t c32;
    long double ld;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 4);
      assert.strictEqual(objList[0].variableList[0].name, 'ws');
      assert.strictEqual(objList[0].variableList[0].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[1].name, 'c16');
      assert.strictEqual(objList[0].variableList[1].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[2].name, 'c32');
      assert.strictEqual(objList[0].variableList[2].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[3].name, 'ld');
      assert.strictEqual(objList[0].variableList[3].type, 'long double');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0004 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0005
  * @tc.name c_class_0005
  * @tc.desc h2dts parseClass：class-变量：多维数组/定长数组成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0005', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC {
    int arr[10];
    char name[20];
    double matrix[5][5];
    float f[16];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 4);
      assert.strictEqual(objList[0].variableList[0].name, 'arr');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'name');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'matrix');
      assert.strictEqual(objList[0].variableList[2].type, 'double');
      assert.strictEqual(objList[0].variableList[3].name, 'f');
      assert.strictEqual(objList[0].variableList[3].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0005 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0006
  * @tc.name c_class_0006
  * @tc.desc h2dts parseClass：class-变量：std 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0006', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC {
    std::vector<int> vec;
    std::map<std::string, int> map;
    std::set<int> set;
    std::list<double> list;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 4);
      assert.strictEqual(objList[0].variableList[0].name, 'vec');
      assert.strictEqual(objList[0].variableList[0].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[1].name, 'map');
      assert.strictEqual(objList[0].variableList[1].type, 'std::map<std::string, int>');
      assert.strictEqual(objList[0].variableList[2].name, 'set');
      assert.strictEqual(objList[0].variableList[2].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'list');
      assert.strictEqual(objList[0].variableList[3].type, 'std::list<double>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0006 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0007
  * @tc.name c_class_0007
  * @tc.desc h2dts parseClass：class-变量：指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0007', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC {
    char* ptr;
    int* ip;
    double* dp;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 3);
      assert.strictEqual(objList[0].variableList[0].name, 'ptr');
      assert.strictEqual(objList[0].variableList[0].type, 'char*');
      assert.strictEqual(objList[0].variableList[1].name, 'ip');
      assert.strictEqual(objList[0].variableList[1].type, 'int*');
      assert.strictEqual(objList[0].variableList[2].name, 'dp');
      assert.strictEqual(objList[0].variableList[2].type, 'double*');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0007 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0008
  * @tc.name c_class_0008
  * @tc.desc h2dts parseClass：class-变量：static 成员×3 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0008', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC {
    static int total;
    static std::string version;
    static bool ready;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 3);
      assert.strictEqual(objList[0].variableList[0].name, 'total');
      assert.strictEqual(objList[0].variableList[0].type, 'static int');
      assert.strictEqual(objList[0].variableList[1].name, 'version');
      assert.strictEqual(objList[0].variableList[1].type, 'static std::string');
      assert.strictEqual(objList[0].variableList[2].name, 'ready');
      assert.strictEqual(objList[0].variableList[2].type, 'static bool');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0009
  * @tc.name c_class_0009
  * @tc.desc h2dts parseClass：class-函数：方法返回/入参组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0009', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC {
    int count;
    std::string name;
    bool check();
    int add(int a, int b);
    std::string getStr(std::string prefix);
    void reset();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'count');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'name');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 4);
      assert.strictEqual(objList[0].functionList[0].name, 'check');
      assert.strictEqual(objList[0].functionList[0].returns, 'bool');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'add');
      assert.strictEqual(objList[0].functionList[1].returns, 'int');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'int');
      assert.strictEqual(objList[0].functionList[1].parameters[1].type, 'int');
      assert.strictEqual(objList[0].functionList[2].name, undefined);
      assert.strictEqual(objList[0].functionList[2].returns, undefined);
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'reset');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0010
  * @tc.name c_class_0010
  * @tc.desc h2dts parseClass：class-函数：基础类型方法矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0010', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC {
    double calc(double x);
    float getRatio(float r);
    char getChar(int code);
    long long sum(long long a, long long b);
    void print(std::string msg);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 5);
      assert.strictEqual(objList[0].functionList[0].name, 'calc');
      assert.strictEqual(objList[0].functionList[0].returns, 'double');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'double');
      assert.strictEqual(objList[0].functionList[1].name, 'getRatio');
      assert.strictEqual(objList[0].functionList[1].returns, 'float');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'float');
      assert.strictEqual(objList[0].functionList[2].name, 'getChar');
      assert.strictEqual(objList[0].functionList[2].returns, 'char');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'int');
      assert.strictEqual(objList[0].functionList[3].name, 'sum');
      assert.strictEqual(objList[0].functionList[3].returns, 'long long');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'long long');
      assert.strictEqual(objList[0].functionList[3].parameters[1].type, 'long long');
      assert.strictEqual(objList[0].functionList[4].name, 'print');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'std::string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0011
  * @tc.name c_class_0011
  * @tc.desc h2dts parseClass：class-函数：数组/容器入参方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0011', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC {
    void setVec(std::vector<int> v);
    void setMap(std::map<std::string, int> m);
    void setArr(int a[10]);
    void setPtr(char* p);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 4);
      assert.strictEqual(objList[0].functionList[0].name, 'setVec');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'std::vector<int>');
      assert.strictEqual(objList[0].functionList[1].name, 'setMap');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'std::map<std::string');
      assert.strictEqual(objList[0].functionList[1].parameters[1].type, 'int>');
      assert.strictEqual(objList[0].functionList[2].name, 'setArr');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'int');
      assert.strictEqual(objList[0].functionList[3].name, 'setPtr');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'char*');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0012
  * @tc.name c_class_0012
  * @tc.desc h2dts parseClass：namespace：域内 class（变量+函数） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0012', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns {
class Inner {
    int value;
    std::string name;
    void run();
    int getValue();
};
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Inner');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'value');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'name');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 2);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'getValue');
      assert.strictEqual(objList[0].functionList[1].returns, 'int');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0013
  * @tc.name c_class_0013
  * @tc.desc h2dts parseClass：typedef class：类名+别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0013', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`typedef class OTC {
private:
    int len;
public:
    char name[20];
    void contruct(int a);
    void deconstruct();
} OperationType;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, 'OperationType');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'len');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'name');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].functionList.length, 2);
      assert.strictEqual(objList[0].functionList[0].name, 'contruct');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'int');
      assert.strictEqual(objList[0].functionList[1].name, 'deconstruct');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0014
  * @tc.name c_class_0014
  * @tc.desc h2dts parseClass：多 class：同文件 2 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0014', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC1 {
    int a;
};
class OTC2 {
    std::string b;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 2);
      assert.strictEqual(objList[0].name, 'OTC1');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.strictEqual(objList[1].name, 'OTC2');
      assert.strictEqual(objList[1].alias, '');
      assert.strictEqual(objList[1].variableList.length, 1);
      assert.strictEqual(objList[1].variableList[0].name, 'b');
      assert.strictEqual(objList[1].variableList[0].type, 'std::string');
      assert.strictEqual(objList[1].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0015
  * @tc.name c_class_0015
  * @tc.desc h2dts parseClass：class-函数：含空格签名方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0015', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OTC {
    std::string getter() ;
    int setter(int v) ;
    bool toggle() ;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OTC');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 3);
      assert.strictEqual(objList[0].functionList[0].name, undefined);
      assert.strictEqual(objList[0].functionList[0].returns, undefined);
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'setter');
      assert.strictEqual(objList[0].functionList[1].returns, 'int');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'int');
      assert.strictEqual(objList[0].functionList[2].name, 'toggle');
      assert.strictEqual(objList[0].functionList[2].returns, 'bool');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0016
  * @tc.name c_class_0016
  * @tc.desc h2dts parseClass：扩充-class-变量：定宽整型 8 种 + float/double 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0016', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class FixedWidth {
    int8_t i8;
    int16_t i16;
    int32_t i32;
    int64_t i64;
    uint8_t u8;
    uint16_t u16;
    uint32_t u32;
    uint64_t u64;
    float f;
    double d;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FixedWidth');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 10);
      assert.strictEqual(objList[0].variableList[0].name, 'i8');
      assert.strictEqual(objList[0].variableList[0].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[1].name, 'i16');
      assert.strictEqual(objList[0].variableList[1].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[2].name, 'i32');
      assert.strictEqual(objList[0].variableList[2].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[3].name, 'i64');
      assert.strictEqual(objList[0].variableList[3].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[4].name, 'u8');
      assert.strictEqual(objList[0].variableList[4].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[5].name, 'u16');
      assert.strictEqual(objList[0].variableList[5].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[6].name, 'u32');
      assert.strictEqual(objList[0].variableList[6].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[7].name, 'u64');
      assert.strictEqual(objList[0].variableList[7].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[8].name, 'f');
      assert.strictEqual(objList[0].variableList[8].type, 'float');
      assert.strictEqual(objList[0].variableList[9].name, 'd');
      assert.strictEqual(objList[0].variableList[9].type, 'double');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0017
  * @tc.name c_class_0017
  * @tc.desc h2dts parseClass：扩充-class-变量：8 种 std 容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0017', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Containers {
    std::array<int, 10> arr;
    std::unordered_map<std::string, int> umap;
    std::unordered_set<int> uset;
    std::queue<int> queue;
    std::stack<int> stack;
    std::priority_queue<int> pq;
    std::multimap<int, int> mmap;
    std::multiset<int> mset;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Containers');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 8);
      assert.strictEqual(objList[0].variableList[0].name, 'arr');
      assert.strictEqual(objList[0].variableList[0].type, 'std::array<int, 10>');
      assert.strictEqual(objList[0].variableList[1].name, 'umap');
      assert.strictEqual(objList[0].variableList[1].type, 'std::unordered_map<std::string, int>');
      assert.strictEqual(objList[0].variableList[2].name, 'uset');
      assert.strictEqual(objList[0].variableList[2].type, 'std::unordered_set<int>');
      assert.strictEqual(objList[0].variableList[3].name, 'queue');
      assert.strictEqual(objList[0].variableList[3].type, 'std::queue<int>');
      assert.strictEqual(objList[0].variableList[4].name, 'stack');
      assert.strictEqual(objList[0].variableList[4].type, 'std::stack<int>');
      assert.strictEqual(objList[0].variableList[5].name, 'pq');
      assert.strictEqual(objList[0].variableList[5].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].variableList[6].name, 'mmap');
      assert.strictEqual(objList[0].variableList[6].type, 'std::multimap<int, int>');
      assert.strictEqual(objList[0].variableList[7].name, 'mset');
      assert.strictEqual(objList[0].variableList[7].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0018
  * @tc.name c_class_0018
  * @tc.desc h2dts parseClass：扩充-class-函数：容器/指针入参方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0018', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Methods {
    void setAll(int a, double b, std::string c, bool d);
    int getSum(std::vector<int> v);
    std::string join(std::vector<std::string> v, std::string sep);
    double avg(double* data, int count);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Methods');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 4);
      assert.strictEqual(objList[0].functionList[0].name, 'setAll');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 4);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'int');
      assert.strictEqual(objList[0].functionList[0].parameters[1].type, 'double');
      assert.strictEqual(objList[0].functionList[0].parameters[2].type, 'std::string');
      assert.strictEqual(objList[0].functionList[0].parameters[3].type, 'bool');
      assert.strictEqual(objList[0].functionList[1].name, 'getSum');
      assert.strictEqual(objList[0].functionList[1].returns, 'int');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'std::vector<int>');
      assert.strictEqual(objList[0].functionList[2].name, undefined);
      assert.strictEqual(objList[0].functionList[2].returns, undefined);
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'avg');
      assert.strictEqual(objList[0].functionList[3].returns, 'double');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'double*');
      assert.strictEqual(objList[0].functionList[3].parameters[1].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0019
  * @tc.name c_class_0019
  * @tc.desc h2dts parseClass：扩充-class-规模：20 变量 + 5 方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0019', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Big {
    int p0; int p1; int p2; int p3; int p4;
    int p5; int p6; int p7; int p8; int p9;
    int p10; int p11; int p12; int p13; int p14;
    int p15; int p16; int p17; int p18; int p19;
    void m0();
    void m1();
    void m2();
    void m3();
    void m4();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Big');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 20);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'int');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'int');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'int');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'int');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'int');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'int');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'int');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'int');
      assert.strictEqual(objList[0].variableList[10].name, 'p10');
      assert.strictEqual(objList[0].variableList[10].type, 'int');
      assert.strictEqual(objList[0].variableList[11].name, 'p11');
      assert.strictEqual(objList[0].variableList[11].type, 'int');
      assert.strictEqual(objList[0].variableList[12].name, 'p12');
      assert.strictEqual(objList[0].variableList[12].type, 'int');
      assert.strictEqual(objList[0].variableList[13].name, 'p13');
      assert.strictEqual(objList[0].variableList[13].type, 'int');
      assert.strictEqual(objList[0].variableList[14].name, 'p14');
      assert.strictEqual(objList[0].variableList[14].type, 'int');
      assert.strictEqual(objList[0].variableList[15].name, 'p15');
      assert.strictEqual(objList[0].variableList[15].type, 'int');
      assert.strictEqual(objList[0].variableList[16].name, 'p16');
      assert.strictEqual(objList[0].variableList[16].type, 'int');
      assert.strictEqual(objList[0].variableList[17].name, 'p17');
      assert.strictEqual(objList[0].variableList[17].type, 'int');
      assert.strictEqual(objList[0].variableList[18].name, 'p18');
      assert.strictEqual(objList[0].variableList[18].type, 'int');
      assert.strictEqual(objList[0].variableList[19].name, 'p19');
      assert.strictEqual(objList[0].variableList[19].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 5);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'm1');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'm2');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[3].name, 'm3');
      assert.strictEqual(objList[0].functionList[3].returns, 'void');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[4].name, 'm4');
      assert.strictEqual(objList[0].functionList[4].returns, 'void');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0020
  * @tc.name c_class_0020
  * @tc.desc h2dts parseClass：扩充-class-多声明：同文件 5 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0020', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class A1 { int a; };
class A2 { int b; };
class A3 { int c; };
class A4 { int d; };
class A5 { int e; };`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 5);
      assert.strictEqual(objList[0].name, 'A1');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.strictEqual(objList[1].name, 'A2');
      assert.strictEqual(objList[1].alias, '');
      assert.strictEqual(objList[1].variableList.length, 1);
      assert.strictEqual(objList[1].variableList[0].name, 'b');
      assert.strictEqual(objList[1].variableList[0].type, 'int');
      assert.strictEqual(objList[1].functionList.length, 0);
      assert.strictEqual(objList[2].name, 'A3');
      assert.strictEqual(objList[2].alias, '');
      assert.strictEqual(objList[2].variableList.length, 1);
      assert.strictEqual(objList[2].variableList[0].name, 'c');
      assert.strictEqual(objList[2].variableList[0].type, 'int');
      assert.strictEqual(objList[2].functionList.length, 0);
      assert.strictEqual(objList[3].name, 'A4');
      assert.strictEqual(objList[3].alias, '');
      assert.strictEqual(objList[3].variableList.length, 1);
      assert.strictEqual(objList[3].variableList[0].name, 'd');
      assert.strictEqual(objList[3].variableList[0].type, 'int');
      assert.strictEqual(objList[3].functionList.length, 0);
      assert.strictEqual(objList[4].name, 'A5');
      assert.strictEqual(objList[4].alias, '');
      assert.strictEqual(objList[4].variableList.length, 1);
      assert.strictEqual(objList[4].variableList[0].name, 'e');
      assert.strictEqual(objList[4].variableList[0].type, 'int');
      assert.strictEqual(objList[4].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0021
  * @tc.name c_class_0021
  * @tc.desc h2dts parseClass：扩充-class-namespace：两层嵌套 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0021', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace deep {
namespace inner {
class Nested {
    int value;
    std::string name;
    void run();
};
}
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Nested');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'value');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'name');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0022
  * @tc.name c_class_0022
  * @tc.desc h2dts parseClass：扩充-class：static 成员 + 静态工厂 + typedef 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0022', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`typedef class Service {
    static int instances;
    std::string name;
    void start();
    void stop();
    static Service* create();
} Service;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Service');
      assert.strictEqual(objList[0].alias, 'Service');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'instances');
      assert.strictEqual(objList[0].variableList[0].type, 'static int');
      assert.strictEqual(objList[0].variableList[1].name, 'name');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 3);
      assert.strictEqual(objList[0].functionList[0].name, 'start');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'stop');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'create');
      assert.strictEqual(objList[0].functionList[2].returns, 'static Service*');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0023
  * @tc.name c_class_0023
  * @tc.desc h2dts parseClass：扩充-class-变量：5 种指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0023', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Ptrs {
    int* ip;
    double* dp;
    char* cp;
    std::string* sp;
    void* vp;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Ptrs');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 5);
      assert.strictEqual(objList[0].variableList[0].name, 'ip');
      assert.strictEqual(objList[0].variableList[0].type, 'int*');
      assert.strictEqual(objList[0].variableList[1].name, 'dp');
      assert.strictEqual(objList[0].variableList[1].type, 'double*');
      assert.strictEqual(objList[0].variableList[2].name, 'cp');
      assert.strictEqual(objList[0].variableList[2].type, 'char*');
      assert.strictEqual(objList[0].variableList[3].name, 'sp');
      assert.strictEqual(objList[0].variableList[3].type, 'std::string*');
      assert.strictEqual(objList[0].variableList[4].name, 'vp');
      assert.strictEqual(objList[0].variableList[4].type, 'void*');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0024
  * @tc.name c_class_0024
  * @tc.desc h2dts parseClass：扩充-class-变量：数组/容器/多维混合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0024', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Mixed {
    int arr[8];
    std::vector<std::string> list;
    std::map<int, std::string> dict;
    bool flag;
    char tag[4];
    double matrix[3][3];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Mixed');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 6);
      assert.strictEqual(objList[0].variableList[0].name, 'arr');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'list');
      assert.strictEqual(objList[0].variableList[1].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[2].name, 'dict');
      assert.strictEqual(objList[0].variableList[2].type, 'std::map<int, std::string>');
      assert.strictEqual(objList[0].variableList[3].name, 'flag');
      assert.strictEqual(objList[0].variableList[3].type, 'bool');
      assert.strictEqual(objList[0].variableList[4].name, 'tag');
      assert.strictEqual(objList[0].variableList[4].type, 'char');
      assert.strictEqual(objList[0].variableList[5].name, 'matrix');
      assert.strictEqual(objList[0].variableList[5].type, 'double');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0025
  * @tc.name c_class_0025
  * @tc.desc h2dts parseClass：扩充-class-函数：5 个同型方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0025', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Ops {
    bool add(int a, int b);
    bool sub(int a, int b);
    bool mul(int a, int b);
    bool div(int a, int b);
    bool mod(int a, int b);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Ops');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 5);
      assert.strictEqual(objList[0].functionList[0].name, 'add');
      assert.strictEqual(objList[0].functionList[0].returns, 'bool');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'int');
      assert.strictEqual(objList[0].functionList[0].parameters[1].type, 'int');
      assert.strictEqual(objList[0].functionList[1].name, 'sub');
      assert.strictEqual(objList[0].functionList[1].returns, 'bool');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'int');
      assert.strictEqual(objList[0].functionList[1].parameters[1].type, 'int');
      assert.strictEqual(objList[0].functionList[2].name, 'mul');
      assert.strictEqual(objList[0].functionList[2].returns, 'bool');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'int');
      assert.strictEqual(objList[0].functionList[2].parameters[1].type, 'int');
      assert.strictEqual(objList[0].functionList[3].name, 'div');
      assert.strictEqual(objList[0].functionList[3].returns, 'bool');
      assert.strictEqual((objList[0].functionList[3].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[3].parameters[0].type, 'int');
      assert.strictEqual(objList[0].functionList[3].parameters[1].type, 'int');
      assert.strictEqual(objList[0].functionList[4].name, 'mod');
      assert.strictEqual(objList[0].functionList[4].returns, 'bool');
      assert.strictEqual((objList[0].functionList[4].parameters || []).length, 2);
      assert.strictEqual(objList[0].functionList[4].parameters[0].type, 'int');
      assert.strictEqual(objList[0].functionList[4].parameters[1].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0026
  * @tc.name c_class_0026
  * @tc.desc h2dts parseClass：扩充-class-函数：引用/指针参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0026', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Ref {
    void setA(int& a);
    void setB(const std::string& b);
    void setC(double* c);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Ref');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 3);
      assert.strictEqual(objList[0].functionList[0].name, 'setA');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'int& a');
      assert.strictEqual(objList[0].functionList[1].name, 'setB');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'const std::string& b');
      assert.strictEqual(objList[0].functionList[2].name, 'setC');
      assert.strictEqual(objList[0].functionList[2].returns, 'void');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[2].parameters[0].type, 'double*');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0027
  * @tc.name c_class_0027
  * @tc.desc h2dts parseClass：扩充-class：全 static 成员与方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0027', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class StaticAll {
    static int a;
    static double b;
    static std::string c;
    static bool d;
    static void reset();
    static int count();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StaticAll');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 4);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'static int');
      assert.strictEqual(objList[0].variableList[1].name, 'b');
      assert.strictEqual(objList[0].variableList[1].type, 'static double');
      assert.strictEqual(objList[0].variableList[2].name, 'c');
      assert.strictEqual(objList[0].variableList[2].type, 'static std::string');
      assert.strictEqual(objList[0].variableList[3].name, 'd');
      assert.strictEqual(objList[0].variableList[3].type, 'static bool');
      assert.strictEqual(objList[0].functionList.length, 2);
      assert.strictEqual(objList[0].functionList[0].name, 'reset');
      assert.strictEqual(objList[0].functionList[0].returns, 'static void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'count');
      assert.strictEqual(objList[0].functionList[1].returns, 'static int');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0027 执行异常: ${String(err)}`);
    }
  });

});
