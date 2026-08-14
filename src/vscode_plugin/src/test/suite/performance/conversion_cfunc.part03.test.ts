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

suite('Performance_C_Func_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite.');

  /**
  * @tc.number c_func_0085
  * @tc.name c_func_0085
  * @tc.desc h2dts parseFunction：扩充-引用：std::string& 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0085', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setStrRef(std::string& s);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setStrRef');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 's');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0085 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0086
  * @tc.name c_func_0086
  * @tc.desc h2dts parseFunction：扩充-引用：const int& 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0086', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setConstRef(const int& a);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setConstRef');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'const');
      assert.strictEqual(funcList[0].parameters[0].name, 'int');
      assert.strictEqual(funcList[0].parameters[1].type, 'a');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0086 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0087
  * @tc.name c_func_0087
  * @tc.desc h2dts parseFunction：扩充-引用：double& 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0087', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setDoubleRef(double& d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setDoubleRef');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 'd');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0087 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0088
  * @tc.name c_func_0088
  * @tc.desc h2dts parseFunction：扩充-数组：std::array<int,10> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0088', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setArray(std::array<int, 10> arr);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setArray');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::array<int, 10>');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0088 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0089
  * @tc.name c_func_0089
  * @tc.desc h2dts parseFunction：扩充-数组：std::array<string,5> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0089', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setArrayStr(std::array<std::string, 5> arr);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setArrayStr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::array<std::string, 5>');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0089 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0090
  * @tc.name c_func_0090
  * @tc.desc h2dts parseFunction：扩充-数组：std::unordered_set 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0090', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setUnorderedSet(std::unordered_set<int> s);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setUnorderedSet');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_set<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 's');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0091
  * @tc.name c_func_0091
  * @tc.desc h2dts parseFunction：扩充-数组：std::unordered_multimap 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0091', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setUnorderedMultimap(std::unordered_multimap<int, int> m);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setUnorderedMultimap');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_multimap<int, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'm');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0092
  * @tc.name c_func_0092
  * @tc.desc h2dts parseFunction：扩充-数组：std::unordered_multiset 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0092', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setUnorderedMultiset(std::unordered_multiset<int> s);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setUnorderedMultiset');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_multiset<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 's');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0093
  * @tc.name c_func_0093
  * @tc.desc h2dts parseFunction：扩充-返回：char* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0093', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`char* getCharPtr();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getCharPtr');
      assert.strictEqual(funcList[0].returns, 'char*');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0094
  * @tc.name c_func_0094
  * @tc.desc h2dts parseFunction：扩充-返回：int* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0094', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int* getIntPtr();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getIntPtr');
      assert.strictEqual(funcList[0].returns, 'int*');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0095
  * @tc.name c_func_0095
  * @tc.desc h2dts parseFunction：扩充-返回：std::string* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0095', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::string* getStrPtr();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getStrPtr');
      assert.strictEqual(funcList[0].returns, 'std::string*');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0095 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0096
  * @tc.name c_func_0096
  * @tc.desc h2dts parseFunction：扩充-数组：char[256] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0096', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setBigCharArr(char arr[256]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setBigCharArr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '256');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0096 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0097
  * @tc.name c_func_0097
  * @tc.desc h2dts parseFunction：扩充-数组：unsigned char[16] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0097', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setUCharArr(unsigned char arr[16]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setUCharArr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '16');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0097 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0098
  * @tc.name c_func_0098
  * @tc.desc h2dts parseFunction：扩充-数组：int64_t[8] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0098', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setI64Arr(int64_t arr[8]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setI64Arr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '8');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0098 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0099
  * @tc.name c_func_0099
  * @tc.desc h2dts parseFunction：扩充-数组：std::string[10][5] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0099', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setStrArr2d(std::string arr[10][5]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setStrArr2d');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '10');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '5');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0099 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0099 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0100
  * @tc.name c_func_0100
  * @tc.desc h2dts parseFunction：扩充-多参数：6 参混合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0100', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void sixParams(int a, double b, std::string c, bool d, char e, float f);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'sixParams');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 6);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'double');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'bool');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.strictEqual(funcList[0].parameters[4].type, 'char');
      assert.strictEqual(funcList[0].parameters[4].name, 'e');
      assert.strictEqual(funcList[0].parameters[5].type, 'float');
      assert.strictEqual(funcList[0].parameters[5].name, 'f');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0100 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0101
  * @tc.name c_func_0101
  * @tc.desc h2dts parseFunction：扩充-多参数：8 参 int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0101', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void eightParams(int a, int b, int c, int d, int e, int f, int g, int h);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'eightParams');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 8);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'int');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'int');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.strictEqual(funcList[0].parameters[4].type, 'int');
      assert.strictEqual(funcList[0].parameters[4].name, 'e');
      assert.strictEqual(funcList[0].parameters[5].type, 'int');
      assert.strictEqual(funcList[0].parameters[5].name, 'f');
      assert.strictEqual(funcList[0].parameters[6].type, 'int');
      assert.strictEqual(funcList[0].parameters[6].name, 'g');
      assert.strictEqual(funcList[0].parameters[7].type, 'int');
      assert.strictEqual(funcList[0].parameters[7].name, 'h');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0101 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0101 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0102
  * @tc.name c_func_0102
  * @tc.desc h2dts parseFunction：扩充-重载：同名函数 3 组重载 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0102', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int add(int a, int b);
int add(double a, double b);
int add(std::string a, std::string b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 3);
      assert.strictEqual(funcList[0].name, 'add');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[1].name, 'add');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 2);
      assert.strictEqual(funcList[1].parameters[0].type, 'double');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].parameters[1].type, 'double');
      assert.strictEqual(funcList[1].parameters[1].name, 'b');
      assert.strictEqual(funcList[2].name, 'add');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 2);
      assert.strictEqual(funcList[2].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[2].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0102 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0102 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0103
  * @tc.name c_func_0103
  * @tc.desc h2dts parseFunction：扩充-多参数：4 容器参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0103', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void mixed4(std::vector<int> v, std::map<std::string, int> m, std::set<int> s, char* p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'mixed4');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<std::string, int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'm');
      assert.strictEqual(funcList[0].parameters[2].type, 'std::set<int>');
      assert.strictEqual(funcList[0].parameters[2].name, 's');
      assert.strictEqual(funcList[0].parameters[3].type, 'char*');
      assert.strictEqual(funcList[0].parameters[3].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0103 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0104
  * @tc.name c_func_0104
  * @tc.desc h2dts parseFunction：扩充-多参数：4 容器参数 B 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0104', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void mixed4b(std::pair<int, int> p, std::tuple<int, int, int> t, std::list<int> l, std::deque<int> d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'mixed4b');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::pair<int, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::tuple<int, int, int>');
      assert.strictEqual(funcList[0].parameters[1].name, 't');
      assert.strictEqual(funcList[0].parameters[2].type, 'std::list<int>');
      assert.strictEqual(funcList[0].parameters[2].name, 'l');
      assert.strictEqual(funcList[0].parameters[3].type, 'std::deque<int>');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0104 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0105
  * @tc.name c_func_0105
  * @tc.desc h2dts parseFunction：扩充-容器：std::function<void(string)> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0105', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setCallback(std::function<void(std::string)> cb);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setCallback');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::function<void(std::string)>');
      assert.strictEqual(funcList[0].parameters[0].name, 'cb');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0106
  * @tc.name c_func_0106
  * @tc.desc h2dts parseFunction：扩充-static：返回 int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0106', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`static int getCount();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getCount');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0107
  * @tc.name c_func_0107
  * @tc.desc h2dts parseFunction：扩充-static：返回 bool 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0107', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`static bool isEnabled();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'isEnabled');
      assert.strictEqual(funcList[0].returns, 'bool');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0108
  * @tc.name c_func_0108
  * @tc.desc h2dts parseFunction：扩充-static：带参 double 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0108', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`static double getRate(double r);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRate');
      assert.strictEqual(funcList[0].returns, 'double');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'r');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0109
  * @tc.name c_func_0109
  * @tc.desc h2dts parseFunction：扩充-static：返回容器 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0109', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`static std::vector<int> getList();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getList');
      assert.strictEqual(funcList[0].returns, 'std::vector<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0110
  * @tc.name c_func_0110
  * @tc.desc h2dts parseFunction：扩充-const：返回 const char* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0110', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`const char* getName() ;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getName');
      assert.strictEqual(funcList[0].returns, 'char*');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'undefined');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0111
  * @tc.name c_func_0111
  * @tc.desc h2dts parseFunction：扩充-const：const char* const 参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0111', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setConstPtr(const char* const p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setConstPtr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char* const');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0112
  * @tc.name c_func_0112
  * @tc.desc h2dts parseFunction：扩充-const：const std::string& 参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0112', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::string getStr(const std::string& s);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getStr');
      assert.strictEqual(funcList[0].returns, 'std::string');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'const std::string');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 's');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0113
  * @tc.name c_func_0113
  * @tc.desc h2dts parseFunction：扩充-多函数：同文件 5 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0113', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int a1(int x);
int a2(int x);
int a3(int x);
int a4(int x);
int a5(int x);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 5);
      assert.strictEqual(funcList[0].name, 'a1');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[1].name, 'a2');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'x');
      assert.strictEqual(funcList[2].name, 'a3');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'int');
      assert.strictEqual(funcList[2].parameters[0].name, 'x');
      assert.strictEqual(funcList[3].name, 'a4');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 1);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'x');
      assert.strictEqual(funcList[4].name, 'a5');
      assert.strictEqual(funcList[4].returns, 'int');
      assert.strictEqual(funcList[4].parameters.length, 1);
      assert.strictEqual(funcList[4].parameters[0].type, 'int');
      assert.strictEqual(funcList[4].parameters[0].name, 'x');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0114
  * @tc.name c_func_0114
  * @tc.desc h2dts parseFunction：扩充-多函数：同文件 8 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0114', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int b1(int x);
int b2(int x);
int b3(int x);
int b4(int x);
int b5(int x);
int b6(int x);
int b7(int x);
int b8(int x);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 8);
      assert.strictEqual(funcList[0].name, 'b1');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[1].name, 'b2');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'x');
      assert.strictEqual(funcList[2].name, 'b3');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'int');
      assert.strictEqual(funcList[2].parameters[0].name, 'x');
      assert.strictEqual(funcList[3].name, 'b4');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 1);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'x');
      assert.strictEqual(funcList[4].name, 'b5');
      assert.strictEqual(funcList[4].returns, 'int');
      assert.strictEqual(funcList[4].parameters.length, 1);
      assert.strictEqual(funcList[4].parameters[0].type, 'int');
      assert.strictEqual(funcList[4].parameters[0].name, 'x');
      assert.strictEqual(funcList[5].name, 'b6');
      assert.strictEqual(funcList[5].returns, 'int');
      assert.strictEqual(funcList[5].parameters.length, 1);
      assert.strictEqual(funcList[5].parameters[0].type, 'int');
      assert.strictEqual(funcList[5].parameters[0].name, 'x');
      assert.strictEqual(funcList[6].name, 'b7');
      assert.strictEqual(funcList[6].returns, 'int');
      assert.strictEqual(funcList[6].parameters.length, 1);
      assert.strictEqual(funcList[6].parameters[0].type, 'int');
      assert.strictEqual(funcList[6].parameters[0].name, 'x');
      assert.strictEqual(funcList[7].name, 'b8');
      assert.strictEqual(funcList[7].returns, 'int');
      assert.strictEqual(funcList[7].parameters.length, 1);
      assert.strictEqual(funcList[7].parameters[0].type, 'int');
      assert.strictEqual(funcList[7].parameters[0].name, 'x');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0115
  * @tc.name c_func_0115
  * @tc.desc h2dts parseFunction：扩充-多函数：同文件 10 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0115', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int c1(int x);
int c2(int x);
int c3(int x);
int c4(int x);
int c5(int x);
int c6(int x);
int c7(int x);
int c8(int x);
int c9(int x);
int c10(int x);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 10);
      assert.strictEqual(funcList[0].name, 'c1');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[1].name, 'c2');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'x');
      assert.strictEqual(funcList[2].name, 'c3');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'int');
      assert.strictEqual(funcList[2].parameters[0].name, 'x');
      assert.strictEqual(funcList[3].name, 'c4');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 1);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'x');
      assert.strictEqual(funcList[4].name, 'c5');
      assert.strictEqual(funcList[4].returns, 'int');
      assert.strictEqual(funcList[4].parameters.length, 1);
      assert.strictEqual(funcList[4].parameters[0].type, 'int');
      assert.strictEqual(funcList[4].parameters[0].name, 'x');
      assert.strictEqual(funcList[5].name, 'c6');
      assert.strictEqual(funcList[5].returns, 'int');
      assert.strictEqual(funcList[5].parameters.length, 1);
      assert.strictEqual(funcList[5].parameters[0].type, 'int');
      assert.strictEqual(funcList[5].parameters[0].name, 'x');
      assert.strictEqual(funcList[6].name, 'c7');
      assert.strictEqual(funcList[6].returns, 'int');
      assert.strictEqual(funcList[6].parameters.length, 1);
      assert.strictEqual(funcList[6].parameters[0].type, 'int');
      assert.strictEqual(funcList[6].parameters[0].name, 'x');
      assert.strictEqual(funcList[7].name, 'c8');
      assert.strictEqual(funcList[7].returns, 'int');
      assert.strictEqual(funcList[7].parameters.length, 1);
      assert.strictEqual(funcList[7].parameters[0].type, 'int');
      assert.strictEqual(funcList[7].parameters[0].name, 'x');
      assert.strictEqual(funcList[8].name, 'c9');
      assert.strictEqual(funcList[8].returns, 'int');
      assert.strictEqual(funcList[8].parameters.length, 1);
      assert.strictEqual(funcList[8].parameters[0].type, 'int');
      assert.strictEqual(funcList[8].parameters[0].name, 'x');
      assert.strictEqual(funcList[9].name, 'c10');
      assert.strictEqual(funcList[9].returns, 'int');
      assert.strictEqual(funcList[9].parameters.length, 1);
      assert.strictEqual(funcList[9].parameters[0].type, 'int');
      assert.strictEqual(funcList[9].parameters[0].name, 'x');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0116
  * @tc.name c_func_0116
  * @tc.desc h2dts parseFunction：扩充-typedef：返回 std::string 函数指针 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0116', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef std::string (*strCallback)(int a);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'strCallback');
      assert.strictEqual(funcList[0].returns, 'std::string');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0117
  * @tc.name c_func_0117
  * @tc.desc h2dts parseFunction：扩充-typedef：double 二元函数指针 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0117', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef double (*mathFn)(double x, double y);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'mathFn');
      assert.strictEqual(funcList[0].returns, 'double');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'double');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0118
  * @tc.name c_func_0118
  * @tc.desc h2dts parseFunction：扩充-typedef：notify 函数指针 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0118', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef void (*notify)(int code, std::string msg);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'notify');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'code');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[1].name, 'msg');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0118 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0119
  * @tc.name c_func_0119
  * @tc.desc h2dts parseFunction：扩充-namespace：域内 4 函数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0119', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`namespace svc {
int add(int a, int b);
int sub(int a, int b);
int mul(int a, int b);
int div(int a, int b);
}`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 4);
      assert.strictEqual(funcList[0].name, 'add');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[1].name, 'sub');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 2);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].parameters[1].type, 'int');
      assert.strictEqual(funcList[1].parameters[1].name, 'b');
      assert.strictEqual(funcList[2].name, 'mul');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 2);
      assert.strictEqual(funcList[2].parameters[0].type, 'int');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].parameters[1].type, 'int');
      assert.strictEqual(funcList[2].parameters[1].name, 'b');
      assert.strictEqual(funcList[3].name, 'div');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 2);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].parameters[1].type, 'int');
      assert.strictEqual(funcList[3].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0119 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0119 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0120
  * @tc.name c_func_0120
  * @tc.desc h2dts parseFunction：扩充-namespace：三层嵌套函数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0120', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`namespace deep {
namespace level1 {
namespace level2 {
int calc(int a);
}
}
}`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'calc');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0120 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0121
  * @tc.name c_func_0121
  * @tc.desc h2dts parseFunction：扩充-默认参数：int = 1024 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0121', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setSize(int size = 1024);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setSize');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'size');
      assert.strictEqual(funcList[0].parameters[1].type, '1024');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0121 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0122
  * @tc.name c_func_0122
  * @tc.desc h2dts parseFunction：扩充-默认参数：string 默认值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0122', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setName(std::string name = "default");`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setName');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'name');
      assert.strictEqual(funcList[0].parameters[1].type, '');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, 'default');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0123
  * @tc.name c_func_0123
  * @tc.desc h2dts parseFunction：扩充-默认参数：双默认值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0123', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int getValue(int key = 0, std::string def = "x");`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getValue');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'key');
      assert.strictEqual(funcList[0].parameters[1].type, '0');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[2].name, 'def');
      assert.strictEqual(funcList[0].parameters[3].type, '');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.strictEqual(funcList[0].parameters[4].type, 'x');
      assert.strictEqual(funcList[0].parameters[4].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0124
  * @tc.name c_func_0124
  * @tc.desc h2dts parseFunction：扩充-多参数：6 参全类型混合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0124', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`bool process(int id, std::string name, std::vector<int> data, std::map<std::string, double> opts, char* buf, size_t len);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'process');
      assert.strictEqual(funcList[0].returns, 'bool');
      assert.strictEqual(funcList[0].parameters.length, 6);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'id');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[1].name, 'name');
      assert.strictEqual(funcList[0].parameters[2].type, 'std::vector<int>');
      assert.strictEqual(funcList[0].parameters[2].name, 'data');
      assert.strictEqual(funcList[0].parameters[3].type, 'std::map<std::string, double>');
      assert.strictEqual(funcList[0].parameters[3].name, 'opts');
      assert.strictEqual(funcList[0].parameters[4].type, 'char*');
      assert.strictEqual(funcList[0].parameters[4].name, 'buf');
      assert.strictEqual(funcList[0].parameters[5].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[5].name, 'len');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0125
  * @tc.name c_func_0125
  * @tc.desc h2dts parseFunction：扩充-多参数：容器+引用+基础混合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0125', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void transform(std::vector<std::string> in, std::vector<std::string>& out, int flags, double scale);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'transform');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 6);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'in');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, 'out');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.strictEqual(funcList[0].parameters[4].type, 'int');
      assert.strictEqual(funcList[0].parameters[4].name, 'flags');
      assert.strictEqual(funcList[0].parameters[5].type, 'double');
      assert.strictEqual(funcList[0].parameters[5].name, 'scale');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0125 执行异常: ${String(err)}`);
    }
  });

});
