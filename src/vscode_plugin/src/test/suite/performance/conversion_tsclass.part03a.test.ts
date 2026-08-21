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
import { doParseTs } from '../../../parse/parsets';
import { ParseObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse：同一源码解析 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;      // 解析 10 次 ≤ 6s（实测约 4.0~4.3s/用例）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_DTS2CPP_Class_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Class_Suite part03.');

  /**
  * @tc.number dts2cpp_class_0052
  * @tc.name dts2cpp_class_0052
  * @tc.desc dts2cpp class 扩充-属性矩阵：number × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0052', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0052.ts',
            `class ClsP00M0 {
        p0: number;
        p1: number;
        p2: number;
        p3: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP00M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'number');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'number');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0053
  * @tc.name dts2cpp_class_0053
  * @tc.desc dts2cpp class 扩充-属性矩阵：number × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0053', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0053.ts',
            `class ClsP00M1 {
        public p0: number;
        public p1: number;
        public p2: number;
        public p3: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP00M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'number');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'number');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0054
  * @tc.name dts2cpp_class_0054
  * @tc.desc dts2cpp class 扩充-属性矩阵：number × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0054', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0054.ts',
            `class ClsP00M2 {
        readonly p0: number;
        readonly p1: number;
        readonly p2: number;
        readonly p3: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP00M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'number');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'number');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0055
  * @tc.name dts2cpp_class_0055
  * @tc.desc dts2cpp class 扩充-属性矩阵：number × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0055', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0055.ts',
            `class ClsP00M3 {
        p0?: number;
        p1?: number;
        p2?: number;
        p3?: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP00M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'number');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'number');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0056
  * @tc.name dts2cpp_class_0056
  * @tc.desc dts2cpp class 扩充-属性矩阵：string × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0056', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0056.ts',
            `class ClsP01M0 {
        p0: string;
        p1: string;
        p2: string;
        p3: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP01M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0057
  * @tc.name dts2cpp_class_0057
  * @tc.desc dts2cpp class 扩充-属性矩阵：string × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0057', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0057.ts',
            `class ClsP01M1 {
        public p0: string;
        public p1: string;
        public p2: string;
        public p3: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP01M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0058
  * @tc.name dts2cpp_class_0058
  * @tc.desc dts2cpp class 扩充-属性矩阵：string × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0058', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0058.ts',
            `class ClsP01M2 {
        readonly p0: string;
        readonly p1: string;
        readonly p2: string;
        readonly p3: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP01M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0058 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0059
  * @tc.name dts2cpp_class_0059
  * @tc.desc dts2cpp class 扩充-属性矩阵：string × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0059', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0059.ts',
            `class ClsP01M3 {
        p0?: string;
        p1?: string;
        p2?: string;
        p3?: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP01M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0059 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0060
  * @tc.name dts2cpp_class_0060
  * @tc.desc dts2cpp class 扩充-属性矩阵：boolean × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0060', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0060.ts',
            `class ClsP02M0 {
        p0: boolean;
        p1: boolean;
        p2: boolean;
        p3: boolean;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP02M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0060 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0061
  * @tc.name dts2cpp_class_0061
  * @tc.desc dts2cpp class 扩充-属性矩阵：boolean × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0061', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0061.ts',
            `class ClsP02M1 {
        public p0: boolean;
        public p1: boolean;
        public p2: boolean;
        public p3: boolean;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP02M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0061 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0062
  * @tc.name dts2cpp_class_0062
  * @tc.desc dts2cpp class 扩充-属性矩阵：boolean × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0062', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0062.ts',
            `class ClsP02M2 {
        readonly p0: boolean;
        readonly p1: boolean;
        readonly p2: boolean;
        readonly p3: boolean;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP02M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0062 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0063
  * @tc.name dts2cpp_class_0063
  * @tc.desc dts2cpp class 扩充-属性矩阵：boolean × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0063', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0063.ts',
            `class ClsP02M3 {
        p0?: boolean;
        p1?: boolean;
        p2?: boolean;
        p3?: boolean;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP02M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0063 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0064
  * @tc.name dts2cpp_class_0064
  * @tc.desc dts2cpp class 扩充-属性矩阵：any × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0064', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0064.ts',
            `class ClsP03M0 {
        p0: any;
        p1: any;
        p2: any;
        p3: any;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP03M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'any');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'any');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'any');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'any');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0064 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0065
  * @tc.name dts2cpp_class_0065
  * @tc.desc dts2cpp class 扩充-属性矩阵：any × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0065', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0065.ts',
            `class ClsP03M1 {
        public p0: any;
        public p1: any;
        public p2: any;
        public p3: any;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP03M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'any');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'any');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'any');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'any');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0065 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0066
  * @tc.name dts2cpp_class_0066
  * @tc.desc dts2cpp class 扩充-属性矩阵：any × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0066', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0066.ts',
            `class ClsP03M2 {
        readonly p0: any;
        readonly p1: any;
        readonly p2: any;
        readonly p3: any;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP03M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'any');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'any');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'any');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'any');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0066 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0067
  * @tc.name dts2cpp_class_0067
  * @tc.desc dts2cpp class 扩充-属性矩阵：any × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0067', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0067.ts',
            `class ClsP03M3 {
        p0?: any;
        p1?: any;
        p2?: any;
        p3?: any;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP03M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'any');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'any');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'any');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'any');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0067 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0068
  * @tc.name dts2cpp_class_0068
  * @tc.desc dts2cpp class 扩充-属性矩阵：unknown × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0068', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0068.ts',
            `class ClsP04M0 {
        p0: unknown;
        p1: unknown;
        p2: unknown;
        p3: unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP04M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'unknown');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0068 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0069
  * @tc.name dts2cpp_class_0069
  * @tc.desc dts2cpp class 扩充-属性矩阵：unknown × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0069', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0069.ts',
            `class ClsP04M1 {
        public p0: unknown;
        public p1: unknown;
        public p2: unknown;
        public p3: unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP04M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'unknown');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0069 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0070
  * @tc.name dts2cpp_class_0070
  * @tc.desc dts2cpp class 扩充-属性矩阵：unknown × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0070', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0070.ts',
            `class ClsP04M2 {
        readonly p0: unknown;
        readonly p1: unknown;
        readonly p2: unknown;
        readonly p3: unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP04M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'unknown');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0070 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0070 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0071
  * @tc.name dts2cpp_class_0071
  * @tc.desc dts2cpp class 扩充-属性矩阵：unknown × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0071', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0071.ts',
            `class ClsP04M3 {
        p0?: unknown;
        p1?: unknown;
        p2?: unknown;
        p3?: unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP04M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'unknown');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0071 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0072
  * @tc.name dts2cpp_class_0072
  * @tc.desc dts2cpp class 扩充-属性矩阵：null × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0072', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0072.ts',
            `class ClsP05M0 {
        p0: null;
        p1: null;
        p2: null;
        p3: null;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP05M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'null');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'null');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'null');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'null');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0072 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0073
  * @tc.name dts2cpp_class_0073
  * @tc.desc dts2cpp class 扩充-属性矩阵：null × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0073', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0073.ts',
            `class ClsP05M1 {
        public p0: null;
        public p1: null;
        public p2: null;
        public p3: null;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP05M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'null');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'null');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'null');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'null');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0073 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0074
  * @tc.name dts2cpp_class_0074
  * @tc.desc dts2cpp class 扩充-属性矩阵：null × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0074', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0074.ts',
            `class ClsP05M2 {
        readonly p0: null;
        readonly p1: null;
        readonly p2: null;
        readonly p3: null;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP05M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'null');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'null');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'null');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'null');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0074 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0075
  * @tc.name dts2cpp_class_0075
  * @tc.desc dts2cpp class 扩充-属性矩阵：null × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0075', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0075.ts',
            `class ClsP05M3 {
        p0?: null;
        p1?: null;
        p2?: null;
        p3?: null;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP05M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'null');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'null');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'null');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'null');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0075 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0076
  * @tc.name dts2cpp_class_0076
  * @tc.desc dts2cpp class 扩充-属性矩阵：undefined × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0076', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0076.ts',
            `class ClsP06M0 {
        p0: undefined;
        p1: undefined;
        p2: undefined;
        p3: undefined;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP06M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'undefined');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0076 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0077
  * @tc.name dts2cpp_class_0077
  * @tc.desc dts2cpp class 扩充-属性矩阵：undefined × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0077', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0077.ts',
            `class ClsP06M1 {
        public p0: undefined;
        public p1: undefined;
        public p2: undefined;
        public p3: undefined;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP06M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'undefined');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0077 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0078
  * @tc.name dts2cpp_class_0078
  * @tc.desc dts2cpp class 扩充-属性矩阵：undefined × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0078', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0078.ts',
            `class ClsP06M2 {
        readonly p0: undefined;
        readonly p1: undefined;
        readonly p2: undefined;
        readonly p3: undefined;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP06M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'undefined');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0078 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0079
  * @tc.name dts2cpp_class_0079
  * @tc.desc dts2cpp class 扩充-属性矩阵：undefined × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0079', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0079.ts',
            `class ClsP06M3 {
        p0?: undefined;
        p1?: undefined;
        p2?: undefined;
        p3?: undefined;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP06M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'undefined');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0079 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0080
  * @tc.name dts2cpp_class_0080
  * @tc.desc dts2cpp class 扩充-属性矩阵：symbol × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0080', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0080.ts',
            `class ClsP07M0 {
        p0: symbol;
        p1: symbol;
        p2: symbol;
        p3: symbol;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP07M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'symbol');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0080 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0081
  * @tc.name dts2cpp_class_0081
  * @tc.desc dts2cpp class 扩充-属性矩阵：symbol × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0081', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0081.ts',
            `class ClsP07M1 {
        public p0: symbol;
        public p1: symbol;
        public p2: symbol;
        public p3: symbol;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP07M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'symbol');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0081 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0082
  * @tc.name dts2cpp_class_0082
  * @tc.desc dts2cpp class 扩充-属性矩阵：symbol × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0082', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0082.ts',
            `class ClsP07M2 {
        readonly p0: symbol;
        readonly p1: symbol;
        readonly p2: symbol;
        readonly p3: symbol;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP07M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'symbol');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0082 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0083
  * @tc.name dts2cpp_class_0083
  * @tc.desc dts2cpp class 扩充-属性矩阵：symbol × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0083', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0083.ts',
            `class ClsP07M3 {
        p0?: symbol;
        p1?: symbol;
        p2?: symbol;
        p3?: symbol;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP07M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'symbol');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0083 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0084
  * @tc.name dts2cpp_class_0084
  * @tc.desc dts2cpp class 扩充-属性矩阵：bigint × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0084', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0084.ts',
            `class ClsP08M0 {
        p0: bigint;
        p1: bigint;
        p2: bigint;
        p3: bigint;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP08M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'bigint');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0084 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0085
  * @tc.name dts2cpp_class_0085
  * @tc.desc dts2cpp class 扩充-属性矩阵：bigint × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0085', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0085.ts',
            `class ClsP08M1 {
        public p0: bigint;
        public p1: bigint;
        public p2: bigint;
        public p3: bigint;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP08M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'bigint');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0085 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0086
  * @tc.name dts2cpp_class_0086
  * @tc.desc dts2cpp class 扩充-属性矩阵：bigint × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0086', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0086.ts',
            `class ClsP08M2 {
        readonly p0: bigint;
        readonly p1: bigint;
        readonly p2: bigint;
        readonly p3: bigint;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP08M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'bigint');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0086 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0087
  * @tc.name dts2cpp_class_0087
  * @tc.desc dts2cpp class 扩充-属性矩阵：bigint × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0087', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0087.ts',
            `class ClsP08M3 {
        p0?: bigint;
        p1?: bigint;
        p2?: bigint;
        p3?: bigint;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP08M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'bigint');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0087 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0088
  * @tc.name dts2cpp_class_0088
  * @tc.desc dts2cpp class 扩充-属性矩阵：object × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0088', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0088.ts',
            `class ClsP09M0 {
        p0: object;
        p1: object;
        p2: object;
        p3: object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP09M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'object');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'object');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'object');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'object');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0088 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0089
  * @tc.name dts2cpp_class_0089
  * @tc.desc dts2cpp class 扩充-属性矩阵：object × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0089', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0089.ts',
            `class ClsP09M1 {
        public p0: object;
        public p1: object;
        public p2: object;
        public p3: object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP09M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'object');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'object');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'object');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'object');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0089 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0090
  * @tc.name dts2cpp_class_0090
  * @tc.desc dts2cpp class 扩充-属性矩阵：object × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0090', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0090.ts',
            `class ClsP09M2 {
        readonly p0: object;
        readonly p1: object;
        readonly p2: object;
        readonly p3: object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP09M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'object');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'object');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'object');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'object');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0090 执行异常: ${String(err)}`);
    }
  });

});

