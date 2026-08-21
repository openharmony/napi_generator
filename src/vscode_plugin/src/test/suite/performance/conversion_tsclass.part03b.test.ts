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
  * @tc.number dts2cpp_class_0091
  * @tc.name dts2cpp_class_0091
  * @tc.desc dts2cpp class 扩充-属性矩阵：object × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0091', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0091.ts',
            `class ClsP09M3 {
        p0?: object;
        p1?: object;
        p2?: object;
        p3?: object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP09M3');
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
        `dts2cpp_class_0091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0092
  * @tc.name dts2cpp_class_0092
  * @tc.desc dts2cpp class 扩充-属性矩阵：number[] × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0092', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0092.ts',
            `class ClsP10M0 {
        p0: number[];
        p1: number[];
        p2: number[];
        p3: number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP10M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'number[]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0093
  * @tc.name dts2cpp_class_0093
  * @tc.desc dts2cpp class 扩充-属性矩阵：number[] × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0093', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0093.ts',
            `class ClsP10M1 {
        public p0: number[];
        public p1: number[];
        public p2: number[];
        public p3: number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP10M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'number[]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0094
  * @tc.name dts2cpp_class_0094
  * @tc.desc dts2cpp class 扩充-属性矩阵：number[] × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0094', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0094.ts',
            `class ClsP10M2 {
        readonly p0: number[];
        readonly p1: number[];
        readonly p2: number[];
        readonly p3: number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP10M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'number[]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0095
  * @tc.name dts2cpp_class_0095
  * @tc.desc dts2cpp class 扩充-属性矩阵：number[] × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0095', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0095.ts',
            `class ClsP10M3 {
        p0?: number[];
        p1?: number[];
        p2?: number[];
        p3?: number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP10M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'number[]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0095 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0096
  * @tc.name dts2cpp_class_0096
  * @tc.desc dts2cpp class 扩充-属性矩阵：string[] × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0096', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0096.ts',
            `class ClsP11M0 {
        p0: string[];
        p1: string[];
        p2: string[];
        p3: string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP11M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string[]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0096 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0097
  * @tc.name dts2cpp_class_0097
  * @tc.desc dts2cpp class 扩充-属性矩阵：string[] × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0097', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0097.ts',
            `class ClsP11M1 {
        public p0: string[];
        public p1: string[];
        public p2: string[];
        public p3: string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP11M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string[]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0097 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0098
  * @tc.name dts2cpp_class_0098
  * @tc.desc dts2cpp class 扩充-属性矩阵：string[] × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0098', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0098.ts',
            `class ClsP11M2 {
        readonly p0: string[];
        readonly p1: string[];
        readonly p2: string[];
        readonly p3: string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP11M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string[]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0098 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0099
  * @tc.name dts2cpp_class_0099
  * @tc.desc dts2cpp class 扩充-属性矩阵：string[] × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0099', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0099.ts',
            `class ClsP11M3 {
        p0?: string[];
        p1?: string[];
        p2?: string[];
        p3?: string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP11M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string[]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0099 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0099 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0100
  * @tc.name dts2cpp_class_0100
  * @tc.desc dts2cpp class 扩充-属性矩阵：boolean[] × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0100', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0100.ts',
            `class ClsP12M0 {
        p0: boolean[];
        p1: boolean[];
        p2: boolean[];
        p3: boolean[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP12M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'boolean[]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0100 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0101
  * @tc.name dts2cpp_class_0101
  * @tc.desc dts2cpp class 扩充-属性矩阵：boolean[] × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0101', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0101.ts',
            `class ClsP12M1 {
        public p0: boolean[];
        public p1: boolean[];
        public p2: boolean[];
        public p3: boolean[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP12M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'boolean[]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0101 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0101 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0102
  * @tc.name dts2cpp_class_0102
  * @tc.desc dts2cpp class 扩充-属性矩阵：boolean[] × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0102', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0102.ts',
            `class ClsP12M2 {
        readonly p0: boolean[];
        readonly p1: boolean[];
        readonly p2: boolean[];
        readonly p3: boolean[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP12M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'boolean[]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0102 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0102 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0103
  * @tc.name dts2cpp_class_0103
  * @tc.desc dts2cpp class 扩充-属性矩阵：boolean[] × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0103', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0103.ts',
            `class ClsP12M3 {
        p0?: boolean[];
        p1?: boolean[];
        p2?: boolean[];
        p3?: boolean[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP12M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'boolean[]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0103 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0104
  * @tc.name dts2cpp_class_0104
  * @tc.desc dts2cpp class 扩充-属性矩阵：Array<number> × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0104', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0104.ts',
            `class ClsP13M0 {
        p0: Array<number>;
        p1: Array<number>;
        p2: Array<number>;
        p3: Array<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP13M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Array<number>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0104 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0105
  * @tc.name dts2cpp_class_0105
  * @tc.desc dts2cpp class 扩充-属性矩阵：Array<number> × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0105', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0105.ts',
            `class ClsP13M1 {
        public p0: Array<number>;
        public p1: Array<number>;
        public p2: Array<number>;
        public p3: Array<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP13M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Array<number>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0106
  * @tc.name dts2cpp_class_0106
  * @tc.desc dts2cpp class 扩充-属性矩阵：Array<number> × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0106', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0106.ts',
            `class ClsP13M2 {
        readonly p0: Array<number>;
        readonly p1: Array<number>;
        readonly p2: Array<number>;
        readonly p3: Array<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP13M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Array<number>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0107
  * @tc.name dts2cpp_class_0107
  * @tc.desc dts2cpp class 扩充-属性矩阵：Array<number> × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0107', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0107.ts',
            `class ClsP13M3 {
        p0?: Array<number>;
        p1?: Array<number>;
        p2?: Array<number>;
        p3?: Array<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP13M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Array<number>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0108
  * @tc.name dts2cpp_class_0108
  * @tc.desc dts2cpp class 扩充-属性矩阵：Map<string, number> × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0108', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0108.ts',
            `class ClsP14M0 {
        p0: Map<string, number>;
        p1: Map<string, number>;
        p2: Map<string, number>;
        p3: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP14M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0109
  * @tc.name dts2cpp_class_0109
  * @tc.desc dts2cpp class 扩充-属性矩阵：Map<string, number> × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0109', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0109.ts',
            `class ClsP14M1 {
        public p0: Map<string, number>;
        public p1: Map<string, number>;
        public p2: Map<string, number>;
        public p3: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP14M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0110
  * @tc.name dts2cpp_class_0110
  * @tc.desc dts2cpp class 扩充-属性矩阵：Map<string, number> × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0110', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0110.ts',
            `class ClsP14M2 {
        readonly p0: Map<string, number>;
        readonly p1: Map<string, number>;
        readonly p2: Map<string, number>;
        readonly p3: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP14M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0111
  * @tc.name dts2cpp_class_0111
  * @tc.desc dts2cpp class 扩充-属性矩阵：Map<string, number> × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0111', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0111.ts',
            `class ClsP14M3 {
        p0?: Map<string, number>;
        p1?: Map<string, number>;
        p2?: Map<string, number>;
        p3?: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP14M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0112
  * @tc.name dts2cpp_class_0112
  * @tc.desc dts2cpp class 扩充-属性矩阵：Set<number> × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0112', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0112.ts',
            `class ClsP15M0 {
        p0: Set<number>;
        p1: Set<number>;
        p2: Set<number>;
        p3: Set<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP15M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Set<number>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0113
  * @tc.name dts2cpp_class_0113
  * @tc.desc dts2cpp class 扩充-属性矩阵：Set<number> × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0113', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0113.ts',
            `class ClsP15M1 {
        public p0: Set<number>;
        public p1: Set<number>;
        public p2: Set<number>;
        public p3: Set<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP15M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Set<number>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0114
  * @tc.name dts2cpp_class_0114
  * @tc.desc dts2cpp class 扩充-属性矩阵：Set<number> × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0114', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0114.ts',
            `class ClsP15M2 {
        readonly p0: Set<number>;
        readonly p1: Set<number>;
        readonly p2: Set<number>;
        readonly p3: Set<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP15M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Set<number>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0115
  * @tc.name dts2cpp_class_0115
  * @tc.desc dts2cpp class 扩充-属性矩阵：Set<number> × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0115', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0115.ts',
            `class ClsP15M3 {
        p0?: Set<number>;
        p1?: Set<number>;
        p2?: Set<number>;
        p3?: Set<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP15M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Set<number>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0116
  * @tc.name dts2cpp_class_0116
  * @tc.desc dts2cpp class 扩充-属性矩阵：Record<string, string> × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0116', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0116.ts',
            `class ClsP16M0 {
        p0: Record<string, string>;
        p1: Record<string, string>;
        p2: Record<string, string>;
        p3: Record<string, string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP16M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0117
  * @tc.name dts2cpp_class_0117
  * @tc.desc dts2cpp class 扩充-属性矩阵：Record<string, string> × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0117', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0117.ts',
            `class ClsP16M1 {
        public p0: Record<string, string>;
        public p1: Record<string, string>;
        public p2: Record<string, string>;
        public p3: Record<string, string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP16M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0118
  * @tc.name dts2cpp_class_0118
  * @tc.desc dts2cpp class 扩充-属性矩阵：Record<string, string> × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0118', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0118.ts',
            `class ClsP16M2 {
        readonly p0: Record<string, string>;
        readonly p1: Record<string, string>;
        readonly p2: Record<string, string>;
        readonly p3: Record<string, string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP16M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0118 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0119
  * @tc.name dts2cpp_class_0119
  * @tc.desc dts2cpp class 扩充-属性矩阵：Record<string, string> × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0119', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0119.ts',
            `class ClsP16M3 {
        p0?: Record<string, string>;
        p1?: Record<string, string>;
        p2?: Record<string, string>;
        p3?: Record<string, string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP16M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0119 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0119 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0120
  * @tc.name dts2cpp_class_0120
  * @tc.desc dts2cpp class 扩充-属性矩阵：Promise<string> × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0120', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0120.ts',
            `class ClsP17M0 {
        p0: Promise<string>;
        p1: Promise<string>;
        p2: Promise<string>;
        p3: Promise<string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP17M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0120 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0121
  * @tc.name dts2cpp_class_0121
  * @tc.desc dts2cpp class 扩充-属性矩阵：Promise<string> × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0121', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0121.ts',
            `class ClsP17M1 {
        public p0: Promise<string>;
        public p1: Promise<string>;
        public p2: Promise<string>;
        public p3: Promise<string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP17M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0121 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0122
  * @tc.name dts2cpp_class_0122
  * @tc.desc dts2cpp class 扩充-属性矩阵：Promise<string> × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0122', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0122.ts',
            `class ClsP17M2 {
        readonly p0: Promise<string>;
        readonly p1: Promise<string>;
        readonly p2: Promise<string>;
        readonly p3: Promise<string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP17M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0123
  * @tc.name dts2cpp_class_0123
  * @tc.desc dts2cpp class 扩充-属性矩阵：Promise<string> × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0123', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0123.ts',
            `class ClsP17M3 {
        p0?: Promise<string>;
        p1?: Promise<string>;
        p2?: Promise<string>;
        p3?: Promise<string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP17M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0124
  * @tc.name dts2cpp_class_0124
  * @tc.desc dts2cpp class 扩充-属性矩阵：[string, number] × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0124', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0124.ts',
            `class ClsP18M0 {
        p0: [string, number];
        p1: [string, number];
        p2: [string, number];
        p3: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP18M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '[string, number]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0125
  * @tc.name dts2cpp_class_0125
  * @tc.desc dts2cpp class 扩充-属性矩阵：[string, number] × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0125', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0125.ts',
            `class ClsP18M1 {
        public p0: [string, number];
        public p1: [string, number];
        public p2: [string, number];
        public p3: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP18M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '[string, number]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0126
  * @tc.name dts2cpp_class_0126
  * @tc.desc dts2cpp class 扩充-属性矩阵：[string, number] × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0126', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0126.ts',
            `class ClsP18M2 {
        readonly p0: [string, number];
        readonly p1: [string, number];
        readonly p2: [string, number];
        readonly p3: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP18M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '[string, number]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0127
  * @tc.name dts2cpp_class_0127
  * @tc.desc dts2cpp class 扩充-属性矩阵：[string, number] × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0127', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0127.ts',
            `class ClsP18M3 {
        p0?: [string, number];
        p1?: [string, number];
        p2?: [string, number];
        p3?: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP18M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '[string, number]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0128
  * @tc.name dts2cpp_class_0128
  * @tc.desc dts2cpp class 扩充-属性矩阵：(a: number) => void × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0128', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0128.ts',
            `class ClsP19M0 {
        p0: (a: number) => void;
        p1: (a: number) => void;
        p2: (a: number) => void;
        p3: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP19M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '(a: number) => void');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '(a: number) => void');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '(a: number) => void');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '(a: number) => void');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0129
  * @tc.name dts2cpp_class_0129
  * @tc.desc dts2cpp class 扩充-属性矩阵：(a: number) => void × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0129', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0129.ts',
            `class ClsP19M1 {
        public p0: (a: number) => void;
        public p1: (a: number) => void;
        public p2: (a: number) => void;
        public p3: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP19M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '(a: number) => void');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '(a: number) => void');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '(a: number) => void');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '(a: number) => void');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0129 执行异常: ${String(err)}`);
    }
  });

});

