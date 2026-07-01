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
  // 测试内容：验证 h2dts 扩展输入 `std::stack<double>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0021', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<double>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0021 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0021 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<float>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0022', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<float>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0022 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0022 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<long>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0023', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<long>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0023 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0023 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<short>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0024', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<short>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0024 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0024 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<uint8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0025', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<uint8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0025 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0025 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<uint16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0026', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<uint16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0026 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0026 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<uint32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0027', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<uint32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0027 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0027 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<uint64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0028', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<uint64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0028 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0028 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<int8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0029', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<int8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0029 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0029 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<int16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0030', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<int16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0030 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0030 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<int32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0031', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<int32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0031 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0031 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<int64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0032', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<int64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0032 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0032 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<unsigned>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0033', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<unsigned>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0033 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0033 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<bool>::iterator` 转换为 `IterableIterator<Array<boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0034', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<bool>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0034 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0034 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<char>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0035', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0035 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0035 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<wchar_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0036', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<wchar_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0036 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0036 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<char8_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0037', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<char8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0037 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0037 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<char16_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0038', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<char16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0038 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0038 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<char32_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0039', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<char32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0039 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0039 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<int>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0040', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<int>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0040 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0040 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<size_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0041', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<size_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0041 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0041 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<double>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0042', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<double>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0042 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0042 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<float>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0043', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<float>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0043 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0043 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0044', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0044 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0044 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0045', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0045 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0045 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<uint8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0046', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<uint8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0046 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0046 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<uint16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0047', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<uint16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0047 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0047 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<uint32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0048', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<uint32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0048 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0048 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<uint64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0049', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<uint64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0049 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0049 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<int8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0050', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<int8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0050 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0050 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<int16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0051', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<int16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0051 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0051 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<int32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0052', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<int32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0052 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0052 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<int64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0053', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<int64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0053 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0053 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<unsigned>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0054', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<unsigned>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0054 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0054 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<bool>` 转换为 `Array<boolean>` 的结果与性能。
  test('h2dts_expand_unique_p10_0055', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<bool>');
        }
      });
      assert.strictEqual(converted, 'Array<boolean>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0055 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0055 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<char>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p10_0056', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<char>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0056 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0056 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<wchar_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p10_0057', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<wchar_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0057 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0057 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<char8_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p10_0058', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<char8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0058 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0058 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<char16_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p10_0059', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<char16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0059 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0059 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<char32_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p10_0060', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<char32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0060 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0060 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<int>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0061', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<int>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0061 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0061 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<size_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0062', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<size_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0062 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0062 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<double>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0063', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<double>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0063 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0063 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<float>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0064', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<float>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0064 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0064 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<long>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0065', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<long>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0065 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0065 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<short>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0066', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<short>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0066 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0066 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<uint8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0067', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<uint8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0067 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0067 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<uint16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0068', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<uint16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0068 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0068 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<uint32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0069', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<uint32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0069 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0069 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<uint64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0070', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<uint64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0070 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0070 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<int8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0071', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<int8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0071 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0071 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<int16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0072', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<int16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0072 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0072 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<int32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0073', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<int32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0073 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0073 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<int64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0074', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<int64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0074 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0074 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<unsigned>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0075', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<unsigned>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0075 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0075 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<bool>::iterator` 转换为 `IterableIterator<Array<boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0076', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<bool>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0076 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0076 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<char>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0077', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0077 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0077 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<wchar_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0078', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<wchar_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0078 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0078 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<char8_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0079', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<char8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0079 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0079 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<char16_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0080', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<char16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0080 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0080 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::queue<char32_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0081', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::queue<char32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0081 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0081 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<int>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0082', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<int>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0082 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0082 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<size_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0083', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<size_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0083 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0083 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<double>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0084', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<double>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0084 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0084 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<float>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0085', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<float>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0085 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0085 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<long>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0086', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<long>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0086 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0086 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<short>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0087', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<short>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0087 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0087 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<uint8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0088', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<uint8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0088 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0088 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<uint16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0089', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<uint16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0089 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0089 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<uint32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0090', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<uint32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0090 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0090 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<uint64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0091', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<uint64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0091 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0091 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<int8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0092', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<int8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0092 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0092 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<int16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0093', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<int16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0093 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0093 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<int32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0094', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<int32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0094 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0094 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<int64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0095', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<int64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0095 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0095 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<unsigned>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0096', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<unsigned>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0096 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0096 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<bool>::iterator` 转换为 `IterableIterator<Array<boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0097', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<bool>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0097 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0097 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<char>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0098', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0098 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0098 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<wchar_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0099', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<wchar_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0099 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0099 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<char8_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0100', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<char8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0100 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0100 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<char16_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0101', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<char16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0101 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0101 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::valarray<char32_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0102', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::valarray<char32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0102 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0102 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<int>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0103', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<int>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0103 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0103 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<size_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0104', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<size_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0104 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0104 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<double>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0105', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<double>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0105 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0105 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<float>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0106', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<float>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0106 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0106 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0107', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0107 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0107 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0108', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0108 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0108 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<uint8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0109', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<uint8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0109 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0109 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<uint16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0110', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<uint16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0110 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0110 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_expand_unique_p11_0001', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<uint32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0001 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<uint64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0002', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<uint64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0002 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<int8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0003', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<int8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0003 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<int16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0004', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<int16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0004 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<int32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0005', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<int32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0005 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0005 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<int64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0006', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<int64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0006 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<unsigned>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0007', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<unsigned>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0007 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0007 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<bool>` 转换为 `Array<boolean>` 的结果与性能。
  test('h2dts_expand_unique_p11_0008', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<bool>');
        }
      });
      assert.strictEqual(converted, 'Array<boolean>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0008 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0008 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<char>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p11_0009', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<char>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0009 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0009 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<wchar_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p11_0010', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<wchar_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0010 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0010 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<char8_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p11_0011', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<char8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0011 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0011 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<char16_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p11_0012', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<char16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0012 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0012 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<char32_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p11_0013', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<char32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0013 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0013 执行异常: ${String(err)}`);
    }
  });

});
