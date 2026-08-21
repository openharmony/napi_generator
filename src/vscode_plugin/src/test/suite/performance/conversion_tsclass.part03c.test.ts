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
  * @tc.number dts2cpp_class_0130
  * @tc.name dts2cpp_class_0130
  * @tc.desc dts2cpp class 扩充-属性矩阵：(a: number) => void × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0130', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0130.ts',
            `class ClsP19M2 {
        readonly p0: (a: number) => void;
        readonly p1: (a: number) => void;
        readonly p2: (a: number) => void;
        readonly p3: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP19M2');
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
        `dts2cpp_class_0130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0131
  * @tc.name dts2cpp_class_0131
  * @tc.desc dts2cpp class 扩充-属性矩阵：(a: number) => void × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0131', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0131.ts',
            `class ClsP19M3 {
        p0?: (a: number) => void;
        p1?: (a: number) => void;
        p2?: (a: number) => void;
        p3?: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP19M3');
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
        `dts2cpp_class_0131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0132
  * @tc.name dts2cpp_class_0132
  * @tc.desc dts2cpp class 扩充-属性矩阵：Date × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0132', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0132.ts',
            `class ClsP20M0 {
        p0: Date;
        p1: Date;
        p2: Date;
        p3: Date;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP20M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Date');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0133
  * @tc.name dts2cpp_class_0133
  * @tc.desc dts2cpp class 扩充-属性矩阵：Date × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0133', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0133.ts',
            `class ClsP20M1 {
        public p0: Date;
        public p1: Date;
        public p2: Date;
        public p3: Date;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP20M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Date');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0134
  * @tc.name dts2cpp_class_0134
  * @tc.desc dts2cpp class 扩充-属性矩阵：Date × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0134', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0134.ts',
            `class ClsP20M2 {
        readonly p0: Date;
        readonly p1: Date;
        readonly p2: Date;
        readonly p3: Date;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP20M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Date');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0135
  * @tc.name dts2cpp_class_0135
  * @tc.desc dts2cpp class 扩充-属性矩阵：Date × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0135', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0135.ts',
            `class ClsP20M3 {
        p0?: Date;
        p1?: Date;
        p2?: Date;
        p3?: Date;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP20M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Date');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0136
  * @tc.name dts2cpp_class_0136
  * @tc.desc dts2cpp class 扩充-属性矩阵：RegExp × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0136', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0136.ts',
            `class ClsP21M0 {
        p0: RegExp;
        p1: RegExp;
        p2: RegExp;
        p3: RegExp;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP21M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'RegExp');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'RegExp');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'RegExp');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'RegExp');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0137
  * @tc.name dts2cpp_class_0137
  * @tc.desc dts2cpp class 扩充-属性矩阵：RegExp × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0137', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0137.ts',
            `class ClsP21M1 {
        public p0: RegExp;
        public p1: RegExp;
        public p2: RegExp;
        public p3: RegExp;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP21M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'RegExp');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'RegExp');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'RegExp');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'RegExp');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0138
  * @tc.name dts2cpp_class_0138
  * @tc.desc dts2cpp class 扩充-属性矩阵：RegExp × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0138', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0138.ts',
            `class ClsP21M2 {
        readonly p0: RegExp;
        readonly p1: RegExp;
        readonly p2: RegExp;
        readonly p3: RegExp;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP21M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'RegExp');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'RegExp');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'RegExp');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'RegExp');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0138 执行异常: ${String(err)}`);
    }
  });

});

