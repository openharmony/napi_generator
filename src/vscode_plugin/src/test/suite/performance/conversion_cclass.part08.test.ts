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
  vscode.window.showInformationMessage('Start Performance_C_Class_Suite part08.');

  /**
  * @tc.number c_class_0208
  * @tc.name c_class_0208
  * @tc.desc h2dts parseClass：扩充-类名变体：Alpha0 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0208', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Alpha0 {
    int v0;
    std::string s0;
    void m0();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Alpha0');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's0');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm0');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0208 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0208 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0209
  * @tc.name c_class_0209
  * @tc.desc h2dts parseClass：扩充-类名变体：Beta1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0209', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Beta1 {
    int v1;
    std::string s1;
    void m1();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Beta1');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v1');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's1');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm1');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0209 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0209 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0210
  * @tc.name c_class_0210
  * @tc.desc h2dts parseClass：扩充-类名变体：Gamma2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0210', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Gamma2 {
    int v2;
    std::string s2;
    void m2();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Gamma2');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v2');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's2');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm2');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0210 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0210 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0211
  * @tc.name c_class_0211
  * @tc.desc h2dts parseClass：扩充-类名变体：Delta3 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0211', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Delta3 {
    int v3;
    std::string s3;
    void m3();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Delta3');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v3');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's3');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm3');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0211 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0211 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0212
  * @tc.name c_class_0212
  * @tc.desc h2dts parseClass：扩充-类名变体：Epsilon4 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0212', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Epsilon4 {
    int v4;
    std::string s4;
    void m4();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Epsilon4');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v4');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's4');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm4');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0212 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0212 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0213
  * @tc.name c_class_0213
  * @tc.desc h2dts parseClass：扩充-类名变体：Zeta5 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0213', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Zeta5 {
    int v5;
    std::string s5;
    void m5();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Zeta5');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v5');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's5');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm5');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0213 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0213 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0214
  * @tc.name c_class_0214
  * @tc.desc h2dts parseClass：扩充-类名变体：Eta6 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0214', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Eta6 {
    int v6;
    std::string s6;
    void m6();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Eta6');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v6');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's6');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm6');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0214 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0214 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0215
  * @tc.name c_class_0215
  * @tc.desc h2dts parseClass：扩充-类名变体：Theta7 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0215', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Theta7 {
    int v7;
    std::string s7;
    void m7();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Theta7');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v7');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's7');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm7');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0215 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0215 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0216
  * @tc.name c_class_0216
  * @tc.desc h2dts parseClass：扩充-类名变体：Iota8 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0216', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Iota8 {
    int x8;
    std::string s8;
    void m8();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Iota8');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'x8');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's8');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm8');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0216 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0216 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0217
  * @tc.name c_class_0217
  * @tc.desc h2dts parseClass：扩充-类名变体：Kappa9 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0217', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Kappa9 {
    int v9;
    std::string s9;
    void m9();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Kappa9');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v9');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's9');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm9');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0217 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0217 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0218
  * @tc.name c_class_0218
  * @tc.desc h2dts parseClass：扩充-类名变体：Lambda10 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0218', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Lambda10 {
    int v10;
    std::string s10;
    void m10();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Lambda10');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v10');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's10');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm10');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0218 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0218 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0219
  * @tc.name c_class_0219
  * @tc.desc h2dts parseClass：扩充-类名变体：Mu11 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0219', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Mu11 {
    int v11;
    std::string s11;
    void m11();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Mu11');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v11');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's11');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm11');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0219 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0219 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0220
  * @tc.name c_class_0220
  * @tc.desc h2dts parseClass：扩充-类名变体：Nu12 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0220', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Nu12 {
    int v12;
    std::string s12;
    void m12();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Nu12');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v12');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's12');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm12');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0220 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0220 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0221
  * @tc.name c_class_0221
  * @tc.desc h2dts parseClass：扩充-类名变体：Xi13 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0221', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Xi13 {
    int v13;
    std::string s13;
    void m13();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Xi13');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v13');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's13');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm13');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0221 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0221 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0222
  * @tc.name c_class_0222
  * @tc.desc h2dts parseClass：扩充-类名变体：Omicron14 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0222', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Omicron14 {
    int v14;
    std::string s14;
    void m14();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Omicron14');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v14');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's14');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm14');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0222 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0222 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0223
  * @tc.name c_class_0223
  * @tc.desc h2dts parseClass：扩充-类名变体：Pi15 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0223', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Pi15 {
    int v15;
    std::string s15;
    void m15();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Pi15');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v15');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's15');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm15');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0223 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0223 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0224
  * @tc.name c_class_0224
  * @tc.desc h2dts parseClass：扩充-类名变体：Rho16 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0224', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Rho16 {
    int v16;
    std::string s16;
    void m16();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Rho16');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v16');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's16');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm16');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0224 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0224 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0225
  * @tc.name c_class_0225
  * @tc.desc h2dts parseClass：扩充-类名变体：Sigma17 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0225', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Sigma17 {
    int v17;
    std::string s17;
    void m17();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Sigma17');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v17');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's17');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm17');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0225 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0225 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0226
  * @tc.name c_class_0226
  * @tc.desc h2dts parseClass：扩充-类名变体：Tau18 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0226', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Tau18 {
    int v18;
    std::string s18;
    void m18();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Tau18');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v18');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's18');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm18');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0226 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0226 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0227
  * @tc.name c_class_0227
  * @tc.desc h2dts parseClass：扩充-类名变体：Upsilon19 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0227', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Upsilon19 {
    int v19;
    std::string s19;
    void m19();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Upsilon19');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'v19');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 's19');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'm19');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0227 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0227 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0228
  * @tc.name c_class_0228
  * @tc.desc h2dts parseClass：扩充-边界：空类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0228', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class EmptyA {}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0228 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0228 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0229
  * @tc.name c_class_0229
  * @tc.desc h2dts parseClass：扩充-边界：单行类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0229', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class OneLineB { int a; std::string b; };`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OneLineB');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'b');
      assert.strictEqual(objList[0].variableList[1].type, 'std::string');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0229 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0229 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0230
  * @tc.name c_class_0230
  * @tc.desc h2dts parseClass：扩充-边界：注释类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0230', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`/* class Com C { int a; } */`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0230 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0230 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0231
  * @tc.name c_class_0231
  * @tc.desc h2dts parseClass：扩充-边界：索引成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0231', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class IdxD {
    int arr[10];
    char name[20];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'IdxD');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'arr');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'name');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0231 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0231 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0232
  * @tc.name c_class_0232
  * @tc.desc h2dts parseClass：扩充-边界：私有公有 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0232', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class PubE {
private:
    int secret;
public:
    int open;
    void run();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'PubE');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'secret');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'open');
      assert.strictEqual(objList[0].variableList[1].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0232 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0232 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0233
  * @tc.name c_class_0233
  * @tc.desc h2dts parseClass：扩充-边界：嵌套方法参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0233', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class NestF {
    void run(std::vector<int> v, std::map<std::string, int> m);
    int get(std::set<int> s);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NestF');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 2);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 3);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'std::vector<int>');
      assert.strictEqual(objList[0].functionList[0].parameters[1].type, 'std::map<std::string');
      assert.strictEqual(objList[0].functionList[0].parameters[2].type, 'int>');
      assert.strictEqual(objList[0].functionList[1].name, 'get');
      assert.strictEqual(objList[0].functionList[1].returns, 'int');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'std::set<int>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0233 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0233 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0234
  * @tc.name c_class_0234
  * @tc.desc h2dts parseClass：扩充-边界：三方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0234', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class TriG {
    int a();
    int b();
    int c();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'TriG');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 3);
      assert.strictEqual(objList[0].functionList[0].name, 'a');
      assert.strictEqual(objList[0].functionList[0].returns, 'int');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'b');
      assert.strictEqual(objList[0].functionList[1].returns, 'int');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[2].name, 'c');
      assert.strictEqual(objList[0].functionList[2].returns, 'int');
      assert.strictEqual((objList[0].functionList[2].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0234 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0234 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0235
  * @tc.name c_class_0235
  * @tc.desc h2dts parseClass：扩充-边界：混合成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0235', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class MixH {
    int i;
    double d;
    std::string s;
    bool b;
    char c;
    float f;
    long l;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'MixH');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 7);
      assert.strictEqual(objList[0].variableList[0].name, 'i');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'd');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].variableList[2].name, 's');
      assert.strictEqual(objList[0].variableList[2].type, 'std::string');
      assert.strictEqual(objList[0].variableList[3].name, 'b');
      assert.strictEqual(objList[0].variableList[3].type, 'bool');
      assert.strictEqual(objList[0].variableList[4].name, 'c');
      assert.strictEqual(objList[0].variableList[4].type, 'char');
      assert.strictEqual(objList[0].variableList[5].name, 'f');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'l');
      assert.strictEqual(objList[0].variableList[6].type, 'long');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0235 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0235 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0236
  * @tc.name c_class_0236
  * @tc.desc h2dts parseClass：扩充-边界：多数组 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0236', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class MultiArrI {
    int a[2][3];
    double b[4][5][6];
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'MultiArrI');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].variableList[0].name, 'a');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'b');
      assert.strictEqual(objList[0].variableList[1].type, 'double');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0236 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0236 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0237
  * @tc.name c_class_0237
  * @tc.desc h2dts parseClass：扩充-边界：引用成员方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0237', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class RefMJ {
    void set(int& a);
    void get(int& out);
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'RefMJ');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 0);
      assert.strictEqual(objList[0].functionList.length, 2);
      assert.strictEqual(objList[0].functionList[0].name, 'set');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[0].parameters[0].type, 'int& a');
      assert.strictEqual(objList[0].functionList[1].name, 'get');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 1);
      assert.strictEqual(objList[0].functionList[1].parameters[0].type, 'int& out');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0237 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0237 执行异常: ${String(err)}`);
    }
  });

});
