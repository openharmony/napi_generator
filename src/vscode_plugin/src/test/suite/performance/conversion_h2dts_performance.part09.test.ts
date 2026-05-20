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
  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<int>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0014', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<int>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0014 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0014 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<size_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0015', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<size_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0015 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0015 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<double>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0016', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<double>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0016 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0016 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<float>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0017', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<float>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0017 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0017 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<long>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0018', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<long>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0018 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0018 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<short>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0019', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<short>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0019 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0019 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<uint8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0020', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<uint8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0020 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0020 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<uint16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0021', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<uint16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0021 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0021 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<uint32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0022', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<uint32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0022 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0022 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<uint64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0023', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<uint64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0023 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0023 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<int8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0024', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<int8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0024 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0024 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<int16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0025', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<int16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0025 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0025 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<int32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0026', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<int32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0026 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0026 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<int64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0027', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<int64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0027 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0027 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<unsigned>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0028', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<unsigned>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0028 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0028 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<bool>::iterator` 转换为 `IterableIterator<Array<boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0029', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<bool>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0029 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0029 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<char>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0030', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0030 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0030 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<wchar_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0031', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<wchar_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0031 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0031 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<char8_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0032', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<char8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0032 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0032 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<char16_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0033', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<char16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0033 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0033 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::priority_queue<char32_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0034', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::priority_queue<char32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0034 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0034 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<int, int>` 转换为 `Map<number, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0035', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<int, int>');
        }
      });
      assert.strictEqual(converted, 'Map<number, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0035 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0035 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char, int>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0036', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char, int>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0036 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0036 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char, size_t>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0037', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char, size_t>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0037 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0037 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char, unsigned>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0038', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char, unsigned>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0038 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0038 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char, double>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0039', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char, double>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0039 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0039 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char, float>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0040', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char, float>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0040 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0040 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char16_t, int32_t>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0041', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char16_t, int32_t>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0041 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0041 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char32_t, size_t>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0042', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char32_t, size_t>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0042 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0042 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char8_t, uint32_t>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0043', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char8_t, uint32_t>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0043 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0043 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char32_t, int8_t>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0044', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char32_t, int8_t>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0044 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0044 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<wchar_t, uint16_t>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0045', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<wchar_t, uint16_t>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0045 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0045 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<int, bool>` 转换为 `Map<number, boolean>` 的结果与性能。
  test('h2dts_expand_unique_p11_0046', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<int, bool>');
        }
      });
      assert.strictEqual(converted, 'Map<number, boolean>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0046 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0046 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char, bool>` 转换为 `Map<string, boolean>` 的结果与性能。
  test('h2dts_expand_unique_p11_0047', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char, bool>');
        }
      });
      assert.strictEqual(converted, 'Map<string, boolean>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0047 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0047 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<int, char>` 转换为 `Map<number, string>` 的结果与性能。
  test('h2dts_expand_unique_p11_0048', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<int, char>');
        }
      });
      assert.strictEqual(converted, 'Map<number, string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0048 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0048 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<size_t, char>` 转换为 `Map<number, string>` 的结果与性能。
  test('h2dts_expand_unique_p11_0049', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<size_t, char>');
        }
      });
      assert.strictEqual(converted, 'Map<number, string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0049 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0049 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<unsigned, char>` 转换为 `Map<number, string>` 的结果与性能。
  test('h2dts_expand_unique_p11_0050', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<unsigned, char>');
        }
      });
      assert.strictEqual(converted, 'Map<number, string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0050 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0050 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<int, int>::iterator` 转换为 `IterableIterator<Map<number, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0051', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<int, int>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<number, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0051 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0051 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char, int>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0052', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char, int>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0052 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0052 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char, size_t>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0053', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char, size_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0053 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0053 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char, unsigned>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0054', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char, unsigned>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0054 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0054 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char, double>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0055', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char, double>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0055 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0055 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char, float>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0056', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char, float>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0056 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0056 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char16_t, int32_t>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0057', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char16_t, int32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0057 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0057 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char32_t, size_t>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0058', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char32_t, size_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0058 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0058 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char8_t, uint32_t>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0059', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char8_t, uint32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0059 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0059 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char32_t, int8_t>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0060', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char32_t, int8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0060 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0060 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<wchar_t, uint16_t>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0061', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<wchar_t, uint16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0061 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0061 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<int, bool>::iterator` 转换为 `IterableIterator<Map<number, boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0062', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<int, bool>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<number, boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0062 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0062 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<char, bool>::iterator` 转换为 `IterableIterator<Map<string, boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0063', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<char, bool>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0063 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0063 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<int, char>::iterator` 转换为 `IterableIterator<Map<number, string>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0064', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<int, char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<number, string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0064 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0064 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<size_t, char>::iterator` 转换为 `IterableIterator<Map<number, string>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0065', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<size_t, char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<number, string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0065 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0065 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::map<unsigned, char>::iterator` 转换为 `IterableIterator<Map<number, string>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0066', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::map<unsigned, char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<number, string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0066 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0066 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<int, int>` 转换为 `Map<number, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0067', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<int, int>');
        }
      });
      assert.strictEqual(converted, 'Map<number, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0067 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0067 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char, int>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0068', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char, int>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0068 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0068 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char, size_t>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0069', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char, size_t>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0069 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0069 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char, unsigned>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0070', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char, unsigned>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0070 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0070 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char, double>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0071', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char, double>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0071 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0071 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char, float>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0072', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char, float>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0072 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0072 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char16_t, int32_t>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0073', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char16_t, int32_t>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0073 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0073 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char32_t, size_t>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0074', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char32_t, size_t>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0074 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0074 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char8_t, uint32_t>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0075', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char8_t, uint32_t>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0075 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0075 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char32_t, int8_t>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0076', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char32_t, int8_t>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0076 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0076 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<wchar_t, uint16_t>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0077', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<wchar_t, uint16_t>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0077 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0077 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<int, bool>` 转换为 `Map<number, boolean>` 的结果与性能。
  test('h2dts_expand_unique_p11_0078', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<int, bool>');
        }
      });
      assert.strictEqual(converted, 'Map<number, boolean>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0078 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0078 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char, bool>` 转换为 `Map<string, boolean>` 的结果与性能。
  test('h2dts_expand_unique_p11_0079', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char, bool>');
        }
      });
      assert.strictEqual(converted, 'Map<string, boolean>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0079 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0079 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<int, char>` 转换为 `Map<number, string>` 的结果与性能。
  test('h2dts_expand_unique_p11_0080', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<int, char>');
        }
      });
      assert.strictEqual(converted, 'Map<number, string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0080 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0080 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<size_t, char>` 转换为 `Map<number, string>` 的结果与性能。
  test('h2dts_expand_unique_p11_0081', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<size_t, char>');
        }
      });
      assert.strictEqual(converted, 'Map<number, string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0081 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0081 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<unsigned, char>` 转换为 `Map<number, string>` 的结果与性能。
  test('h2dts_expand_unique_p11_0082', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<unsigned, char>');
        }
      });
      assert.strictEqual(converted, 'Map<number, string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0082 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0082 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<int, int>::iterator` 转换为 `IterableIterator<Map<number, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0083', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<int, int>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<number, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0083 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0083 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char, int>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0084', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char, int>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0084 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0084 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char, size_t>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0085', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char, size_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0085 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0085 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char, unsigned>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0086', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char, unsigned>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0086 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0086 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char, double>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0087', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char, double>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0087 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0087 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char, float>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0088', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char, float>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0088 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0088 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char16_t, int32_t>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0089', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char16_t, int32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0089 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0089 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char32_t, size_t>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0090', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char32_t, size_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0090 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0090 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char8_t, uint32_t>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0091', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char8_t, uint32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0091 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0091 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char32_t, int8_t>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0092', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char32_t, int8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0092 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0092 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<wchar_t, uint16_t>::iterator` 转换为 `IterableIterator<Map<string, number>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0093', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<wchar_t, uint16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0093 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0093 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<int, bool>::iterator` 转换为 `IterableIterator<Map<number, boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0094', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<int, bool>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<number, boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0094 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0094 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<char, bool>::iterator` 转换为 `IterableIterator<Map<string, boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0095', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<char, bool>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<string, boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0095 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0095 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<int, char>::iterator` 转换为 `IterableIterator<Map<number, string>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0096', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<int, char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<number, string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0096 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0096 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<size_t, char>::iterator` 转换为 `IterableIterator<Map<number, string>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0097', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<size_t, char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<number, string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0097 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0097 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::unordered_map<unsigned, char>::iterator` 转换为 `IterableIterator<Map<number, string>>` 的结果与性能。
  test('h2dts_expand_unique_p11_0098', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::unordered_map<unsigned, char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Map<number, string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0098 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0098 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::multimap<int, int>` 转换为 `Map<number, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0099', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::multimap<int, int>');
        }
      });
      assert.strictEqual(converted, 'Map<number, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0099 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0099 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::multimap<char, int>` 转换为 `Map<string, number>` 的结果与性能。
  test('h2dts_expand_unique_p11_0100', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::multimap<char, int>');
        }
      });
      assert.strictEqual(converted, 'Map<string, number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p11_0100 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p11_0100 执行异常: ${String(err)}`);
    }
  });

});
