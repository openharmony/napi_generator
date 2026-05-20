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
  // 测试内容：验证 h2dts 扩展输入 `std::array<long, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0028', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<long, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0028 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0028 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<short, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0029', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<short, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0029 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0029 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<uint8_t, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0030', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<uint8_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0030 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0030 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<uint16_t, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0031', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<uint16_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0031 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0031 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<uint32_t, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0032', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<uint32_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0032 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0032 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<uint64_t, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0033', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<uint64_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0033 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0033 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<int8_t, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0034', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<int8_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0034 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0034 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<int16_t, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0035', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<int16_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0035 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0035 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<int32_t, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0036', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<int32_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0036 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0036 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<int64_t, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0037', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<int64_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0037 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0037 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<unsigned, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0038', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<unsigned, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0038 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0038 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<bool, 10>::iterator` 转换为 `IterableIterator<Array<boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0039', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<bool, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0039 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0039 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<char, 10>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0040', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<char, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0040 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0040 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<wchar_t, 10>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0041', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<wchar_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0041 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0041 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<char8_t, 10>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0042', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<char8_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0042 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0042 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<char16_t, 10>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0043', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<char16_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0043 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0043 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<char32_t, 10>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0044', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<char32_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0044 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0044 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<int>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0045', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<int>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0045 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0045 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<size_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0046', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<size_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0046 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0046 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<double>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0047', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<double>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0047 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0047 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<float>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0048', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<float>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0048 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0048 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<long>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0049', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<long>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0049 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0049 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<short>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0050', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<short>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0050 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0050 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<uint8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0051', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<uint8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0051 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0051 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<uint16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0052', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<uint16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0052 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0052 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<uint32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0053', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<uint32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0053 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0053 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<uint64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0054', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<uint64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0054 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0054 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<int8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0055', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<int8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0055 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0055 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<int16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0056', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<int16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0056 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0056 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<int32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0057', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<int32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0057 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0057 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<int64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0058', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<int64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0058 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0058 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<unsigned>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0059', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<unsigned>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0059 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0059 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<bool>::iterator` 转换为 `IterableIterator<Array<boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0060', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<bool>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0060 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0060 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<char>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0061', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0061 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0061 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<wchar_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0062', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<wchar_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0062 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0062 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<char8_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0063', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<char8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0063 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0063 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<char16_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0064', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<char16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0064 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0064 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::deque<char32_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0065', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<char32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0065 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0065 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<int>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0066', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<int>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0066 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0066 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<size_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0067', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<size_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0067 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0067 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<double>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0068', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<double>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0068 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0068 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<float>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0069', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<float>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0069 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0069 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<long>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0070', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<long>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0070 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0070 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<short>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0071', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<short>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0071 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0071 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<uint8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0072', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<uint8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0072 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0072 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<uint16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0073', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<uint16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0073 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0073 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<uint32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0074', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<uint32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0074 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0074 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<uint64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0075', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<uint64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0075 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0075 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<int8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0076', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<int8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0076 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0076 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<int16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0077', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<int16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0077 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0077 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<int32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0078', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<int32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0078 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0078 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<int64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0079', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<int64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0079 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0079 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<unsigned>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0080', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<unsigned>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0080 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0080 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<bool>::iterator` 转换为 `IterableIterator<Array<boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0081', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<bool>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0081 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0081 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<char>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0082', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0082 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0082 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<wchar_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0083', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<wchar_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0083 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0083 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<char8_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0084', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<char8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0084 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0084 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<char16_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0085', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<char16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0085 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0085 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::list<char32_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0086', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<char32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0086 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0086 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<int>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0087', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<int>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0087 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0087 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<size_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0088', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<size_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0088 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0088 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<double>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0089', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<double>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0089 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0089 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<float>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0090', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<float>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0090 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0090 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<long>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0091', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<long>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0091 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0091 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<short>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0092', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<short>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0092 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0092 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<uint8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0093', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<uint8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0093 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0093 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<uint16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0094', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<uint16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0094 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0094 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<uint32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0095', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<uint32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0095 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0095 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<uint64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0096', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<uint64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0096 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0096 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<int8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0097', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<int8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0097 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0097 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<int16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0098', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<int16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0098 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0098 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<int32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0099', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<int32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0099 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0099 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<int64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0100', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<int64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0100 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0100 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<unsigned>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0101', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<unsigned>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0101 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0101 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<bool>::iterator` 转换为 `IterableIterator<Array<boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0102', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<bool>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0102 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0102 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<char>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0103', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0103 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0103 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<wchar_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0104', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<wchar_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0104 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0104 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<char8_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0105', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<char8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0105 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0105 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<char16_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0106', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<char16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0106 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0106 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::forward_list<char32_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0107', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::forward_list<char32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0107 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0107 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<int>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p09_0108', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<int>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0108 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0108 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<size_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p09_0109', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<size_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0109 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0109 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<double>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p09_0110', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<double>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0110 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0110 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_expand_unique_p10_0001', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<float>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0001 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0002', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0002 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0003', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0003 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<uint8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0004', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<uint8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0004 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<uint16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0005', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<uint16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0005 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0005 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<uint32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0006', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<uint32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0006 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<uint64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0007', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<uint64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0007 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0007 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<int8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0008', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<int8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0008 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0008 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<int16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0009', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<int16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0009 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0009 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<int32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0010', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<int32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0010 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0010 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<int64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0011', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<int64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0011 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0011 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<unsigned>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_expand_unique_p10_0012', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<unsigned>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0012 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0012 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<bool>` 转换为 `Array<boolean>` 的结果与性能。
  test('h2dts_expand_unique_p10_0013', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<bool>');
        }
      });
      assert.strictEqual(converted, 'Array<boolean>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0013 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0013 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<char>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p10_0014', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<char>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0014 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0014 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<wchar_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p10_0015', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<wchar_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0015 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0015 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<char8_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p10_0016', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<char8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0016 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0016 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<char16_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p10_0017', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<char16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0017 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0017 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<char32_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_expand_unique_p10_0018', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<char32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0018 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0018 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<int>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0019', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<int>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0019 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0019 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::stack<size_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p10_0020', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::stack<size_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p10_0020 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p10_0020 执行异常: ${String(err)}`);
    }
  });

});
