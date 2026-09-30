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
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part16.');

  /**
  * @tc.number : h2dtscpp_gen_0357
  * @tc.name : h2dtscpp_gen_0357
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned int` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0357', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C357 { unsigned int value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C357 { unsigned int value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C357 { unsigned int value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C357 { unsigned int value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C357 { unsigned int value; bool active(); void activate(); };`),
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
        `h2dtscpp_gen_0357 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0357 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0358
  * @tc.name : h2dtscpp_gen_0358
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `size_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0358', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C358 { size_t value; void reset(); };`),
        unions: parseUnion(`class R4H2C358 { size_t value; void reset(); };`),
        structs: parseStruct(`class R4H2C358 { size_t value; void reset(); };`),
        classes: parseClass(`class R4H2C358 { size_t value; void reset(); };`),
        funcs: parseFunction(`class R4H2C358 { size_t value; void reset(); };`),
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
        `h2dtscpp_gen_0358 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0358 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0359
  * @tc.name : h2dtscpp_gen_0359
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `size_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0359', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C359 { size_t value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C359 { size_t value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C359 { size_t value; int compute(int x); };`),
        classes: parseClass(`class R4H2C359 { size_t value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C359 { size_t value; int compute(int x); };`),
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
        `h2dtscpp_gen_0359 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0359 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0360
  * @tc.name : h2dtscpp_gen_0360
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `size_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0360', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C360 { size_t value; void set(int v); };`),
        unions: parseUnion(`class R4H2C360 { size_t value; void set(int v); };`),
        structs: parseStruct(`class R4H2C360 { size_t value; void set(int v); };`),
        classes: parseClass(`class R4H2C360 { size_t value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C360 { size_t value; void set(int v); };`),
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
        `h2dtscpp_gen_0360 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0360 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0361
  * @tc.name : h2dtscpp_gen_0361
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `size_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0361', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C361 { size_t value; double ratio(); };`),
        unions: parseUnion(`class R4H2C361 { size_t value; double ratio(); };`),
        structs: parseStruct(`class R4H2C361 { size_t value; double ratio(); };`),
        classes: parseClass(`class R4H2C361 { size_t value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C361 { size_t value; double ratio(); };`),
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
        `h2dtscpp_gen_0361 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0361 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0362
  * @tc.name : h2dtscpp_gen_0362
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `size_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0362', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C362 { size_t value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C362 { size_t value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C362 { size_t value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C362 { size_t value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C362 { size_t value; int getId(); void setId(int v); };`),
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
        `h2dtscpp_gen_0362 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0362 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0363
  * @tc.name : h2dtscpp_gen_0363
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `size_t` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0363', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C363 { size_t value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C363 { size_t value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C363 { size_t value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C363 { size_t value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C363 { size_t value; bool active(); void activate(); };`),
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
        `h2dtscpp_gen_0363 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0363 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0364
  * @tc.name : h2dtscpp_gen_0364
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `std::string` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0364', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C364 { std::string value; void reset(); };`),
        unions: parseUnion(`class R4H2C364 { std::string value; void reset(); };`),
        structs: parseStruct(`class R4H2C364 { std::string value; void reset(); };`),
        classes: parseClass(`class R4H2C364 { std::string value; void reset(); };`),
        funcs: parseFunction(`class R4H2C364 { std::string value; void reset(); };`),
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
        `h2dtscpp_gen_0364 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0364 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0365
  * @tc.name : h2dtscpp_gen_0365
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `std::string` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0365', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C365 { std::string value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C365 { std::string value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C365 { std::string value; int compute(int x); };`),
        classes: parseClass(`class R4H2C365 { std::string value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C365 { std::string value; int compute(int x); };`),
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
        `h2dtscpp_gen_0365 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0365 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0366
  * @tc.name : h2dtscpp_gen_0366
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `std::string` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0366', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C366 { std::string value; void set(int v); };`),
        unions: parseUnion(`class R4H2C366 { std::string value; void set(int v); };`),
        structs: parseStruct(`class R4H2C366 { std::string value; void set(int v); };`),
        classes: parseClass(`class R4H2C366 { std::string value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C366 { std::string value; void set(int v); };`),
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
        `h2dtscpp_gen_0366 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0366 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0367
  * @tc.name : h2dtscpp_gen_0367
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `std::string` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0367', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C367 { std::string value; double ratio(); };`),
        unions: parseUnion(`class R4H2C367 { std::string value; double ratio(); };`),
        structs: parseStruct(`class R4H2C367 { std::string value; double ratio(); };`),
        classes: parseClass(`class R4H2C367 { std::string value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C367 { std::string value; double ratio(); };`),
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
        `h2dtscpp_gen_0367 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0367 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0368
  * @tc.name : h2dtscpp_gen_0368
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `std::string` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0368', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C368 { std::string value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C368 { std::string value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C368 { std::string value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C368 { std::string value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C368 { std::string value; int getId(); void setId(int v); };`),
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
        `h2dtscpp_gen_0368 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0368 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0369
  * @tc.name : h2dtscpp_gen_0369
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `std::string` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0369', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C369 { std::string value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C369 { std::string value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C369 { std::string value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C369 { std::string value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C369 { std::string value; bool active(); void activate(); };`),
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
        `h2dtscpp_gen_0369 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0369 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0370
  * @tc.name : h2dtscpp_gen_0370
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `char` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0370', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C370 { char value; void reset(); };`),
        unions: parseUnion(`class R4H2C370 { char value; void reset(); };`),
        structs: parseStruct(`class R4H2C370 { char value; void reset(); };`),
        classes: parseClass(`class R4H2C370 { char value; void reset(); };`),
        funcs: parseFunction(`class R4H2C370 { char value; void reset(); };`),
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
        `h2dtscpp_gen_0370 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0370 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0371
  * @tc.name : h2dtscpp_gen_0371
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `char` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0371', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C371 { char value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C371 { char value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C371 { char value; int compute(int x); };`),
        classes: parseClass(`class R4H2C371 { char value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C371 { char value; int compute(int x); };`),
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
        `h2dtscpp_gen_0371 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0371 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0372
  * @tc.name : h2dtscpp_gen_0372
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `char` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0372', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C372 { char value; void set(int v); };`),
        unions: parseUnion(`class R4H2C372 { char value; void set(int v); };`),
        structs: parseStruct(`class R4H2C372 { char value; void set(int v); };`),
        classes: parseClass(`class R4H2C372 { char value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C372 { char value; void set(int v); };`),
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
        `h2dtscpp_gen_0372 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0372 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0373
  * @tc.name : h2dtscpp_gen_0373
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `char` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0373', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C373 { char value; double ratio(); };`),
        unions: parseUnion(`class R4H2C373 { char value; double ratio(); };`),
        structs: parseStruct(`class R4H2C373 { char value; double ratio(); };`),
        classes: parseClass(`class R4H2C373 { char value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C373 { char value; double ratio(); };`),
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
        `h2dtscpp_gen_0373 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0373 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0374
  * @tc.name : h2dtscpp_gen_0374
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `char` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0374', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C374 { char value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C374 { char value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C374 { char value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C374 { char value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C374 { char value; int getId(); void setId(int v); };`),
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
        `h2dtscpp_gen_0374 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0374 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0375
  * @tc.name : h2dtscpp_gen_0375
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `char` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0375', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C375 { char value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C375 { char value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C375 { char value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C375 { char value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C375 { char value; bool active(); void activate(); };`),
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
        `h2dtscpp_gen_0375 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0375 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0376
  * @tc.name : h2dtscpp_gen_0376
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `short` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0376', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C376 { short value; void reset(); };`),
        unions: parseUnion(`class R4H2C376 { short value; void reset(); };`),
        structs: parseStruct(`class R4H2C376 { short value; void reset(); };`),
        classes: parseClass(`class R4H2C376 { short value; void reset(); };`),
        funcs: parseFunction(`class R4H2C376 { short value; void reset(); };`),
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
        `h2dtscpp_gen_0376 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0376 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0377
  * @tc.name : h2dtscpp_gen_0377
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `short` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0377', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C377 { short value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C377 { short value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C377 { short value; int compute(int x); };`),
        classes: parseClass(`class R4H2C377 { short value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C377 { short value; int compute(int x); };`),
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
        `h2dtscpp_gen_0377 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0377 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0378
  * @tc.name : h2dtscpp_gen_0378
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `short` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0378', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C378 { short value; void set(int v); };`),
        unions: parseUnion(`class R4H2C378 { short value; void set(int v); };`),
        structs: parseStruct(`class R4H2C378 { short value; void set(int v); };`),
        classes: parseClass(`class R4H2C378 { short value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C378 { short value; void set(int v); };`),
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
        `h2dtscpp_gen_0378 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0378 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0379
  * @tc.name : h2dtscpp_gen_0379
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `short` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0379', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C379 { short value; double ratio(); };`),
        unions: parseUnion(`class R4H2C379 { short value; double ratio(); };`),
        structs: parseStruct(`class R4H2C379 { short value; double ratio(); };`),
        classes: parseClass(`class R4H2C379 { short value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C379 { short value; double ratio(); };`),
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
        `h2dtscpp_gen_0379 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0379 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0380
  * @tc.name : h2dtscpp_gen_0380
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `short` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0380', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C380 { short value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C380 { short value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C380 { short value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C380 { short value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C380 { short value; int getId(); void setId(int v); };`),
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
        `h2dtscpp_gen_0380 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0380 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0381
  * @tc.name : h2dtscpp_gen_0381
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `short` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0381', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C381 { short value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C381 { short value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C381 { short value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C381 { short value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C381 { short value; bool active(); void activate(); };`),
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
        `h2dtscpp_gen_0381 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0381 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0382
  * @tc.name : h2dtscpp_gen_0382
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned short` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0382', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C382 { unsigned short value; void reset(); };`),
        unions: parseUnion(`class R4H2C382 { unsigned short value; void reset(); };`),
        structs: parseStruct(`class R4H2C382 { unsigned short value; void reset(); };`),
        classes: parseClass(`class R4H2C382 { unsigned short value; void reset(); };`),
        funcs: parseFunction(`class R4H2C382 { unsigned short value; void reset(); };`),
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
        `h2dtscpp_gen_0382 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0382 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0383
  * @tc.name : h2dtscpp_gen_0383
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned short` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0383', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C383 { unsigned short value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C383 { unsigned short value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C383 { unsigned short value; int compute(int x); };`),
        classes: parseClass(`class R4H2C383 { unsigned short value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C383 { unsigned short value; int compute(int x); };`),
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
        `h2dtscpp_gen_0383 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0383 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0384
  * @tc.name : h2dtscpp_gen_0384
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned short` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0384', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C384 { unsigned short value; void set(int v); };`),
        unions: parseUnion(`class R4H2C384 { unsigned short value; void set(int v); };`),
        structs: parseStruct(`class R4H2C384 { unsigned short value; void set(int v); };`),
        classes: parseClass(`class R4H2C384 { unsigned short value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C384 { unsigned short value; void set(int v); };`),
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
        `h2dtscpp_gen_0384 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0384 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0385
  * @tc.name : h2dtscpp_gen_0385
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned short` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0385', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C385 { unsigned short value; double ratio(); };`),
        unions: parseUnion(`class R4H2C385 { unsigned short value; double ratio(); };`),
        structs: parseStruct(`class R4H2C385 { unsigned short value; double ratio(); };`),
        classes: parseClass(`class R4H2C385 { unsigned short value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C385 { unsigned short value; double ratio(); };`),
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
        `h2dtscpp_gen_0385 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0385 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0386
  * @tc.name : h2dtscpp_gen_0386
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned short` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0386', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C386 { unsigned short value; int getId(); void setId(int v); };`),
        unions: parseUnion(`class R4H2C386 { unsigned short value; int getId(); void setId(int v); };`),
        structs: parseStruct(`class R4H2C386 { unsigned short value; int getId(); void setId(int v); };`),
        classes: parseClass(`class R4H2C386 { unsigned short value; int getId(); void setId(int v); };`),
        funcs: parseFunction(`class R4H2C386 { unsigned short value; int getId(); void setId(int v); };`),
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
        `h2dtscpp_gen_0386 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0386 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0387
  * @tc.name : h2dtscpp_gen_0387
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `unsigned short` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0387', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C387 { unsigned short value; bool active(); void activate(); };`),
        unions: parseUnion(`class R4H2C387 { unsigned short value; bool active(); void activate(); };`),
        structs: parseStruct(`class R4H2C387 { unsigned short value; bool active(); void activate(); };`),
        classes: parseClass(`class R4H2C387 { unsigned short value; bool active(); void activate(); };`),
        funcs: parseFunction(`class R4H2C387 { unsigned short value; bool active(); void activate(); };`),
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
        `h2dtscpp_gen_0387 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0387 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0388
  * @tc.name : h2dtscpp_gen_0388
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0388', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C388 { long value; void reset(); };`),
        unions: parseUnion(`class R4H2C388 { long value; void reset(); };`),
        structs: parseStruct(`class R4H2C388 { long value; void reset(); };`),
        classes: parseClass(`class R4H2C388 { long value; void reset(); };`),
        funcs: parseFunction(`class R4H2C388 { long value; void reset(); };`),
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
        `h2dtscpp_gen_0388 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0388 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0389
  * @tc.name : h2dtscpp_gen_0389
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0389', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C389 { long value; int compute(int x); };`),
        unions: parseUnion(`class R4H2C389 { long value; int compute(int x); };`),
        structs: parseStruct(`class R4H2C389 { long value; int compute(int x); };`),
        classes: parseClass(`class R4H2C389 { long value; int compute(int x); };`),
        funcs: parseFunction(`class R4H2C389 { long value; int compute(int x); };`),
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
        `h2dtscpp_gen_0389 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0389 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0390
  * @tc.name : h2dtscpp_gen_0390
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0390', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C390 { long value; void set(int v); };`),
        unions: parseUnion(`class R4H2C390 { long value; void set(int v); };`),
        structs: parseStruct(`class R4H2C390 { long value; void set(int v); };`),
        classes: parseClass(`class R4H2C390 { long value; void set(int v); };`),
        funcs: parseFunction(`class R4H2C390 { long value; void set(int v); };`),
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
        `h2dtscpp_gen_0390 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0390 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0391
  * @tc.name : h2dtscpp_gen_0391
  * @tc.desc : h2dtscpp transParseObj：扩充-R4-class 成员 `long` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0391', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4H2C391 { long value; double ratio(); };`),
        unions: parseUnion(`class R4H2C391 { long value; double ratio(); };`),
        structs: parseStruct(`class R4H2C391 { long value; double ratio(); };`),
        classes: parseClass(`class R4H2C391 { long value; double ratio(); };`),
        funcs: parseFunction(`class R4H2C391 { long value; double ratio(); };`),
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
        `h2dtscpp_gen_0391 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0391 执行异常: ${String(err)}`);
    }
  });
});
