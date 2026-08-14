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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Class_Suite part04.');

  /**
  * @tc.number dts2cpp_class_0139
  * @tc.name dts2cpp_class_0139
  * @tc.desc dts2cpp class 扩充-属性矩阵：RegExp × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0139', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0139.ts',
            `class ClsP21M3 {
        p0?: RegExp;
        p1?: RegExp;
        p2?: RegExp;
        p3?: RegExp;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP21M3');
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
        `dts2cpp_class_0139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0140
  * @tc.name dts2cpp_class_0140
  * @tc.desc dts2cpp class 扩充-属性矩阵：Error × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0140', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0140.ts',
            `class ClsP22M0 {
        p0: Error;
        p1: Error;
        p2: Error;
        p3: Error;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP22M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Error');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0141
  * @tc.name dts2cpp_class_0141
  * @tc.desc dts2cpp class 扩充-属性矩阵：Error × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0141', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0141.ts',
            `class ClsP22M1 {
        public p0: Error;
        public p1: Error;
        public p2: Error;
        public p3: Error;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP22M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Error');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0142
  * @tc.name dts2cpp_class_0142
  * @tc.desc dts2cpp class 扩充-属性矩阵：Error × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0142', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0142.ts',
            `class ClsP22M2 {
        readonly p0: Error;
        readonly p1: Error;
        readonly p2: Error;
        readonly p3: Error;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP22M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Error');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0143
  * @tc.name dts2cpp_class_0143
  * @tc.desc dts2cpp class 扩充-属性矩阵：Error × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0143', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0143.ts',
            `class ClsP22M3 {
        p0?: Error;
        p1?: Error;
        p2?: Error;
        p3?: Error;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP22M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Error');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0144
  * @tc.name dts2cpp_class_0144
  * @tc.desc dts2cpp class 扩充-属性矩阵：Uint8Array × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0144', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0144.ts',
            `class ClsP23M0 {
        p0: Uint8Array;
        p1: Uint8Array;
        p2: Uint8Array;
        p3: Uint8Array;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP23M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0145
  * @tc.name dts2cpp_class_0145
  * @tc.desc dts2cpp class 扩充-属性矩阵：Uint8Array × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0145', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0145.ts',
            `class ClsP23M1 {
        public p0: Uint8Array;
        public p1: Uint8Array;
        public p2: Uint8Array;
        public p3: Uint8Array;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP23M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0146
  * @tc.name dts2cpp_class_0146
  * @tc.desc dts2cpp class 扩充-属性矩阵：Uint8Array × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0146', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0146.ts',
            `class ClsP23M2 {
        readonly p0: Uint8Array;
        readonly p1: Uint8Array;
        readonly p2: Uint8Array;
        readonly p3: Uint8Array;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP23M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0147
  * @tc.name dts2cpp_class_0147
  * @tc.desc dts2cpp class 扩充-属性矩阵：Uint8Array × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0147', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0147.ts',
            `class ClsP23M3 {
        p0?: Uint8Array;
        p1?: Uint8Array;
        p2?: Uint8Array;
        p3?: Uint8Array;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP23M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0148
  * @tc.name dts2cpp_class_0148
  * @tc.desc dts2cpp class 扩充-属性矩阵："lit" × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0148', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0148.ts',
            `class ClsP24M0 {
        p0: "lit";
        p1: "lit";
        p2: "lit";
        p3: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP24M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '"lit"');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0149
  * @tc.name dts2cpp_class_0149
  * @tc.desc dts2cpp class 扩充-属性矩阵："lit" × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0149', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0149.ts',
            `class ClsP24M1 {
        public p0: "lit";
        public p1: "lit";
        public p2: "lit";
        public p3: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP24M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '"lit"');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0150
  * @tc.name dts2cpp_class_0150
  * @tc.desc dts2cpp class 扩充-属性矩阵："lit" × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0150', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0150.ts',
            `class ClsP24M2 {
        readonly p0: "lit";
        readonly p1: "lit";
        readonly p2: "lit";
        readonly p3: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP24M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '"lit"');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0151
  * @tc.name dts2cpp_class_0151
  * @tc.desc dts2cpp class 扩充-属性矩阵："lit" × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0151', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0151.ts',
            `class ClsP24M3 {
        p0?: "lit";
        p1?: "lit";
        p2?: "lit";
        p3?: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP24M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '"lit"');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0152
  * @tc.name dts2cpp_class_0152
  * @tc.desc dts2cpp class 扩充-属性矩阵：42 × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0152', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0152.ts',
            `class ClsP25M0 {
        p0: 42;
        p1: 42;
        p2: 42;
        p3: 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP25M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '42');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '42');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '42');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '42');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0153
  * @tc.name dts2cpp_class_0153
  * @tc.desc dts2cpp class 扩充-属性矩阵：42 × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0153', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0153.ts',
            `class ClsP25M1 {
        public p0: 42;
        public p1: 42;
        public p2: 42;
        public p3: 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP25M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '42');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '42');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '42');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '42');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0154
  * @tc.name dts2cpp_class_0154
  * @tc.desc dts2cpp class 扩充-属性矩阵：42 × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0154', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0154.ts',
            `class ClsP25M2 {
        readonly p0: 42;
        readonly p1: 42;
        readonly p2: 42;
        readonly p3: 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP25M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '42');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '42');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '42');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '42');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0155
  * @tc.name dts2cpp_class_0155
  * @tc.desc dts2cpp class 扩充-属性矩阵：42 × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0155', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0155.ts',
            `class ClsP25M3 {
        p0?: 42;
        p1?: 42;
        p2?: 42;
        p3?: 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP25M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '42');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '42');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '42');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '42');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0156
  * @tc.name dts2cpp_class_0156
  * @tc.desc dts2cpp class 扩充-属性矩阵：true × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0156', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0156.ts',
            `class ClsP26M0 {
        p0: true;
        p1: true;
        p2: true;
        p3: true;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP26M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'true');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'true');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'true');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'true');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0157
  * @tc.name dts2cpp_class_0157
  * @tc.desc dts2cpp class 扩充-属性矩阵：true × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0157', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0157.ts',
            `class ClsP26M1 {
        public p0: true;
        public p1: true;
        public p2: true;
        public p3: true;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP26M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'true');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'true');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'true');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'true');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0157 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0158
  * @tc.name dts2cpp_class_0158
  * @tc.desc dts2cpp class 扩充-属性矩阵：true × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0158', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0158.ts',
            `class ClsP26M2 {
        readonly p0: true;
        readonly p1: true;
        readonly p2: true;
        readonly p3: true;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP26M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'true');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'true');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'true');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'true');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0159
  * @tc.name dts2cpp_class_0159
  * @tc.desc dts2cpp class 扩充-属性矩阵：true × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0159', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0159.ts',
            `class ClsP26M3 {
        p0?: true;
        p1?: true;
        p2?: true;
        p3?: true;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP26M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'true');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'true');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'true');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'true');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0160
  * @tc.name dts2cpp_class_0160
  * @tc.desc dts2cpp class 扩充-属性矩阵：string | number × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0160', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0160.ts',
            `class ClsP27M0 {
        p0: string | number;
        p1: string | number;
        p2: string | number;
        p3: string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP27M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string | number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0161
  * @tc.name dts2cpp_class_0161
  * @tc.desc dts2cpp class 扩充-属性矩阵：string | number × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0161', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0161.ts',
            `class ClsP27M1 {
        public p0: string | number;
        public p1: string | number;
        public p2: string | number;
        public p3: string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP27M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string | number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0162
  * @tc.name dts2cpp_class_0162
  * @tc.desc dts2cpp class 扩充-属性矩阵：string | number × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0162', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0162.ts',
            `class ClsP27M2 {
        readonly p0: string | number;
        readonly p1: string | number;
        readonly p2: string | number;
        readonly p3: string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP27M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string | number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0162 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0163
  * @tc.name dts2cpp_class_0163
  * @tc.desc dts2cpp class 扩充-属性矩阵：string | number × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0163', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0163.ts',
            `class ClsP27M3 {
        p0?: string | number;
        p1?: string | number;
        p2?: string | number;
        p3?: string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP27M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string | number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0164
  * @tc.name dts2cpp_class_0164
  * @tc.desc dts2cpp class 扩充-属性矩阵：string & {} × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0164', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0164.ts',
            `class ClsP28M0 {
        p0: string & {};
        p1: string & {};
        p2: string & {};
        p3: string & {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP28M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string & {}');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string & {}');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string & {}');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string & {}');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0165
  * @tc.name dts2cpp_class_0165
  * @tc.desc dts2cpp class 扩充-属性矩阵：string & {} × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0165', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0165.ts',
            `class ClsP28M1 {
        public p0: string & {};
        public p1: string & {};
        public p2: string & {};
        public p3: string & {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP28M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string & {}');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string & {}');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string & {}');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string & {}');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0166
  * @tc.name dts2cpp_class_0166
  * @tc.desc dts2cpp class 扩充-属性矩阵：string & {} × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0166', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0166.ts',
            `class ClsP28M2 {
        readonly p0: string & {};
        readonly p1: string & {};
        readonly p2: string & {};
        readonly p3: string & {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP28M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string & {}');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string & {}');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string & {}');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string & {}');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0167
  * @tc.name dts2cpp_class_0167
  * @tc.desc dts2cpp class 扩充-属性矩阵：string & {} × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0167', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0167.ts',
            `class ClsP28M3 {
        p0?: string & {};
        p1?: string & {};
        p2?: string & {};
        p3?: string & {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP28M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string & {}');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string & {}');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string & {}');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'string & {}');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0168
  * @tc.name dts2cpp_class_0168
  * @tc.desc dts2cpp class 扩充-属性矩阵：{ id: number } × plain 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0168', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0168.ts',
            `class ClsP29M0 {
        p0: { id: number };
        p1: { id: number };
        p2: { id: number };
        p3: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP29M0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '{ id: number }');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '{ id: number }');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '{ id: number }');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '{ id: number }');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0168 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0169
  * @tc.name dts2cpp_class_0169
  * @tc.desc dts2cpp class 扩充-属性矩阵：{ id: number } × public 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0169', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0169.ts',
            `class ClsP29M1 {
        public p0: { id: number };
        public p1: { id: number };
        public p2: { id: number };
        public p3: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP29M1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '{ id: number }');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '{ id: number }');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '{ id: number }');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '{ id: number }');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0170
  * @tc.name dts2cpp_class_0170
  * @tc.desc dts2cpp class 扩充-属性矩阵：{ id: number } × readonly 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0170', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0170.ts',
            `class ClsP29M2 {
        readonly p0: { id: number };
        readonly p1: { id: number };
        readonly p2: { id: number };
        readonly p3: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP29M2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '{ id: number }');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '{ id: number }');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '{ id: number }');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '{ id: number }');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0171
  * @tc.name dts2cpp_class_0171
  * @tc.desc dts2cpp class 扩充-属性矩阵：{ id: number } × optional 修饰（4 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0171', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0171.ts',
            `class ClsP29M3 {
        p0?: { id: number };
        p1?: { id: number };
        p2?: { id: number };
        p3?: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsP29M3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, '{ id: number }');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, '{ id: number }');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, '{ id: number }');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, '{ id: number }');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0172
  * @tc.name dts2cpp_class_0172
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 number（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0172', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0172.ts',
            `class ClsR00N0 {
        m0(): number { return {} as any; }
        m1(): number { return {} as any; }
        m2(): number { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR00N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0172 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0172 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0173
  * @tc.name dts2cpp_class_0173
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 number（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0173', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0173.ts',
            `class ClsR00N1 {
        m0(a: number): number { return {} as any; }
        m1(a: string): number { return {} as any; }
        m2(a: boolean): number { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR00N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0174
  * @tc.name dts2cpp_class_0174
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 string（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0174', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0174.ts',
            `class ClsR01N0 {
        m0(): string { return {} as any; }
        m1(): string { return {} as any; }
        m2(): string { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR01N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'string');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'string');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'string');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0175
  * @tc.name dts2cpp_class_0175
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 string（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0175', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0175.ts',
            `class ClsR01N1 {
        m0(a: number): string { return {} as any; }
        m1(a: string): string { return {} as any; }
        m2(a: boolean): string { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR01N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'string');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'string');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'string');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0175 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0176
  * @tc.name dts2cpp_class_0176
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 boolean（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0176', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0176.ts',
            `class ClsR02N0 {
        m0(): boolean { return {} as any; }
        m1(): boolean { return {} as any; }
        m2(): boolean { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR02N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'boolean');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'boolean');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'boolean');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0176 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0177
  * @tc.name dts2cpp_class_0177
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 boolean（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0177', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0177.ts',
            `class ClsR02N1 {
        m0(a: number): boolean { return {} as any; }
        m1(a: string): boolean { return {} as any; }
        m2(a: boolean): boolean { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR02N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'boolean');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'boolean');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'boolean');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0177 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0177 执行异常: ${String(err)}`);
    }
  });

});

