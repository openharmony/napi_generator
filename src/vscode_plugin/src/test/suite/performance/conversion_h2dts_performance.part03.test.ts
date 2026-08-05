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
  // 测试内容：验证 h2dts 类型 `std::weak_ptr<uint64_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0783', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<uint64_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0783 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0783 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<int8_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0784', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<int8_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0784 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0784 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_type_unique_0785', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<int16_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0785 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0785 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<int32_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0786', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<int32_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0786 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0786 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<int64_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0787', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<int64_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0787 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0787 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<bool>` 转换为 `boolean` 的结果与性能。
  test('h2dts_type_unique_0789', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<bool>');
        }
      });
      assert.strictEqual(converted, 'boolean');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0789 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0789 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<char>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0790', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<char>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0790 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0790 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<wchar_t>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0791', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<wchar_t>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0791 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0791 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<char8_t>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0792', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<char8_t>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0792 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0792 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<char16_t>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0793', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<char16_t>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0793 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0793 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<char32_t>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0794', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<char32_t>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0794 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0794 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::string` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0795', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::string');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0795 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0795 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<std::string>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0796', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<std::string>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0796 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0796 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `char *` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0797', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('char *');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0797 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0797 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `long long` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0798', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('long long');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0798 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0798 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `unsigned short` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0799', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('unsigned short');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0799 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0799 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `unsigned long` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0800', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('unsigned long');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0800 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0800 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `unsigned long long` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0801', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('unsigned long long');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0801 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0801 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<long long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0802', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<long long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0802 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0802 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<unsigned short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0803', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<unsigned short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0803 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0803 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<unsigned long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0804', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<unsigned long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0804 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0804 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<unsigned long long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0805', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<unsigned long long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0805 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0805 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `int *` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0806', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('int *');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0806 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0806 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::vector<int *>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0807', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::vector<int *>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0807 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0807 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<std::string, 10>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0815', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<std::string, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0815 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0815 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<char *, 10>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0816', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<char *, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0816 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0816 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<long long, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0817', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<long long, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0817 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0817 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<unsigned short, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0818', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<unsigned short, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0818 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0818 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<unsigned long, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0819', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<unsigned long, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0819 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0819 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<unsigned long long, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0820', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<unsigned long long, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0820 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0820 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::array<int *, 10>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0821', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::array<int *, 10>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0821 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0821 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<std::string>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0829', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<std::string>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0829 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0829 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<char *>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0830', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<char *>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0830 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0830 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<long long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0831', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<long long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0831 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0831 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<unsigned short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0832', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<unsigned short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0832 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0832 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<unsigned long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0833', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<unsigned long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0833 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0833 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<unsigned long long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0834', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<unsigned long long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0834 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0834 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::deque<int *>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0835', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::deque<int *>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0835 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0835 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<std::string>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0843', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<std::string>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0843 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0843 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<char *>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0844', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<char *>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0844 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0844 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<long long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0845', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<long long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0845 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0845 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<unsigned short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0846', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<unsigned short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0846 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0846 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<unsigned long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0847', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<unsigned long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0847 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0847 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<unsigned long long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0848', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<unsigned long long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0848 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0848 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::list<int *>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0849', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<int *>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0849 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0849 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<std::string>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0857', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<std::string>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0857 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0857 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<char *>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0858', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<char *>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0858 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0858 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<long long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0859', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<long long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0859 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0859 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<unsigned short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0860', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<unsigned short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0860 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0860 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<unsigned long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0861', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<unsigned long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0861 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0861 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<unsigned long long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0862', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<unsigned long long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0862 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0862 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<int *>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0863', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<int *>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0863 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0863 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<std::string>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0899', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<std::string>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0899 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0899 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<char *>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0900', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<char *>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0900 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0900 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<long long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0901', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<long long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0901 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0901 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<unsigned short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0902', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<unsigned short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0902 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0902 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<unsigned long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0903', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<unsigned long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0903 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0903 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<unsigned long long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0904', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<unsigned long long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0904 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0904 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<int *>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0905', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<int *>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0905 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0905 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<std::string(char *)>` 转换为 `(param0: string)=>string` 的结果与性能。
  test('h2dts_type_unique_1062', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<std::string(char *)>');
        }
      });
      assert.strictEqual(converted, '(param0: string)=>string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1062 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1062 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<unsigned short(long long, unsigned long)>` 转换为 `(param0: number, param1: number)=>number` 的结果与性能。
  test('h2dts_type_unique_1063', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<unsigned short(long long, unsigned long)>');
        }
      });
      assert.strictEqual(converted, '(param0: number, param1: number)=>number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1063 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1063 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<void(int *, unsigned long long)>` 转换为 `(param0: number, param1: number)=>void` 的结果与性能。
  test('h2dts_type_unique_1064', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<void(int *, unsigned long long)>');
        }
      });
      assert.strictEqual(converted, '(param0: number, param1: number)=>void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1064 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1064 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<std::string>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_1065', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<std::string>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1065 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1065 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<char *>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_1066', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<char *>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1066 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1066 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<long long>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1067', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<long long>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1067 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1067 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<unsigned short>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1068', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<unsigned short>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1068 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1068 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<unsigned long>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1069', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<unsigned long>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1069 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1069 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<unsigned long long>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1070', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<unsigned long long>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1070 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1070 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<int *>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1071', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<int *>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1071 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1071 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<std::string>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_1072', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<std::string>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1072 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1072 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<char *>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_1073', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<char *>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1073 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1073 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<long long>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1074', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<long long>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1074 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1074 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<unsigned short>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1075', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<unsigned short>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1075 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1075 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_type_unique_1076', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<unsigned long>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1076 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1076 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<unsigned long long>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1077', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<unsigned long long>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1077 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1077 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<int *>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1078', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<int *>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1078 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1078 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_type_unique_1079', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<std::string>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1079 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1079 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<char *>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_1080', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<char *>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1080 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1080 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<long long>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1081', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<long long>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1081 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1081 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<unsigned short>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1082', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<unsigned short>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1082 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1082 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<unsigned long>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1083', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<unsigned long>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1083 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1083 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<unsigned long long>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1084', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<unsigned long long>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1084 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1084 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<int *>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1085', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<int *>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1085 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1085 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `int$#` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_1087', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('int$#');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_1087 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_1087 执行异常: ${String(err)}`);
    }
  });

  // 生成性能：函数声明生成（对应 gen 场景）。

  // 测试内容：验证 h2dts 生成函数声明场景 `genFuncPerf0001` 的输出与性能。
  test('h2dts_gen_function_scene_0001', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [],
          unions: [],
          structs: [],
          classes: [],
          funcs: [{ type: 'function', name: 'genFuncPerf0001', returns: 'int', parameters: [{ type: 'int', name: 'v', arraySize: 0, arraySizeList: [] }] }],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let out = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          out = getDtsFunction(rootInfo);
        }
      });
      assert.ok(out.includes('export function genFuncPerf0001(v: number): number;'), 'h2dts_gen_function_scene_0001 生成函数签名不匹配');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_gen_function_scene_0001 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_function_scene_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 生成函数声明场景 `genFuncPerf0016` 的输出与性能。
  test('h2dts_gen_function_scene_0016', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [],
          unions: [],
          structs: [],
          classes: [],
          funcs: [{ type: 'function', name: 'genFuncPerf0016', returns: 'bool', parameters: [{ type: 'bool', name: 'v', arraySize: 0, arraySizeList: [] }] }],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let out = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          out = getDtsFunction(rootInfo);
        }
      });
      assert.ok(out.includes('export function genFuncPerf0016(v: boolean): boolean;'), 'h2dts_gen_function_scene_0016 生成函数签名不匹配');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_gen_function_scene_0016 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_function_scene_0016 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 生成函数声明场景 `genFuncPerf0017` 的输出与性能。
  test('h2dts_gen_function_scene_0017', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [],
          unions: [],
          structs: [],
          classes: [],
          funcs: [{ type: 'function', name: 'genFuncPerf0017', returns: 'char', parameters: [{ type: 'char', name: 'v', arraySize: 0, arraySizeList: [] }] }],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let out = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          out = getDtsFunction(rootInfo);
        }
      });
      assert.ok(out.includes('export function genFuncPerf0017(v: string): string;'), 'h2dts_gen_function_scene_0017 生成函数签名不匹配');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_gen_function_scene_0017 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_function_scene_0017 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 生成函数声明场景 `genFuncPerf0022` 的输出与性能。
  test('h2dts_gen_function_scene_0022', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [],
          unions: [],
          structs: [],
          classes: [],
          funcs: [{ type: 'function', name: 'genFuncPerf0022', returns: 'std::string::iterator', parameters: [{ type: 'std::string::iterator', name: 'v', arraySize: 0, arraySizeList: [] }] }],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let out = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          out = getDtsFunction(rootInfo);
        }
      });
      assert.ok(out.includes('export function genFuncPerf0022(v: IterableIterator<string>): IterableIterator<string>;'), 'h2dts_gen_function_scene_0022 生成函数签名不匹配');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_gen_function_scene_0022 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_function_scene_0022 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 生成函数声明场景 `genFuncPerf0023` 的输出与性能。
  test('h2dts_gen_function_scene_0023', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [],
          unions: [],
          structs: [],
          classes: [],
          funcs: [{ type: 'function', name: 'genFuncPerf0023', returns: 'std::vector<int>', parameters: [{ type: 'std::vector<int>', name: 'v', arraySize: 0, arraySizeList: [] }] }],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let out = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          out = getDtsFunction(rootInfo);
        }
      });
      assert.ok(out.includes('export function genFuncPerf0023(v: Array<number>): Array<number>;'), 'h2dts_gen_function_scene_0023 生成函数签名不匹配');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_gen_function_scene_0023 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_function_scene_0023 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 生成函数声明场景 `genFuncPerf0038` 的输出与性能。
  test('h2dts_gen_function_scene_0038', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [],
          unions: [],
          structs: [],
          classes: [],
          funcs: [{ type: 'function', name: 'genFuncPerf0038', returns: 'std::vector<bool>', parameters: [{ type: 'std::vector<bool>', name: 'v', arraySize: 0, arraySizeList: [] }] }],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let out = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          out = getDtsFunction(rootInfo);
        }
      });
      assert.ok(out.includes('export function genFuncPerf0038(v: Array<boolean>): Array<boolean>;'), 'h2dts_gen_function_scene_0038 生成函数签名不匹配');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_gen_function_scene_0038 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_function_scene_0038 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 生成函数声明场景 `genFuncPerf0039` 的输出与性能。
  test('h2dts_gen_function_scene_0039', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [],
          unions: [],
          structs: [],
          classes: [],
          funcs: [{ type: 'function', name: 'genFuncPerf0039', returns: 'std::vector<char>', parameters: [{ type: 'std::vector<char>', name: 'v', arraySize: 0, arraySizeList: [] }] }],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let out = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          out = getDtsFunction(rootInfo);
        }
      });
      assert.ok(out.includes('export function genFuncPerf0039(v: Array<string>): Array<string>;'), 'h2dts_gen_function_scene_0039 生成函数签名不匹配');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_gen_function_scene_0039 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_function_scene_0039 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 生成函数声明场景 `genFuncPerf0044` 的输出与性能。
  test('h2dts_gen_function_scene_0044', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [],
          unions: [],
          structs: [],
          classes: [],
          funcs: [{ type: 'function', name: 'genFuncPerf0044', returns: 'std::vector<int>::iterator', parameters: [{ type: 'std::vector<int>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }] }],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let out = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          out = getDtsFunction(rootInfo);
        }
      });
      assert.ok(out.includes('export function genFuncPerf0044(v: IterableIterator<Array<number>>): IterableIterator<Array<number>>;'), 'h2dts_gen_function_scene_0044 生成函数签名不匹配');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_gen_function_scene_0044 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_function_scene_0044 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 生成函数声明场景 `genFuncPerf0059` 的输出与性能。
  test('h2dts_gen_function_scene_0059', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [],
          unions: [],
          structs: [],
          classes: [],
          funcs: [{ type: 'function', name: 'genFuncPerf0059', returns: 'std::vector<bool>::iterator', parameters: [{ type: 'std::vector<bool>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }] }],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let out = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          out = getDtsFunction(rootInfo);
        }
      });
      assert.ok(out.includes('export function genFuncPerf0059(v: IterableIterator<Array<boolean>>): IterableIterator<Array<boolean>>;'), 'h2dts_gen_function_scene_0059 生成函数签名不匹配');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_gen_function_scene_0059 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_function_scene_0059 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 生成函数声明场景 `genFuncPerf0060` 的输出与性能。
  test('h2dts_gen_function_scene_0060', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [],
          unions: [],
          structs: [],
          classes: [],
          funcs: [{ type: 'function', name: 'genFuncPerf0060', returns: 'std::vector<char>::iterator', parameters: [{ type: 'std::vector<char>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }] }],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let out = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          out = getDtsFunction(rootInfo);
        }
      });
      assert.ok(out.includes('export function genFuncPerf0060(v: IterableIterator<Array<string>>): IterableIterator<Array<string>>;'), 'h2dts_gen_function_scene_0060 生成函数签名不匹配');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_gen_function_scene_0060 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_function_scene_0060 执行异常: ${String(err)}`);
    }
  });

  // 生成性能：class/struct/enum/union 场景（对应 gen 下多种产物）。

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0001 的输出与性能。
  test('h2dts_gen_multi_scene_0001', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0001', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0001', alias: '', members: [{ type: 'uint16_t', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0001', alias: '', members: [{ type: 'uint16_t', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0001', alias: '', variableList: [{ type: 'uint16_t', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'uint16_t', parameters: [{ type: 'uint16_t', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0001'), 'h2dts_gen_multi_scene_0001 class 生成失败');
      assert.ok(cls.includes('v: number;'), 'h2dts_gen_multi_scene_0001 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0001'), 'h2dts_gen_multi_scene_0001 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0001'), 'h2dts_gen_multi_scene_0001 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0001 = number ;'), 'h2dts_gen_multi_scene_0001 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0001 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0001 执行异常: ${String(err)}`);
    }
  });

});
