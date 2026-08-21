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

suite('Performance_DTS2CPP_Union_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Union_Suite (part11/12/13).');


  /**
  * @tc.number dts2cpp_union_0419
  * @tc.name dts2cpp_union_0419
  * @tc.desc dts2cpp union type alias 嵌套模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0419', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0419.ts',
            `type UnionType0419 = \`a\${\`b\${string}\`}c\` | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0419');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`a${`b${string}`}c`');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0419 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0419 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0420
  * @tc.name dts2cpp_union_0420
  * @tc.desc dts2cpp union type alias 占位符引用未定义别名联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0420', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0420.ts',
            `type UnionType0420 = \`pre-\${A | B}\` | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0420');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`pre-${A | B}`');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0420 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0420 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0421
  * @tc.name dts2cpp_union_0421
  * @tc.desc dts2cpp union type alias 三占位符类型混用模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0421', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0421.ts',
            `type UnionType0421 = \`x\${string}\` | \`y\${number}\` | \`z\${boolean}\` | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0421');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '`x${string}`');
      assert.strictEqual(typeItem!.types[1], '`y${number}`');
      assert.strictEqual(typeItem!.types[2], '`z${boolean}`');
      assert.strictEqual(typeItem!.types[3], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0421 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0421 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0422
  * @tc.name dts2cpp_union_0422
  * @tc.desc dts2cpp union type alias 单占位符类型互换模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0422', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0422.ts',
            `type UnionType0422 = \`\${string}\` | \`\${number}\`;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0422');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`${string}`');
      assert.strictEqual(typeItem!.types[1], '`${number}`');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0422 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0422 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0423
  * @tc.name dts2cpp_union_0423
  * @tc.desc dts2cpp union type alias 符号包裹模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0423', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0423.ts',
            `type UnionType0423 = \`--\${string}--\` | \`++\${number}++\`;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0423');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`--${string}--`');
      assert.strictEqual(typeItem!.types[1], '`++${number}++`');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0423 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0423 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0424
  * @tc.name dts2cpp_union_0424
  * @tc.desc dts2cpp union type alias 双同型占位符模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0424', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0424.ts',
            `type UnionType0424 = \`\${string}-\${string}\` | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0424');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`${string}-${string}`');
      assert.strictEqual(typeItem!.types[1], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0424 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0424 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0425
  * @tc.name dts2cpp_union_0425
  * @tc.desc dts2cpp union type alias bigint 占位符模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0425', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0425.ts',
            `type UnionType0425 = \`\${bigint}\` | number;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0425');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`${bigint}`');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0425 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0425 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0426
  * @tc.name dts2cpp_union_0426
  * @tc.desc dts2cpp union type alias 三维数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0426', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0426.ts',
            `type UnionType0426 = string[][][] | number[][][];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0426');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'string[][][]');
      assert.strictEqual(typeItem!.types[1], 'number[][][]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0426 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0426 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0427
  * @tc.name dts2cpp_union_0427
  * @tc.desc dts2cpp union type alias 三层嵌套泛型数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0427', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0427.ts',
            `type UnionType0427 = Array<Array<Array<string>>> | Array<Array<Array<number>>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0427');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<Array<Array<string>>>');
      assert.strictEqual(typeItem!.types[1], 'Array<Array<Array<number>>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0427 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0427 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0428
  * @tc.name dts2cpp_union_0428
  * @tc.desc dts2cpp union type alias 三层 ReadonlyArray 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0428', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0428.ts',
            `type UnionType0428 = ReadonlyArray<ReadonlyArray<ReadonlyArray<number>>> | Array<Array<Array<string>>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0428');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ReadonlyArray<ReadonlyArray<ReadonlyArray<number>>>');
      assert.strictEqual(typeItem!.types[1], 'Array<Array<Array<string>>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0428 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0428 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0429
  * @tc.name dts2cpp_union_0429
  * @tc.desc dts2cpp union type alias 泛参内含数组联合的数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0429', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0429.ts',
            `type UnionType0429 = Array<Array<string> | Array<number>> | Array<Set<string>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0429');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<Array<string> | Array<number>>');
      assert.strictEqual(typeItem!.types[1], 'Array<Set<string>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0429 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0429 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0430
  * @tc.name dts2cpp_union_0430
  * @tc.desc dts2cpp union type alias 不同成员数联合元素数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0430', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0430.ts',
            `type UnionType0430 = (string | number | boolean)[] | (string | number)[];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0430');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(string | number | boolean)[]');
      assert.strictEqual(typeItem!.types[1], '(string | number)[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0430 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0430 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0431
  * @tc.name dts2cpp_union_0431
  * @tc.desc dts2cpp union type alias Array<T>[] 与 T[][] 混写数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0431', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0431.ts',
            `type UnionType0431 = Array<string>[] | string[][];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0431');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<string>[]');
      assert.strictEqual(typeItem!.types[1], 'string[][]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0431 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0431 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0432
  * @tc.name dts2cpp_union_0432
  * @tc.desc dts2cpp union type alias Promise 内嵌数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0432', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0432.ts',
            `type UnionType0432 = Promise<string[]> | Promise<number[]>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0432');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Promise<string[]>');
      assert.strictEqual(typeItem!.types[1], 'Promise<number[]>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0432 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0432 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0433
  * @tc.name dts2cpp_union_0433
  * @tc.desc dts2cpp union type alias readonly 二维数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0433', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0433.ts',
            `type UnionType0433 = readonly string[][] | readonly number[][];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0433');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'readonly string[][]');
      assert.strictEqual(typeItem!.types[1], 'readonly number[][]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0433 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0433 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0434
  * @tc.name dts2cpp_union_0434
  * @tc.desc dts2cpp union type alias 三成员无符号 TypedArray 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0434', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0434.ts',
            `type UnionType0434 = Uint8Array | Uint16Array | Uint32Array;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0434');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Uint8Array');
      assert.strictEqual(typeItem!.types[1], 'Uint16Array');
      assert.strictEqual(typeItem!.types[2], 'Uint32Array');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0434 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0434 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0435
  * @tc.name dts2cpp_union_0435
  * @tc.desc dts2cpp union type alias BigInt TypedArray 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0435', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0435.ts',
            `type UnionType0435 = BigInt64Array | BigUint64Array;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0435');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'BigInt64Array');
      assert.strictEqual(typeItem!.types[1], 'BigUint64Array');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0435 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0435 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0436
  * @tc.name dts2cpp_union_0436
  * @tc.desc dts2cpp union type alias 二进制缓冲区类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0436', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0436.ts',
            `type UnionType0436 = ArrayBuffer | SharedArrayBuffer | DataView;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0436');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'ArrayBuffer');
      assert.strictEqual(typeItem!.types[1], 'SharedArrayBuffer');
      assert.strictEqual(typeItem!.types[2], 'DataView');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0436 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0436 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0437
  * @tc.name dts2cpp_union_0437
  * @tc.desc dts2cpp union type alias 四元/三元异序 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0437', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0437.ts',
            `type UnionType0437 = [string, number, boolean, null] | [number, boolean, string];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0437');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[string, number, boolean, null]');
      assert.strictEqual(typeItem!.types[1], '[number, boolean, string]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0437 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0437 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0438
  * @tc.name dts2cpp_union_0438
  * @tc.desc dts2cpp union type alias readonly rest tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0438', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0438.ts',
            `type UnionType0438 = readonly [string, ...number[]] | [string, number];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0438');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'readonly [string, ...number[]]');
      assert.strictEqual(typeItem!.types[1], '[string, number]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0438 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0438 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0439
  * @tc.name dts2cpp_union_0439
  * @tc.desc dts2cpp union type alias 命名 rest tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0439', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0439.ts',
            `type UnionType0439 = [a: string, ...rest: number[]] | [b: boolean];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0439');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[a: string, ...rest: number[]]');
      assert.strictEqual(typeItem!.types[1], '[b: boolean]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0439 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0439 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0440
  * @tc.name dts2cpp_union_0440
  * @tc.desc dts2cpp union type alias rest 用 Array<T> 写法的 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0440', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0440.ts',
            `type UnionType0440 = [...Array<string>, number] | [boolean];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0440');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[...Array<string>, number]');
      assert.strictEqual(typeItem!.types[1], '[boolean]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0440 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0440 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0441
  * @tc.name dts2cpp_union_0441
  * @tc.desc dts2cpp union type alias 尾部 rest tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0441', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0441.ts',
            `type UnionType0441 = [string, number, ...boolean[]] | [string];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0441');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[string, number, ...boolean[]]');
      assert.strictEqual(typeItem!.types[1], '[string]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0441 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0441 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0442
  * @tc.name dts2cpp_union_0442
  * @tc.desc dts2cpp union type alias 函数类型元素 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0442', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0442.ts',
            `type UnionType0442 = [() => void, string] | [number];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0442');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[() => void, string]');
      assert.strictEqual(typeItem!.types[1], '[number]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0442 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0442 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0443
  * @tc.name dts2cpp_union_0443
  * @tc.desc dts2cpp union type alias 容器元素 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0443', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0443.ts',
            `type UnionType0443 = [Promise<string>, Set<number>] | [Map<string, boolean>];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0443');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[Promise<string>, Set<number>]');
      assert.strictEqual(typeItem!.types[1], '[Map<string, boolean>]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0443 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0443 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0444
  * @tc.name dts2cpp_union_0444
  * @tc.desc dts2cpp union type alias 嵌套 tuple 元素 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0444', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0444.ts',
            `type UnionType0444 = [[string, number], boolean] | [string];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0444');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[[string, number], boolean]');
      assert.strictEqual(typeItem!.types[1], '[string]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0444 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0444 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0445
  * @tc.name dts2cpp_union_0445
  * @tc.desc dts2cpp union type alias 三层嵌套 tuple 数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0445', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0445.ts',
            `type UnionType0445 = [[[string]]] | [[[number]]];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0445');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[[[string]]]');
      assert.strictEqual(typeItem!.types[1], '[[[number]]]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0445 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0445 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0446
  * @tc.name dts2cpp_union_0446
  * @tc.desc dts2cpp union type alias tuple 中嵌 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0446', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0446.ts',
            `type UnionType0446 = [string, [number, boolean]] | [boolean];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0446');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[string, [number, boolean]]');
      assert.strictEqual(typeItem!.types[1], '[boolean]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0446 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0446 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0447
  * @tc.name dts2cpp_union_0447
  * @tc.desc dts2cpp union type alias Set 元素为 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0447', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0447.ts',
            `type UnionType0447 = Set<[string, number]> | Set<[number, string]>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0447');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Set<[string, number]>');
      assert.strictEqual(typeItem!.types[1], 'Set<[number, string]>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0447 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0447 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0448
  * @tc.name dts2cpp_union_0448
  * @tc.desc dts2cpp union type alias Map 键为 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0448', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0448.ts',
            `type UnionType0448 = Map<[string, number], boolean> | Map<[number, string], boolean>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0448');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<[string, number], boolean>');
      assert.strictEqual(typeItem!.types[1], 'Map<[number, string], boolean>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0448 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0448 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0449
  * @tc.name dts2cpp_union_0449
  * @tc.desc dts2cpp union type alias 三成员数字单元素 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0449', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0449.ts',
            `type UnionType0449 = [1] | [2] | [3];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0449');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '[1]');
      assert.strictEqual(typeItem!.types[1], '[2]');
      assert.strictEqual(typeItem!.types[2], '[3]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0449 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0449 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0450
  * @tc.name dts2cpp_union_0450
  * @tc.desc dts2cpp union type alias 单元素 tuple 与数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0450', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0450.ts',
            `type UnionType0450 = [string] | string[];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0450');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[string]');
      assert.strictEqual(typeItem!.types[1], 'string[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0450 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0450 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0451
  * @tc.name dts2cpp_union_0451
  * @tc.desc dts2cpp union type alias 空 tuple 与单元素 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0451', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0451.ts',
            `type UnionType0451 = [] | [string];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0451');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[]');
      assert.strictEqual(typeItem!.types[1], '[string]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0451 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0451 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0452
  * @tc.name dts2cpp_union_0452
  * @tc.desc dts2cpp union type alias readonly 空 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0452', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0452.ts',
            `type UnionType0452 = readonly [] | [];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0452');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'readonly []');
      assert.strictEqual(typeItem!.types[1], '[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0452 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0452 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0453
  * @tc.name dts2cpp_union_0453
  * @tc.desc dts2cpp union type alias 三层嵌套 Map 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0453', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0453.ts',
            `type UnionType0453 = Map<string, Map<string, Map<string, number>>> | Map<string, number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0453');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<string, Map<string, Map<string, number>>>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0453 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0453 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0454
  * @tc.name dts2cpp_union_0454
  * @tc.desc dts2cpp union type alias 嵌套 Record 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0454', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0454.ts',
            `type UnionType0454 = Record<"a" | "b", Record<"x" | "y", number>> | Record<string, string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0454');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Record<"a" | "b", Record<"x" | "y", number>>');
      assert.strictEqual(typeItem!.types[1], 'Record<string, string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0454 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0454 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0455
  * @tc.name dts2cpp_union_0455
  * @tc.desc dts2cpp union type alias 三层嵌套 Set 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0455', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0455.ts',
            `type UnionType0455 = Set<Set<Set<string>>> | Set<Set<Set<number>>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0455');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Set<Set<Set<string>>>');
      assert.strictEqual(typeItem!.types[1], 'Set<Set<Set<number>>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0455 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0455 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0456
  * @tc.name dts2cpp_union_0456
  * @tc.desc dts2cpp union type alias Map 泛参互换联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0456', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0456.ts',
            `type UnionType0456 = Map<number, boolean> | Map<boolean, number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0456');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<number, boolean>');
      assert.strictEqual(typeItem!.types[1], 'Map<boolean, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0456 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0456 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0457
  * @tc.name dts2cpp_union_0457
  * @tc.desc dts2cpp union type alias ReadonlyMap 泛参互换联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0457', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0457.ts',
            `type UnionType0457 = ReadonlyMap<number, string> | ReadonlyMap<string, number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0457');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ReadonlyMap<number, string>');
      assert.strictEqual(typeItem!.types[1], 'ReadonlyMap<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0457 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0457 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0458
  * @tc.name dts2cpp_union_0458
  * @tc.desc dts2cpp union type alias WeakMap 值内嵌数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0458', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0458.ts',
            `type UnionType0458 = WeakMap<object, number[]> | WeakMap<object, string[]>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0458');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'WeakMap<object, number[]>');
      assert.strictEqual(typeItem!.types[1], 'WeakMap<object, string[]>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0458 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0458 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0459
  * @tc.name dts2cpp_union_0459
  * @tc.desc dts2cpp union type alias Map 值内嵌 readonly tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0459', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0459.ts',
            `type UnionType0459 = Map<string, readonly [number, string]> | Map<string, [number, string]>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0459');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<string, readonly [number, string]>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, [number, string]>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0459 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0459 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0460
  * @tc.name dts2cpp_union_0460
  * @tc.desc dts2cpp union type alias Record/Map 值内嵌容器联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0460', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0460.ts',
            `type UnionType0460 = Record<string, Set<number>> | Map<string, Array<number>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0460');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Record<string, Set<number>>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, Array<number>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0460 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0460 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0461
  * @tc.name dts2cpp_union_0461
  * @tc.desc dts2cpp union type alias symbol 键 Map 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0461', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0461.ts',
            `type UnionType0461 = Map<symbol, string> | Map<string, symbol>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0461');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<symbol, string>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, symbol>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0461 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0461 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0462
  * @tc.name dts2cpp_union_0462
  * @tc.desc dts2cpp union type alias 函数类型元素 WeakSet 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0462', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0462.ts',
            `type UnionType0462 = WeakSet<() => void> | WeakSet<object>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0462');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'WeakSet<() => void>');
      assert.strictEqual(typeItem!.types[1], 'WeakSet<object>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0462 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0462 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0463
  * @tc.name dts2cpp_union_0463
  * @tc.desc dts2cpp union type alias Array<Promise<Set>> 三层容器联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0463', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0463.ts',
            `type UnionType0463 = Array<Promise<Set<number>>> | Array<Promise<Set<string>>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0463');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<Promise<Set<number>>>');
      assert.strictEqual(typeItem!.types[1], 'Array<Promise<Set<string>>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0463 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0463 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0464
  * @tc.name dts2cpp_union_0464
  * @tc.desc dts2cpp union type alias Map/Record 值嵌套 Promise<Set> 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0464', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0464.ts',
            `type UnionType0464 = Map<string, Promise<Set<number>>> | Record<string, Promise<Set<string>>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0464');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<string, Promise<Set<number>>>');
      assert.strictEqual(typeItem!.types[1], 'Record<string, Promise<Set<string>>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0464 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0464 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0465
  * @tc.name dts2cpp_union_0465
  * @tc.desc dts2cpp union type alias Record 值内嵌函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0465', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0465.ts',
            `type UnionType0465 = Record<string, (a: string) => void> | Record<string, (a: number) => void>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0465');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Record<string, (a: string) => void>');
      assert.strictEqual(typeItem!.types[1], 'Record<string, (a: number) => void>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0465 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0465 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0466
  * @tc.name dts2cpp_union_0466
  * @tc.desc dts2cpp union type alias 函数类型元素数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0466', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0466.ts',
            `type UnionType0466 = (() => void)[] | ((n: number) => void)[];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0466');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(() => void)[]');
      assert.strictEqual(typeItem!.types[1], '((n: number) => void)[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0466 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0466 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0467
  * @tc.name dts2cpp_union_0467
  * @tc.desc dts2cpp union type alias Promise 值内嵌函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0467', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0467.ts',
            `type UnionType0467 = Promise<() => void> | Promise<() => number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0467');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Promise<() => void>');
      assert.strictEqual(typeItem!.types[1], 'Promise<() => number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0467 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0467 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0468
  * @tc.name dts2cpp_union_0468
  * @tc.desc dts2cpp union type alias Set 值内嵌函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0468', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0468.ts',
            `type UnionType0468 = Set<() => void> | Set<() => number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0468');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Set<() => void>');
      assert.strictEqual(typeItem!.types[1], 'Set<() => number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0468 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0468 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0469
  * @tc.name dts2cpp_union_0469
  * @tc.desc dts2cpp union type alias 对象属性内嵌函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0469', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0469.ts',
            `type UnionType0469 = { a: (x: string) => void } | { a: (x: number) => void };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0469');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ a: (x: string) => void }');
      assert.strictEqual(typeItem!.types[1], '{ a: (x: number) => void }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0469 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0469 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0470
  * @tc.name dts2cpp_union_0470
  * @tc.desc dts2cpp union type alias Error 与可空类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0470', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0470.ts',
            `type UnionType0470 = Error | null | undefined;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0470');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Error');
      assert.strictEqual(typeItem!.types[1], 'null');
      assert.strictEqual(typeItem!.types[2], 'undefined');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0470 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0470 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0471
  * @tc.name dts2cpp_union_0471
  * @tc.desc dts2cpp union type alias 四成员内置对象引用联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0471', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0471.ts',
            `type UnionType0471 = Date | RegExp | Error | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0471');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], 'Date');
      assert.strictEqual(typeItem!.types[1], 'RegExp');
      assert.strictEqual(typeItem!.types[2], 'Error');
      assert.strictEqual(typeItem!.types[3], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0471 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0471 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0472
  * @tc.name dts2cpp_union_0472
  * @tc.desc dts2cpp union type alias 四成员内置引用混 Function 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0472', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0472.ts',
            `type UnionType0472 = Function | RegExp | Date | Error;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0472');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], 'Function');
      assert.strictEqual(typeItem!.types[1], 'RegExp');
      assert.strictEqual(typeItem!.types[2], 'Date');
      assert.strictEqual(typeItem!.types[3], 'Error');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0472 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0472 执行异常: ${String(err)}`);
    }
  });

});

