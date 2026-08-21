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
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part19.');

  /**
  * @tc.number c_func_0914
  * @tc.name c_func_0914
  * @tc.desc h2dts parseFunction：类型覆盖-入参：long int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0914', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT087(long int v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT087');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long int');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0914 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0914 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0915
  * @tc.name c_func_0915
  * @tc.desc h2dts parseFunction：类型覆盖-返回：long int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0915', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`long int getT087();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT087');
      assert.strictEqual(funcList[0].returns, 'long int');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0915 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0915 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0916
  * @tc.name c_func_0916
  * @tc.desc h2dts parseFunction：类型覆盖-入参：short int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0916', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT088(short int v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT088');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'short int');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0916 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0916 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0917
  * @tc.name c_func_0917
  * @tc.desc h2dts parseFunction：类型覆盖-返回：short int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0917', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`short int getT088();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT088');
      assert.strictEqual(funcList[0].returns, 'short int');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0917 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0917 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0918
  * @tc.name c_func_0918
  * @tc.desc h2dts parseFunction：类型覆盖-入参：unsigned short int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0918', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT089(unsigned short int v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT089');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short int');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0918 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0918 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0919
  * @tc.name c_func_0919
  * @tc.desc h2dts parseFunction：类型覆盖-返回：unsigned short int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0919', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`unsigned short int getT089();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT089');
      assert.strictEqual(funcList[0].returns, 'unsigned short int');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0919 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0919 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0920
  * @tc.name c_func_0920
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<int>, std::shared_ptr<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0920', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0001(std::shared_ptr<int> a, std::shared_ptr<std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::shared_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0920 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0920 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0921
  * @tc.name c_func_0921
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<int>, std::shared_ptr<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0921', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0002(std::shared_ptr<int> a, std::shared_ptr<double> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::shared_ptr<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0921 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0921 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0922
  * @tc.name c_func_0922
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<int>, std::unique_ptr<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0922', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0003(std::shared_ptr<int> a, std::unique_ptr<int> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unique_ptr<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0922 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0922 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0923
  * @tc.name c_func_0923
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<std::string>, std::shared_ptr<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0923', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0011(std::shared_ptr<std::string> a, std::shared_ptr<double> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0011');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::shared_ptr<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0923 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0923 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0924
  * @tc.name c_func_0924
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<std::string>, std::unique_ptr<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0924', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0012(std::shared_ptr<std::string> a, std::unique_ptr<int> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0012');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unique_ptr<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0924 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0924 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0925
  * @tc.name c_func_0925
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<std::string>, std::unique_ptr<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0925', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0013(std::shared_ptr<std::string> a, std::unique_ptr<std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0013');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unique_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0925 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0925 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0926
  * @tc.name c_func_0926
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<double>, std::unique_ptr<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0926', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0021(std::shared_ptr<double> a, std::unique_ptr<int> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0021');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unique_ptr<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0926 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0926 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0927
  * @tc.name c_func_0927
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<double>, std::unique_ptr<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0927', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0022(std::shared_ptr<double> a, std::unique_ptr<std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0022');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unique_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0927 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0927 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0928
  * @tc.name c_func_0928
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<double>, std::unique_ptr<char>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0928', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0023(std::shared_ptr<double> a, std::unique_ptr<char> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0023');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unique_ptr<char>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0928 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0928 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0929
  * @tc.name c_func_0929
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<int>, std::unique_ptr<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0929', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0031(std::unique_ptr<int> a, std::unique_ptr<std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0031');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unique_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0929 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0929 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0930
  * @tc.name c_func_0930
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<int>, std::unique_ptr<char>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0930', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0032(std::unique_ptr<int> a, std::unique_ptr<char> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0032');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unique_ptr<char>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0930 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0930 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0931
  * @tc.name c_func_0931
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<int>, std::weak_ptr<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0931', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0033(std::unique_ptr<int> a, std::weak_ptr<int> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0033');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::weak_ptr<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0931 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0931 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0932
  * @tc.name c_func_0932
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<std::string>, std::unique_ptr<char>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0932', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0041(std::unique_ptr<std::string> a, std::unique_ptr<char> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0041');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unique_ptr<char>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0932 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0932 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0933
  * @tc.name c_func_0933
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<std::string>, std::weak_ptr<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0933', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0042(std::unique_ptr<std::string> a, std::weak_ptr<int> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0042');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::weak_ptr<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0933 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0933 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0934
  * @tc.name c_func_0934
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<std::string>, std::weak_ptr<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0934', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0043(std::unique_ptr<std::string> a, std::weak_ptr<std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0043');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::weak_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0934 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0934 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0935
  * @tc.name c_func_0935
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<char>, std::weak_ptr<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0935', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0051(std::unique_ptr<char> a, std::weak_ptr<int> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0051');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr<char>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::weak_ptr<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0935 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0935 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0936
  * @tc.name c_func_0936
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<char>, std::weak_ptr<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0936', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0052(std::unique_ptr<char> a, std::weak_ptr<std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0052');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr<char>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::weak_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0936 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0936 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0937
  * @tc.name c_func_0937
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<char>, std::optional<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0937', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0053(std::unique_ptr<char> a, std::optional<int> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0053');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr<char>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::optional<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0937 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0937 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0938
  * @tc.name c_func_0938
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::weak_ptr<int>, std::weak_ptr<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0938', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0061(std::weak_ptr<int> a, std::weak_ptr<std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0061');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::weak_ptr<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::weak_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0938 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0938 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0939
  * @tc.name c_func_0939
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::weak_ptr<int>, std::optional<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0939', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0062(std::weak_ptr<int> a, std::optional<int> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0062');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::weak_ptr<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::optional<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0939 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0939 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0940
  * @tc.name c_func_0940
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::weak_ptr<int>, std::optional<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0940', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0063(std::weak_ptr<int> a, std::optional<std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0063');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::weak_ptr<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::optional<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0940 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0940 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0941
  * @tc.name c_func_0941
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::weak_ptr<std::string>, std::optional<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0941', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0071(std::weak_ptr<std::string> a, std::optional<int> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0071');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::weak_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::optional<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0941 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0941 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0942
  * @tc.name c_func_0942
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::weak_ptr<std::string>, std::optional<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0942', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0072(std::weak_ptr<std::string> a, std::optional<std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0072');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::weak_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::optional<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0942 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0942 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0943
  * @tc.name c_func_0943
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::weak_ptr<std::string>, std::optional<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0943', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0073(std::weak_ptr<std::string> a, std::optional<double> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0073');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::weak_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::optional<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0943 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0943 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0944
  * @tc.name c_func_0944
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::optional<int>, std::optional<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0944', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0081(std::optional<int> a, std::optional<std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0081');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::optional<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0944 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0944 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0945
  * @tc.name c_func_0945
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::optional<int>, std::optional<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0945', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0082(std::optional<int> a, std::optional<double> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0082');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::optional<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0945 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0945 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0946
  * @tc.name c_func_0946
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::optional<int>, std::optional<bool>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0946', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0083(std::optional<int> a, std::optional<bool> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0083');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::optional<bool>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0946 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0946 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0947
  * @tc.name c_func_0947
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::optional<std::string>, std::optional<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0947', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0091(std::optional<std::string> a, std::optional<double> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0091');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::optional<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0947 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0947 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0948
  * @tc.name c_func_0948
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::optional<std::string>, std::optional<bool>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0948', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0092(std::optional<std::string> a, std::optional<bool> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0092');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::optional<bool>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0948 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0948 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0949
  * @tc.name c_func_0949
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::optional<std::string>, std::variant<int, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0949', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0093(std::optional<std::string> a, std::variant<int, std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0093');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::variant<int, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0949 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0949 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0950
  * @tc.name c_func_0950
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::optional<double>, std::optional<bool>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0950', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0101(std::optional<double> a, std::optional<bool> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0101');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::optional<bool>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0950 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0950 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0951
  * @tc.name c_func_0951
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::optional<double>, std::variant<int, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0951', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0102(std::optional<double> a, std::variant<int, std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0102');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::variant<int, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0951 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0951 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0952
  * @tc.name c_func_0952
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::optional<double>, std::variant<double, bool>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0952', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0103(std::optional<double> a, std::variant<double, bool> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0103');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::variant<double, bool>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0952 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0952 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0953
  * @tc.name c_func_0953
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::optional<bool>, std::variant<int, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0953', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0111(std::optional<bool> a, std::variant<int, std::string> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0111');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::variant<int, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0953 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0953 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0954
  * @tc.name c_func_0954
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::optional<bool>, std::variant<double, bool>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0954', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0112(std::optional<bool> a, std::variant<double, bool> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0112');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::variant<double, bool>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0954 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0954 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0955
  * @tc.name c_func_0955
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::optional<bool>, std::variant<int, float, double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0955', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0113(std::optional<bool> a, std::variant<int, float, double> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0113');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::variant<int, float, double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0955 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0955 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0956
  * @tc.name c_func_0956
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::variant<int, std::string>, std::variant<double, bool>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0956', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0121(std::variant<int, std::string> a, std::variant<double, bool> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0121');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::variant<int, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::variant<double, bool>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0956 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0956 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0957
  * @tc.name c_func_0957
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::variant<int, std::string>, std::variant<int, float, double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0957', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0122(std::variant<int, std::string> a, std::variant<int, float, double> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0122');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::variant<int, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::variant<int, float, double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0957 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0957 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0958
  * @tc.name c_func_0958
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::variant<int, std::string>, std::bitset<8>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0958', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0123(std::variant<int, std::string> a, std::bitset<8> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0123');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::variant<int, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::bitset<8>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0958 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0958 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0959
  * @tc.name c_func_0959
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::variant<double, bool>, std::variant<int, float, double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0959', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0131(std::variant<double, bool> a, std::variant<int, float, double> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0131');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::variant<double, bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::variant<int, float, double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0959 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0959 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0960
  * @tc.name c_func_0960
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::variant<double, bool>, std::bitset<8>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0960', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0132(std::variant<double, bool> a, std::bitset<8> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0132');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::variant<double, bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::bitset<8>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0960 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0960 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0961
  * @tc.name c_func_0961
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::variant<double, bool>, std::bitset<16>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0961', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0133(std::variant<double, bool> a, std::bitset<16> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0133');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::variant<double, bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::bitset<16>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0961 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0961 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0962
  * @tc.name c_func_0962
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::variant<int, float, double>, std::bitset<8>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0962', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0141(std::variant<int, float, double> a, std::bitset<8> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0141');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::variant<int, float, double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::bitset<8>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0962 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0962 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0963
  * @tc.name c_func_0963
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::variant<int, float, double>, std::bitset<16>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0963', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0142(std::variant<int, float, double> a, std::bitset<16> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0142');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::variant<int, float, double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::bitset<16>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0963 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0963 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0964
  * @tc.name c_func_0964
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::variant<int, float, double>, std::bitset<32>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0964', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0143(std::variant<int, float, double> a, std::bitset<32> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0143');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::variant<int, float, double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::bitset<32>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0964 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0964 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0965
  * @tc.name c_func_0965
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::bitset<8>, std::bitset<16>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0965', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0151(std::bitset<8> a, std::bitset<16> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0151');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::bitset<8>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::bitset<16>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0965 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0965 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0966
  * @tc.name c_func_0966
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::bitset<8>, std::bitset<32>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0966', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0152(std::bitset<8> a, std::bitset<32> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0152');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::bitset<8>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::bitset<32>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0966 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0966 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0967
  * @tc.name c_func_0967
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::bitset<8>, std::span<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0967', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void cp0153(std::bitset<8> a, std::span<int> b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0153');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::bitset<8>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::span<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0967 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0967 执行异常: ${String(err)}`);
    }
  });

});
