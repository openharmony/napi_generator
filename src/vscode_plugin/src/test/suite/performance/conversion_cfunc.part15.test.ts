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
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part15.');

  /**
  * @tc.number c_func_0712
  * @tc.name c_func_0712
  * @tc.desc h2dts parseFunction：扩充-重载：ov2 4 组重载 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0712', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int ov2(int a);
int ov2(double a);
int ov2(std::string a);
int ov2(int a, int b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 4);
      assert.strictEqual(funcList[0].name, 'ov2');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'ov2');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'double');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'ov2');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].name, 'ov2');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 2);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].parameters[1].type, 'int');
      assert.strictEqual(funcList[3].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0712 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0712 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0713
  * @tc.name c_func_0713
  * @tc.desc h2dts parseFunction：扩充-重载：ov3 4 组重载 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0713', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int ov3(int a);
int ov3(double a);
int ov3(std::string a);
int ov3(int a, int b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 4);
      assert.strictEqual(funcList[0].name, 'ov3');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'ov3');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'double');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'ov3');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].name, 'ov3');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 2);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].parameters[1].type, 'int');
      assert.strictEqual(funcList[3].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0713 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0713 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0714
  * @tc.name c_func_0714
  * @tc.desc h2dts parseFunction：扩充-重载：ov4 4 组重载 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0714', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int ov4(int a);
int ov4(double a);
int ov4(std::string a);
int ov4(int a, int b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 4);
      assert.strictEqual(funcList[0].name, 'ov4');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'ov4');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'double');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'ov4');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].name, 'ov4');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 2);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].parameters[1].type, 'int');
      assert.strictEqual(funcList[3].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0714 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0714 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0715
  * @tc.name c_func_0715
  * @tc.desc h2dts parseFunction：扩充-默认参数：int = 0 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0715', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD000(int v = 0);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD000');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.strictEqual(funcList[0].parameters[1].type, '0');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0715 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0715 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0716
  * @tc.name c_func_0716
  * @tc.desc h2dts parseFunction：扩充-默认参数：double = 0.0 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0716', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD001(double v = 0.0);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.strictEqual(funcList[0].parameters[1].type, '0');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '0');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0716 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0716 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0717
  * @tc.name c_func_0717
  * @tc.desc h2dts parseFunction：扩充-默认参数：bool = false 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0717', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD002(bool v = false);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.strictEqual(funcList[0].parameters[1].type, 'false');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0717 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0717 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0718
  * @tc.name c_func_0718
  * @tc.desc h2dts parseFunction：扩充-默认参数：std::string = "x" 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0718', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD003(std::string v = "x");`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.strictEqual(funcList[0].parameters[1].type, '');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, 'x');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0718 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0718 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0719
  * @tc.name c_func_0719
  * @tc.desc h2dts parseFunction：扩充-默认参数：char = 'a' 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0719', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD004(char v = 'a');`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.strictEqual(funcList[0].parameters[1].type, '');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, 'a');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0719 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0719 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0720
  * @tc.name c_func_0720
  * @tc.desc h2dts parseFunction：扩充-默认参数：long = 1L 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0720', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD005(long v = 1L);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.strictEqual(funcList[0].parameters[1].type, '1L');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0720 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0720 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0721
  * @tc.name c_func_0721
  * @tc.desc h2dts parseFunction：扩充-默认参数：float = 1.5f 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0721', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD006(float v = 1.5f);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.strictEqual(funcList[0].parameters[1].type, '1');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '5f');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0721 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0721 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0722
  * @tc.name c_func_0722
  * @tc.desc h2dts parseFunction：扩充-默认参数：unsigned int = 1u 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0722', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD007(unsigned int v = 1u);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD007');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.strictEqual(funcList[0].parameters[1].type, '1u');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0722 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0722 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0723
  * @tc.name c_func_0723
  * @tc.desc h2dts parseFunction：扩充-默认参数：short = 2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0723', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD008(short v = 2);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD008');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.strictEqual(funcList[0].parameters[1].type, '2');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0723 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0723 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0724
  * @tc.name c_func_0724
  * @tc.desc h2dts parseFunction：扩充-默认参数：size_t = 1024 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0724', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD009(size_t v = 1024);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD009');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.strictEqual(funcList[0].parameters[1].type, '1024');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0724 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0724 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0725
  * @tc.name c_func_0725
  * @tc.desc h2dts parseFunction：扩充-多参数：6 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0725', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px000(int a0, char a1, short a2, long a3, long long a4, float a5);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px000');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 6);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'char');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'short');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'long');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'long long');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'float');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0725 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0725 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0726
  * @tc.name c_func_0726
  * @tc.desc h2dts parseFunction：扩充-多参数：7 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0726', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px001(char a0, short a1, long a2, long long a3, float a4, double a5, bool a6);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 7);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'short');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'long');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'long long');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'float');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'double');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.strictEqual(funcList[0].parameters[6].type, 'bool');
      assert.strictEqual(funcList[0].parameters[6].name, 'a6');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0726 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0726 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0727
  * @tc.name c_func_0727
  * @tc.desc h2dts parseFunction：扩充-多参数：8 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0727', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px002(short a0, long a1, long long a2, float a3, double a4, bool a5, unsigned int a6, unsigned char a7);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 8);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'long');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'long long');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'float');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'double');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'bool');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.strictEqual(funcList[0].parameters[6].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[6].name, 'a6');
      assert.strictEqual(funcList[0].parameters[7].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[7].name, 'a7');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0727 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0727 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0728
  * @tc.name c_func_0728
  * @tc.desc h2dts parseFunction：扩充-多参数：6 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0728', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px003(long a0, long long a1, float a2, double a3, bool a4, unsigned int a5);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 6);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'float');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'double');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'bool');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0728 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0728 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0729
  * @tc.name c_func_0729
  * @tc.desc h2dts parseFunction：扩充-多参数：7 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0729', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px004(long long a0, float a1, double a2, bool a3, unsigned int a4, unsigned char a5, unsigned short a6);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 7);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'float');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'double');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'bool');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.strictEqual(funcList[0].parameters[6].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[6].name, 'a6');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0729 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0729 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0730
  * @tc.name c_func_0730
  * @tc.desc h2dts parseFunction：扩充-多参数：8 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0730', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px005(float a0, double a1, bool a2, unsigned int a3, unsigned char a4, unsigned short a5, unsigned long a6, unsigned long long a7);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 8);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'double');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'bool');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.strictEqual(funcList[0].parameters[6].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[6].name, 'a6');
      assert.strictEqual(funcList[0].parameters[7].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[7].name, 'a7');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0730 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0730 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0731
  * @tc.name c_func_0731
  * @tc.desc h2dts parseFunction：扩充-多参数：6 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0731', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px006(double a0, bool a1, unsigned int a2, unsigned char a3, unsigned short a4, unsigned long a5);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 6);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'bool');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0731 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0731 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0732
  * @tc.name c_func_0732
  * @tc.desc h2dts parseFunction：扩充-多参数：7 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0732', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px007(bool a0, unsigned int a1, unsigned char a2, unsigned short a3, unsigned long a4, unsigned long long a5, signed char a6);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px007');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 7);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.strictEqual(funcList[0].parameters[6].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[6].name, 'a6');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0732 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0732 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0733
  * @tc.name c_func_0733
  * @tc.desc h2dts parseFunction：扩充-多参数：8 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0733', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px008(unsigned int a0, unsigned char a1, unsigned short a2, unsigned long a3, unsigned long long a4, signed char a5, signed short a6, signed long a7);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px008');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 8);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.strictEqual(funcList[0].parameters[6].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[6].name, 'a6');
      assert.strictEqual(funcList[0].parameters[7].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[7].name, 'a7');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0733 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0733 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0734
  * @tc.name c_func_0734
  * @tc.desc h2dts parseFunction：扩充-多参数：6 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0734', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px009(unsigned char a0, unsigned short a1, unsigned long a2, unsigned long long a3, signed char a4, signed short a5);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px009');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 6);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0734 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0734 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0735
  * @tc.name c_func_0735
  * @tc.desc h2dts parseFunction：扩充-多参数：7 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0735', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px010(unsigned short a0, unsigned long a1, unsigned long long a2, signed char a3, signed short a4, signed long a5, wchar_t a6);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px010');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 7);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.strictEqual(funcList[0].parameters[6].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[6].name, 'a6');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0735 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0735 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0736
  * @tc.name c_func_0736
  * @tc.desc h2dts parseFunction：扩充-多参数：8 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0736', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px011(unsigned long a0, unsigned long long a1, signed char a2, signed short a3, signed long a4, wchar_t a5, char16_t a6, char32_t a7);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px011');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 8);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.strictEqual(funcList[0].parameters[6].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[6].name, 'a6');
      assert.strictEqual(funcList[0].parameters[7].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[7].name, 'a7');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0736 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0736 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0737
  * @tc.name c_func_0737
  * @tc.desc h2dts parseFunction：扩充-多参数：6 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0737', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px012(unsigned long long a0, signed char a1, signed short a2, signed long a3, wchar_t a4, char16_t a5);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px012');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 6);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0737 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0737 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0738
  * @tc.name c_func_0738
  * @tc.desc h2dts parseFunction：扩充-多参数：7 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0738', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px013(signed char a0, signed short a1, signed long a2, wchar_t a3, char16_t a4, char32_t a5, size_t a6);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px013');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 7);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.strictEqual(funcList[0].parameters[6].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[6].name, 'a6');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0738 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0738 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0739
  * @tc.name c_func_0739
  * @tc.desc h2dts parseFunction：扩充-多参数：8 参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0739', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void px014(signed short a0, signed long a1, wchar_t a2, char16_t a3, char32_t a4, size_t a5, int8_t a6, int16_t a7);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'px014');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 8);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.strictEqual(funcList[0].parameters[5].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[5].name, 'a5');
      assert.strictEqual(funcList[0].parameters[6].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[6].name, 'a6');
      assert.strictEqual(funcList[0].parameters[7].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[7].name, 'a7');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0739 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0739 执行异常: ${String(err)}`);
    }
  });

});
