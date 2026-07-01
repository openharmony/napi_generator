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
  // 测试内容：验证 h2dts 类型 `std::list<char32_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0169', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::list<char32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0169 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0169 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<int>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0191', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<int>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0191 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0191 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<size_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0192', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<size_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0192 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0192 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<double>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0193', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<double>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0193 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0193 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<float>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0194', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<float>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0194 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0194 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0195', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0195 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0195 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0196', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0196 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0196 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_type_unique_0197', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<uint8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0197 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0197 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<uint16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0198', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<uint16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0198 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0198 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<uint32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0199', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<uint32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0199 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0199 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<uint64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0200', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<uint64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0200 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0200 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<int8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0201', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<int8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0201 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0201 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<int16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0202', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<int16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0202 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0202 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<int32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0203', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<int32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0203 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0203 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<int64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0204', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<int64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0204 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0204 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<unsigned>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0205', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<unsigned>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0205 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0205 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<bool>` 转换为 `Array<boolean>` 的结果与性能。
  test('h2dts_type_unique_0206', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<bool>');
        }
      });
      assert.strictEqual(converted, 'Array<boolean>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0206 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0206 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<char>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0207', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<char>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0207 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0207 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<wchar_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0208', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<wchar_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0208 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0208 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<char8_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0209', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<char8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0209 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0209 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<char16_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0210', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<char16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0210 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0210 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::forward_list<char32_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0211', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::forward_list<char32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0211 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0211 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<int>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0317', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<int>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0317 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0317 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<size_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0318', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<size_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0318 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0318 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<double>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0319', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<double>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0319 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0319 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<float>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0320', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<float>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0320 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0320 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<long>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0321', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<long>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0321 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0321 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<short>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0322', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<short>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0322 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0322 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<uint8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0323', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<uint8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0323 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0323 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<uint16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0324', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<uint16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0324 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0324 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<uint32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0325', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<uint32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0325 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0325 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<uint64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0326', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<uint64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0326 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0326 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<int8_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0327', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<int8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0327 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0327 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<int16_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0328', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<int16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0328 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0328 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<int32_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0329', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<int32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0329 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0329 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<int64_t>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0330', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<int64_t>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0330 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0330 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<unsigned>` 转换为 `Array<number>` 的结果与性能。
  test('h2dts_type_unique_0331', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<unsigned>');
        }
      });
      assert.strictEqual(converted, 'Array<number>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0331 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0331 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<bool>` 转换为 `Array<boolean>` 的结果与性能。
  test('h2dts_type_unique_0332', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<bool>');
        }
      });
      assert.strictEqual(converted, 'Array<boolean>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0332 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0332 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<char>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0333', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<char>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0333 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0333 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<wchar_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0334', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<wchar_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0334 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0334 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<char8_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0335', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<char8_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0335 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0335 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<char16_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0336', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<char16_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0336 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0336 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::valarray<char32_t>` 转换为 `Array<string>` 的结果与性能。
  test('h2dts_type_unique_0337', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::valarray<char32_t>');
        }
      });
      assert.strictEqual(converted, 'Array<string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0337 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0337 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<int(int, int)>` 转换为 `(param0: number, param1: number)=>number` 的结果与性能。
  test('h2dts_type_unique_0720', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<int(int, int)>');
        }
      });
      assert.strictEqual(converted, '(param0: number, param1: number)=>number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0720 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0720 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<void(long, long)>` 转换为 `(param0: number, param1: number)=>void` 的结果与性能。
  test('h2dts_type_unique_0721', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<void(long, long)>');
        }
      });
      assert.strictEqual(converted, '(param0: number, param1: number)=>void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0721 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0721 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<int(float)>` 转换为 `(param0: number)=>number` 的结果与性能。
  test('h2dts_type_unique_0723', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<int(float)>');
        }
      });
      assert.strictEqual(converted, '(param0: number)=>number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0723 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0723 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<void(double)>` 转换为 `(param0: number)=>void` 的结果与性能。
  test('h2dts_type_unique_0724', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<void(double)>');
        }
      });
      assert.strictEqual(converted, '(param0: number)=>void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0724 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0724 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<void(char, short, short)>` 转换为 `(param0: string, param1: number, param2: number)=>void` 的结果与性能。
  test('h2dts_type_unique_0725', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<void(char, short, short)>');
        }
      });
      assert.strictEqual(converted, '(param0: string, param1: number, param2: number)=>void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0725 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0725 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<void(char16_t, uint16_t)>` 转换为 `(param0: string, param1: number)=>void` 的结果与性能。
  test('h2dts_type_unique_0726', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<void(char16_t, uint16_t)>');
        }
      });
      assert.strictEqual(converted, '(param0: string, param1: number)=>void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0726 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0726 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<unsigned(char64_t, size_t)>` 转换为 `(param0: string, param1: number)=>number` 的结果与性能。
  test('h2dts_type_unique_0727', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<unsigned(char64_t, size_t)>');
        }
      });
      assert.strictEqual(converted, '(param0: string, param1: number)=>number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0727 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0727 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<char32_t(char8_t, int32_t)>` 转换为 `(param0: string, param1: number)=>string` 的结果与性能。
  test('h2dts_type_unique_0728', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<char32_t(char8_t, int32_t)>');
        }
      });
      assert.strictEqual(converted, '(param0: string, param1: number)=>string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0728 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0728 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<uint64_t(wchar_t, uint32_t)>` 转换为 `(param0: string, param1: number)=>number` 的结果与性能。
  test('h2dts_type_unique_0729', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<uint64_t(wchar_t, uint32_t)>');
        }
      });
      assert.strictEqual(converted, '(param0: string, param1: number)=>number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0729 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0729 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<int64_t(int8_t, int16_t)>` 转换为 `(param0: number, param1: number)=>number` 的结果与性能。
  test('h2dts_type_unique_0730', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<int64_t(int8_t, int16_t)>');
        }
      });
      assert.strictEqual(converted, '(param0: number, param1: number)=>number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0730 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0730 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::function<bool(int32_t)>` 转换为 `(param0: number)=>boolean` 的结果与性能。
  test('h2dts_type_unique_0731', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::function<bool(int32_t)>');
        }
      });
      assert.strictEqual(converted, '(param0: number)=>boolean');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0731 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0731 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<int>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0732', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<int>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0732 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0732 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<size_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0733', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<size_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0733 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0733 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<double>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0734', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<double>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0734 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0734 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<float>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0735', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<float>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0735 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0735 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<long>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0736', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<long>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0736 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0736 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<short>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0737', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<short>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0737 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0737 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<uint8_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0738', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<uint8_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0738 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0738 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<uint16_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0739', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<uint16_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0739 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0739 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<uint32_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0740', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<uint32_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0740 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0740 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<uint64_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0741', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<uint64_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0741 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0741 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<int8_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0742', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<int8_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0742 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0742 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<int16_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0743', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<int16_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0743 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0743 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<int32_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0744', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<int32_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0744 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0744 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<int64_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0745', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<int64_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0745 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0745 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<bool>` 转换为 `boolean` 的结果与性能。
  test('h2dts_type_unique_0747', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<bool>');
        }
      });
      assert.strictEqual(converted, 'boolean');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0747 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0747 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<char>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0748', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<char>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0748 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0748 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<wchar_t>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0749', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<wchar_t>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0749 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0749 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<char8_t>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0750', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<char8_t>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0750 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0750 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<char16_t>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0751', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<char16_t>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0751 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0751 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::unique_ptr<char32_t>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0752', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::unique_ptr<char32_t>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0752 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0752 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<int>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0753', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<int>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0753 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0753 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<size_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0754', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<size_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0754 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0754 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<double>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0755', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<double>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0755 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0755 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<float>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0756', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<float>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0756 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0756 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<long>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0757', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<long>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0757 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0757 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<short>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0758', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<short>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0758 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0758 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<uint8_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0759', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<uint8_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0759 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0759 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<uint16_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0760', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<uint16_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0760 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0760 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<uint32_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0761', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<uint32_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0761 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0761 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_type_unique_0762', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<uint64_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0762 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0762 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<int8_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0763', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<int8_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0763 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0763 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<int16_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0764', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<int16_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0764 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0764 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<int32_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0765', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<int32_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0765 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0765 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<int64_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0766', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<int64_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0766 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0766 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<bool>` 转换为 `boolean` 的结果与性能。
  test('h2dts_type_unique_0768', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<bool>');
        }
      });
      assert.strictEqual(converted, 'boolean');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0768 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0768 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<char>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0769', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<char>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0769 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0769 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<wchar_t>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0770', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<wchar_t>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0770 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0770 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<char8_t>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0771', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<char8_t>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0771 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0771 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<char16_t>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0772', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<char16_t>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0772 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0772 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::shared_ptr<char32_t>` 转换为 `string` 的结果与性能。
  test('h2dts_type_unique_0773', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::shared_ptr<char32_t>');
        }
      });
      assert.strictEqual(converted, 'string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0773 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0773 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<int>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0774', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<int>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0774 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0774 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<size_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0775', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<size_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0775 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0775 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<double>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0776', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<double>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0776 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0776 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<float>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0777', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<float>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0777 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0777 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<long>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0778', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<long>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0778 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0778 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<short>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0779', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<short>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0779 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0779 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<uint8_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0780', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<uint8_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0780 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0780 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<uint16_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0781', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<uint16_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0781 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0781 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 类型 `std::weak_ptr<uint32_t>` 转换为 `number` 的结果与性能。
  test('h2dts_type_unique_0782', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transTskey2Ckey('std::weak_ptr<uint32_t>');
        }
      });
      assert.strictEqual(converted, 'number');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_0782 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_type_unique_0782 执行异常: ${String(err)}`);
    }
  });

});
