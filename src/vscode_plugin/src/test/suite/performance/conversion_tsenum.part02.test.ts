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

suite('Performance_DTS2CPP_Enum_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Enum_Suite.');

  /**
  * @tc.number dts2cpp_enum_0030
  * @tc.name dts2cpp_enum_0030
  * @tc.desc dts2cpp enum 扩充：20 成员无值 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0030', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0030.ts',
            `enum Status20 {
        S0, S1, S2, S3, S4, S5, S6, S7, S8, S9,
        S10, S11, S12, S13, S14, S15, S16, S17, S18, S19
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Status20');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 20);
      assert.strictEqual(enumItem_0!.members![0], 'S0');
      assert.strictEqual(enumItem_0!.members![1], 'S1');
      assert.strictEqual(enumItem_0!.members![2], 'S2');
      assert.strictEqual(enumItem_0!.members![3], 'S3');
      assert.strictEqual(enumItem_0!.members![4], 'S4');
      assert.strictEqual(enumItem_0!.members![5], 'S5');
      assert.strictEqual(enumItem_0!.members![6], 'S6');
      assert.strictEqual(enumItem_0!.members![7], 'S7');
      assert.strictEqual(enumItem_0!.members![8], 'S8');
      assert.strictEqual(enumItem_0!.members![9], 'S9');
      assert.strictEqual(enumItem_0!.members![10], 'S10');
      assert.strictEqual(enumItem_0!.members![11], 'S11');
      assert.strictEqual(enumItem_0!.members![12], 'S12');
      assert.strictEqual(enumItem_0!.members![13], 'S13');
      assert.strictEqual(enumItem_0!.members![14], 'S14');
      assert.strictEqual(enumItem_0!.members![15], 'S15');
      assert.strictEqual(enumItem_0!.members![16], 'S16');
      assert.strictEqual(enumItem_0!.members![17], 'S17');
      assert.strictEqual(enumItem_0!.members![18], 'S18');
      assert.strictEqual(enumItem_0!.members![19], 'S19');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0031
  * @tc.name dts2cpp_enum_0031
  * @tc.desc dts2cpp enum 扩充：50 成员无值 enum（规模压测） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0031', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0031.ts',
            `enum Status50 {
        S0, S1, S2, S3, S4, S5, S6, S7, S8, S9,
        S10, S11, S12, S13, S14, S15, S16, S17, S18, S19,
        S20, S21, S22, S23, S24, S25, S26, S27, S28, S29,
        S30, S31, S32, S33, S34, S35, S36, S37, S38, S39,
        S40, S41, S42, S43, S44, S45, S46, S47, S48, S49
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Status50');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 50);
      assert.strictEqual(enumItem_0!.members![0], 'S0');
      assert.strictEqual(enumItem_0!.members![1], 'S1');
      assert.strictEqual(enumItem_0!.members![2], 'S2');
      assert.strictEqual(enumItem_0!.members![3], 'S3');
      assert.strictEqual(enumItem_0!.members![4], 'S4');
      assert.strictEqual(enumItem_0!.members![5], 'S5');
      assert.strictEqual(enumItem_0!.members![6], 'S6');
      assert.strictEqual(enumItem_0!.members![7], 'S7');
      assert.strictEqual(enumItem_0!.members![8], 'S8');
      assert.strictEqual(enumItem_0!.members![9], 'S9');
      assert.strictEqual(enumItem_0!.members![10], 'S10');
      assert.strictEqual(enumItem_0!.members![11], 'S11');
      assert.strictEqual(enumItem_0!.members![12], 'S12');
      assert.strictEqual(enumItem_0!.members![13], 'S13');
      assert.strictEqual(enumItem_0!.members![14], 'S14');
      assert.strictEqual(enumItem_0!.members![15], 'S15');
      assert.strictEqual(enumItem_0!.members![16], 'S16');
      assert.strictEqual(enumItem_0!.members![17], 'S17');
      assert.strictEqual(enumItem_0!.members![18], 'S18');
      assert.strictEqual(enumItem_0!.members![19], 'S19');
      assert.strictEqual(enumItem_0!.members![20], 'S20');
      assert.strictEqual(enumItem_0!.members![21], 'S21');
      assert.strictEqual(enumItem_0!.members![22], 'S22');
      assert.strictEqual(enumItem_0!.members![23], 'S23');
      assert.strictEqual(enumItem_0!.members![24], 'S24');
      assert.strictEqual(enumItem_0!.members![25], 'S25');
      assert.strictEqual(enumItem_0!.members![26], 'S26');
      assert.strictEqual(enumItem_0!.members![27], 'S27');
      assert.strictEqual(enumItem_0!.members![28], 'S28');
      assert.strictEqual(enumItem_0!.members![29], 'S29');
      assert.strictEqual(enumItem_0!.members![30], 'S30');
      assert.strictEqual(enumItem_0!.members![31], 'S31');
      assert.strictEqual(enumItem_0!.members![32], 'S32');
      assert.strictEqual(enumItem_0!.members![33], 'S33');
      assert.strictEqual(enumItem_0!.members![34], 'S34');
      assert.strictEqual(enumItem_0!.members![35], 'S35');
      assert.strictEqual(enumItem_0!.members![36], 'S36');
      assert.strictEqual(enumItem_0!.members![37], 'S37');
      assert.strictEqual(enumItem_0!.members![38], 'S38');
      assert.strictEqual(enumItem_0!.members![39], 'S39');
      assert.strictEqual(enumItem_0!.members![40], 'S40');
      assert.strictEqual(enumItem_0!.members![41], 'S41');
      assert.strictEqual(enumItem_0!.members![42], 'S42');
      assert.strictEqual(enumItem_0!.members![43], 'S43');
      assert.strictEqual(enumItem_0!.members![44], 'S44');
      assert.strictEqual(enumItem_0!.members![45], 'S45');
      assert.strictEqual(enumItem_0!.members![46], 'S46');
      assert.strictEqual(enumItem_0!.members![47], 'S47');
      assert.strictEqual(enumItem_0!.members![48], 'S48');
      assert.strictEqual(enumItem_0!.members![49], 'S49');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0032
  * @tc.name dts2cpp_enum_0032
  * @tc.desc dts2cpp enum 扩充：10 成员全部数字赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0032', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0032.ts',
            `enum Code {
        A = 1, B = 2, C = 3, D = 4, E = 5,
        F = 6, G = 7, H = 8, I = 9, J = 10
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 10);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.members![4], 'E');
      assert.strictEqual(enumItem_0!.members![5], 'F');
      assert.strictEqual(enumItem_0!.members![6], 'G');
      assert.strictEqual(enumItem_0!.members![7], 'H');
      assert.strictEqual(enumItem_0!.members![8], 'I');
      assert.strictEqual(enumItem_0!.members![9], 'J');
      assert.strictEqual(enumItem_0!.values!.length, 10);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.strictEqual(enumItem_0!.values![2], '3');
      assert.strictEqual(enumItem_0!.values![3], '4');
      assert.strictEqual(enumItem_0!.values![4], '5');
      assert.strictEqual(enumItem_0!.values![5], '6');
      assert.strictEqual(enumItem_0!.values![6], '7');
      assert.strictEqual(enumItem_0!.values![7], '8');
      assert.strictEqual(enumItem_0!.values![8], '9');
      assert.strictEqual(enumItem_0!.values![9], '10');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0033
  * @tc.name dts2cpp_enum_0033
  * @tc.desc dts2cpp enum 扩充：十六进制赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0033', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0033.ts',
            `enum Code {
        A = 0x1F,
        B = 0x2A,
        C = 0x3C
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.values!.length, 3);
      assert.strictEqual(enumItem_0!.values![0], '0x1F');
      assert.strictEqual(enumItem_0!.values![1], '0x2A');
      assert.strictEqual(enumItem_0!.values![2], '0x3C');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0034
  * @tc.name dts2cpp_enum_0034
  * @tc.desc dts2cpp enum 扩充：二进制赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0034', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0034.ts',
            `enum Code {
        A = 0b101,
        B = 0b110
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '0b101');
      assert.strictEqual(enumItem_0!.values![1], '0b110');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0035
  * @tc.name dts2cpp_enum_0035
  * @tc.desc dts2cpp enum 扩充：八进制赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0035', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0035.ts',
            `enum Code {
        A = 0o17,
        B = 0o27
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '0o17');
      assert.strictEqual(enumItem_0!.values![1], '0o27');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0036
  * @tc.name dts2cpp_enum_0036
  * @tc.desc dts2cpp enum 扩充：负数赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0036', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0036.ts',
            `enum Code {
        A = -1,
        B = -2,
        C = 0
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.values!.length, 3);
      assert.strictEqual(enumItem_0!.values![0], '-1');
      assert.strictEqual(enumItem_0!.values![1], '-2');
      assert.strictEqual(enumItem_0!.values![2], '0');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0037
  * @tc.name dts2cpp_enum_0037
  * @tc.desc dts2cpp enum 扩充：浮点赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0037', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0037.ts',
            `enum Code {
        A = 0.5,
        B = 1.5,
        C = 3.14
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.values!.length, 3);
      assert.strictEqual(enumItem_0!.values![0], '0.5');
      assert.strictEqual(enumItem_0!.values![1], '1.5');
      assert.strictEqual(enumItem_0!.values![2], '3.14');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0038
  * @tc.name dts2cpp_enum_0038
  * @tc.desc dts2cpp enum 扩充：字符串字面量赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0038', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0038.ts',
            `enum Code {
        A = "a",
        B = "b",
        C = "c"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.values!.length, 3);
      assert.strictEqual(enumItem_0!.values![0], '"a"');
      assert.strictEqual(enumItem_0!.values![1], '"b"');
      assert.strictEqual(enumItem_0!.values![2], '"c"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0039
  * @tc.name dts2cpp_enum_0039
  * @tc.desc dts2cpp enum 扩充：模板字符串赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0039', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0039.ts',
            `enum Code {
        A = \`tpl_\${"x"}\`,
        B = \`tpl_y\`
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '`tpl_${"x"}`');
      assert.strictEqual(enumItem_0!.values![1], '`tpl_y`');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0040
  * @tc.name dts2cpp_enum_0040
  * @tc.desc dts2cpp enum 扩充：数字/字符串/十六进制混合赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0040', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0040.ts',
            `enum Code {
        A = 1,
        B = "two",
        C = 0x3,
        D = 4
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 4);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '"two"');
      assert.strictEqual(enumItem_0!.values![2], '0x3');
      assert.strictEqual(enumItem_0!.values![3], '4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0041
  * @tc.name dts2cpp_enum_0041
  * @tc.desc dts2cpp enum 扩充：11 种算术/位运算表达式赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0041', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0041.ts',
            `enum Code {
        A = 1 + 2,
        B = 3 * 4,
        C = 8 / 2,
        D = 10 - 3,
        E = 7 % 3,
        F = 1 << 2,
        G = 8 >> 1,
        H = 5 & 3,
        I = 5 | 2,
        J = 5 ^ 1,
        K = ~5
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 11);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.members![4], 'E');
      assert.strictEqual(enumItem_0!.members![5], 'F');
      assert.strictEqual(enumItem_0!.members![6], 'G');
      assert.strictEqual(enumItem_0!.members![7], 'H');
      assert.strictEqual(enumItem_0!.members![8], 'I');
      assert.strictEqual(enumItem_0!.members![9], 'J');
      assert.strictEqual(enumItem_0!.members![10], 'K');
      assert.strictEqual(enumItem_0!.values!.length, 11);
      assert.strictEqual(enumItem_0!.values![0], '1 + 2');
      assert.strictEqual(enumItem_0!.values![1], '3 * 4');
      assert.strictEqual(enumItem_0!.values![2], '8 / 2');
      assert.strictEqual(enumItem_0!.values![3], '10 - 3');
      assert.strictEqual(enumItem_0!.values![4], '7 % 3');
      assert.strictEqual(enumItem_0!.values![5], '1 << 2');
      assert.strictEqual(enumItem_0!.values![6], '8 >> 1');
      assert.strictEqual(enumItem_0!.values![7], '5 & 3');
      assert.strictEqual(enumItem_0!.values![8], '5 | 2');
      assert.strictEqual(enumItem_0!.values![9], '5 ^ 1');
      assert.strictEqual(enumItem_0!.values![10], '~5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0042
  * @tc.name dts2cpp_enum_0042
  * @tc.desc dts2cpp enum 扩充：Flags 风格成员引用联合赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0042', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0042.ts',
            `enum Flags {
        None = 0,
        Read = 1,
        Write = 2,
        ReadWrite = Read | Write,
        All = Read | Write | 4
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Flags');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 5);
      assert.strictEqual(enumItem_0!.members![0], 'None');
      assert.strictEqual(enumItem_0!.members![1], 'Read');
      assert.strictEqual(enumItem_0!.members![2], 'Write');
      assert.strictEqual(enumItem_0!.members![3], 'ReadWrite');
      assert.strictEqual(enumItem_0!.members![4], 'All');
      assert.strictEqual(enumItem_0!.values!.length, 5);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '1');
      assert.strictEqual(enumItem_0!.values![2], '2');
      assert.strictEqual(enumItem_0!.values![3], 'Read | Write');
      assert.strictEqual(enumItem_0!.values![4], 'Read | Write | 4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0043
  * @tc.name dts2cpp_enum_0043
  * @tc.desc dts2cpp enum 扩充：成员引用后定义成员（前向引用） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0043', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0043.ts',
            `enum Code {
        A = B,
        B = 1
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], 'B');
      assert.strictEqual(enumItem_0!.values![1], '1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0044
  * @tc.name dts2cpp_enum_0044
  * @tc.desc dts2cpp enum 扩充：成员自引用赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0044', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0044.ts',
            `enum Code {
        A = A
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 1);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.values!.length, 1);
      assert.strictEqual(enumItem_0!.values![0], 'A');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0045
  * @tc.name dts2cpp_enum_0045
  * @tc.desc dts2cpp enum 扩充：bigint 赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0045', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0045.ts',
            `enum Code {
        A = 1n,
        B = 2n
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Code');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1n');
      assert.strictEqual(enumItem_0!.values![1], '2n');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0046
  * @tc.name dts2cpp_enum_0046
  * @tc.desc dts2cpp enum 扩充：同文件 3 个 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0046', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0046.ts',
            `enum E1 { A, B }
enum E2 { C, D }
enum E3 { E, F };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 3);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'E1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'E2');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 2);
      assert.strictEqual(enumItem_1!.members![0], 'C');
      assert.strictEqual(enumItem_1!.members![1], 'D');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      const enumItem_2 = parseObj.enums.find(item => item.name === 'E3');
      assert.ok(enumItem_2);
      assert.strictEqual(enumItem_2!.members!.length, 2);
      assert.strictEqual(enumItem_2!.members![0], 'E');
      assert.strictEqual(enumItem_2!.members![1], 'F');
      assert.strictEqual(enumItem_2!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0047
  * @tc.name dts2cpp_enum_0047
  * @tc.desc dts2cpp enum 扩充：同文件 5 个 enum（多声明吞吐） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0047', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0047.ts',
            `enum E1 { A }
enum E2 { B }
enum E3 { C }
enum E4 { D }
enum E5 { E };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 5);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'E1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 1);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'E2');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 1);
      assert.strictEqual(enumItem_1!.members![0], 'B');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      const enumItem_2 = parseObj.enums.find(item => item.name === 'E3');
      assert.ok(enumItem_2);
      assert.strictEqual(enumItem_2!.members!.length, 1);
      assert.strictEqual(enumItem_2!.members![0], 'C');
      assert.strictEqual(enumItem_2!.values!.length, 0);
      const enumItem_3 = parseObj.enums.find(item => item.name === 'E4');
      assert.ok(enumItem_3);
      assert.strictEqual(enumItem_3!.members!.length, 1);
      assert.strictEqual(enumItem_3!.members![0], 'D');
      assert.strictEqual(enumItem_3!.values!.length, 0);
      const enumItem_4 = parseObj.enums.find(item => item.name === 'E5');
      assert.ok(enumItem_4);
      assert.strictEqual(enumItem_4!.members!.length, 1);
      assert.strictEqual(enumItem_4!.members![0], 'E');
      assert.strictEqual(enumItem_4!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0048
  * @tc.name dts2cpp_enum_0048
  * @tc.desc dts2cpp enum 扩充：export const enum 组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0048', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0048.ts',
            `export const enum Direction {
        Up = 1,
        Down = 2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0049
  * @tc.name dts2cpp_enum_0049
  * @tc.desc dts2cpp enum 扩充：declare const enum 组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0049', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0049.ts',
            `declare const enum Direction {
        Up = 1,
        Down = 2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0049 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0050
  * @tc.name dts2cpp_enum_0050
  * @tc.desc dts2cpp enum 扩充：namespace 内 2 个 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0050', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0050.ts',
            `namespace n1 {
        export enum E1 { A, B }
        export enum E2 { C, D }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 2);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'E1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'E2');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 2);
      assert.strictEqual(enumItem_1!.members![0], 'C');
      assert.strictEqual(enumItem_1!.members![1], 'D');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0050 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0051
  * @tc.name dts2cpp_enum_0051
  * @tc.desc dts2cpp enum 扩充：中文 enum 名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0051', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0051.ts',
            `enum 状态 {
        成功,
        失败,
        重试
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === '状态');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], '成功');
      assert.strictEqual(enumItem_0!.members![1], '失败');
      assert.strictEqual(enumItem_0!.members![2], '重试');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0052
  * @tc.name dts2cpp_enum_0052
  * @tc.desc dts2cpp enum 扩充：中文成员名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0052', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0052.ts',
            `enum Direction {
        上,
        下,
        左,
        右
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], '上');
      assert.strictEqual(enumItem_0!.members![1], '下');
      assert.strictEqual(enumItem_0!.members![2], '左');
      assert.strictEqual(enumItem_0!.members![3], '右');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0053
  * @tc.name dts2cpp_enum_0053
  * @tc.desc dts2cpp enum 扩充：尾逗号成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0053', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0053.ts',
            `enum Direction {
        Up,
        Down,
        Left,
        Right,
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'Left');
      assert.strictEqual(enumItem_0!.members![3], 'Right');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0054
  * @tc.name dts2cpp_enum_0054
  * @tc.desc dts2cpp enum 扩充：无尾分号 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0054', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0054.ts',
            `enum Direction {
        Up,
        Down
    }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0055
  * @tc.name dts2cpp_enum_0055
  * @tc.desc dts2cpp enum 扩充：字符串/数字/位运算三态混合赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0055', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0055.ts',
            `enum State {
        S1 = "one",
        S2 = 2,
        S3 = 1 << 3
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'State');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'S1');
      assert.strictEqual(enumItem_0!.members![1], 'S2');
      assert.strictEqual(enumItem_0!.members![2], 'S3');
      assert.strictEqual(enumItem_0!.values!.length, 3);
      assert.strictEqual(enumItem_0!.values![0], '"one"');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.strictEqual(enumItem_0!.values![2], '1 << 3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0056
  * @tc.name dts2cpp_enum_0056
  * @tc.desc dts2cpp enum 扩充：单成员 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0056', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0056.ts',
            `enum E { Single };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'E');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 1);
      assert.strictEqual(enumItem_0!.members![0], 'Single');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0057
  * @tc.name dts2cpp_enum_0057
  * @tc.desc dts2cpp enum 扩充：部分空赋值容错 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0057', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0057.ts',
            `enum E {
        A = ,
        B = 2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'E');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0057 执行异常: ${String(err)}`);
    }
  });

});
