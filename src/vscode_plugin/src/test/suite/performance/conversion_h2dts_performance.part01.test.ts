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
import { transTskey2Ckey, getDtsFunction, getDtsClasses, getDtsStructs, getDtsEnum, getDtsUnions } from '../../../gen/gendts';
import { GenInfo, ParseObj } from '../../../gen/datatype';

const TYPE_THRESHOLD_MS = 10;
const METHOD_THRESHOLD_MS = 50;
const FILE_THRESHOLD_MS = 1000;

function measureElapsed(task: () => void): number {
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_Conversion_H2DTS_Suite', function() {
  this.timeout(360000);
  vscode.window.showInformationMessage('Start h2dts performance tests.');

  // 类型转换性能：使用已有基线中已验证的 C++->TS 输入输出对，逐条性能化。
  // 测试内容：验证 h2dts 类型 `int` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0001', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('int');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0001 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `size_t` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0002', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('size_t');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0002 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `double` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0003', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('double');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0003 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `float` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0004', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('float');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0004 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `short` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0005', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('short');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0005 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0005 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `long` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0006', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('long');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0006 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `uint8_t` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0007', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('uint8_t');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0007 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0007 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `uint16_t` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0008', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('uint16_t');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0008 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0008 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `uint32_t` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0009', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('uint32_t');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0009 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0009 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `uint64_t` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0010', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('uint64_t');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0010 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0010 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `int8_t` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0011', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('int8_t');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0011 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0011 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `int16_t` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0012', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('int16_t');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0012 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0012 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `int32_t` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0013', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('int32_t');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0013 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0013 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `int64_t` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0014', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('int64_t');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0014 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0014 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `bool` 转换为 `boolean` 的结果与性能。
  test('h2dts_type_unique_0016', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('bool');
        }
      });
      assert.strictEqual(converted, 'boolean');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0016 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0016 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `char` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0017', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('char');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0017 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0017 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `wchar_t` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0018', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('wchar_t');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0018 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0018 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `char8_t` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0019', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('char8_t');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0019 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0019 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `char16_t` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0020', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('char16_t');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0020 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0020 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `char32_t` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0021', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('char32_t');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0021 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0021 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<int>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0023', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<int>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0023 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0023 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<size_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0024', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<size_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0024 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0024 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<double>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0025', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<double>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0025 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0025 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<float>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0026', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<float>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0026 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0026 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0027', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0027 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0027 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0028', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0028 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0028 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<uint8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0029', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<uint8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0029 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0029 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<uint16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0030', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<uint16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0030 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0030 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<uint32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0031', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<uint32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0031 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0031 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<uint64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0032', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<uint64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0032 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0032 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<int8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0033', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<int8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0033 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0033 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<int16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0034', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<int16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0034 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0034 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<int32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0035', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<int32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0035 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0035 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<int64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0036', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<int64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0036 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0036 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<unsigned>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0037', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<unsigned>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0037 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0037 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<bool>` 转换为 `Array<boolean>` 的结果与性能。
  test('h2dts_type_unique_0038', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<bool>');
        }
      });
      assert.strictEqual(converted, 'Array<boolean>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0038 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0038 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<char>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0039', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<char>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0039 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0039 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<wchar_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0040', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<wchar_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0040 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0040 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<char8_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0041', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<char8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0041 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0041 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<char16_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0042', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<char16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0042 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0042 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<char32_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0043', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<char32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0043 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0043 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<int, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0065', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<int, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0065 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0065 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<size_t, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0066', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<size_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0066 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0066 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<double, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0067', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<double, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0067 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0067 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<float, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0068', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<float, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0068 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0068 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<long, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0069', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<long, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0069 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0069 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<short, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0070', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<short, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0070 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0070 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<uint8_t, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0071', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<uint8_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0071 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0071 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<uint16_t, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0072', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<uint16_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0072 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0072 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<uint32_t, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0073', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<uint32_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0073 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0073 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<uint64_t, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0074', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<uint64_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0074 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0074 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<int8_t, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0075', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<int8_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0075 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0075 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<int16_t, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0076', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<int16_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0076 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0076 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<int32_t, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0077', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<int32_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0077 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0077 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<int64_t, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0078', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<int64_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0078 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0078 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<unsigned, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0079', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<unsigned, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0079 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0079 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<bool, 10>` 转换为 `Array<boolean>` 的结果与性能。
  test('h2dts_type_unique_0080', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<bool, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<boolean>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0080 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0080 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<char, 10>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0081', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<char, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0081 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0081 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<wchar_t, 10>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0082', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<wchar_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0082 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0082 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<char8_t, 10>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0083', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<char8_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0083 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0083 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<char16_t, 10>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0084', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<char16_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0084 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0084 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<char32_t, 10>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0085', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<char32_t, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0085 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0085 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<int>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0107', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<int>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0107 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0107 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<size_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0108', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<size_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0108 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0108 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<double>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0109', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<double>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0109 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0109 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<float>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0110', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<float>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0110 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0110 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0111', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0111 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0111 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0112', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0112 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0112 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<uint8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0113', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<uint8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0113 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0113 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<uint16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0114', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<uint16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0114 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0114 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<uint32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0115', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<uint32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0115 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0115 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<uint64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0116', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<uint64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0116 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0116 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<int8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0117', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<int8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0117 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0117 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<int16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0118', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<int16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0118 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0118 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<int32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0119', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<int32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0119 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0119 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<int64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0120', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<int64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0120 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0120 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<unsigned>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0121', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<unsigned>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0121 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0121 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<bool>` 转换为 `Array<boolean>` 的结果与性能。
  test('h2dts_type_unique_0122', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<bool>');
        }
      });
      assert.strictEqual(converted, 'Array<boolean>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0122 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0122 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<char>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0123', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<char>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0123 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0123 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<wchar_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0124', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<wchar_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0124 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0124 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<char8_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0125', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<char8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0125 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0125 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<char16_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0126', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<char16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0126 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0126 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<char32_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0127', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<char32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0127 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0127 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<int>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0149', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<int>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0149 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0149 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<size_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0150', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<size_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0150 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0150 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<double>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0151', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<double>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0151 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0151 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<float>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0152', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<float>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0152 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0152 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0153', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0153 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0153 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0154', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0154 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0154 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<uint8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0155', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<uint8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0155 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0155 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<uint16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0156', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<uint16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0156 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0156 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<uint32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0157', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<uint32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0157 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0157 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<uint64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0158', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<uint64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0158 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0158 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_type_unique_0159', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<int8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0159 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0159 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<int16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0160', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<int16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0160 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0160 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<int32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0161', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<int32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0161 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0161 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<int64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0162', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<int64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0162 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0162 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<unsigned>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0163', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<unsigned>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0163 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0163 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<bool>` 转换为 `Array<boolean>` 的结果与性能。
  test('h2dts_type_unique_0164', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<bool>');
        }
      });
      assert.strictEqual(converted, 'Array<boolean>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0164 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0164 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<char>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0165', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<char>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0165 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0165 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<wchar_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0166', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<wchar_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0166 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0166 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<char8_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0167', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<char8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0167 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0167 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<char16_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0168', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<char16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0168 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0168 执行异常: ${String(err)}`);
    }
  });

});
