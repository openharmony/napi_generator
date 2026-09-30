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
import {
  getDtsFunction, getDtsClasses, getDtsStructs,
  getDtsEnum, getDtsUnions, genDtsFile
} from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import { GenInfo, ParseObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse/gen：同一输入执行 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_H2DTSCPP_Gen_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part18.');

  /**
  * @tc.number : h2dtscpp_gen_0427
  * @tc.name : h2dtscpp_gen_0427
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int32_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0427', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C427 { int32_t value; double ratio(); };`),
        unions: parseUnion(`class R4H2C427 { int32_t value; double ratio(); };`),
        structs: parseStruct(`class R4H2C427 { int32_t value; double ratio(); };`),
        classes: parseClass(`class R4H2C427 { int32_t value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C427 { int32_t value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0427 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0427 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0428
  * @tc.name : h2dtscpp_gen_0428
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int32_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0428', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C428 { int32_t value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C428 { int32_t value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C428 { int32_t value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C428 { int32_t value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C428 { int32_t value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0428 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0428 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0429
  * @tc.name : h2dtscpp_gen_0429
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int32_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0429', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C429 { int32_t value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C429 { int32_t value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C429 { int32_t value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C429 { int32_t value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C429 { int32_t value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0429 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0429 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0430
  * @tc.name : h2dtscpp_gen_0430
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint32_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0430', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C430 { uint32_t value; void reset(); };`),
        unions: parseUnion(`class R4H2C430 { uint32_t value; void reset(); };`),
        structs: parseStruct(`class R4H2C430 { uint32_t value; void reset(); };`),
        classes: parseClass(`class R4H2C430 { uint32_t value; void reset(); };`),
        funcs: parseFunction(`class R4H2C430 { uint32_t value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0430 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0430 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0431
  * @tc.name : h2dtscpp_gen_0431
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint32_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0431', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C431 { uint32_t value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C431 { uint32_t value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C431 { uint32_t value; int compute(int x); };`),
        classes: parseClass(`class R4H2C431 { uint32_t value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C431 { uint32_t value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0431 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0431 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0432
  * @tc.name : h2dtscpp_gen_0432
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint32_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0432', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C432 { uint32_t value; void set(int v); };`),
        unions: parseUnion(`class R4H2C432 { uint32_t value; void set(int v); };`),
        structs: parseStruct(`class R4H2C432 { uint32_t value; void set(int v); };`),
        classes: parseClass(`class R4H2C432 { uint32_t value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C432 { uint32_t value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0432 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0432 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0433
  * @tc.name : h2dtscpp_gen_0433
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint32_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0433', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C433 { uint32_t value; double ratio(); };`),
        unions: parseUnion(`class R4H2C433 { uint32_t value; double ratio(); };`),
        structs: parseStruct(`class R4H2C433 { uint32_t value; double ratio(); };`),
        classes: parseClass(`class R4H2C433 { uint32_t value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C433 { uint32_t value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0433 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0433 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0434
  * @tc.name : h2dtscpp_gen_0434
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint32_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0434', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C434 { uint32_t value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C434 { uint32_t value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C434 { uint32_t value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C434 { uint32_t value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C434 { uint32_t value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0434 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0434 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0435
  * @tc.name : h2dtscpp_gen_0435
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint32_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0435', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C435 { uint32_t value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C435 { uint32_t value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C435 { uint32_t value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C435 { uint32_t value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C435 { uint32_t value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0435 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0435 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0436
  * @tc.name : h2dtscpp_gen_0436
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int64_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0436', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C436 { int64_t value; void reset(); };`),
        unions: parseUnion(`class R4H2C436 { int64_t value; void reset(); };`),
        structs: parseStruct(`class R4H2C436 { int64_t value; void reset(); };`),
        classes: parseClass(`class R4H2C436 { int64_t value; void reset(); };`),
        funcs: parseFunction(`class R4H2C436 { int64_t value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0436 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0436 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0437
  * @tc.name : h2dtscpp_gen_0437
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int64_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0437', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C437 { int64_t value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C437 { int64_t value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C437 { int64_t value; int compute(int x); };`),
        classes: parseClass(`class R4H2C437 { int64_t value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C437 { int64_t value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0437 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0437 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0438
  * @tc.name : h2dtscpp_gen_0438
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int64_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0438', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C438 { int64_t value; void set(int v); };`),
        unions: parseUnion(`class R4H2C438 { int64_t value; void set(int v); };`),
        structs: parseStruct(`class R4H2C438 { int64_t value; void set(int v); };`),
        classes: parseClass(`class R4H2C438 { int64_t value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C438 { int64_t value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0438 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0438 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0439
  * @tc.name : h2dtscpp_gen_0439
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int64_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0439', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C439 { int64_t value; double ratio(); };`),
        unions: parseUnion(`class R4H2C439 { int64_t value; double ratio(); };`),
        structs: parseStruct(`class R4H2C439 { int64_t value; double ratio(); };`),
        classes: parseClass(`class R4H2C439 { int64_t value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C439 { int64_t value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0439 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0439 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0440
  * @tc.name : h2dtscpp_gen_0440
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int64_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0440', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C440 { int64_t value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C440 { int64_t value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C440 { int64_t value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C440 { int64_t value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C440 { int64_t value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0440 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0440 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0441
  * @tc.name : h2dtscpp_gen_0441
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `int64_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0441', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C441 { int64_t value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C441 { int64_t value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C441 { int64_t value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C441 { int64_t value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C441 { int64_t value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0441 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0441 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0442
  * @tc.name : h2dtscpp_gen_0442
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint64_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0442', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C442 { uint64_t value; void reset(); };`),
        unions: parseUnion(`class R4H2C442 { uint64_t value; void reset(); };`),
        structs: parseStruct(`class R4H2C442 { uint64_t value; void reset(); };`),
        classes: parseClass(`class R4H2C442 { uint64_t value; void reset(); };`),
        funcs: parseFunction(`class R4H2C442 { uint64_t value; void reset(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0442 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0442 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0443
  * @tc.name : h2dtscpp_gen_0443
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint64_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0443', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C443 { uint64_t value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C443 { uint64_t value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C443 { uint64_t value; int compute(int x); };`),
        classes: parseClass(`class R4H2C443 { uint64_t value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C443 { uint64_t value; int compute(int x); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0443 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0443 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0444
  * @tc.name : h2dtscpp_gen_0444
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint64_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0444', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C444 { uint64_t value; void set(int v); };`),
        unions: parseUnion(`class R4H2C444 { uint64_t value; void set(int v); };`),
        structs: parseStruct(`class R4H2C444 { uint64_t value; void set(int v); };`),
        classes: parseClass(`class R4H2C444 { uint64_t value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C444 { uint64_t value; void set(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0444 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0444 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0445
  * @tc.name : h2dtscpp_gen_0445
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint64_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0445', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C445 { uint64_t value; double ratio(); };`),
        unions: parseUnion(`class R4H2C445 { uint64_t value; double ratio(); };`),
        structs: parseStruct(`class R4H2C445 { uint64_t value; double ratio(); };`),
        classes: parseClass(`class R4H2C445 { uint64_t value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C445 { uint64_t value; double ratio(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0445 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0445 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0446
  * @tc.name : h2dtscpp_gen_0446
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint64_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0446', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C446 { uint64_t value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C446 { uint64_t value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C446 { uint64_t value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C446 { uint64_t value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C446 { uint64_t value; int getId(); void setId(int v); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0446 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0446 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0447
  * @tc.name : h2dtscpp_gen_0447
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `uint64_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0447', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C447 { uint64_t value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C447 { uint64_t value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C447 { uint64_t value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C447 { uint64_t value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C447 { uint64_t value; bool active(); void activate(); };`),
        types: [],
      };
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.classes.length, 1);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes[0].variableList.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0447 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0447 执行异常: ${String(err)}`);
    }
  });
});
