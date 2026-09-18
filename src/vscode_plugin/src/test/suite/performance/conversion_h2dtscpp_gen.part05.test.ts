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
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part05.');

  /**
  * @tc.number : h2dtscpp_gen_0053
  * @tc.name : h2dtscpp_gen_0053
  * @tc.desc : h2dtscpp transParameters：TS 类型 `number` → C++ `double` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0053', () => {
    try {
      const params = [{ type: 'number', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'double');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0054
  * @tc.name : h2dtscpp_gen_0054
  * @tc.desc : h2dtscpp transParameters：TS 类型 `string` → C++ `std::string` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0054', () => {
    try {
      const params = [{ type: 'string', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::string');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0055
  * @tc.name : h2dtscpp_gen_0055
  * @tc.desc : h2dtscpp transParameters：TS 类型 `boolean` → C++ `bool` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0055', () => {
    try {
      const params = [{ type: 'boolean', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'bool');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0056
  * @tc.name : h2dtscpp_gen_0056
  * @tc.desc : h2dtscpp transParameters：TS 类型 `void` → C++ `void` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0056', () => {
    try {
      const params = [{ type: 'void', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'void');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0057
  * @tc.name : h2dtscpp_gen_0057
  * @tc.desc : h2dtscpp transParameters：TS 类型 `number[]` → C++ `std::vector<double>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0057', () => {
    try {
      const params = [{ type: 'number[]', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0058
  * @tc.name : h2dtscpp_gen_0058
  * @tc.desc : h2dtscpp transParameters：TS 类型 `string[]` → C++ `std::vector<std::string>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0058', () => {
    try {
      const params = [{ type: 'string[]', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0058 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0059
  * @tc.name : h2dtscpp_gen_0059
  * @tc.desc : h2dtscpp transParameters：TS 类型 `boolean[]` → C++ `std::vector<bool>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0059', () => {
    try {
      const params = [{ type: 'boolean[]', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::vector<bool>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0059 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0060
  * @tc.name : h2dtscpp_gen_0060
  * @tc.desc : h2dtscpp transParameters：TS 类型 `Map<string, number>` → C++ `std::map<std::string, double>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0060', () => {
    try {
      const params = [{ type: 'Map<string, number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::map<std::string, double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0060 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0061
  * @tc.name : h2dtscpp_gen_0061
  * @tc.desc : h2dtscpp transParameters：TS 类型 `Map<number, string>` → C++ `std::map<double, std::string>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0061', () => {
    try {
      const params = [{ type: 'Map<number, string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::map<double, std::string>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0061 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0062
  * @tc.name : h2dtscpp_gen_0062
  * @tc.desc : h2dtscpp transParameters：TS 类型 `Set<number>` → C++ `std::set<double>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0062', () => {
    try {
      const params = [{ type: 'Set<number>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<double>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0062 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0063
  * @tc.name : h2dtscpp_gen_0063
  * @tc.desc : h2dtscpp transParameters：TS 类型 `Set<string>` → C++ `std::set<std::string>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0063', () => {
    try {
      const params = [{ type: 'Set<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'std::set<std::string>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0063 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0064
  * @tc.name : h2dtscpp_gen_0064
  * @tc.desc : h2dtscpp transParameters：TS 类型 `IterableIterator<string>` → C++ `IterableIterator<string>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0064', () => {
    try {
      const params = [{ type: 'IterableIterator<string>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<string>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0064 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0065
  * @tc.name : h2dtscpp_gen_0065
  * @tc.desc : h2dtscpp transParameters：TS 类型 `IterableIterator<number[]>` → C++ `IterableIterator<number[]>` 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0065', () => {
    try {
      const params = [{ type: 'IterableIterator<number[]>', name: 'v', arraySize: '', arraySizeList: [] as string[] }];
      let transResult: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParameters(params);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.length, 1);
      assert.strictEqual(transResult[0].type, 'IterableIterator<number[]>');
      assert.strictEqual(transResult[0].name, 'v');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0065 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0066
  * @tc.name : h2dtscpp_gen_0066
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 int, size_t, double, float, short 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0066', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf66_0(int v);
void tf66_1(size_t v);
void tf66_2(double v);
void tf66_3(float v);
void tf66_4(short v);`),
        unions: parseUnion(`void tf66_0(int v);
void tf66_1(size_t v);
void tf66_2(double v);
void tf66_3(float v);
void tf66_4(short v);`),
        structs: parseStruct(`void tf66_0(int v);
void tf66_1(size_t v);
void tf66_2(double v);
void tf66_3(float v);
void tf66_4(short v);`),
        classes: parseClass(`void tf66_0(int v);
void tf66_1(size_t v);
void tf66_2(double v);
void tf66_3(float v);
void tf66_4(short v);`),
        funcs: parseFunction(`void tf66_0(int v);
void tf66_1(size_t v);
void tf66_2(double v);
void tf66_3(float v);
void tf66_4(short v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0066 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0067
  * @tc.name : h2dtscpp_gen_0067
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 long, uint8_t, uint16_t, uint32_t, uint64_t 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0067', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf67_0(long v);
void tf67_1(uint8_t v);
void tf67_2(uint16_t v);
void tf67_3(uint32_t v);
void tf67_4(uint64_t v);`),
        unions: parseUnion(`void tf67_0(long v);
void tf67_1(uint8_t v);
void tf67_2(uint16_t v);
void tf67_3(uint32_t v);
void tf67_4(uint64_t v);`),
        structs: parseStruct(`void tf67_0(long v);
void tf67_1(uint8_t v);
void tf67_2(uint16_t v);
void tf67_3(uint32_t v);
void tf67_4(uint64_t v);`),
        classes: parseClass(`void tf67_0(long v);
void tf67_1(uint8_t v);
void tf67_2(uint16_t v);
void tf67_3(uint32_t v);
void tf67_4(uint64_t v);`),
        funcs: parseFunction(`void tf67_0(long v);
void tf67_1(uint8_t v);
void tf67_2(uint16_t v);
void tf67_3(uint32_t v);
void tf67_4(uint64_t v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0067 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0068
  * @tc.name : h2dtscpp_gen_0068
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 int8_t, int16_t, int32_t, int64_t, unsigned 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0068', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf68_0(int8_t v);
void tf68_1(int16_t v);
void tf68_2(int32_t v);
void tf68_3(int64_t v);
void tf68_4(unsigned v);`),
        unions: parseUnion(`void tf68_0(int8_t v);
void tf68_1(int16_t v);
void tf68_2(int32_t v);
void tf68_3(int64_t v);
void tf68_4(unsigned v);`),
        structs: parseStruct(`void tf68_0(int8_t v);
void tf68_1(int16_t v);
void tf68_2(int32_t v);
void tf68_3(int64_t v);
void tf68_4(unsigned v);`),
        classes: parseClass(`void tf68_0(int8_t v);
void tf68_1(int16_t v);
void tf68_2(int32_t v);
void tf68_3(int64_t v);
void tf68_4(unsigned v);`),
        funcs: parseFunction(`void tf68_0(int8_t v);
void tf68_1(int16_t v);
void tf68_2(int32_t v);
void tf68_3(int64_t v);
void tf68_4(unsigned v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0068 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0069
  * @tc.name : h2dtscpp_gen_0069
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 bool, char, wchar_t, char8_t, char16_t 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0069', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf69_0(bool v);
void tf69_1(char v);
void tf69_2(wchar_t v);
void tf69_3(char8_t v);
void tf69_4(char16_t v);`),
        unions: parseUnion(`void tf69_0(bool v);
void tf69_1(char v);
void tf69_2(wchar_t v);
void tf69_3(char8_t v);
void tf69_4(char16_t v);`),
        structs: parseStruct(`void tf69_0(bool v);
void tf69_1(char v);
void tf69_2(wchar_t v);
void tf69_3(char8_t v);
void tf69_4(char16_t v);`),
        classes: parseClass(`void tf69_0(bool v);
void tf69_1(char v);
void tf69_2(wchar_t v);
void tf69_3(char8_t v);
void tf69_4(char16_t v);`),
        funcs: parseFunction(`void tf69_0(bool v);
void tf69_1(char v);
void tf69_2(wchar_t v);
void tf69_3(char8_t v);
void tf69_4(char16_t v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0069 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0070
  * @tc.name : h2dtscpp_gen_0070
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 char32_t, std::string::iterator, std::vector<int>, std::vect... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0070', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf70_0(char32_t v);
void tf70_1(std::string::iterator v);
void tf70_2(std::vector<int> v);
void tf70_3(std::vector<size_t> v);
void tf70_4(std::vector<double> v);`),
        unions: parseUnion(`void tf70_0(char32_t v);
void tf70_1(std::string::iterator v);
void tf70_2(std::vector<int> v);
void tf70_3(std::vector<size_t> v);
void tf70_4(std::vector<double> v);`),
        structs: parseStruct(`void tf70_0(char32_t v);
void tf70_1(std::string::iterator v);
void tf70_2(std::vector<int> v);
void tf70_3(std::vector<size_t> v);
void tf70_4(std::vector<double> v);`),
        classes: parseClass(`void tf70_0(char32_t v);
void tf70_1(std::string::iterator v);
void tf70_2(std::vector<int> v);
void tf70_3(std::vector<size_t> v);
void tf70_4(std::vector<double> v);`),
        funcs: parseFunction(`void tf70_0(char32_t v);
void tf70_1(std::string::iterator v);
void tf70_2(std::vector<int> v);
void tf70_3(std::vector<size_t> v);
void tf70_4(std::vector<double> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0070 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0070 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0071
  * @tc.name : h2dtscpp_gen_0071
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::vector<float>, std::vector<long>, std::vector<short>, s... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0071', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf71_0(std::vector<float> v);
void tf71_1(std::vector<long> v);
void tf71_2(std::vector<short> v);
void tf71_3(std::vector<uint8_t> v);
void tf71_4(std::vector<uint16_t> v);`),
        unions: parseUnion(`void tf71_0(std::vector<float> v);
void tf71_1(std::vector<long> v);
void tf71_2(std::vector<short> v);
void tf71_3(std::vector<uint8_t> v);
void tf71_4(std::vector<uint16_t> v);`),
        structs: parseStruct(`void tf71_0(std::vector<float> v);
void tf71_1(std::vector<long> v);
void tf71_2(std::vector<short> v);
void tf71_3(std::vector<uint8_t> v);
void tf71_4(std::vector<uint16_t> v);`),
        classes: parseClass(`void tf71_0(std::vector<float> v);
void tf71_1(std::vector<long> v);
void tf71_2(std::vector<short> v);
void tf71_3(std::vector<uint8_t> v);
void tf71_4(std::vector<uint16_t> v);`),
        funcs: parseFunction(`void tf71_0(std::vector<float> v);
void tf71_1(std::vector<long> v);
void tf71_2(std::vector<short> v);
void tf71_3(std::vector<uint8_t> v);
void tf71_4(std::vector<uint16_t> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0071 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0072
  * @tc.name : h2dtscpp_gen_0072
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::vector<uint32_t>, std::vector<uint64_t>, std::vector<in... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0072', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf72_0(std::vector<uint32_t> v);
void tf72_1(std::vector<uint64_t> v);
void tf72_2(std::vector<int8_t> v);
void tf72_3(std::vector<int16_t> v);
void tf72_4(std::vector<int32_t> v);`),
        unions: parseUnion(`void tf72_0(std::vector<uint32_t> v);
void tf72_1(std::vector<uint64_t> v);
void tf72_2(std::vector<int8_t> v);
void tf72_3(std::vector<int16_t> v);
void tf72_4(std::vector<int32_t> v);`),
        structs: parseStruct(`void tf72_0(std::vector<uint32_t> v);
void tf72_1(std::vector<uint64_t> v);
void tf72_2(std::vector<int8_t> v);
void tf72_3(std::vector<int16_t> v);
void tf72_4(std::vector<int32_t> v);`),
        classes: parseClass(`void tf72_0(std::vector<uint32_t> v);
void tf72_1(std::vector<uint64_t> v);
void tf72_2(std::vector<int8_t> v);
void tf72_3(std::vector<int16_t> v);
void tf72_4(std::vector<int32_t> v);`),
        funcs: parseFunction(`void tf72_0(std::vector<uint32_t> v);
void tf72_1(std::vector<uint64_t> v);
void tf72_2(std::vector<int8_t> v);
void tf72_3(std::vector<int16_t> v);
void tf72_4(std::vector<int32_t> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0072 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0073
  * @tc.name : h2dtscpp_gen_0073
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::vector<int64_t>, std::vector<unsigned>, std::vector<boo... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0073', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf73_0(std::vector<int64_t> v);
void tf73_1(std::vector<unsigned> v);
void tf73_2(std::vector<bool> v);
void tf73_3(std::vector<char> v);
void tf73_4(std::vector<wchar_t> v);`),
        unions: parseUnion(`void tf73_0(std::vector<int64_t> v);
void tf73_1(std::vector<unsigned> v);
void tf73_2(std::vector<bool> v);
void tf73_3(std::vector<char> v);
void tf73_4(std::vector<wchar_t> v);`),
        structs: parseStruct(`void tf73_0(std::vector<int64_t> v);
void tf73_1(std::vector<unsigned> v);
void tf73_2(std::vector<bool> v);
void tf73_3(std::vector<char> v);
void tf73_4(std::vector<wchar_t> v);`),
        classes: parseClass(`void tf73_0(std::vector<int64_t> v);
void tf73_1(std::vector<unsigned> v);
void tf73_2(std::vector<bool> v);
void tf73_3(std::vector<char> v);
void tf73_4(std::vector<wchar_t> v);`),
        funcs: parseFunction(`void tf73_0(std::vector<int64_t> v);
void tf73_1(std::vector<unsigned> v);
void tf73_2(std::vector<bool> v);
void tf73_3(std::vector<char> v);
void tf73_4(std::vector<wchar_t> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0073 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0074
  * @tc.name : h2dtscpp_gen_0074
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::vector<char8_t>, std::vector<char16_t>, std::vector<cha... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0074', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf74_0(std::vector<char8_t> v);
void tf74_1(std::vector<char16_t> v);
void tf74_2(std::vector<char32_t> v);
void tf74_3(std::vector<int>::iterator v);
void tf74_4(std::vector<size_t>::iterator v);`),
        unions: parseUnion(`void tf74_0(std::vector<char8_t> v);
void tf74_1(std::vector<char16_t> v);
void tf74_2(std::vector<char32_t> v);
void tf74_3(std::vector<int>::iterator v);
void tf74_4(std::vector<size_t>::iterator v);`),
        structs: parseStruct(`void tf74_0(std::vector<char8_t> v);
void tf74_1(std::vector<char16_t> v);
void tf74_2(std::vector<char32_t> v);
void tf74_3(std::vector<int>::iterator v);
void tf74_4(std::vector<size_t>::iterator v);`),
        classes: parseClass(`void tf74_0(std::vector<char8_t> v);
void tf74_1(std::vector<char16_t> v);
void tf74_2(std::vector<char32_t> v);
void tf74_3(std::vector<int>::iterator v);
void tf74_4(std::vector<size_t>::iterator v);`),
        funcs: parseFunction(`void tf74_0(std::vector<char8_t> v);
void tf74_1(std::vector<char16_t> v);
void tf74_2(std::vector<char32_t> v);
void tf74_3(std::vector<int>::iterator v);
void tf74_4(std::vector<size_t>::iterator v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0074 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0075
  * @tc.name : h2dtscpp_gen_0075
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::vector<double>::iterator, std::vector<float>::iterator,... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0075', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf75_0(std::vector<double>::iterator v);
void tf75_1(std::vector<float>::iterator v);
void tf75_2(std::vector<long>::iterator v);
void tf75_3(std::vector<short>::iterator v);
void tf75_4(std::vector<uint8_t>::iterator v);`),
        unions: parseUnion(`void tf75_0(std::vector<double>::iterator v);
void tf75_1(std::vector<float>::iterator v);
void tf75_2(std::vector<long>::iterator v);
void tf75_3(std::vector<short>::iterator v);
void tf75_4(std::vector<uint8_t>::iterator v);`),
        structs: parseStruct(`void tf75_0(std::vector<double>::iterator v);
void tf75_1(std::vector<float>::iterator v);
void tf75_2(std::vector<long>::iterator v);
void tf75_3(std::vector<short>::iterator v);
void tf75_4(std::vector<uint8_t>::iterator v);`),
        classes: parseClass(`void tf75_0(std::vector<double>::iterator v);
void tf75_1(std::vector<float>::iterator v);
void tf75_2(std::vector<long>::iterator v);
void tf75_3(std::vector<short>::iterator v);
void tf75_4(std::vector<uint8_t>::iterator v);`),
        funcs: parseFunction(`void tf75_0(std::vector<double>::iterator v);
void tf75_1(std::vector<float>::iterator v);
void tf75_2(std::vector<long>::iterator v);
void tf75_3(std::vector<short>::iterator v);
void tf75_4(std::vector<uint8_t>::iterator v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0075 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0076
  * @tc.name : h2dtscpp_gen_0076
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::vector<uint16_t>::iterator, std::vector<uint32_t>::iter... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0076', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf76_0(std::vector<uint16_t>::iterator v);
void tf76_1(std::vector<uint32_t>::iterator v);
void tf76_2(std::vector<uint64_t>::iterator v);
void tf76_3(std::vector<int8_t>::iterator v);
void tf76_4(std::vector<int16_t>::iterator v);`),
        unions: parseUnion(`void tf76_0(std::vector<uint16_t>::iterator v);
void tf76_1(std::vector<uint32_t>::iterator v);
void tf76_2(std::vector<uint64_t>::iterator v);
void tf76_3(std::vector<int8_t>::iterator v);
void tf76_4(std::vector<int16_t>::iterator v);`),
        structs: parseStruct(`void tf76_0(std::vector<uint16_t>::iterator v);
void tf76_1(std::vector<uint32_t>::iterator v);
void tf76_2(std::vector<uint64_t>::iterator v);
void tf76_3(std::vector<int8_t>::iterator v);
void tf76_4(std::vector<int16_t>::iterator v);`),
        classes: parseClass(`void tf76_0(std::vector<uint16_t>::iterator v);
void tf76_1(std::vector<uint32_t>::iterator v);
void tf76_2(std::vector<uint64_t>::iterator v);
void tf76_3(std::vector<int8_t>::iterator v);
void tf76_4(std::vector<int16_t>::iterator v);`),
        funcs: parseFunction(`void tf76_0(std::vector<uint16_t>::iterator v);
void tf76_1(std::vector<uint32_t>::iterator v);
void tf76_2(std::vector<uint64_t>::iterator v);
void tf76_3(std::vector<int8_t>::iterator v);
void tf76_4(std::vector<int16_t>::iterator v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0076 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0077
  * @tc.name : h2dtscpp_gen_0077
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::vector<int32_t>::iterator, std::vector<int64_t>::iterat... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0077', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf77_0(std::vector<int32_t>::iterator v);
void tf77_1(std::vector<int64_t>::iterator v);
void tf77_2(std::vector<unsigned>::iterator v);
void tf77_3(std::vector<bool>::iterator v);
void tf77_4(std::vector<char>::iterator v);`),
        unions: parseUnion(`void tf77_0(std::vector<int32_t>::iterator v);
void tf77_1(std::vector<int64_t>::iterator v);
void tf77_2(std::vector<unsigned>::iterator v);
void tf77_3(std::vector<bool>::iterator v);
void tf77_4(std::vector<char>::iterator v);`),
        structs: parseStruct(`void tf77_0(std::vector<int32_t>::iterator v);
void tf77_1(std::vector<int64_t>::iterator v);
void tf77_2(std::vector<unsigned>::iterator v);
void tf77_3(std::vector<bool>::iterator v);
void tf77_4(std::vector<char>::iterator v);`),
        classes: parseClass(`void tf77_0(std::vector<int32_t>::iterator v);
void tf77_1(std::vector<int64_t>::iterator v);
void tf77_2(std::vector<unsigned>::iterator v);
void tf77_3(std::vector<bool>::iterator v);
void tf77_4(std::vector<char>::iterator v);`),
        funcs: parseFunction(`void tf77_0(std::vector<int32_t>::iterator v);
void tf77_1(std::vector<int64_t>::iterator v);
void tf77_2(std::vector<unsigned>::iterator v);
void tf77_3(std::vector<bool>::iterator v);
void tf77_4(std::vector<char>::iterator v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0077 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0078
  * @tc.name : h2dtscpp_gen_0078
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::vector<wchar_t>::iterator, std::vector<char8_t>::iterat... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0078', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf78_0(std::vector<wchar_t>::iterator v);
void tf78_1(std::vector<char8_t>::iterator v);
void tf78_2(std::vector<char16_t>::iterator v);
void tf78_3(std::vector<char32_t>::iterator v);
void tf78_4(std::array<int, 10> v);`),
        unions: parseUnion(`void tf78_0(std::vector<wchar_t>::iterator v);
void tf78_1(std::vector<char8_t>::iterator v);
void tf78_2(std::vector<char16_t>::iterator v);
void tf78_3(std::vector<char32_t>::iterator v);
void tf78_4(std::array<int, 10> v);`),
        structs: parseStruct(`void tf78_0(std::vector<wchar_t>::iterator v);
void tf78_1(std::vector<char8_t>::iterator v);
void tf78_2(std::vector<char16_t>::iterator v);
void tf78_3(std::vector<char32_t>::iterator v);
void tf78_4(std::array<int, 10> v);`),
        classes: parseClass(`void tf78_0(std::vector<wchar_t>::iterator v);
void tf78_1(std::vector<char8_t>::iterator v);
void tf78_2(std::vector<char16_t>::iterator v);
void tf78_3(std::vector<char32_t>::iterator v);
void tf78_4(std::array<int, 10> v);`),
        funcs: parseFunction(`void tf78_0(std::vector<wchar_t>::iterator v);
void tf78_1(std::vector<char8_t>::iterator v);
void tf78_2(std::vector<char16_t>::iterator v);
void tf78_3(std::vector<char32_t>::iterator v);
void tf78_4(std::array<int, 10> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0078 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0079
  * @tc.name : h2dtscpp_gen_0079
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::array<size_t, 10>, std::array<double, 10>, std::array<f... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0079', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf79_0(std::array<size_t, 10> v);
void tf79_1(std::array<double, 10> v);
void tf79_2(std::array<float, 10> v);
void tf79_3(std::array<long, 10> v);
void tf79_4(std::array<short, 10> v);`),
        unions: parseUnion(`void tf79_0(std::array<size_t, 10> v);
void tf79_1(std::array<double, 10> v);
void tf79_2(std::array<float, 10> v);
void tf79_3(std::array<long, 10> v);
void tf79_4(std::array<short, 10> v);`),
        structs: parseStruct(`void tf79_0(std::array<size_t, 10> v);
void tf79_1(std::array<double, 10> v);
void tf79_2(std::array<float, 10> v);
void tf79_3(std::array<long, 10> v);
void tf79_4(std::array<short, 10> v);`),
        classes: parseClass(`void tf79_0(std::array<size_t, 10> v);
void tf79_1(std::array<double, 10> v);
void tf79_2(std::array<float, 10> v);
void tf79_3(std::array<long, 10> v);
void tf79_4(std::array<short, 10> v);`),
        funcs: parseFunction(`void tf79_0(std::array<size_t, 10> v);
void tf79_1(std::array<double, 10> v);
void tf79_2(std::array<float, 10> v);
void tf79_3(std::array<long, 10> v);
void tf79_4(std::array<short, 10> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0079 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0080
  * @tc.name : h2dtscpp_gen_0080
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::array<uint8_t, 10>, std::array<uint16_t, 10>, std::arra... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0080', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf80_0(std::array<uint8_t, 10> v);
void tf80_1(std::array<uint16_t, 10> v);
void tf80_2(std::array<uint32_t, 10> v);
void tf80_3(std::array<uint64_t, 10> v);
void tf80_4(std::array<int8_t, 10> v);`),
        unions: parseUnion(`void tf80_0(std::array<uint8_t, 10> v);
void tf80_1(std::array<uint16_t, 10> v);
void tf80_2(std::array<uint32_t, 10> v);
void tf80_3(std::array<uint64_t, 10> v);
void tf80_4(std::array<int8_t, 10> v);`),
        structs: parseStruct(`void tf80_0(std::array<uint8_t, 10> v);
void tf80_1(std::array<uint16_t, 10> v);
void tf80_2(std::array<uint32_t, 10> v);
void tf80_3(std::array<uint64_t, 10> v);
void tf80_4(std::array<int8_t, 10> v);`),
        classes: parseClass(`void tf80_0(std::array<uint8_t, 10> v);
void tf80_1(std::array<uint16_t, 10> v);
void tf80_2(std::array<uint32_t, 10> v);
void tf80_3(std::array<uint64_t, 10> v);
void tf80_4(std::array<int8_t, 10> v);`),
        funcs: parseFunction(`void tf80_0(std::array<uint8_t, 10> v);
void tf80_1(std::array<uint16_t, 10> v);
void tf80_2(std::array<uint32_t, 10> v);
void tf80_3(std::array<uint64_t, 10> v);
void tf80_4(std::array<int8_t, 10> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0080 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0081
  * @tc.name : h2dtscpp_gen_0081
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::array<int16_t, 10>, std::array<int32_t, 10>, std::array... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0081', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf81_0(std::array<int16_t, 10> v);
void tf81_1(std::array<int32_t, 10> v);
void tf81_2(std::array<int64_t, 10> v);
void tf81_3(std::array<unsigned, 10> v);
void tf81_4(std::array<bool, 10> v);`),
        unions: parseUnion(`void tf81_0(std::array<int16_t, 10> v);
void tf81_1(std::array<int32_t, 10> v);
void tf81_2(std::array<int64_t, 10> v);
void tf81_3(std::array<unsigned, 10> v);
void tf81_4(std::array<bool, 10> v);`),
        structs: parseStruct(`void tf81_0(std::array<int16_t, 10> v);
void tf81_1(std::array<int32_t, 10> v);
void tf81_2(std::array<int64_t, 10> v);
void tf81_3(std::array<unsigned, 10> v);
void tf81_4(std::array<bool, 10> v);`),
        classes: parseClass(`void tf81_0(std::array<int16_t, 10> v);
void tf81_1(std::array<int32_t, 10> v);
void tf81_2(std::array<int64_t, 10> v);
void tf81_3(std::array<unsigned, 10> v);
void tf81_4(std::array<bool, 10> v);`),
        funcs: parseFunction(`void tf81_0(std::array<int16_t, 10> v);
void tf81_1(std::array<int32_t, 10> v);
void tf81_2(std::array<int64_t, 10> v);
void tf81_3(std::array<unsigned, 10> v);
void tf81_4(std::array<bool, 10> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0081 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0082
  * @tc.name : h2dtscpp_gen_0082
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::array<char, 10>, std::array<wchar_t, 10>, std::array<ch... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0082', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf82_0(std::array<char, 10> v);
void tf82_1(std::array<wchar_t, 10> v);
void tf82_2(std::array<char8_t, 10> v);
void tf82_3(std::array<char16_t, 10> v);
void tf82_4(std::array<char32_t, 10> v);`),
        unions: parseUnion(`void tf82_0(std::array<char, 10> v);
void tf82_1(std::array<wchar_t, 10> v);
void tf82_2(std::array<char8_t, 10> v);
void tf82_3(std::array<char16_t, 10> v);
void tf82_4(std::array<char32_t, 10> v);`),
        structs: parseStruct(`void tf82_0(std::array<char, 10> v);
void tf82_1(std::array<wchar_t, 10> v);
void tf82_2(std::array<char8_t, 10> v);
void tf82_3(std::array<char16_t, 10> v);
void tf82_4(std::array<char32_t, 10> v);`),
        classes: parseClass(`void tf82_0(std::array<char, 10> v);
void tf82_1(std::array<wchar_t, 10> v);
void tf82_2(std::array<char8_t, 10> v);
void tf82_3(std::array<char16_t, 10> v);
void tf82_4(std::array<char32_t, 10> v);`),
        funcs: parseFunction(`void tf82_0(std::array<char, 10> v);
void tf82_1(std::array<wchar_t, 10> v);
void tf82_2(std::array<char8_t, 10> v);
void tf82_3(std::array<char16_t, 10> v);
void tf82_4(std::array<char32_t, 10> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0082 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0083
  * @tc.name : h2dtscpp_gen_0083
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::array<int, 10>::iterator, std::array<size_t, 10>::itera... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0083', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf83_0(std::array<int, 10>::iterator v);
void tf83_1(std::array<size_t, 10>::iterator v);
void tf83_2(std::array<double, 10>::iterator v);
void tf83_3(std::array<float, 10>::iterator v);
void tf83_4(std::array<long, 10>::iterator v);`),
        unions: parseUnion(`void tf83_0(std::array<int, 10>::iterator v);
void tf83_1(std::array<size_t, 10>::iterator v);
void tf83_2(std::array<double, 10>::iterator v);
void tf83_3(std::array<float, 10>::iterator v);
void tf83_4(std::array<long, 10>::iterator v);`),
        structs: parseStruct(`void tf83_0(std::array<int, 10>::iterator v);
void tf83_1(std::array<size_t, 10>::iterator v);
void tf83_2(std::array<double, 10>::iterator v);
void tf83_3(std::array<float, 10>::iterator v);
void tf83_4(std::array<long, 10>::iterator v);`),
        classes: parseClass(`void tf83_0(std::array<int, 10>::iterator v);
void tf83_1(std::array<size_t, 10>::iterator v);
void tf83_2(std::array<double, 10>::iterator v);
void tf83_3(std::array<float, 10>::iterator v);
void tf83_4(std::array<long, 10>::iterator v);`),
        funcs: parseFunction(`void tf83_0(std::array<int, 10>::iterator v);
void tf83_1(std::array<size_t, 10>::iterator v);
void tf83_2(std::array<double, 10>::iterator v);
void tf83_3(std::array<float, 10>::iterator v);
void tf83_4(std::array<long, 10>::iterator v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0083 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0084
  * @tc.name : h2dtscpp_gen_0084
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::array<short, 10>::iterator, std::array<uint8_t, 10>::it... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0084', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf84_0(std::array<short, 10>::iterator v);
void tf84_1(std::array<uint8_t, 10>::iterator v);
void tf84_2(std::array<uint16_t, 10>::iterator v);
void tf84_3(std::array<uint32_t, 10>::iterator v);
void tf84_4(std::array<uint64_t, 10>::iterator v);`),
        unions: parseUnion(`void tf84_0(std::array<short, 10>::iterator v);
void tf84_1(std::array<uint8_t, 10>::iterator v);
void tf84_2(std::array<uint16_t, 10>::iterator v);
void tf84_3(std::array<uint32_t, 10>::iterator v);
void tf84_4(std::array<uint64_t, 10>::iterator v);`),
        structs: parseStruct(`void tf84_0(std::array<short, 10>::iterator v);
void tf84_1(std::array<uint8_t, 10>::iterator v);
void tf84_2(std::array<uint16_t, 10>::iterator v);
void tf84_3(std::array<uint32_t, 10>::iterator v);
void tf84_4(std::array<uint64_t, 10>::iterator v);`),
        classes: parseClass(`void tf84_0(std::array<short, 10>::iterator v);
void tf84_1(std::array<uint8_t, 10>::iterator v);
void tf84_2(std::array<uint16_t, 10>::iterator v);
void tf84_3(std::array<uint32_t, 10>::iterator v);
void tf84_4(std::array<uint64_t, 10>::iterator v);`),
        funcs: parseFunction(`void tf84_0(std::array<short, 10>::iterator v);
void tf84_1(std::array<uint8_t, 10>::iterator v);
void tf84_2(std::array<uint16_t, 10>::iterator v);
void tf84_3(std::array<uint32_t, 10>::iterator v);
void tf84_4(std::array<uint64_t, 10>::iterator v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0084 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0085
  * @tc.name : h2dtscpp_gen_0085
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::array<int8_t, 10>::iterator, std::array<int16_t, 10>::i... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0085', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf85_0(std::array<int8_t, 10>::iterator v);
void tf85_1(std::array<int16_t, 10>::iterator v);
void tf85_2(std::array<int32_t, 10>::iterator v);
void tf85_3(std::array<int64_t, 10>::iterator v);
void tf85_4(std::array<unsigned, 10>::iterator v);`),
        unions: parseUnion(`void tf85_0(std::array<int8_t, 10>::iterator v);
void tf85_1(std::array<int16_t, 10>::iterator v);
void tf85_2(std::array<int32_t, 10>::iterator v);
void tf85_3(std::array<int64_t, 10>::iterator v);
void tf85_4(std::array<unsigned, 10>::iterator v);`),
        structs: parseStruct(`void tf85_0(std::array<int8_t, 10>::iterator v);
void tf85_1(std::array<int16_t, 10>::iterator v);
void tf85_2(std::array<int32_t, 10>::iterator v);
void tf85_3(std::array<int64_t, 10>::iterator v);
void tf85_4(std::array<unsigned, 10>::iterator v);`),
        classes: parseClass(`void tf85_0(std::array<int8_t, 10>::iterator v);
void tf85_1(std::array<int16_t, 10>::iterator v);
void tf85_2(std::array<int32_t, 10>::iterator v);
void tf85_3(std::array<int64_t, 10>::iterator v);
void tf85_4(std::array<unsigned, 10>::iterator v);`),
        funcs: parseFunction(`void tf85_0(std::array<int8_t, 10>::iterator v);
void tf85_1(std::array<int16_t, 10>::iterator v);
void tf85_2(std::array<int32_t, 10>::iterator v);
void tf85_3(std::array<int64_t, 10>::iterator v);
void tf85_4(std::array<unsigned, 10>::iterator v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0085 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0086
  * @tc.name : h2dtscpp_gen_0086
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::array<bool, 10>::iterator, std::array<char, 10>::iterat... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0086', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf86_0(std::array<bool, 10>::iterator v);
void tf86_1(std::array<char, 10>::iterator v);
void tf86_2(std::array<wchar_t, 10>::iterator v);
void tf86_3(std::array<char8_t, 10>::iterator v);
void tf86_4(std::array<char16_t, 10>::iterator v);`),
        unions: parseUnion(`void tf86_0(std::array<bool, 10>::iterator v);
void tf86_1(std::array<char, 10>::iterator v);
void tf86_2(std::array<wchar_t, 10>::iterator v);
void tf86_3(std::array<char8_t, 10>::iterator v);
void tf86_4(std::array<char16_t, 10>::iterator v);`),
        structs: parseStruct(`void tf86_0(std::array<bool, 10>::iterator v);
void tf86_1(std::array<char, 10>::iterator v);
void tf86_2(std::array<wchar_t, 10>::iterator v);
void tf86_3(std::array<char8_t, 10>::iterator v);
void tf86_4(std::array<char16_t, 10>::iterator v);`),
        classes: parseClass(`void tf86_0(std::array<bool, 10>::iterator v);
void tf86_1(std::array<char, 10>::iterator v);
void tf86_2(std::array<wchar_t, 10>::iterator v);
void tf86_3(std::array<char8_t, 10>::iterator v);
void tf86_4(std::array<char16_t, 10>::iterator v);`),
        funcs: parseFunction(`void tf86_0(std::array<bool, 10>::iterator v);
void tf86_1(std::array<char, 10>::iterator v);
void tf86_2(std::array<wchar_t, 10>::iterator v);
void tf86_3(std::array<char8_t, 10>::iterator v);
void tf86_4(std::array<char16_t, 10>::iterator v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0086 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dtscpp_gen_0087
  * @tc.name : h2dtscpp_gen_0087
  * @tc.desc : h2dtscpp transParseObj：扩充-类型组 std::array<char32_t, 10>::iterator, std::deque<int>, std::de... 的转换结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dtscpp_gen_0087', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void tf87_0(std::array<char32_t, 10>::iterator v);
void tf87_1(std::deque<int> v);
void tf87_2(std::deque<size_t> v);
void tf87_3(std::deque<double> v);
void tf87_4(std::deque<float> v);`),
        unions: parseUnion(`void tf87_0(std::array<char32_t, 10>::iterator v);
void tf87_1(std::deque<int> v);
void tf87_2(std::deque<size_t> v);
void tf87_3(std::deque<double> v);
void tf87_4(std::deque<float> v);`),
        structs: parseStruct(`void tf87_0(std::array<char32_t, 10>::iterator v);
void tf87_1(std::deque<int> v);
void tf87_2(std::deque<size_t> v);
void tf87_3(std::deque<double> v);
void tf87_4(std::deque<float> v);`),
        classes: parseClass(`void tf87_0(std::array<char32_t, 10>::iterator v);
void tf87_1(std::deque<int> v);
void tf87_2(std::deque<size_t> v);
void tf87_3(std::deque<double> v);
void tf87_4(std::deque<float> v);`),
        funcs: parseFunction(`void tf87_0(std::array<char32_t, 10>::iterator v);
void tf87_1(std::deque<int> v);
void tf87_2(std::deque<size_t> v);
void tf87_3(std::deque<double> v);
void tf87_4(std::deque<float> v);`),
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
      assert.strictEqual(transResult.funcs.length, 5);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0087 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0087 执行异常: ${String(err)}`);
    }
  });
});
