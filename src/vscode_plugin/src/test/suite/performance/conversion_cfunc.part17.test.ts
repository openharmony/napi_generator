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
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part17.');

  /**
  * @tc.number c_func_0798
  * @tc.name c_func_0798
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::chrono::system_clock::time_point 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0798', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT029(std::chrono::system_clock::time_point v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT029');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::chrono::system_clock::time_point');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0798 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0798 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0799
  * @tc.name c_func_0799
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::chrono::system_clock::time_point 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0799', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::chrono::system_clock::time_point getT029();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT029');
      assert.strictEqual(funcList[0].returns, 'std::chrono::system_clock::time_point');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0799 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0799 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0800
  * @tc.name c_func_0800
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::filesystem::path 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0800', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT030(std::filesystem::path v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT030');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::filesystem::path');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0800 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0800 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0801
  * @tc.name c_func_0801
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::filesystem::path 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0801', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::filesystem::path getT030();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT030');
      assert.strictEqual(funcList[0].returns, 'std::filesystem::path');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0801 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0801 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0802
  * @tc.name c_func_0802
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::map<int, int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0802', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT031(std::map<int, int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT031');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<int, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0802 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0802 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0803
  * @tc.name c_func_0803
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::map<int, int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0803', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::map<int, int> getT031();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT031');
      assert.strictEqual(funcList[0].returns, 'std::map<int, int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0803 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0803 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0804
  * @tc.name c_func_0804
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::map<double, std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0804', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT032(std::map<double, std::string> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT032');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<double, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0804 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0804 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0805
  * @tc.name c_func_0805
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::map<double, std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0805', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::map<double, std::string> getT032();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT032');
      assert.strictEqual(funcList[0].returns, 'std::map<double, std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0805 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0805 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0806
  * @tc.name c_func_0806
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::map<std::string, std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0806', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT033(std::map<std::string, std::string> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT033');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<std::string, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0806 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0806 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0807
  * @tc.name c_func_0807
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::map<std::string, std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0807', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::map<std::string, std::string> getT033();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT033');
      assert.strictEqual(funcList[0].returns, 'std::map<std::string, std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0807 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0807 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0808
  * @tc.name c_func_0808
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::map<wchar_t, int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0808', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT034(std::map<wchar_t, int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT034');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<wchar_t, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0808 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0808 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0809
  * @tc.name c_func_0809
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::map<wchar_t, int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0809', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::map<wchar_t, int> getT034();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT034');
      assert.strictEqual(funcList[0].returns, 'std::map<wchar_t, int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0809 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0809 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0810
  * @tc.name c_func_0810
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::map<size_t, std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0810', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT035(std::map<size_t, std::string> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT035');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<size_t, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0810 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0810 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0811
  * @tc.name c_func_0811
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::map<size_t, std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0811', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::map<size_t, std::string> getT035();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT035');
      assert.strictEqual(funcList[0].returns, 'std::map<size_t, std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0811 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0811 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0812
  * @tc.name c_func_0812
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::map<float, float> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0812', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT036(std::map<float, float> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT036');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<float, float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0812 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0812 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0813
  * @tc.name c_func_0813
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::map<float, float> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0813', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::map<float, float> getT036();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT036');
      assert.strictEqual(funcList[0].returns, 'std::map<float, float>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0813 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0813 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0814
  * @tc.name c_func_0814
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::vector<char> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0814', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT037(std::vector<char> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT037');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<char>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0814 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0814 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0815
  * @tc.name c_func_0815
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::vector<char> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0815', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<char> getT037();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT037');
      assert.strictEqual(funcList[0].returns, 'std::vector<char>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0815 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0815 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0816
  * @tc.name c_func_0816
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::vector<float> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0816', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT038(std::vector<float> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT038');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0816 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0816 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0817
  * @tc.name c_func_0817
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::vector<float> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0817', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<float> getT038();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT038');
      assert.strictEqual(funcList[0].returns, 'std::vector<float>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0817 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0817 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0818
  * @tc.name c_func_0818
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::vector<long> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0818', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT039(std::vector<long> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT039');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<long>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0818 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0818 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0819
  * @tc.name c_func_0819
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::vector<long> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0819', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<long> getT039();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT039');
      assert.strictEqual(funcList[0].returns, 'std::vector<long>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0819 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0819 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0820
  * @tc.name c_func_0820
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::vector<unsigned int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0820', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT040(std::vector<unsigned int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT040');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<unsigned int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0820 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0820 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0821
  * @tc.name c_func_0821
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::vector<unsigned int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0821', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<unsigned int> getT040();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT040');
      assert.strictEqual(funcList[0].returns, 'std::vector<unsigned int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0821 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0821 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0822
  * @tc.name c_func_0822
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::vector<std::wstring> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0822', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT041(std::vector<std::wstring> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT041');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<std::wstring>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0822 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0822 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0823
  * @tc.name c_func_0823
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::vector<std::wstring> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0823', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<std::wstring> getT041();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT041');
      assert.strictEqual(funcList[0].returns, 'std::vector<std::wstring>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0823 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0823 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0824
  * @tc.name c_func_0824
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::vector<short> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0824', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT042(std::vector<short> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT042');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<short>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0824 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0824 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0825
  * @tc.name c_func_0825
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::vector<short> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0825', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<short> getT042();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT042');
      assert.strictEqual(funcList[0].returns, 'std::vector<short>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0825 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0825 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0826
  * @tc.name c_func_0826
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::vector<int64_t> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0826', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT043(std::vector<int64_t> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT043');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<int64_t>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0826 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0826 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0827
  * @tc.name c_func_0827
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::vector<int64_t> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0827', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<int64_t> getT043();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT043');
      assert.strictEqual(funcList[0].returns, 'std::vector<int64_t>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0827 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0827 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0828
  * @tc.name c_func_0828
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::vector<uint8_t> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0828', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT044(std::vector<uint8_t> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT044');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<uint8_t>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0828 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0828 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0829
  * @tc.name c_func_0829
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::vector<uint8_t> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0829', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<uint8_t> getT044();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT044');
      assert.strictEqual(funcList[0].returns, 'std::vector<uint8_t>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0829 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0829 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0830
  * @tc.name c_func_0830
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::vector<size_t> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0830', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT045(std::vector<size_t> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT045');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<size_t>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0830 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0830 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0831
  * @tc.name c_func_0831
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::vector<size_t> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0831', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<size_t> getT045();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT045');
      assert.strictEqual(funcList[0].returns, 'std::vector<size_t>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0831 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0831 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0832
  * @tc.name c_func_0832
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::vector<std::string_view> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0832', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT046(std::vector<std::string_view> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT046');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<std::string_view>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0832 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0832 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0833
  * @tc.name c_func_0833
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::vector<std::string_view> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0833', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<std::string_view> getT046();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT046');
      assert.strictEqual(funcList[0].returns, 'std::vector<std::string_view>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0833 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0833 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0834
  * @tc.name c_func_0834
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::pair<double, double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0834', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT047(std::pair<double, double> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT047');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::pair<double, double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0834 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0834 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0835
  * @tc.name c_func_0835
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::pair<double, double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0835', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::pair<double, double> getT047();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT047');
      assert.strictEqual(funcList[0].returns, 'std::pair<double, double>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0835 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0835 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0836
  * @tc.name c_func_0836
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::pair<float, float> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0836', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT048(std::pair<float, float> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT048');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::pair<float, float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0836 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0836 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0837
  * @tc.name c_func_0837
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::pair<float, float> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0837', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::pair<float, float> getT048();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT048');
      assert.strictEqual(funcList[0].returns, 'std::pair<float, float>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0837 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0837 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0838
  * @tc.name c_func_0838
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::pair<int, long> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0838', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT049(std::pair<int, long> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT049');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::pair<int, long>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0838 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0838 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0839
  * @tc.name c_func_0839
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::pair<int, long> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0839', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::pair<int, long> getT049();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT049');
      assert.strictEqual(funcList[0].returns, 'std::pair<int, long>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0839 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0839 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0840
  * @tc.name c_func_0840
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::tuple<int, std::string, bool> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0840', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT050(std::tuple<int, std::string, bool> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT050');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::tuple<int, std::string, bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0840 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0840 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0841
  * @tc.name c_func_0841
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::tuple<int, std::string, bool> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0841', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::tuple<int, std::string, bool> getT050();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT050');
      assert.strictEqual(funcList[0].returns, 'std::tuple<int, std::string, bool>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0841 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0841 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0842
  * @tc.name c_func_0842
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::tuple<double, double, double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0842', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT051(std::tuple<double, double, double> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT051');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::tuple<double, double, double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0842 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0842 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0843
  * @tc.name c_func_0843
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::tuple<double, double, double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0843', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::tuple<double, double, double> getT051();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT051');
      assert.strictEqual(funcList[0].returns, 'std::tuple<double, double, double>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0843 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0843 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0844
  * @tc.name c_func_0844
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::tuple<char, short, int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0844', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT052(std::tuple<char, short, int> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT052');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::tuple<char, short, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0844 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0844 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0845
  * @tc.name c_func_0845
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::tuple<char, short, int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0845', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::tuple<char, short, int> getT052();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT052');
      assert.strictEqual(funcList[0].returns, 'std::tuple<char, short, int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0845 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0845 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0846
  * @tc.name c_func_0846
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::tuple<std::string, std::string, std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0846', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT053(std::tuple<std::string, std::string, std::string> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT053');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::tuple<std::string, std::string, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0846 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0846 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0847
  * @tc.name c_func_0847
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::tuple<std::string, std::string, std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0847', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::tuple<std::string, std::string, std::string> getT053();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT053');
      assert.strictEqual(funcList[0].returns, 'std::tuple<std::string, std::string, std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0847 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0847 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0848
  * @tc.name c_func_0848
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::deque<float> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0848', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT054(std::deque<float> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT054');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::deque<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0848 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0848 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0849
  * @tc.name c_func_0849
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::deque<float> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0849', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::deque<float> getT054();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT054');
      assert.strictEqual(funcList[0].returns, 'std::deque<float>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0849 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0849 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0850
  * @tc.name c_func_0850
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::deque<long> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0850', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT055(std::deque<long> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT055');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::deque<long>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0850 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0850 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0851
  * @tc.name c_func_0851
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::deque<long> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0851', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::deque<long> getT055();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT055');
      assert.strictEqual(funcList[0].returns, 'std::deque<long>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0851 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0851 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0852
  * @tc.name c_func_0852
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::set<double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0852', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT056(std::set<double> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT056');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::set<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0852 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0852 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0853
  * @tc.name c_func_0853
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::set<double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0853', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::set<double> getT056();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT056');
      assert.strictEqual(funcList[0].returns, 'std::set<double>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0853 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0853 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0854
  * @tc.name c_func_0854
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::set<std::wstring> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0854', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setT057(std::set<std::wstring> v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT057');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::set<std::wstring>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0854 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0854 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0855
  * @tc.name c_func_0855
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::set<std::wstring> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0855', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::set<std::wstring> getT057();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT057');
      assert.strictEqual(funcList[0].returns, 'std::set<std::wstring>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0855 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0855 执行异常: ${String(err)}`);
    }
  });

});
