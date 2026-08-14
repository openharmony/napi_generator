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
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part14.');

  /**
  * @tc.number c_func_0667
  * @tc.name c_func_0667
  * @tc.desc h2dts parseFunction：扩充-const 参数：const float 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0667', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setC006(const float v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0667 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0667 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0668
  * @tc.name c_func_0668
  * @tc.desc h2dts parseFunction：扩充-const 参数：const long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0668', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setC007(const long v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC007');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0668 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0668 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0669
  * @tc.name c_func_0669
  * @tc.desc h2dts parseFunction：扩充-const 参数：const short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0669', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setC008(const short v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC008');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0669 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0669 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0670
  * @tc.name c_func_0670
  * @tc.desc h2dts parseFunction：扩充-const 参数：const unsigned int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0670', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setC009(const unsigned int v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC009');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0670 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0670 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0671
  * @tc.name c_func_0671
  * @tc.desc h2dts parseFunction：扩充-const 参数：const size_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0671', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setC010(const size_t v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC010');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0671 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0671 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0672
  * @tc.name c_func_0672
  * @tc.desc h2dts parseFunction：扩充-const 参数：const wchar_t* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0672', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setC011(const wchar_t* v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC011');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t*');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0672 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0672 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0673
  * @tc.name c_func_0673
  * @tc.desc h2dts parseFunction：扩充-const 参数：const std::vector<int>& 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0673', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setC012(const std::vector<int>& v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC012');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'const std::vector');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, 'v');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0673 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0673 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0674
  * @tc.name c_func_0674
  * @tc.desc h2dts parseFunction：扩充-const 参数：const long long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0674', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setC013(const long long v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC013');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0674 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0674 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0675
  * @tc.name c_func_0675
  * @tc.desc h2dts parseFunction：扩充-const 参数：const unsigned char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0675', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setC014(const unsigned char v);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC014');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0675 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0675 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0676
  * @tc.name c_func_0676
  * @tc.desc h2dts parseFunction：扩充-namespace：域内函数 int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0676', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`namespace ns000 {
int fn000(int a);
}`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'fn000');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0676 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0676 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0677
  * @tc.name c_func_0677
  * @tc.desc h2dts parseFunction：扩充-namespace：域内函数 char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0677', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`namespace ns001 {
char fn001(char a);
}`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'fn001');
      assert.strictEqual(funcList[0].returns, 'char');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0677 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0677 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0678
  * @tc.name c_func_0678
  * @tc.desc h2dts parseFunction：扩充-namespace：域内函数 short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0678', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`namespace ns002 {
short fn002(short a);
}`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'fn002');
      assert.strictEqual(funcList[0].returns, 'short');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0678 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0678 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0679
  * @tc.name c_func_0679
  * @tc.desc h2dts parseFunction：扩充-namespace：域内函数 long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0679', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`namespace ns003 {
long fn003(long a);
}`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'fn003');
      assert.strictEqual(funcList[0].returns, 'long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0679 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0679 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0680
  * @tc.name c_func_0680
  * @tc.desc h2dts parseFunction：扩充-namespace：域内函数 long long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0680', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`namespace ns004 {
long long fn004(long long a);
}`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'fn004');
      assert.strictEqual(funcList[0].returns, 'long long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0680 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0680 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0681
  * @tc.name c_func_0681
  * @tc.desc h2dts parseFunction：扩充-namespace：域内函数 float 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0681', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`namespace ns005 {
float fn005(float a);
}`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'fn005');
      assert.strictEqual(funcList[0].returns, 'float');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0681 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0681 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0682
  * @tc.name c_func_0682
  * @tc.desc h2dts parseFunction：扩充-namespace：域内函数 double 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0682', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`namespace ns006 {
double fn006(double a);
}`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'fn006');
      assert.strictEqual(funcList[0].returns, 'double');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0682 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0682 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0683
  * @tc.name c_func_0683
  * @tc.desc h2dts parseFunction：扩充-namespace：域内函数 bool 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0683', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`namespace ns007 {
bool fn007(bool a);
}`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'fn007');
      assert.strictEqual(funcList[0].returns, 'bool');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0683 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0683 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0684
  * @tc.name c_func_0684
  * @tc.desc h2dts parseFunction：扩充-namespace：域内函数 unsigned int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0684', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`namespace ns008 {
unsigned int fn008(unsigned int a);
}`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'fn008');
      assert.strictEqual(funcList[0].returns, 'unsigned int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0684 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0684 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0685
  * @tc.name c_func_0685
  * @tc.desc h2dts parseFunction：扩充-namespace：域内函数 unsigned char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0685', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`namespace ns009 {
unsigned char fn009(unsigned char a);
}`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'fn009');
      assert.strictEqual(funcList[0].returns, 'unsigned char');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0685 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0685 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0686
  * @tc.name c_func_0686
  * @tc.desc h2dts parseFunction：扩充-多函数：同文件 2 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0686', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int mf0_0(int a);
int mf0_1(int a);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 2);
      assert.strictEqual(funcList[0].name, 'mf0_0');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'mf0_1');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0686 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0686 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0687
  * @tc.name c_func_0687
  * @tc.desc h2dts parseFunction：扩充-多函数：同文件 3 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0687', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int mf1_0(int a);
int mf1_1(int a);
int mf1_2(int a);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 3);
      assert.strictEqual(funcList[0].name, 'mf1_0');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'mf1_1');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'mf1_2');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'int');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0687 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0687 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0688
  * @tc.name c_func_0688
  * @tc.desc h2dts parseFunction：扩充-多函数：同文件 4 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0688', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int mf2_0(int a);
int mf2_1(int a);
int mf2_2(int a);
int mf2_3(int a);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 4);
      assert.strictEqual(funcList[0].name, 'mf2_0');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'mf2_1');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'mf2_2');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'int');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].name, 'mf2_3');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 1);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0688 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0688 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0689
  * @tc.name c_func_0689
  * @tc.desc h2dts parseFunction：扩充-多函数：同文件 5 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0689', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int mf3_0(int a);
int mf3_1(int a);
int mf3_2(int a);
int mf3_3(int a);
int mf3_4(int a);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 5);
      assert.strictEqual(funcList[0].name, 'mf3_0');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'mf3_1');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'mf3_2');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'int');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].name, 'mf3_3');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 1);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.strictEqual(funcList[4].name, 'mf3_4');
      assert.strictEqual(funcList[4].returns, 'int');
      assert.strictEqual(funcList[4].parameters.length, 1);
      assert.strictEqual(funcList[4].parameters[0].type, 'int');
      assert.strictEqual(funcList[4].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0689 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0689 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0690
  * @tc.name c_func_0690
  * @tc.desc h2dts parseFunction：扩充-多函数：同文件 6 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0690', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int mf4_0(int a);
int mf4_1(int a);
int mf4_2(int a);
int mf4_3(int a);
int mf4_4(int a);
int mf4_5(int a);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 6);
      assert.strictEqual(funcList[0].name, 'mf4_0');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'mf4_1');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'mf4_2');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'int');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].name, 'mf4_3');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 1);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.strictEqual(funcList[4].name, 'mf4_4');
      assert.strictEqual(funcList[4].returns, 'int');
      assert.strictEqual(funcList[4].parameters.length, 1);
      assert.strictEqual(funcList[4].parameters[0].type, 'int');
      assert.strictEqual(funcList[4].parameters[0].name, 'a');
      assert.strictEqual(funcList[5].name, 'mf4_5');
      assert.strictEqual(funcList[5].returns, 'int');
      assert.strictEqual(funcList[5].parameters.length, 1);
      assert.strictEqual(funcList[5].parameters[0].type, 'int');
      assert.strictEqual(funcList[5].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0690 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0690 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0691
  * @tc.name c_func_0691
  * @tc.desc h2dts parseFunction：扩充-多函数：同文件 8 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0691', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int mf5_0(int a);
int mf5_1(int a);
int mf5_2(int a);
int mf5_3(int a);
int mf5_4(int a);
int mf5_5(int a);
int mf5_6(int a);
int mf5_7(int a);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 8);
      assert.strictEqual(funcList[0].name, 'mf5_0');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'mf5_1');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'mf5_2');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'int');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].name, 'mf5_3');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 1);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.strictEqual(funcList[4].name, 'mf5_4');
      assert.strictEqual(funcList[4].returns, 'int');
      assert.strictEqual(funcList[4].parameters.length, 1);
      assert.strictEqual(funcList[4].parameters[0].type, 'int');
      assert.strictEqual(funcList[4].parameters[0].name, 'a');
      assert.strictEqual(funcList[5].name, 'mf5_5');
      assert.strictEqual(funcList[5].returns, 'int');
      assert.strictEqual(funcList[5].parameters.length, 1);
      assert.strictEqual(funcList[5].parameters[0].type, 'int');
      assert.strictEqual(funcList[5].parameters[0].name, 'a');
      assert.strictEqual(funcList[6].name, 'mf5_6');
      assert.strictEqual(funcList[6].returns, 'int');
      assert.strictEqual(funcList[6].parameters.length, 1);
      assert.strictEqual(funcList[6].parameters[0].type, 'int');
      assert.strictEqual(funcList[6].parameters[0].name, 'a');
      assert.strictEqual(funcList[7].name, 'mf5_7');
      assert.strictEqual(funcList[7].returns, 'int');
      assert.strictEqual(funcList[7].parameters.length, 1);
      assert.strictEqual(funcList[7].parameters[0].type, 'int');
      assert.strictEqual(funcList[7].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0691 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0691 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0692
  * @tc.name c_func_0692
  * @tc.desc h2dts parseFunction：扩充-多函数：同文件 10 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0692', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int mf6_0(int a);
int mf6_1(int a);
int mf6_2(int a);
int mf6_3(int a);
int mf6_4(int a);
int mf6_5(int a);
int mf6_6(int a);
int mf6_7(int a);
int mf6_8(int a);
int mf6_9(int a);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 10);
      assert.strictEqual(funcList[0].name, 'mf6_0');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'mf6_1');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'mf6_2');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'int');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].name, 'mf6_3');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 1);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.strictEqual(funcList[4].name, 'mf6_4');
      assert.strictEqual(funcList[4].returns, 'int');
      assert.strictEqual(funcList[4].parameters.length, 1);
      assert.strictEqual(funcList[4].parameters[0].type, 'int');
      assert.strictEqual(funcList[4].parameters[0].name, 'a');
      assert.strictEqual(funcList[5].name, 'mf6_5');
      assert.strictEqual(funcList[5].returns, 'int');
      assert.strictEqual(funcList[5].parameters.length, 1);
      assert.strictEqual(funcList[5].parameters[0].type, 'int');
      assert.strictEqual(funcList[5].parameters[0].name, 'a');
      assert.strictEqual(funcList[6].name, 'mf6_6');
      assert.strictEqual(funcList[6].returns, 'int');
      assert.strictEqual(funcList[6].parameters.length, 1);
      assert.strictEqual(funcList[6].parameters[0].type, 'int');
      assert.strictEqual(funcList[6].parameters[0].name, 'a');
      assert.strictEqual(funcList[7].name, 'mf6_7');
      assert.strictEqual(funcList[7].returns, 'int');
      assert.strictEqual(funcList[7].parameters.length, 1);
      assert.strictEqual(funcList[7].parameters[0].type, 'int');
      assert.strictEqual(funcList[7].parameters[0].name, 'a');
      assert.strictEqual(funcList[8].name, 'mf6_8');
      assert.strictEqual(funcList[8].returns, 'int');
      assert.strictEqual(funcList[8].parameters.length, 1);
      assert.strictEqual(funcList[8].parameters[0].type, 'int');
      assert.strictEqual(funcList[8].parameters[0].name, 'a');
      assert.strictEqual(funcList[9].name, 'mf6_9');
      assert.strictEqual(funcList[9].returns, 'int');
      assert.strictEqual(funcList[9].parameters.length, 1);
      assert.strictEqual(funcList[9].parameters[0].type, 'int');
      assert.strictEqual(funcList[9].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0692 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0692 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0693
  * @tc.name c_func_0693
  * @tc.desc h2dts parseFunction：扩充-多函数：同文件 15 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0693', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int mf7_0(int a);
int mf7_1(int a);
int mf7_2(int a);
int mf7_3(int a);
int mf7_4(int a);
int mf7_5(int a);
int mf7_6(int a);
int mf7_7(int a);
int mf7_8(int a);
int mf7_9(int a);
int mf7_10(int a);
int mf7_11(int a);
int mf7_12(int a);
int mf7_13(int a);
int mf7_14(int a);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 15);
      assert.strictEqual(funcList[0].name, 'mf7_0');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'mf7_1');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'mf7_2');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'int');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].name, 'mf7_3');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 1);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.strictEqual(funcList[4].name, 'mf7_4');
      assert.strictEqual(funcList[4].returns, 'int');
      assert.strictEqual(funcList[4].parameters.length, 1);
      assert.strictEqual(funcList[4].parameters[0].type, 'int');
      assert.strictEqual(funcList[4].parameters[0].name, 'a');
      assert.strictEqual(funcList[5].name, 'mf7_5');
      assert.strictEqual(funcList[5].returns, 'int');
      assert.strictEqual(funcList[5].parameters.length, 1);
      assert.strictEqual(funcList[5].parameters[0].type, 'int');
      assert.strictEqual(funcList[5].parameters[0].name, 'a');
      assert.strictEqual(funcList[6].name, 'mf7_6');
      assert.strictEqual(funcList[6].returns, 'int');
      assert.strictEqual(funcList[6].parameters.length, 1);
      assert.strictEqual(funcList[6].parameters[0].type, 'int');
      assert.strictEqual(funcList[6].parameters[0].name, 'a');
      assert.strictEqual(funcList[7].name, 'mf7_7');
      assert.strictEqual(funcList[7].returns, 'int');
      assert.strictEqual(funcList[7].parameters.length, 1);
      assert.strictEqual(funcList[7].parameters[0].type, 'int');
      assert.strictEqual(funcList[7].parameters[0].name, 'a');
      assert.strictEqual(funcList[8].name, 'mf7_8');
      assert.strictEqual(funcList[8].returns, 'int');
      assert.strictEqual(funcList[8].parameters.length, 1);
      assert.strictEqual(funcList[8].parameters[0].type, 'int');
      assert.strictEqual(funcList[8].parameters[0].name, 'a');
      assert.strictEqual(funcList[9].name, 'mf7_9');
      assert.strictEqual(funcList[9].returns, 'int');
      assert.strictEqual(funcList[9].parameters.length, 1);
      assert.strictEqual(funcList[9].parameters[0].type, 'int');
      assert.strictEqual(funcList[9].parameters[0].name, 'a');
      assert.strictEqual(funcList[10].name, 'mf7_10');
      assert.strictEqual(funcList[10].returns, 'int');
      assert.strictEqual(funcList[10].parameters.length, 1);
      assert.strictEqual(funcList[10].parameters[0].type, 'int');
      assert.strictEqual(funcList[10].parameters[0].name, 'a');
      assert.strictEqual(funcList[11].name, 'mf7_11');
      assert.strictEqual(funcList[11].returns, 'int');
      assert.strictEqual(funcList[11].parameters.length, 1);
      assert.strictEqual(funcList[11].parameters[0].type, 'int');
      assert.strictEqual(funcList[11].parameters[0].name, 'a');
      assert.strictEqual(funcList[12].name, 'mf7_12');
      assert.strictEqual(funcList[12].returns, 'int');
      assert.strictEqual(funcList[12].parameters.length, 1);
      assert.strictEqual(funcList[12].parameters[0].type, 'int');
      assert.strictEqual(funcList[12].parameters[0].name, 'a');
      assert.strictEqual(funcList[13].name, 'mf7_13');
      assert.strictEqual(funcList[13].returns, 'int');
      assert.strictEqual(funcList[13].parameters.length, 1);
      assert.strictEqual(funcList[13].parameters[0].type, 'int');
      assert.strictEqual(funcList[13].parameters[0].name, 'a');
      assert.strictEqual(funcList[14].name, 'mf7_14');
      assert.strictEqual(funcList[14].returns, 'int');
      assert.strictEqual(funcList[14].parameters.length, 1);
      assert.strictEqual(funcList[14].parameters[0].type, 'int');
      assert.strictEqual(funcList[14].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0693 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0693 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0694
  * @tc.name c_func_0694
  * @tc.desc h2dts parseFunction：扩充-多函数：同文件 20 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0694', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int mf8_0(int a);
int mf8_1(int a);
int mf8_2(int a);
int mf8_3(int a);
int mf8_4(int a);
int mf8_5(int a);
int mf8_6(int a);
int mf8_7(int a);
int mf8_8(int a);
int mf8_9(int a);
int mf8_10(int a);
int mf8_11(int a);
int mf8_12(int a);
int mf8_13(int a);
int mf8_14(int a);
int mf8_15(int a);
int mf8_16(int a);
int mf8_17(int a);
int mf8_18(int a);
int mf8_19(int a);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 20);
      assert.strictEqual(funcList[0].name, 'mf8_0');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'mf8_1');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'int');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'mf8_2');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'int');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].name, 'mf8_3');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 1);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.strictEqual(funcList[4].name, 'mf8_4');
      assert.strictEqual(funcList[4].returns, 'int');
      assert.strictEqual(funcList[4].parameters.length, 1);
      assert.strictEqual(funcList[4].parameters[0].type, 'int');
      assert.strictEqual(funcList[4].parameters[0].name, 'a');
      assert.strictEqual(funcList[5].name, 'mf8_5');
      assert.strictEqual(funcList[5].returns, 'int');
      assert.strictEqual(funcList[5].parameters.length, 1);
      assert.strictEqual(funcList[5].parameters[0].type, 'int');
      assert.strictEqual(funcList[5].parameters[0].name, 'a');
      assert.strictEqual(funcList[6].name, 'mf8_6');
      assert.strictEqual(funcList[6].returns, 'int');
      assert.strictEqual(funcList[6].parameters.length, 1);
      assert.strictEqual(funcList[6].parameters[0].type, 'int');
      assert.strictEqual(funcList[6].parameters[0].name, 'a');
      assert.strictEqual(funcList[7].name, 'mf8_7');
      assert.strictEqual(funcList[7].returns, 'int');
      assert.strictEqual(funcList[7].parameters.length, 1);
      assert.strictEqual(funcList[7].parameters[0].type, 'int');
      assert.strictEqual(funcList[7].parameters[0].name, 'a');
      assert.strictEqual(funcList[8].name, 'mf8_8');
      assert.strictEqual(funcList[8].returns, 'int');
      assert.strictEqual(funcList[8].parameters.length, 1);
      assert.strictEqual(funcList[8].parameters[0].type, 'int');
      assert.strictEqual(funcList[8].parameters[0].name, 'a');
      assert.strictEqual(funcList[9].name, 'mf8_9');
      assert.strictEqual(funcList[9].returns, 'int');
      assert.strictEqual(funcList[9].parameters.length, 1);
      assert.strictEqual(funcList[9].parameters[0].type, 'int');
      assert.strictEqual(funcList[9].parameters[0].name, 'a');
      assert.strictEqual(funcList[10].name, 'mf8_10');
      assert.strictEqual(funcList[10].returns, 'int');
      assert.strictEqual(funcList[10].parameters.length, 1);
      assert.strictEqual(funcList[10].parameters[0].type, 'int');
      assert.strictEqual(funcList[10].parameters[0].name, 'a');
      assert.strictEqual(funcList[11].name, 'mf8_11');
      assert.strictEqual(funcList[11].returns, 'int');
      assert.strictEqual(funcList[11].parameters.length, 1);
      assert.strictEqual(funcList[11].parameters[0].type, 'int');
      assert.strictEqual(funcList[11].parameters[0].name, 'a');
      assert.strictEqual(funcList[12].name, 'mf8_12');
      assert.strictEqual(funcList[12].returns, 'int');
      assert.strictEqual(funcList[12].parameters.length, 1);
      assert.strictEqual(funcList[12].parameters[0].type, 'int');
      assert.strictEqual(funcList[12].parameters[0].name, 'a');
      assert.strictEqual(funcList[13].name, 'mf8_13');
      assert.strictEqual(funcList[13].returns, 'int');
      assert.strictEqual(funcList[13].parameters.length, 1);
      assert.strictEqual(funcList[13].parameters[0].type, 'int');
      assert.strictEqual(funcList[13].parameters[0].name, 'a');
      assert.strictEqual(funcList[14].name, 'mf8_14');
      assert.strictEqual(funcList[14].returns, 'int');
      assert.strictEqual(funcList[14].parameters.length, 1);
      assert.strictEqual(funcList[14].parameters[0].type, 'int');
      assert.strictEqual(funcList[14].parameters[0].name, 'a');
      assert.strictEqual(funcList[15].name, 'mf8_15');
      assert.strictEqual(funcList[15].returns, 'int');
      assert.strictEqual(funcList[15].parameters.length, 1);
      assert.strictEqual(funcList[15].parameters[0].type, 'int');
      assert.strictEqual(funcList[15].parameters[0].name, 'a');
      assert.strictEqual(funcList[16].name, 'mf8_16');
      assert.strictEqual(funcList[16].returns, 'int');
      assert.strictEqual(funcList[16].parameters.length, 1);
      assert.strictEqual(funcList[16].parameters[0].type, 'int');
      assert.strictEqual(funcList[16].parameters[0].name, 'a');
      assert.strictEqual(funcList[17].name, 'mf8_17');
      assert.strictEqual(funcList[17].returns, 'int');
      assert.strictEqual(funcList[17].parameters.length, 1);
      assert.strictEqual(funcList[17].parameters[0].type, 'int');
      assert.strictEqual(funcList[17].parameters[0].name, 'a');
      assert.strictEqual(funcList[18].name, 'mf8_18');
      assert.strictEqual(funcList[18].returns, 'int');
      assert.strictEqual(funcList[18].parameters.length, 1);
      assert.strictEqual(funcList[18].parameters[0].type, 'int');
      assert.strictEqual(funcList[18].parameters[0].name, 'a');
      assert.strictEqual(funcList[19].name, 'mf8_19');
      assert.strictEqual(funcList[19].returns, 'int');
      assert.strictEqual(funcList[19].parameters.length, 1);
      assert.strictEqual(funcList[19].parameters[0].type, 'int');
      assert.strictEqual(funcList[19].parameters[0].name, 'a');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0694 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0694 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0695
  * @tc.name c_func_0695
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：int (*cb)(int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0695', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef int (*cb)(int) td000;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0695 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0695 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0696
  * @tc.name c_func_0696
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：void (*fn)(int, int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0696', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef void (*fn)(int, int) td001;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0696 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0696 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0697
  * @tc.name c_func_0697
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：double (*math)(double) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0697', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef double (*math)(double) td002;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0697 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0697 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0698
  * @tc.name c_func_0698
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：std::string (*strf)(int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0698', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef std::string (*strf)(int) td003;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0698 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0698 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0699
  * @tc.name c_func_0699
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：bool (*pred)(int, double) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0699', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef bool (*pred)(int, double) td004;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0699 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0699 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0700
  * @tc.name c_func_0700
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：char (*chf)(char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0700', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef char (*chf)(char) td005;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0700 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0700 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0701
  * @tc.name c_func_0701
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：long (*lf)(long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0701', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef long (*lf)(long) td006;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0701 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0701 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0702
  * @tc.name c_func_0702
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：float (*ff)(float) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0702', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef float (*ff)(float) td007;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0702 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0702 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0703
  * @tc.name c_func_0703
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：unsigned int (*uf)(unsigned int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0703', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef unsigned int (*uf)(unsigned int) td008;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0703 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0703 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0704
  * @tc.name c_func_0704
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：short (*sf)(short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0704', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef short (*sf)(short) td009;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0704 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0704 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0705
  * @tc.name c_func_0705
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：wchar_t (*wf)(wchar_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0705', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef wchar_t (*wf)(wchar_t) td010;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0705 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0705 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0706
  * @tc.name c_func_0706
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：size_t (*zf)(size_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0706', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef size_t (*zf)(size_t) td011;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0706 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0706 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0707
  * @tc.name c_func_0707
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：int64_t (*i64f)(int64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0707', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef int64_t (*i64f)(int64_t) td012;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0707 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0707 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0708
  * @tc.name c_func_0708
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：std::vector<int> (*vf)(int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0708', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef std::vector<int> (*vf)(int) td013;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0708 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0708 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0709
  * @tc.name c_func_0709
  * @tc.desc h2dts parseFunction：扩充-typedef 函数指针：void (*nf)(std::string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0709', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`typedef void (*nf)(std::string) td014;`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0709 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0709 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0710
  * @tc.name c_func_0710
  * @tc.desc h2dts parseFunction：扩充-重载：ov0 4 组重载 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0710', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int ov0(int a);
int ov0(double a);
int ov0(std::string a);
int ov0(int a, int b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 4);
      assert.strictEqual(funcList[0].name, 'ov0');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'ov0');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'double');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'ov0');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].name, 'ov0');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 2);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].parameters[1].type, 'int');
      assert.strictEqual(funcList[3].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0710 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0710 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0711
  * @tc.name c_func_0711
  * @tc.desc h2dts parseFunction：扩充-重载：ov1 4 组重载 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0711', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int ov1(int a);
int ov1(double a);
int ov1(std::string a);
int ov1(int a, int b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 4);
      assert.strictEqual(funcList[0].name, 'ov1');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].name, 'ov1');
      assert.strictEqual(funcList[1].returns, 'int');
      assert.strictEqual(funcList[1].parameters.length, 1);
      assert.strictEqual(funcList[1].parameters[0].type, 'double');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].name, 'ov1');
      assert.strictEqual(funcList[2].returns, 'int');
      assert.strictEqual(funcList[2].parameters.length, 1);
      assert.strictEqual(funcList[2].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].name, 'ov1');
      assert.strictEqual(funcList[3].returns, 'int');
      assert.strictEqual(funcList[3].parameters.length, 2);
      assert.strictEqual(funcList[3].parameters[0].type, 'int');
      assert.strictEqual(funcList[3].parameters[0].name, 'a');
      assert.strictEqual(funcList[3].parameters[1].type, 'int');
      assert.strictEqual(funcList[3].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0711 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0711 执行异常: ${String(err)}`);
    }
  });

});
