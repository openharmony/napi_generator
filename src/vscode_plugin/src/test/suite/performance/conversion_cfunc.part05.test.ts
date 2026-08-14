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
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part05.');

  /**
  * @tc.number c_func_0186
  * @tc.name c_func_0186
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::forward_list<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0186', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::forward_list<int> getR060();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR060');
      assert.strictEqual(funcList[0].returns, 'std::forward_list<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0186 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0186 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0187
  * @tc.name c_func_0187
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::valarray<double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0187', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::valarray<double> getR061();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR061');
      assert.strictEqual(funcList[0].returns, 'std::valarray<double>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0187 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0187 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0188
  * @tc.name c_func_0188
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::complex<double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0188', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::complex<double> getR062();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR062');
      assert.strictEqual(funcList[0].returns, 'std::complex<double>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0188 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0188 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0189
  * @tc.name c_func_0189
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::function<int(int,int)> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0189', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::function<int(int,int)> getR063();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR063');
      assert.strictEqual(funcList[0].returns, 'std::function<int(int,int)>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0189 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0189 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0190
  * @tc.name c_func_0190
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::function<void(std::string)> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0190', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::function<void(std::string)> getR064();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR064');
      assert.strictEqual(funcList[0].returns, 'std::function<void(std::string)>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0190 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0190 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0191
  * @tc.name c_func_0191
  * @tc.desc h2dts parseFunction：扩充-入参+返回：int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0191', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int getRV000(int v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV000');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0191 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0191 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0192
  * @tc.name c_func_0192
  * @tc.desc h2dts parseFunction：扩充-入参+返回：char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0192', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`char getRV001(char v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV001');
      assert.strictEqual(funcList[0].returns, 'char');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0192 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0192 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0193
  * @tc.name c_func_0193
  * @tc.desc h2dts parseFunction：扩充-入参+返回：short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0193', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`short getRV002(short v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV002');
      assert.strictEqual(funcList[0].returns, 'short');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0193 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0193 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0194
  * @tc.name c_func_0194
  * @tc.desc h2dts parseFunction：扩充-入参+返回：long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0194', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`long getRV003(long v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV003');
      assert.strictEqual(funcList[0].returns, 'long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0194 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0194 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0195
  * @tc.name c_func_0195
  * @tc.desc h2dts parseFunction：扩充-入参+返回：long long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0195', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`long long getRV004(long long v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV004');
      assert.strictEqual(funcList[0].returns, 'long long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0195 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0195 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0196
  * @tc.name c_func_0196
  * @tc.desc h2dts parseFunction：扩充-入参+返回：float 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0196', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`float getRV005(float v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV005');
      assert.strictEqual(funcList[0].returns, 'float');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0196 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0196 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0197
  * @tc.name c_func_0197
  * @tc.desc h2dts parseFunction：扩充-入参+返回：double 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0197', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`double getRV006(double v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV006');
      assert.strictEqual(funcList[0].returns, 'double');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0197 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0197 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0198
  * @tc.name c_func_0198
  * @tc.desc h2dts parseFunction：扩充-入参+返回：bool 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0198', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`bool getRV007(bool v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV007');
      assert.strictEqual(funcList[0].returns, 'bool');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0198 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0198 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0199
  * @tc.name c_func_0199
  * @tc.desc h2dts parseFunction：扩充-入参+返回：unsigned int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0199', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`unsigned int getRV008(unsigned int v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV008');
      assert.strictEqual(funcList[0].returns, 'unsigned int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0199 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0199 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0200
  * @tc.name c_func_0200
  * @tc.desc h2dts parseFunction：扩充-入参+返回：unsigned char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0200', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`unsigned char getRV009(unsigned char v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV009');
      assert.strictEqual(funcList[0].returns, 'unsigned char');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0200 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0200 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0201
  * @tc.name c_func_0201
  * @tc.desc h2dts parseFunction：扩充-入参+返回：unsigned short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0201', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`unsigned short getRV010(unsigned short v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV010');
      assert.strictEqual(funcList[0].returns, 'unsigned short');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0201 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0201 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0202
  * @tc.name c_func_0202
  * @tc.desc h2dts parseFunction：扩充-入参+返回：unsigned long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0202', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`unsigned long getRV011(unsigned long v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV011');
      assert.strictEqual(funcList[0].returns, 'unsigned long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0202 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0202 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0203
  * @tc.name c_func_0203
  * @tc.desc h2dts parseFunction：扩充-入参+返回：unsigned long long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0203', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`unsigned long long getRV012(unsigned long long v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV012');
      assert.strictEqual(funcList[0].returns, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0203 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0203 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0204
  * @tc.name c_func_0204
  * @tc.desc h2dts parseFunction：扩充-入参+返回：signed char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0204', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`signed char getRV013(signed char v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV013');
      assert.strictEqual(funcList[0].returns, 'signed char');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0204 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0204 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0205
  * @tc.name c_func_0205
  * @tc.desc h2dts parseFunction：扩充-入参+返回：signed short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0205', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`signed short getRV014(signed short v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV014');
      assert.strictEqual(funcList[0].returns, 'signed short');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0205 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0205 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0206
  * @tc.name c_func_0206
  * @tc.desc h2dts parseFunction：扩充-入参+返回：signed long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0206', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`signed long getRV015(signed long v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV015');
      assert.strictEqual(funcList[0].returns, 'signed long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0206 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0206 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0207
  * @tc.name c_func_0207
  * @tc.desc h2dts parseFunction：扩充-入参+返回：wchar_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0207', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`wchar_t getRV016(wchar_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV016');
      assert.strictEqual(funcList[0].returns, 'wchar_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0207 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0207 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0208
  * @tc.name c_func_0208
  * @tc.desc h2dts parseFunction：扩充-入参+返回：char16_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0208', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`char16_t getRV017(char16_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV017');
      assert.strictEqual(funcList[0].returns, 'char16_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0208 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0208 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0209
  * @tc.name c_func_0209
  * @tc.desc h2dts parseFunction：扩充-入参+返回：char32_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0209', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`char32_t getRV018(char32_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV018');
      assert.strictEqual(funcList[0].returns, 'char32_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0209 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0209 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0210
  * @tc.name c_func_0210
  * @tc.desc h2dts parseFunction：扩充-入参+返回：size_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0210', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`size_t getRV019(size_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV019');
      assert.strictEqual(funcList[0].returns, 'size_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0210 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0210 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0211
  * @tc.name c_func_0211
  * @tc.desc h2dts parseFunction：扩充-入参+返回：int8_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0211', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int8_t getRV020(int8_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV020');
      assert.strictEqual(funcList[0].returns, 'int8_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0211 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0211 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0212
  * @tc.name c_func_0212
  * @tc.desc h2dts parseFunction：扩充-入参+返回：int16_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0212', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int16_t getRV021(int16_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV021');
      assert.strictEqual(funcList[0].returns, 'int16_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0212 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0212 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0213
  * @tc.name c_func_0213
  * @tc.desc h2dts parseFunction：扩充-入参+返回：int32_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0213', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int32_t getRV022(int32_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV022');
      assert.strictEqual(funcList[0].returns, 'int32_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0213 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0213 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0214
  * @tc.name c_func_0214
  * @tc.desc h2dts parseFunction：扩充-入参+返回：int64_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0214', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int64_t getRV023(int64_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV023');
      assert.strictEqual(funcList[0].returns, 'int64_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0214 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0214 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0215
  * @tc.name c_func_0215
  * @tc.desc h2dts parseFunction：扩充-入参+返回：uint8_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0215', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`uint8_t getRV024(uint8_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV024');
      assert.strictEqual(funcList[0].returns, 'uint8_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0215 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0215 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0216
  * @tc.name c_func_0216
  * @tc.desc h2dts parseFunction：扩充-入参+返回：uint16_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0216', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`uint16_t getRV025(uint16_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV025');
      assert.strictEqual(funcList[0].returns, 'uint16_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0216 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0216 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0217
  * @tc.name c_func_0217
  * @tc.desc h2dts parseFunction：扩充-入参+返回：uint32_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0217', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`uint32_t getRV026(uint32_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV026');
      assert.strictEqual(funcList[0].returns, 'uint32_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0217 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0217 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0218
  * @tc.name c_func_0218
  * @tc.desc h2dts parseFunction：扩充-入参+返回：uint64_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0218', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`uint64_t getRV027(uint64_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV027');
      assert.strictEqual(funcList[0].returns, 'uint64_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0218 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0218 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0219
  * @tc.name c_func_0219
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::string 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0219', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::string getRV028(std::string v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV028');
      assert.strictEqual(funcList[0].returns, 'std::string');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0219 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0219 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0220
  * @tc.name c_func_0220
  * @tc.desc h2dts parseFunction：扩充-入参+返回：string 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0220', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`string getRV029(string v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV029');
      assert.strictEqual(funcList[0].returns, 'string');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'string');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0220 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0220 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0221
  * @tc.name c_func_0221
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::wstring 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0221', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::wstring getRV030(std::wstring v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV030');
      assert.strictEqual(funcList[0].returns, 'std::wstring');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::wstring');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0221 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0221 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0222
  * @tc.name c_func_0222
  * @tc.desc h2dts parseFunction：扩充-入参+返回：long double 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0222', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`long double getRV031(long double v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV031');
      assert.strictEqual(funcList[0].returns, 'long double');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long double');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0222 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0222 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0223
  * @tc.name c_func_0223
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::vector<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0223', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<int> getRV032(std::vector<int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV032');
      assert.strictEqual(funcList[0].returns, 'std::vector<int>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0223 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0223 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0224
  * @tc.name c_func_0224
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::vector<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0224', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<std::string> getRV033(std::vector<std::string> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV033');
      assert.strictEqual(funcList[0].returns, 'std::vector<std::string>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0224 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0224 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0225
  * @tc.name c_func_0225
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::vector<double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0225', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<double> getRV034(std::vector<double> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV034');
      assert.strictEqual(funcList[0].returns, 'std::vector<double>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0225 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0225 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0226
  * @tc.name c_func_0226
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::vector<bool> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0226', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<bool> getRV035(std::vector<bool> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV035');
      assert.strictEqual(funcList[0].returns, 'std::vector<bool>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0226 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0226 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0227
  * @tc.name c_func_0227
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::map<std::string,int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0227', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::map<std::string,int> getRV036(std::map<std::string,int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV036');
      assert.strictEqual(funcList[0].returns, 'std::map<std::string,int>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<std::string,int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0227 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0227 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0228
  * @tc.name c_func_0228
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::map<int,std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0228', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::map<int,std::string> getRV037(std::map<int,std::string> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV037');
      assert.strictEqual(funcList[0].returns, 'std::map<int,std::string>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<int,std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0228 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0228 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0229
  * @tc.name c_func_0229
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::set<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0229', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::set<int> getRV038(std::set<int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV038');
      assert.strictEqual(funcList[0].returns, 'std::set<int>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::set<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0229 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0229 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0230
  * @tc.name c_func_0230
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::set<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0230', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::set<std::string> getRV039(std::set<std::string> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV039');
      assert.strictEqual(funcList[0].returns, 'std::set<std::string>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::set<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0230 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0230 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0231
  * @tc.name c_func_0231
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::list<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0231', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::list<int> getRV040(std::list<int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV040');
      assert.strictEqual(funcList[0].returns, 'std::list<int>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::list<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0231 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0231 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0232
  * @tc.name c_func_0232
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::list<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0232', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::list<std::string> getRV041(std::list<std::string> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV041');
      assert.strictEqual(funcList[0].returns, 'std::list<std::string>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::list<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0232 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0232 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0233
  * @tc.name c_func_0233
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::deque<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0233', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::deque<int> getRV042(std::deque<int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV042');
      assert.strictEqual(funcList[0].returns, 'std::deque<int>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::deque<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0233 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0233 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0234
  * @tc.name c_func_0234
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::deque<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0234', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::deque<std::string> getRV043(std::deque<std::string> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV043');
      assert.strictEqual(funcList[0].returns, 'std::deque<std::string>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::deque<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0234 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0234 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0235
  * @tc.name c_func_0235
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::pair<int,int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0235', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::pair<int,int> getRV044(std::pair<int,int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV044');
      assert.strictEqual(funcList[0].returns, 'std::pair<int,int>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::pair<int,int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0235 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0235 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0236
  * @tc.name c_func_0236
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::pair<std::string,int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0236', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::pair<std::string,int> getRV045(std::pair<std::string,int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV045');
      assert.strictEqual(funcList[0].returns, 'std::pair<std::string,int>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::pair<std::string,int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0236 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0236 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0237
  * @tc.name c_func_0237
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::tuple<int,int,int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0237', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::tuple<int,int,int> getRV046(std::tuple<int,int,int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV046');
      assert.strictEqual(funcList[0].returns, 'std::tuple<int,int,int>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::tuple<int,int,int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0237 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0237 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0238
  * @tc.name c_func_0238
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::tuple<std::string,int,double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0238', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::tuple<std::string,int,double> getRV047(std::tuple<std::string,int,double> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV047');
      assert.strictEqual(funcList[0].returns, 'std::tuple<std::string,int,double>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0238 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0238 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0239
  * @tc.name c_func_0239
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::queue<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0239', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::queue<int> getRV048(std::queue<int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV048');
      assert.strictEqual(funcList[0].returns, 'std::queue<int>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::queue<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0239 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0239 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0240
  * @tc.name c_func_0240
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::stack<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0240', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::stack<int> getRV049(std::stack<int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV049');
      assert.strictEqual(funcList[0].returns, 'std::stack<int>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::stack<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0240 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0240 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0241
  * @tc.name c_func_0241
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::priority_queue<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0241', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::priority_queue<int> getRV050(std::priority_queue<int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV050');
      assert.strictEqual(funcList[0].returns, 'std::priority_queue<int>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::priority_queue<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0241 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0241 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0242
  * @tc.name c_func_0242
  * @tc.desc h2dts parseFunction：扩充-入参+返回：std::multimap<int,int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0242', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::multimap<int,int> getRV051(std::multimap<int,int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getRV051');
      assert.strictEqual(funcList[0].returns, 'std::multimap<int,int>');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::multimap<int,int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0242 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0242 执行异常: ${String(err)}`);
    }
  });

});
